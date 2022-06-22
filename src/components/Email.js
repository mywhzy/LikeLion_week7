import React from "react";
import '../styles/Email.css';

function Email () {
  
  return (
    <div>
      <input className="Email" type="text" placeholder="Email" />
      <input className="password" type="text" placeholder="비밀번호" />
      <button className="btnLogin">로그인</button>
      

    </div>
  )
};

export default Email;
