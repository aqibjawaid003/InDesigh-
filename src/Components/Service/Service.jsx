import React from 'react'
import './Service.css'
import serve_img1 from '../images/service_img1.jpg'
import serve_img2 from '../images/service_img2.jpg'
import serve_img3 from '../images/service_img3.jpg'
import plant from '../images/plant.jpg'
import wood from '../images/wood.jpg'
import steel from '../images/steel.jpg'


function Service() {
  return (
    <div className='service'>
        <div className='service_H'>
            <div className='service_a'>
            <div className='serve'><hr /> Service</div>
                <h1>Good design has perfect results</h1>
            </div>
            <div className='service_b'><p>Build your interior design customization with our greatest designers to become extraordinary masterpieces.</p></div>
        </div>

       <div className='serve_images'>
                <div className='serve_iA'><img src={serve_img1}width={550} height={350} alt="" /></div>
                <div className='serve_iB'><img src={serve_img2}width={300} height={430} alt="" /></div>
                <div className='serve_iC'><img src={serve_img3}width={400} height={330} alt="" /></div>
       </div>

        <div className='material'>
            <div className='material_a'>
                <div className='text'>
                      <div className=''><hr />Material</div>
                      <h1>Special materials to make good furniture</h1>
                </div>
                <img src={plant} width={260} height={200} alt="" />
            </div>
            <div className='material_b'>
                <img src={wood} width={270} height={400} alt="" />
            </div>
            <div className='material_c'>
                <img src={steel} width={260} height={200} alt="" />
                <div>
                    <p>we have special material to build furniture to be durable with special quality materials can produce something extraordinary</p>
                   <button type="submit">See Materials</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service