import React from 'react'
import './Skills.css'

export default function Skills() {
  return (
    <body className='skills-body'>

    <div className='full-content'>


          {/* SKILLS BAR  */}

        {/* LEFT SIDE CONTENT  */}
  <div className='skills-left'>

<div className="skills">  

    <center><h1>SKILLS</h1></center>

        <li>
                    <h3>HTML</h3><span className="bar"><span className="html"></span></span> <br /><br />
        </li>

        <li>
                    <h3>CSS</h3><span className="bar"><span className="css"></span></span><br /><br />
        </li>

        <li>
                    <h3>BOOTSTRAP</h3><span className="bar"><span className="bootstrap"></span></span><br /><br />
        </li>

        <li>
                    <h3>JAVASCRIPT</h3><span className="bar"><span className="javascript"></span></span><br /><br />
        </li>

        <li>
                    <h3>JQUERY</h3><span className="bar"><span className="jquery"></span></span> <br /><br />
        </li>


</div>

</div>

<div className="overall-wave-content">
        <div className="first-five-wave-items">
            <img src="./images/HTML Logo.png" alt=""/>
            <img src="./images/CSS Logo.png" alt=""/>
            <img src="./images/Bootstrap Logo.png" alt=""/>
            <img src="./images/JavaScript Logo.png" alt=""/>
            <img src="./images/jQuery Logo.png" alt=""/>
        </div>

        <div className="second-five-wave-items">
            <img src="./images/React Logo.png" alt=""/>
            <img src="./images/Python Logo.png" alt=""/>
            <img src="./images/My SQL Logo.png" alt=""/>
            <img src="./images/Django Logo.png" alt=""/>
            <img src="./images/Github Logo.png" alt=""/>
        </div>
    </div>


    {/* SKILLS BAR  */}

{/* RIGHT SIDE CONTENT  */}


<div className='skills-right'>

  <div className="skills">  

<center><h1>SKILLS</h1></center>

<li>
<h3>REACT</h3><span className="bar"><span className="react"></span></span> <br /><br />
</li>

<li>
<h3>PYTHON</h3><span className="bar"><span className="python"></span></span><br /><br />
</li>

<li>
<h3>SQL</h3><span className="bar"><span className="sql"></span></span><br /><br />
</li>

<li>
<h3>DJANGO</h3><span className="bar"><span className="django"></span></span><br /><br />
</li>

<li>
<h3>GIT HUB</h3><span className="bar"><span className="github"></span></span> <br /><br />
</li>


</div>


</div>


</div>



    </body>
  )
}
