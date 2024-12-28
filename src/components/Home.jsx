import React from 'react'
import './Home.css'
import {  useTypewriter } from 'react-simple-typewriter';

export default function Home() {

  const [text]=useTypewriter({
    words: ["FULL STACK DEVELOPER...","VIDEO-EDITOR..."],
    loop:{},
    typeSpeed:200,
    deleteSpeed:200,
   });

  return (
<body>

  <div className='home-all'>

      <h1 style={{color:"white"}}>Hello, It's Me <br /><span style={{color:"red",fontSize:"50px"}}>LOKESH</span></h1>
    
      <h1 className='home-content'>
                I'm  a  <span>{text}</span>
                
      </h1>

      

  </div>

    <div className='home-img2'>

     <img className='home-img' src="images/Me.png" alt="" /> 

    </div>



      {/* BACKGROND DESINGS */}

      <div className="starfall">
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
  <div className="falling-star"></div>
</div>
  

</body>  
  )
}
