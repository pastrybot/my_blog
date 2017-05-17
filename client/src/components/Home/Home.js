import React from 'react';
import {largeButton} from './styles.css';


const Home = (props) => {
  return (
    <div>
      <h1> Helllllllllooooo from home component </h1>
      <button
      onClick={() => alert('best button ever')}
      className={largeButton} type='button'>Click me!</button>
    </div>
  )
}
export default Home;
