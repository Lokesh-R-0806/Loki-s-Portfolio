import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


export default function Navbar() {

    let audio1=new Audio("./audios/Home.mp3")
    let audio2=new Audio("./audios/Skills.mp3")
    let audio3=new Audio("./audios/Projects.mp3")
    let audio4=new Audio("./audios/About.mp3")
    let audio5=new Audio("./audios/Contacts.mp3")
    let audio6=new Audio("./audios/Self Intro nc.mp3.wav")
    

  function click1(){
    audio1.play()
  }
  function click2(){
    audio2.play()
  }
  function click3(){
    audio3.play()
  }
  function click4(){
    audio4.play()
  }
  function click5(){
    audio5.play()
  }
  function click6(){
    audio6.play()
  }

  return (
    <div>

        <nav>

            <div onClick={click6}><h1 className='navh1'>PORTFOLIO</h1></div>

            <div className='navcontent'>

            <p onClick={click1}> <Link to="/" style={{textDecoration:'none',color:'white'}}> <p> HOME </p> </Link></p>

            <p onClick={click2}> <Link to="Skills" style={{textDecoration:'none',color:'white'}}> <p> SKILLS </p></Link> </p>

            <p onClick={click3}> <Link to='Projects' style={{textDecoration:'none',color:'white'}}> <p> PROJECTS </p></Link> </p>
            
            <p onClick={click4}> <Link to='About' style={{textDecoration:'none',color:'white'}}> <p> ABOUT </p></Link></p>

            <p onClick={click5}><Link to='Contact' style={{textDecoration:'none',color:'white'}}> <p> CONTACT </p> </Link> </p>

            </div>
        </nav>



      
    </div>
  )
}
