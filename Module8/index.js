const btn = document.getElementById('btn');
const pokeSpeciesNumber = document.getElementById('species-number');
const generation = document.getElementById('generation')
const pokeName = document.getElementById('name')
const pokeImage = document.getElementById('image') 
const pokeAbilities = document.querySelector('.abilities')
const pokeAbility = document.querySelector("#ability");
const evolvesFromSpecies = document.getElementById('from_species') 

const URL =  "https://pokeapi.co/api/v2"


btn.addEventListener("click",() => {
    // creating a random number
    let randomSpeciesNamber = Math.floor(Math.random() * 1008)
        
    //fetch is used to make a http request to the api
    //fetch is replacement of old XMLHttpRequest in AJAX
    //it returns a promise
    fetch(`${URL}/pokemon-species/${randomSpeciesNamber}`)
    .then( response => response.json() )        
    .then(data => {
        console.log(data) 
        pokeSpeciesNumber.innerText = randomSpeciesNamber;
        generation.innerText = data.generation.name;
        if(data.evolves_from_species !== null){
            evolvesFromSpecies.style.display = "block";
            evolvesFromSpecies.innerText += " "+data.evolves_from_species.name;
        }

        fetch(`${URL}/pokemon/${data.name}`)
        .then( response => response.json() )
        .then(data1 => {
            console.log(data1)
            pokeName.innerText = data1.name; 
            pokeImage.style.display = "block";
            pokeImage.src = data1.sprites.back_default;

            //for abilities:
            let abilities = data1.abilities;
            addAbilities(abilities)
        }) 
    })
    //Issue;- Adding curly braces is giving error, (data is undefined)
    // .then( response => {response.json() })

    console.log(randomSpeciesNamber)
});

function addAbilities(abilities)
{
    // console.log(abilities);
    pokeAbilities.style.display = "inline"
    abilities.forEach(ability => {
        console.log(ability.ability.name);
        let li = document.createElement("li")
        li.innerText = ability.ability.name;

        pokeAbility.appendChild(li);
        
    });
}
