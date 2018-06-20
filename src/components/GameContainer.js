import React, { Component } from "react";
import Header from "./Header/Header";
import Jumbotron from "./Jumbotron/Jumbotron";
import picturesJson from "../pictures.json";
import PictureCard from "./PictureCard";
import Footer from "./Footer/Footer";

class GameContainer extends Component {
    state = {
        currentScore: 0,
        topScore: 0,
        pictures: []
    }

    componentWillMount() {
        const pictures = this.shuffle(picturesJson);
        this.setState({ pictures });
    }

    // from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    shuffle(array) {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    // Reloads page and randomizes picture order when clicking "Clicky Game"
    resetGame = () => {
        console.log("reloaded!");
        let pictures = [...this.state.pictures];
        pictures.forEach(picture => picture.clicked = false);
        pictures = this.shuffle(pictures);
        this.setState({
            currentScore: 0,
            pictures
        })
    };

    handlePictureClick = id => {
        if (!this.state.pictures[id].clicked) {
            console.log(id);
            let pictures = [...this.state.pictures];
            pictures[id].clicked = true;
            console.log(pictures[id]);
            pictures = this.shuffle(pictures);
            this.setState({
                pictures,
                currentScore: this.state.currentScore + 1,
                topScore: this.state.currentScore + 1 > this.state.topScore ? this.state.currentScore + 1 : this.state.topScore
            });
        } else {
            console.log("already clicked");
            this.resetGame();
        }

    }

    // Was trying to do a ternary operator within the render component but couldn't get it to work
    renderWinMessage = () => {
        if (this.state.topScore === 12) {
            return <div className="win-message">
                <h2>You win!</h2>
                <p>Guess you're not a visual racist, after all!</p>
            </div>
        }
    }

    render() {
        return (
            <div>
                {/*Renders scores and reload function in header*/}
                <Header
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                    resetGame={this.resetGame}
                />

                <Jumbotron />

                {this.state.pictures.map((picture, i) => <PictureCard
                    image={picture.image}
                    key={picture.id}
                    id={i}
                    onClick={this.handlePictureClick}
                />)}

                <Footer />
            </div>
        );
    }
}

export default GameContainer;