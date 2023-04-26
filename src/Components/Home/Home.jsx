import React from 'react'
import './Home.css'
import HomeA from '../images/HomeA.jpg'
import HomeB from '../images/HomeB.jpg'
import visiona from '../images/vision_a.jpg'
import visionb from '../images/image_b.jpg'
import visionc from '../images/image_c.jpg'


function Home() {
  return (
<>
    <div className='Home'>
       <div className='Home_1'>
            <img className='HomeA' src={HomeA} height={460} width={340} alt="" />
        </div>
        <div className='Home_heading'>
            <h1>Create</h1>
            <h2>Your</h2>
            <h1>interior</h1>
            <h2>space.</h2>
        </div>
        <div className='Home_text'>
           <h2>Customized furniture</h2>
           <p>In building furniture we are always confident to make customers always satisfied with our work,therefore we have a good value rating.</p>
        </div>
       <div className="HomeB">
           <img  src={HomeB} height={250} alt="" />
       </div>

       <div className='Ltext'>
          <i class="fa-solid fa-computer-mouse"></i>
            <p>Discover your next forniture</p>
       </div>
    </div>

    <div className='vision'>
         <div className='vision_a'><hr />    OUR VISION </div>
          <h1>"We are the best furniture company <span className='brown'>in</span></h1>
          <h1> UK, We <span className='brown'>always prioritize our clients</span> wishes."</h1>
          
    </div>

    <div className='vision_slider'>
      <div className='vision_imga'><img src={visionb} height={220} width={330} alt="" /></div>
      <div className='vision_imgb'><img src={visiona} height={220} width={330} alt="" srcset="" /></div>
      <div className='vision_imgc'><img src={visionc} height={220} width={330} alt="" /></div>
    </div>
    </>
  )
}

export default Home