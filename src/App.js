import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Email from './components/Email';
import Forget from './components/Forget';
import LoginFrame from './components/LoginFrame';
import Bottom from './components/bottom';

function App() {
    const [isShow,setIsShow] = useState(false);
      return (
      <div className='app'>
        <button onClick={()=>setIsShow(!isShow)}>시작하기</button>
        {isShow && (
          <div className='login-frame'>
            <Title />
            <Email />
            <Forget/>
            <Bottom/>
          </div>
        )}
      </div>
      )
}

export default App;
