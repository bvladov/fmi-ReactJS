import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from ".././actions/authActions";
import { isRegistered } from "../userType";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    const state_auth = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <div className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            Logout
          </a>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              My Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categories">
              Categories
            </Link>
          </li>
        </div>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categories">
            Categories
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <i className="fas fa-cogs" />
          <Link className="navbar-brand" to="/">
            TechForum
          </Link>
          <div className="collapse navbar-collapse" id="mobile-nav">
            {isRegistered(state_auth) ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
