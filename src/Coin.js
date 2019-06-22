import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    render() {
        let coinImage = 'https://tinyurl.com/react-coin-';
        return (
            <div>
                <img className={`Coin ${this.props.flipping &&'Coin-flipping'}`} src={`${coinImage}${this.props.face}-jpg`} alt="coin-face"></img>
            </div>
        )
    }
}

export default Coin;