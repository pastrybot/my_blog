import React from 'react';
import {peopleContainer, person} from './style.css'

const About = (props) => {
  return (
    <div>
      <div className={peopleContainer}>
        <div className={person}><img src="http://i.imgur.com/613WTRK.jpg" alt="man with watermelon"/>
          <p>Content here</p>
        </div>
        <div className={person}><img src="http://i.imgur.com/613WTRK.jpg" alt="man with watermelon"/>
            <p>Content here</p>
        </div>
        <div className={person}><img src="http://i.imgur.com/613WTRK.jpg" alt="man with watermelon"/>
              <p>Content here</p>
        </div>
        <div className={person}><img src="http://i.imgur.com/613WTRK.jpg" alt="man with watermelon"/>
                <p>Content here</p>
        </div>
      </div>


    </div>
  )
}
export default About;
