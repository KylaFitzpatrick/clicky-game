import React, { Component } from "react";
import AnimalCard from "./components/AnimalCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import animals from "./animals.json";

class App extends Component {
  // Setting this.state.animals to the animals json array
  state = {
    score: 0,
    topScore: 0,
    msg: "Click an image!",
    animals,
    chosenAnimalIds: []
  };

  //shuffle the cards after click
  //if card clicked then shuffle cards
  //update score and total score
  //if user clicks card not already choosen increase score and top score
  //if user clicks card already choosen restart game and clear score and if score 
  //is greater than top score replace top score
  shuffleAnimalCard = (id) => {
    // Filter this.state.animals for animals with an id equal to the id then suffle
    let chosenAnimalIds = this.state.chosenAnimalIds
    if (chosenAnimalIds.includes(id)) {
      this.setState({ chosenAnimalIds: [], score: 0, msg: "Incorrect!" });
      return;
    } else {
      chosenAnimalIds.push(id)
      //top score is less than score display dont display score if top score if greater than score display topscore
      let topScore = this.state.topScore
      let score = this.state.score

      if (chosenAnimalIds.includes(id) && topScore === score) {
        this.setState({ topScore: topScore + 1, score: score + 1 })
      }
      if (chosenAnimalIds.length === 12) {
        this.setState({ score: 12, msg: "You win!", chosenAnimalIds: [] });
        console.log('Winner');
        return;
      }
      let newAnimals = animals.sort((a,b)=>Math.random()-0.5)
      this.setState({ animals:newAnimals, chosenAnimalIds, score: score + 1, msg: "Correct!" });


    }; 
  }

  // Map over this.state.animals and render a AnimalCard component for each animal object
  render() {
    return (
      <div>

        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
          msg={this.state.msg}
        />
        
        <Hero />
       
        <Wrapper>
          {this.state.animals.map(animal => (
            <AnimalCard
              shuffleAnimalCard={this.shuffleAnimalCard}
              id={animal.id}
              key={animal.id}
              image={animal.image}
              alt={animal.name}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );

  }
}

export default App;
