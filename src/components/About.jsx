import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            About
            </p>
          </div>

          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-4xl font-bold'>
              <p>Hi, I'm Ashiq, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>
                Passionate Full Stack Developer with a strong background in Java Spring Boot and React.js, adept at building robust and interactive web applications. Proficient in various technologies including databases, version control, and testing frameworks. With a keen eye for detail and a commitment to delivering high-quality code, I thrive on crafting seamless user experiences and scalable solutions. My dedication to staying updated with the latest industry trends drives my continuous learning and problem-solving abilities. Eager to collaborate on innovative projects and contribute my skills to create impactful digital experiences.
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About