import React from 'react';
import './App.css'

function App() {
  return (
    <>
      <nav>
        <button href='#about' className='about' >About ME</button>
        <button href='#resume' className='resume'>Resume</button>
        <button href='#projects' className='projects'>Projects</button>
      </nav>
      <h1>Frieda H. Fry</h1>

      <h2 id='about'>About ME</h2>
        <p>Hello, I am a UCF Full-Stack Coding Bootcamp graduate who is ready and willing to not only continue a life of constant learning, but also hard work. I value teamwork, honesty, and productivity. Aside from web development, I have an extensive knowledge and passion for creating and culinary.</p>

        <p>At only 19 years old, I have plunged myself into a completely new world.</p>
      
      <h2 id='resume'>Resume</h2>

      <p>The most experience I've had in the work industry thus far has been with culinary and customer service.
        As of now I am starting a new career in Web Development.
      </p>
      <img src="file:///C:/Users/fryha/Downloads/resume.pdf" alt="Resume"/>
    
    <h2 id='projects'>Projects</h2>
    <h3>Sweet Dreams</h3>
    <p><a href='https://sweetdreamsproject-8e54b05db96b.herokuapp.com'>Deployed Website</a></p>
    <p><a href='https://github.com/oprokopieva382/sweetDreams'>GitHub</a></p>
    <p>
    "Struggling to get a good night's sleep? We recommend to try a Sweet Dreams app. It can be a helpful tool for improving sleep quality and overall health and well-being."
    </p>
    <h3>SongSafari</h3>
    <p><a href='https://kathrynfisher3700.github.io/songSafari'>Deployed Website</a></p>
    <p><a href='https://github.com/kathrynfisher3700/songSafari'>GitHub</a></p>
    <p>
    "Embark on a guided journey through musical subgenres, discovering new sounds or finding familiar tracks. SongSafari is not just an app; it's your ticket to explore the vast landscape of music."
    </p>
    <h3>Sweet Dreams</h3>
    <p><a href='https://chem-chicken.onrender.com/home'>Deployed Website</a></p>
    <p><a href='https://github.com/Hubbard1118/chemChicken'>GitHub</a></p>
    <p>
    "...where learning chemistry becomes an adventure for young minds!"
    </p>
    </>
  );
}

export default App;
