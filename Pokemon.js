//Initialising an empty array to store fetched data
let pokemonData = [];

//Whats that pokemon?! Enter your chosen pokemon name. Only acceps lower case answewrs
let chosenPokemon = "altaria";

//getting the pokemon information from the server
fetch (`https://pokeapi.co/api/v2/pokemon/${chosenPokemon}/`) 

    .then((res) => res.json())
    .then((data) => {
        pokemonData = data;

        //printing fetched name
        console.log("Name: ");
        console.log(pokemonData.name);

        //printing fetched weight
        console.log("Weight: ");
        console.log(pokemonData.weight);

        //printing fetched abilities
        //console.log("Abilities: " + pokemonData.abilities) //why this method doesn't print the content of abilities?
        console.log("Abilities: ");
        console.log(pokemonData.abilities);        
    })

    //thowring an error is something was wrong with the given pokemon or with the server
    .catch((error) => console.log("Error fetching pokemon data: " + error));  
