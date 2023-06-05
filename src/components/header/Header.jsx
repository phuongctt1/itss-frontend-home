import React from "react";
import logo from "../../assets/images/Picture1.png";
import "./Header.css";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });

  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          <div className="logo">
            <h1 className="logo-text">SaGaSuy</h1>
            <img src={logo} alt="logo" width="50px" />
            <div className="header-content">
              <div>登録</div>
              <div>ログイン</div>
              <div className="language-menu">
                <select className="language-select">
                  <option value="en">英語</option>
                  <option value="jp">日本</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>
      
    </>
  );
};
