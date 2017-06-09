import React from 'react';
// import Background from './IMG_6841.jpg'
import {largeButton, title, carousel} from './styles.css';


const Home = (props) => {
  return (
    <div>
      {/*// <body><img src={Background} alt="background"/>*/}

        <div className={carousel}>
        <h2 className={title}>something here</h2>
      

        <ul>
          <li>{}</li>
          <li>{}</li>
        </ul>
        </div>


    <button
    onClick={() => alert('best button ever')}
    className={largeButton} type='button'>Click me!</button>


    </div>
  )
}
export default Home;
