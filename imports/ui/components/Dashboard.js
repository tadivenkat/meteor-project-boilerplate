import React from 'react';
import {createBrowserHistory} from 'history';
import {Meteor} from 'meteor/meteor';
import history from './history';


export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  onLogout = (e) => {
      Meteor.logout((err)=> {
        if (err) {
          this.setState({
            error: err
          });
        } else {
          this.setState({
            error: ''
          });
          history.push('/');
        }
      });
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        {this.state.error ? <p>{this.state.error}</p> : null}
        <button onClick={this.onLogout.bind(this)}>Logout</button>
        <p>Dashboard page</p>
      </div>
    );
  }

}
