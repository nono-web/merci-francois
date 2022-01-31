import React from 'react';
import './Sandra.css';
import {lému} from '../../assets/sandraimg.jpg';

const Sandra = () => {
    return (
        <div className='containerSandra'>
            <div class="merci">
                <div className='squ'>M</div>
                <div className='squ'>E</div>
                <div className='squ'>R</div>
                <div className='squ'>C</div>
                <div className='squ'>I</div>
            </div>
            <div class="francois">
                <div className='fr'>
                   <h1 className='titlefr'>FRANCOIS PRESIDENT</h1>
                </div>
            </div>
            <div className='sign'>
                <p className='signconsole'>#console.log(coucou)</p>
                <p className='signconsole'>#teamLému</p>
                <p className='signconsole'>#Francois2022</p>
                <p className='signconsole'>#Allez Bisous</p>
                <p className='signconsole'>#Les Emoji c'est la vie</p>
            </div>
      </div>
    )
}

export default Sandra
