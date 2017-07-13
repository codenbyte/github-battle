var React = require('react');

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState(function () {
      return {
        username: value
      }
    })
  }

  render() {
    return (
      <form className='column'>
        <lable className='header' htmlFor='username'>
          {this.props.lable}
        </lable>
        <input
          id='username'
          placeholder='github username'
          type='text'
          autoComplete='off'
          value={this.state.username}
          onChange={this.handleChange}
          />

      </form>
    )
  }
}

PlayerInput.propTypes = {
  id: propTypes.string.isRequired,
  lable: propTypes.string.isRequired,
  onSubmit: propTypes.func.isRequired
}

class Battle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneName: '';
      playerTwoName: '';
      playerOneImage: null,
      playerTwoImage: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(id, username) {
    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
      return newState;
    });
  }


  render() {
    var playerOneName = this.state.playerOneName;
    var playerTwoName = this.state.playerTwoName;

    return (
      <div>
        <div className='row'>
          {!playerOneName &&
            <PlayerInput
              id='playOne'
              lable='Player One'
              onSubmit={this.handleSubmit}
              />}

          {!playerTwoName &&
            <PlayerInput
              id='playTwo'
              lable='Player Two'
              onSubmit={this.handleSubmit}
              />}
        </div>
      </div>
    )
  }
}

module.exports = Battle;
