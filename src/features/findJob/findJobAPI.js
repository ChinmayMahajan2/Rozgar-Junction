export function fetchAllJob() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/job')
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchJobByFilter(filter) {

  let queryString = ''
  for(let key in filter){
    if(key === 'experience'){
      queryString += `${key}_gte=${filter[key]}&`
    }
    else{
      queryString += `${key}=${filter[key]}&`
    }
    console.log(queryString)
    
  }
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/job?' + queryString)
    const data = await response.json()
    resolve({data})
  }
  );
}


