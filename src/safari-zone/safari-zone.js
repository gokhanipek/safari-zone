import React from 'react';
import Pokemon from './../pokemon/pokemon'
import {Redirect} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import './safari-zone.css'

export default class SafariZone extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
          pokemons: ['bulbasaur','charmander','eevee','jigglypuff','pikachu','psyduck','snorlax','squirtle'],          
          duplicatePokemons: [],
          pokemonPositions: [],
          duplicatePokemons: [],
          randomPositions: [],
          encounteredPokemons: [],
          catchedPokemons: [],
          rounds: 0,
          pokeballsLeft: 20,
          gameDetails: ''
        }
        this.start()
      }

      handleClick(name,index){
        if(this.state.encounteredPokemons.length == 2){
          setTimeout(() => {
            this.check()
          },500)
        }else {
          let pokemon = {
            name,
            index
          }
          let pokemonPositions = this.state.pokemonPositions
          let pokemons = this.state.encounteredPokemons
          pokemonPositions[index].close = false
          pokemons.push(pokemon)
          this.setState({
            encounteredPokemons: pokemons,
            pokemonPositions: pokemonPositions
          })
          if(this.state.encounteredPokemons.length == 2){
            setTimeout(() => {
              this.check()
            },500)
          }
        }
      }
      
      
      start(){
        let pokemonPositions = [];
        this.state.duplicatePokemons = this.state.pokemons.concat(this.state.pokemons)
        this.state.randomPositions = this.shuffle(this.state.duplicatePokemons)
        this.state.randomPositions.map((name,index) => {
            pokemonPositions.push({
            name,
            close: true,
            complete: false,
            fail: false
          })
        })
        this.state.pokemonPositions = pokemonPositions
      }

      check(){
        let pokemonPositions= this.state.pokemonPositions;
        let catchedPokemons = this.state.catchedPokemons;
        const pokeballsLeft = this.state.pokeballsLeft;
        const numVal = this.state.rounds;


        if((this.state.encounteredPokemons[0].name == this.state.encounteredPokemons[1].name) && (this.state.encounteredPokemons[0].index != this.state.encounteredPokemons[1].index)){
          pokemonPositions[this.state.encounteredPokemons[0].index].complete = true
          pokemonPositions[this.state.encounteredPokemons[1].index].complete = true
          catchedPokemons.push(this.state.encounteredPokemons[0].index, this.state.encounteredPokemons[1].index )
        }else {
          pokemonPositions[this.state.encounteredPokemons[0].index].close = true
          pokemonPositions[this.state.encounteredPokemons[1].index].close = true
        }

        this.setState({
          rounds: numVal + 1,
          pokeballsLeft: pokeballsLeft - 1,
          pokemonPositions,
          encounteredPokemons: []
        })
      }

      shuffle(array){
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array
      }
      
      render(){
        if(this.state.catchedPokemons.length == 16 || this.state.pokeballsLeft == 0){
            const newTo = { 
                pathname: "", 
                userName: this.props.location.userName,
                pokeballs: this.state.pokeballsLeft
              };
            this.state.catchedPokemons.length == 16 ? newTo.pathname = "/success" : newTo.pathname = "/failure"
            return <Redirect to={newTo} />
         }
        
        return (
            <div className="container safari-zone pt-3">
                <div className="justify-content-center">
                    <div className="col col-12 align-self-center">
                        <div className="bs-component">
                            <h4>Hello { this.props.gameDetails }</h4>
                            <p className="text-light font-weight-bold">Round: <strong>{this.state.rounds}</strong> - Pokeballs: <strong>{this.state.pokeballsLeft}</strong></p>
                            <p className="text-light font-weight-bold">Pokemons Catched: <strong>{this.state.catchedPokemons.length}</strong>.</p>
                            <div className="row">
                            {
                            this.state.pokemonPositions.map((pokemon, index) => {
                                return <Pokemon 
                                    pokemon={pokemon.name} 
                                    click={() => this.state.encounteredPokemons.length ==  2 ? null : this.handleClick(pokemon.name,index)} 
                                    close={pokemon.close} 
                                    complete={pokemon.complete}/>
                            })
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
      }
  }