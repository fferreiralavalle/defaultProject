const baseurl = 'http://10.230.18.157:3000/'

const baseHeaders = {
    header: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    'Access-Control-Allow-Origin':'*'
}

const postHeader = {
    method: 'POST',
    ...baseHeaders
}

export const postBranches = (body, callBack) => {
    const header = {
        ...postHeader,
        body: JSON.stringify(body)
    }
    console.log(header)
    fetch(baseurl+'branch', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        'Access-Control-Allow-Origin': '*',
        body: JSON.stringify(body)
    })
    .then((data)=>{
        return data.text()
    })
    .then((data)=>{
        console.log(data ? JSON.parse(data) : {})
    })
    .catch(err => {
        console.log(err)
    })
}