import React from 'react'
import logo from '../../assets/logo.png';
import './Title.css';

const Title = () => {
    return (
        <div className='title-app'>
          <img src={logo} alt="" />
          <p>Merci François</p> 
          <p className="sign">(Logo by Francesco)</p>  
        </div>
    )
}

export default Title
