import React from "react";
import "./contents.css";
import picture6 from "../../assets/images/Picture6.svg";

export const Contents = () => {
  return (
    <div className="contents">
      <div className="chunhat">
        <h1 className="chunhat-title">生徒とチューターをよ</h1>
        <h1 className="chunhat-title">り簡単につなぐ</h1>
      </div>
      <div className="chuduoi">
        <h2 className="chuduoi-subtitle">成績の良い候補者のリスト。 評価結果</h2>
        <h2 className="chuduoi-subtitle">とコメント</h2>
      </div>
      <button className="colorButton">家庭教師を探し始める
      <img src={picture6} alt="Icon" className="button-icon" style={{ width: "25px", height: "20px" }} />
      </button>
    </div>
  );
};
