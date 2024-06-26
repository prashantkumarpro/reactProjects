import React from 'react'
import './Projects.css'
import gsap from 'gsap'
const Projects = () => {
  const onMmove = (e) => {
    console.log(`${e.pageX}px`)
    gsap.to('.cursor', {
        x: `${e.pageX}px`,
        y: `${e.pageY}px`,
        transform: `translate(-50%, -50%)`
    })
}
const onEnter = () => {
    gsap.to('.cursor', {
        scale: 1
    })
}
const onLeave = () => {
    gsap.to('.cursor', {
        scale: 0
    })
}


  return (
    <>
      <div className="cursor"></div>
      {/* <!-- project section start  --> */}
      <section id="project" className="projects-section"
      onMouseMove={onMmove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}>
        <h2 className="project-section-header">These are some of my projects</h2>

        <div className="project-grid">

          <div className="box">
            <a
              href="https://two-good-co-sigma.vercel.app/" target='_blank' >
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                alt="project1" />
            </a>
            <p className="project-title">To Goods.Co</p>
          </div>
          <div className="box"> <a href="https://amazon-five-amber.vercel.app/" target='_blank'>
            <img src="https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="project2" />
          </a>

            <p>Amazon Clone</p>
          </div>
          <div className="box"> <a href="https://weather-eight-murex.vercel.app/" target='_blank'>
            <img src="https://images.unsplash.com/photo-1530695440407-21fef47230b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="project3" />
          </a>
            <p>Weather App</p>
          </div>
          <div className="box"> <a href="">
            <img src="https://images.unsplash.com/photo-1505274664176-44ccaa7969a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="project4" />
          </a>

            <p>Project 4</p>
          </div>
          <div className="box"> <a href="">
            <img src="https://images.unsplash.com/photo-1444465693019-aa0b6392460d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG5hdHVyYWx8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60 "
              alt="project5" />
          </a>

            <p>Project5</p>
          </div>
          <div className="box"> <a href="">
            <img src="https://images.unsplash.com/photo-1528278611485-ebae7fc1e929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="project6" />
          </a>

            <p>Project 6</p>
          </div>



        </div>
      </section>
    </>
  )
}

export default Projects