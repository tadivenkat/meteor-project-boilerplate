import React from 'react';
import {Link} from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';

export default class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      firstName: null,
      email: null
    }
  }

  componentDidMount() {
    Meteor.call('getLoggedInUserInfo', (err, resp) => {
        if (!!err) {
          this.setState({
              error: err.error
          });
        } else {
          this.setState({
            firstName: resp.profile.firstName,
            email: resp.emails[0].address
          });
        }
    });
  }

  render() {
    var user = null;

    return (
      <div>
          <h1>Your Profile</h1>
          {this.state.error ? <p>{this.state.error}</p> : null}
          <p>{this.state.firstName}</p>
          <p>{this.state.email}</p>
      </div>
    );
  }
}
