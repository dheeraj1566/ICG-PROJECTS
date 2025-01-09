import React, { Component } from 'react';
import Coin from './Coin';
// import './FlipCoin.css'; // Import external CSS
import './FlipCoin.css'

class FlipCoin extends Component {
    static defaultProps = {
        coins: [
            {
                side: 'head',
                imgSrc: 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg',
            },
            {
                side: 'tail',
                imgSrc: 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg',
            },
        ],
    };

    constructor(props) {
        super(props);
        this.state = {
            currFace: null,
            totalFlips: 0,
            heads: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    choice(arr) {
        const randomIdx = Math.floor(Math.random() * arr.length);
        return arr[randomIdx];
    }

    flipCoin() {
        const newFace = this.choice(this.props.coins);
        this.setState((curState) => ({
            currFace: newFace,
            totalFlips: curState.totalFlips + 1,
            heads: curState.heads + (newFace.side === 'head' ? 1 : 0),
        }));
    }

    handleClick() {
        this.flipCoin();
    }

    render() {
        const { currFace, totalFlips, heads } = this.state;
        return (
            <div className="Block">
            <div className="flip-coin">
                <h2 className="title">Let's Flip a Coin</h2>
                {currFace && (
                    <div className="coin-image">
                        <Coin info={currFace} />
                    </div>
                )}
                <button className="flip-button" onClick={this.handleClick}>
                    Flip Me!
                </button>
                <p className="results">
                    Out of <span className="total-flips">{totalFlips}</span> flips, there have been{' '}
                    <span className="heads-count">{heads}</span> heads and{' '}
                    <span className="tails-count">{totalFlips - heads}</span> tails.
                </p>
                </div>
            </div>
        );
    }
}

export default FlipCoin;
