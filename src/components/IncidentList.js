import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import {fetchIncidents} from '../api/pb2020'

import Incident from '../components/Incident'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IncidentList = (props) => {

  const [incidents, setIncidents] = useState([])
  const [selectedIncidents, setSelectedIncidents] = useState([])
  const [locations, setLocations] = useState([])
  const [selectedLocation, setSelectedLocation] = useState("")

  const updateData = async () => {
    const response = await fetchIncidents()
    const results = response.data.data

    // for each result, find links from twitter and remove them
    // from links key and add them to separate tweetId key
    const transformData = () => {
      const regex = /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)$/;
      let transformed = results
      transformed.forEach((result, ind, obj) => {
        result.pb_id = result.id
        result.id = undefined
        result.links.forEach((link,index,object) => {
          if(link.includes('twitter.com')){
            let regExec = regex.exec(link)
            let tweetId
            if(regExec) tweetId = regExec[3]
              if(tweetId && result.twitterIds){
                result.twitterIds.push(tweetId)
              } else if(tweetId) {
                result.twitterIds = [tweetId]
                object.splice(index, 1);
              }
            }
          })
        })
        return transformed
      }

    // combine data from pb2020 api with email and phone call templates
    const combineData = () => {
      const incidents = props.incidents
      incidents.forEach(incident => {
        let matchingObject = transformedData.find(element => element.pb_id === incident.node.pb_id)
        Object.assign(incident, matchingObject)
      })
      return incidents
    }

    let transformedData = transformData();
    let combinedData = combineData()
    setIncidents(combinedData)
    setSelectedIncidents(combinedData)

    let locationList = []
    let location = ""

    combinedData.forEach(incident => {
      location = `${incident.city}, ${incident.state}`
      if(!locationList.includes(location)){
        locationList.push(location)
      }
    })
    setLocations(locationList)
  }

  useEffect(() => {
    updateData()
  }, [])

  useEffect(() => {
    if(selectedLocation === ""){
      setSelectedIncidents(incidents)
    } else {
      let newIncidents = incidents.filter(incident => `${incident.city}, ${incident.state}` === selectedLocation)
      setSelectedIncidents(newIncidents)
    }
  }, [selectedLocation])

  console.log('selected incidents')
  console.log(selectedIncidents)

  return (
    <div className="col-12 flex items-center justify-center flex-col">
      <select onChange={(e) => setSelectedLocation(e.target.value)}>
      <option value="">All</option>
        {
          locations.map((location, index) => (
          <option key={index} value={location}>{location}</option>
          ))
          
        }
        
      </select>
        {
        selectedIncidents.map((incident,index) =>
          <Incident key={index} title={incident.node.title} tweetId={incident.node.tweetId}
          emailAddress={incident.node.emailAddress} emailMessage={incident.node.emailMessage}
          phoneScript={incident.node.phoneScript} phoneNumber={incident.node.phoneNumber}
          setModalContent={props.setModalContent} incident={incident}
          />
        )}
    </div>
  )

}

export default IncidentList
