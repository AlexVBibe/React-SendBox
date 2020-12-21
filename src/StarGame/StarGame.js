import React from 'react';
import './StarGame.css';
import { AnswersField } from './AnswersField';
import { QuestionField } from './QuestionField';
import { StartAgain } from './StartAgain';
import { utils } from './Utils.js';

export class StarGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            availableNumbers: utils.range(1, 9),
            candidateNumbers: [],
            numberOfStars: utils.randomRange(9),
        };
        console.log(1);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="gameBoard">
                <StartAgain DisplayStatus={this.getNewGameButtonDisplayStatus()}
                            onClickHandler = {() => this.resetGame()}/>

                <QuestionField DisplayStatus={this.getQuestionFieldDisplayStatus()}
                               Content={this.state.numberOfStars} />
                   
                <AnswersField Content={utils.range(1, 9)}
                              getCellState = {num => this.getCellState(num)}
                              onClickHandler = {(num, status) => this.clickHandler(num, status)}
                              />
            </div>
        );
    }
    
    resetGame() {
        console.log("reset");
        this.setStars(utils.randomRange(9));
        this.setNewAvailableNumbers(utils.range(1, 9));
        this.setNewCandidateNumbers([]);
    }

    clickHandler(number, status) {
        if (status === 'used') {
            return;
        }

        let candidates = this.state.candidateNumbers;
        const stars = this.state.numberOfStars.length;

        const newCandidates = status === 'available'
            ? candidates.concat(number)
            : candidates.filter(n => n !== number);

        if (utils.sum(newCandidates) !== stars) {
            this.setNewCandidateNumbers(newCandidates)
        }
        else {
            const numbers = this.state.availableNumbers;
            const newAvailableNumbers = numbers.filter(n => ! newCandidates.includes(n));
            
            this.setStars(utils.range(1, utils.randomSumIn(newAvailableNumbers, 9)));
            this.setNewAvailableNumbers(newAvailableNumbers);
            this.setNewCandidateNumbers([]);
        }
    }

    setStars(newQuestion) {
        this.setState({
            numberOfStars: newQuestion,
        });
    }

    setNewAvailableNumbers(array) {
        this.setState({
            availableNumbers: array
        });
    }

    setNewCandidateNumbers(array) {
        this.setState({
            candidateNumbers: array,
        });
    }

    getCellState(num) {
        let numbers = this.state.availableNumbers;
        let candidates = this.state.candidateNumbers;
        let stars = this.state.numberOfStars.length;

        if (!numbers.includes(num)){
           return 'used';
        }
        
        if (candidates.includes(num)){
            return utils.sum(candidates) > stars
                ? 'wrong'
                : 'candidate';
        }

        return 'available';
    }

    getQuestionFieldDisplayStatus() {
        return this.state.availableNumbers.length === 0 
            ? 'none' 
            : 'inline-block';
    }

    getNewGameButtonDisplayStatus() {
        return this.state.availableNumbers.length === 0 
            ? 'inline-block' 
            : 'none';
    }
}