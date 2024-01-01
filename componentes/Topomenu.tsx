import React from 'react';

const Topomenu = () => {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar-logo">
          <img src="./assets/LOGO_site-completo-branco.png" height="200px" />
        </div>
        <div className="top-bar-menu">
          <ul>
            <li>HOME</li>
            <li>
              <b className="bolder">POR QUE A IEE?</b>
            </li>
            <li>ENSINO</li>
            <li>NOTÍCIAS</li>
            <li>FALE CONOSCO</li>
          </ul>
        </div>
        <div className="top-bar-login-btn">
          <button>Login</button>
        </div>
      </div>
    </>
  );
};

export default Topomenu;
