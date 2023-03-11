import React from 'react';

class Starwars extends React.Component{
    constructor(){
        super();
        this.state = {
            name : null,
            height: null,
            homeworld : null,
            image : null,
            wiki : null,
            species : null,
            affiliations : [],
            loadedContent : false
        }
    }
    getRandomCharacter()
    {
      const URL = 'https://akabab.github.io/starwars-api/api/id/';
      const randomNumber = Math.floor(Math.random() * 88);
      
      console.log(randomNumber)
      
      fetch(`${URL}/${randomNumber}.json`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({
            name : data.name,
            height: data.height,
            homeworld : data.homeworld,
            image : data.image,
            wiki : data.wiki,
            species : data.species,
            affiliations : data.affiliations,
            loadedContent : true
          })
      })
    }
    
    render(){
      return(
        <div>
            {
                this.state.loadedContent && 
                <div>
                    <h1 style={{color:"yellow"}}>Name : {this.state.name}</h1>
                    <img src={this.state.image} alt={this.state.name} width = {300} height={200}/>
                    <p>Height : {this.state.height}</p>
                    <p>Species : {this.state.species}</p>
                    <p>Homeworld : {this.state.homeworld}</p>
                    <a href={this.state.wiki}> {this.state.wiki}</a>
                    <ul>
                        {
                            this.state.affiliations.map((affiliation,index)=>{
                                return <li key={index}>{affiliation}</li>
                            })
                        }
                    </ul>

                </div>
            }
            <button className = 'btn' onClick={() => this.getRandomCharacter()}>Randomize Character</button>
        </div>
      )
    }
}

export default Starwars;