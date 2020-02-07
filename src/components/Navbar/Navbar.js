import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faIcons from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css";

class Navbar extends Component {

  handleNavigation = (e) => {
    this.props.history.push(e)
    // console.log(this.props)
  }

  render() {
    return (
      <header>
        <div className="container-fluid bg-light">
          <div className="row">
            <div className="col-sm-2 h-logowidth">
              <h3>AlI MAMA</h3>
            </div>
            <div className="col-sm-6 ">
              <div className="searchClass" >
                <div className="input-group">
                  <input type="text" class="form-control" placeholder="Search for..." />
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">Search!</button>
                  </span>
                </div>
              </div>
            </div>
            <div className="topnav col-sm-4 text-center headz" id="myTopnav">

              <a href="#" className="" onClick={() => this.props.history.push('/login')}><FontAwesomeIcon icon={faIcons.faUser} />{" "}LOGIN</a>
              <a href="#" className="" onClick={() => this.props.history.push('//register')}><FontAwesomeIcon icon={faIcons.faSignInAlt} />{" "}JOIN FOR FREE</a>
              <a href="#" className="" onClick={() => this.props.history.push('/about-us')}><FontAwesomeIcon icon={faIcons.faEnvelope} />{" "}MESSAGING</a>
              <a href="#" className="" onClick={() => this.props.history.push('/projects')}><FontAwesomeIcon icon={faIcons.faShoppingBag} />{" "}ORDER</a>
              <a href="#" className="" onClick={() => this.props.history.push('/contact-us')}><FontAwesomeIcon icon={faIcons.faShoppingCart} />{" "}CART</a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
