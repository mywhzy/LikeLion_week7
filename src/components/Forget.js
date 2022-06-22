import React from 'react';
import '../styles/Forget.css';


function Forget(){
    
    return(
        <>
            <div className="forgetPassword">비밀번호를 잊어버리셨나요?</div>
            <div className="noAccount">
                계정이 없으신가요? <span className="signUp">회원가입</span>
            </div>
        </>
    )
}
export default Forget;
