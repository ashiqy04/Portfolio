import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/*Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ashiq Y</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a
          <Typewriter options={{
            autoStart: true,
            loop: true,
          }}

            onInit={(typewriter) => {
              typewriter
                .typeString("Software Developer")
                .pauseFor(2000)
                .deleteAll()
                .start();
            }} />
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Full Stack Developer proficient in Java Spring Boot for robust backend solutions and React.js for dynamic front-end development. Proficient in various technologies including databases, version control, and testing frameworks. Passionate about crafting seamless user experiences and scalable, efficient systems.</p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>

            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home