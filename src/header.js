import React, { Component } from "react";
import bitcoin from "./svg-icon/icon-money.svg";
import logo from "./svg-icon/logo.svg";
class Header extends Component {
  render() {
    return (
      <header>
        <a href='/'>
          <img src={logo} className='logo' alt='' />
        </a>
        <div className='header__left'>
          <img src={bitcoin} alt='Картинка' />
          <p>
            освободить<br /> разработчиков
          </p>
        </div>
      </header>
    );
  }
}

export default Header;
