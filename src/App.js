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
    score: 10,
    topScore: 0,
    msg: "Click an image!",
    animals,
    chosenAnimalIds: [],
    textColor: "rgb(12, 201, 243)"
  };
  
  shuffleAnimalCard = (id) => {
    // Filter this.state.animals for animals with an id equal to the id then suffle
    let chosenAnimalIds = this.state.chosenAnimalIds
    if (chosenAnimalIds.includes(id)) {
      this.setState({ chosenAnimalIds: [], score: 0, msg: "Incorrect!", textColor: "red" });
      return;
    } else {
      chosenAnimalIds.push(id)
      //top score is less than score display dont display score if top score if greater than score display topscore
      let topScore = this.state.topScore
      let score = this.state.score

      if (chosenAnimalIds.includes(id) && topScore === score) {
        this.setState({ topScore: topScore + 1, score: score + 1 })
      }
      if (score === 12) {
        this.setState({ msg: "You win!", chosenAnimalIds: [], textColor: "yellow" });
        console.log('Winner');
        return;
      }
      let newAnimals = animals.sort((a,b)=>Math.random()-0.5)
      this.setState({ animals:newAnimals, chosenAnimalIds, score: score + 1, msg: "Correct!", textColor: "green" });

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
          textColor={this.state.textColor}
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
