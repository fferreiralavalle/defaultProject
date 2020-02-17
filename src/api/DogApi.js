const key = "f3ce57bf-8d1e-4b73-b054-27c9f3a835d1"
const baseUrl = "https://api.thedogapi.com/v1/"
const breeds = "breeds"

const baseHeader = {
    "x-api-key": key
}

export const getAllBreeds = (callback, errorCall) => {
    fetch(`${baseUrl}${breeds}?limit=20`,baseHeader)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        const formatedDogs = [];
        let max = json.length
        json.forEach((dog => {
            getDogData(
                dog.id, (dog) => {
                    return addDogData(
                        formatedDogs,
                        fromBreedToCard(dog),
                        max,
                        callback)
                }
                )
        }))
    })
    .catch((err)=>{
        console.log(err)
        if (errorCall){
            errorCall(err)
        } 
    })
}

const addDogData = (dogArray, dog, max, callback)=> {
    dogArray.push(dog);
    console.log(dog)
    //Checks if list is completed
    if (dogArray.length >= max){
        //Takes out all dogs that could not be transformed
        callback(dogArray.filter((dog) => dog!==null))
    }
}

const getDogData = (breedId, callback, errorCall) => {
    fetch(`${baseUrl}images/search?breed_id=${breedId}`,baseHeader)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        callback(data)
    })
    .catch((err)=>{
        console.log(err)
        if (errorCall){
            errorCall(err)
        } 
    })
}

const fromBreedToCard = (breed) => {
    //If data is invalid, returns null object
    if (breed.length === 0 || !breed) return null;

    const breedData = breed[0].breeds[0];
    const name = breedData.name;
    const origin = (breedData.origin) ? breedData.origin : 'Unknown'
    const breedFor = (breedData.bred_for) ? breedData.bred_for : 'Unknown'
    
    const cardData = {
        title: name,
        description: `Life Spawn: ${breedData.life_span}. Origin: ${origin}. Bred for: ${breedFor}`,
        background: `${breed[0].url}`
    }
    return cardData;
}