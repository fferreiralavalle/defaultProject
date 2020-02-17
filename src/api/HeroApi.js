const baseApi = "https://www.superheroapi.com/api.php/";
const access = "10219666660726588";

export const getAllHeros = (callBack)=> {

    const finalUrl = baseApi+access+'/search/spider';
    fetch(finalUrl)
    .then(data => {
        return data.json()
    })
    .then(data => {
        const finalData = data ? data.results.map((hero)=>fromHeroToCard(hero)) : ""
        callBack(finalData)
    })
    .catch(err => console.log(err));
}

const fromHeroToCard = (hero) => {
    //If data is invalid, returns null object
    if (!hero) return null;

    const {name} = hero;
    const first = hero.biography['first-appearance'];
    const image = hero.image.url
    const cardData = {
        title: name,
        description: `First Appearance: ${first}`,
        background: `${image}`
    }
    return cardData;

}