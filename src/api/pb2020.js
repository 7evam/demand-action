import axios from 'axios'

const pbBaseUrl = 'https://raw.githubusercontent.com/2020PB/police-brutality/data_build/all-locations.json'

export function fetchIncidents(){
    return axios.get(pbBaseUrl, {
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => {
        return res
    })
    .catch (err => console.error(err))
}