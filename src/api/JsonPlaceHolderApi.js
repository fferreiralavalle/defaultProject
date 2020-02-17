const baseApi = 'https://jsonplaceholder.typicode.com/'

export const post = () => {
    fetch(baseApi+'posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

}
