import React, { Component } from 'react';
import { connect } from 'react-redux';
import proptypes from 'prop-types';
import md5 from 'crypto-js/md5';

class Header extends Component {
  state = {
    hash: '',
  };

  componentDidMount() {
    const hash = this.getImageHash();
    this.setState({ hash });
  }

  getImageHash = () => {
    const { email } = this.props;
    const treatedEmail = email.trim().toLowerCase();
    console.log(treatedEmail);
    return md5(treatedEmail);
  };

  render() {
    const { user } = this.props;
    const { hash } = this.state;
    return (
      <header>
        <img alt="User Avatar" src={ `https://www.gravatar.com/avatar/${hash}` } data-testid="header-profile-picture" />
        <p data-testid="header-player-name">{user}</p>
        <p>
          Score:
          <span data-testid="header-score">0</span>
        </p>
      </header>
    );
  }
}

const mapStateToProps = ({ loginReducer: { user, email } }) => ({
  user,
  email,
});

Header.propTypes = {
  user: proptypes.string.isRequired,
  email: proptypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
