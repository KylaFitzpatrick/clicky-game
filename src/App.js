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
    chosenAnimalIds: [],
    textColor: "rgb(12, 201, 243)"
  };
  
  sortAnimalCard = (id) => {
    // If id chosen is equal to the id then incorrect
    let chosenAnimalIds = this.state.chosenAnimalIds

    if (chosenAnimalIds.includes(id)) {
      this.setState({ score: 0, msg: "Incorrect!", chosenAnimalIds: [], textColor: "red" });
    }
    else if(!chosenAnimalIds.includes(id)) {
      chosenAnimalIds.push(id)
     
      let topScore = this.state.topScore
      let score = this.state.score

      if (chosenAnimalIds.includes(id) && topScore === score) {
        this.setState({ topScore: topScore + 1 })
      }
      if (score === 12) {
        this.setState({ msg: "You win!", chosenAnimalIds: [], textColor: "yellow" });
      }

      let newAnimals = animals.sort((a,b)=>Math.random()-0.5)
      
      this.setState({ score: score + 1, msg: "Correct!", animals:newAnimals, chosenAnimalIds, textColor: "green" });
    
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
              sortAnimalCard={this.sortAnimalCard}
              id={animal.id}
              key={animal.id}
              image={animal.image}
              name={animal.name}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );

  }
}

export default App;
