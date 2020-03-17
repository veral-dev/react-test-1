import React, { Component } from 'react';

/* ---- STYLE ---- */
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { Switch, Route } from 'react-router-dom'
/* ---- SERVICES ---- */
import AuthServices from './services/auth.services'

import TrivialList from './components/pages/TrivialList'
import NavBar from './components/ui/navBar'
import Signup from './components/auth/signup/Signup'
import Login from './components/auth/login/Login'

class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: false }
    this.services = new AuthServices()
  }

  componentDidMount = () => this.fetchUser()

  setTheUser = userObj => this.setState({ loggedInUser: userObj })
  fetchUser = () => {
    this.services.loggedin()
      .then(theUser => this.setState({ loggedInUser: theUser }))
      .catch(() => this.setState({ loggedInUser: false }))
  }

  render() {

    return (
      <>
        <NavBar />
        <main>

          <Switch>
            <Route exact path="/" render={() => <TrivialList loggedInUser={this.state.loggedInUser} />} />
            <Route path="/signup" render={() => <Signup setTheUser={this.setTheUser} />} />
            <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
          </Switch>

        </main>

      </>

    )
  }
}


export default App