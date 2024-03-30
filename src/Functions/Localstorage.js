function getDataFromLocalStorage (){
    const data = JSON.parse(localStorage.getItem('tasks'))
    if(data){
        return data
    }
    return []
    
}

function addNewDataToLocalStorage (data){
    const existingdata = getDataFromLocalStorage()
    const NewData = [...existingdata,data]
    localStorage.setItem('tasks',JSON.stringify(NewData))
}

function DeleteDataFormLocalStorage(id){
    const existingdata= getDataFromLocalStorage()
    const findTheData = existingdata.filter((item)=> item.taskId !== id )
    localStorage.setItem('tasks',JSON.stringify(findTheData))
}

function DeleteAllData(){
    localStorage.clear('tasks')
}

export {getDataFromLocalStorage,addNewDataToLocalStorage,DeleteDataFormLocalStorage,DeleteAllData}