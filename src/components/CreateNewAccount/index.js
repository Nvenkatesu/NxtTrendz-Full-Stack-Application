import {Component} from 'react'

import './index.css'

class CreateNewAccount extends Component {
  state = {
    username: '',
    password: '',
    name: '',
    gender: 'Male',
    location: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangename = event => {
    this.setState({name: event.target.value})
  }

  onChangeGender = event => {
    this.setState({gender: event.target.value})
  }

  onChangeLocation = event => {
    this.setState({location: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/login')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, name, password, gender, location} = this.state
    const userDetails = {username, name, password, gender, location}
    console.log(userDetails)

    const url = 'https://practicenode-prli.onrender.com/users'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const {history} = this.props
      history.replace('/login')
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
        <p className="pass">* Password must be more then 5 charecters</p>
      </>
    )
  }

  renderNameField = () => {
    const {name} = this.state

    return (
      <>
        <label className="input-label" htmlFor="name">
          NAME
        </label>
        <input
          type="text"
          id="name"
          className="username-input-field"
          value={name}
          onChange={this.onChangename}
          placeholder="name"
        />
      </>
    )
  }

  renderGenderField = () => {
    const {gender} = this.state

    return (
      <>
        <label className="input-label" htmlFor="gender">
          GENDER
        </label>
        <select
          id="gender"
          onChange={this.onChangeGender}
          className="username-input-field"
          value={gender}
        >
          <option key="Male" value="Male">
            Male
          </option>
          <option key="Female" value="Female">
            Female
          </option>
        </select>
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  renderLocationField = () => {
    const {location} = this.state
    return (
      <>
        <label className="input-label" htmlFor="location">
          Location
        </label>
        <input
          type="text"
          value={location}
          id="location"
          className="username-input-field"
          onChange={this.onChangeLocation}
          placeholder="location"
        />
      </>
    )
  }

  render() {
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-img"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-img"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderNameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="input-container">{this.renderGenderField()}</div>
          <div className="input-container">{this.renderLocationField()}</div>
          <button type="submit" className="login-button">
            Register
          </button>
        </form>
      </div>
    )
  }
}

export default CreateNewAccount
