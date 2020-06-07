export const loadState = () => {
    try{
        const serializedState = localStorage.getItem('action')
        if(serializedState === null){
            return undefined
        }
        return JSON.parse(serializedState)
    } catch(err){
        return undefined
    }
}

export const saveState = (state) => {
    try{
        const serializedState = JSON.stringify(state)
        localStorage.setItem('action', serializedState)
    } catch(err) {
        console.error(err)
    }
}

export const removeState = () => {
    try{
        localStorage.removeItem('action')
    } catch(err) {
        console.error(err)
    }
}