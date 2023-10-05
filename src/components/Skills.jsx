import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Java from '../assets/java.png'

import GitHub from '../assets/github.png';

import MySql from '../assets/Mysql.png';
import PostgreSql from '../assets/postgreSql.png';
import Spring from '../assets/Spring.png';
import Git from '../assets/git.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full md:h-screen bg-[#0a192f]  text-gray-300'>
            {/*Container*/}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="Html Icon" />
                        <p className='my-4'>HTML</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS Icon" />
                        <p className='my-4'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Java} alt="Java Icon" />
                        <p className='my-4'>JAVA</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Spring} alt="Spring Icon" />
                        <p className='my-4'>SPRING</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="Javascript Icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="React Icon" />
                        <p className='my-4'>REACT JS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={MySql} alt="MySql Icon" />
                        <p className='my-4'>MYSQL</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={PostgreSql} alt="Postgresql Icon" />
                        <p className='my-4'>POSTGRESQL</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="Github Icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Git} alt="Git Icon" />
                        <p className='my-4'>GIT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills