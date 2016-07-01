import React from 'react';

export default class Card extends React.Component {
  static propTypes = {
    number: React.PropTypes.number,
    onCardFlipped: React.PropTypes.func,
  }

  state = {
    flipped: false,
  }

  _handleClick = (e) => {
    e.preventDefault();
    this.setState({ flipped: !this.state.flipped });
    this.props.onCardFlipped(e);
  }

  render() {
    return (
      <a className="card" onClick={this._handleClick}>
        {this.state.flipped &&
          <span>(back of card) nothing - im flipped over</span>
        }
        {this.state.flipped === false &&
          <span>(front of card) {this.props.number}</span>
        }
      </a>
    )
  }
}

export default class CardTable extends React.Component {
  static propTypes = {
    numberOfCards: React.PropTypes.number,
  }

  _myFunction(e) {
    console.log('hello from CardTable - a card was flipped!');
  }

  render() {
    return (
      {this.props.numberOfCards.map((i) =>
        <Card key={i} number={i} onCardFlipped={this._myFunction} />
      )}
    )
  }
}