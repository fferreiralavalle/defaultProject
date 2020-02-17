const baseApi = 'https://aptly-node2.herokuapp.com/api/'

export const send = (data) => {
    fetch(baseApi+'send', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
  })
  .then(response => {
      console.log(response)
    })

}
