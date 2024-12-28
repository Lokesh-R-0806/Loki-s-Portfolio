import React from 'react'
import "./About.css"

export default function About() {
  return (
    <body>

        <div className='about-div1'>

        <center><h1 className='about-h1'>ABOUT ME: </h1></center>

        <center><p className='about-para1'>Hello! I'm <b style={{color:"#08e8de"}}>LOKESH</b>, a Passionate Python Full-Stack Developer With a Deep Love For Building Robust,<br /> Scalable,and Effeicient Web Application. With a Strong Foundation In Both Back-end And  Front-end <br /> Technologies, I Enjoy Bringing Ideas To Life And Delivering Seamless User Experiences.   </p></center>

        <center><a href="https://drive.google.com/file/d/18q-nk4uY8tLIorTMA-kFUYUZbQx32uvI/view?usp=drive_link"><button class="about-btn">RESUME→</button></a></center>

       

        </div>


        <div className='about-div2'>

        <center><h1 className='about-h2'>MY JOURNEY: </h1></center>

        <center><p className='about-para2'> I Began My Programming <b style={{color:"#08e8de"}}>Journey With Python</b>Because Of Its <b style={{color:"#08e8de"}}>Simplicity And Power</b>,Quickly Diving <br /> Into The <b style={{color:"#08e8de"}}>World Of Full-Stack Development.</b> </p></center>

       

        </div>


        <div className='about-div3'>

        <center><h1 className='about-h3'>WHY FULL-STACK DEVELOPMENT? </h1></center>

        <center><p className='about-para3'> As a Full-Stack Developer, I Love The Challenge Of Understanding Both  The Front And Back Ends  Of  An <br /> Application. It's Incredibly Rewarding To Work On a Project From Start To Finish, From Desinging Databases <br /> And Creating Server-Side Logic To Implementing Beautiful, Interfaces. I'm Always Eager To Learn New Tools <br /> And Frameworks To Stay Ahead Of The Curve And Ensure My Projects Are Both High-Performing And Maintainable.</p></center>

       

        </div>


        <img className='about-pic'  src="./images/me3.jpg" alt="" />



    </body>
  )
}
