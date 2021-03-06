import React, { Component, Fragment } from 'react';
import Home from './views/home';
import NotFound from './views/not-found';
import Login from './views/login';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import { UserProvider, defaultUserState } from './components/contexts/user-context';

class App extends Component {
  constructor(props){
    super(props);

    const userFromStorage = window.localStorage.getItem('user');
    const parsedUser = userFromStorage ? JSON.parse(userFromStorage) : {}

    this.state = {
      user: {
        ...defaultUserState,
        ...parsedUser,
        updateUser: this.updateUser,
      }
    };
  }

  updateUser = (user) => {
    this.setState(user);
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <Router>
          <Fragment>
            <UserProvider value={{user, updateUser: this.updateUser}}>
              <Header />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
                {/* <Route path='/logout' component={Logout} /> */}
                <Route component={NotFound} />
              </Switch>
              <Footer />
            </UserProvider>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
