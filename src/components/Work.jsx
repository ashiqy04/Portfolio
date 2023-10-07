import React from 'react'
import NetflixImg from '../assets/projects/ntfx.jpg'
import WorkImg from '../assets/projects/pexels-neo-2653362.jpg'
import OlxImg from '../assets/projects/olx.png'
import ExclImg from '../assets/projects/excl.png'
import { BsGithub } from 'react-icons/bs'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 pt-24'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className='py-6'>// Check out some of my recent work</p>
                </div>

                {/*Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>

                {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${NetflixImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto hover:scale-105 duration-500 content-div '>

                        {/*Hover Effects*/}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Netflix Clone
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ashiqy04/Netflix-Clone-ReactJS'>
                                    <button className='hover:-translate-y-1 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/ashiqy04/Netflix-Clone-ReactJS'>
                                    <button className='hover:-translate-y-1 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code <BsGithub size={27}
                          className="hover:-translate-y-1 transition-transform cursor-pointer inline"/></button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${OlxImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto hover:scale-105 duration-500 content-div '>

                        {/*Hover Effects*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Olx Clone
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ashiqy04/OLX-Clone'>
                                    <button className='hover:-translate-y-1 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/ashiqy04/OLX-Clone'>
                                    <button className='hover:-translate-y-1 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code <BsGithub size={27}
                          className="hover:-translate-y-1 transition-transform cursor-pointer inline"/></button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${WorkImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto hover:scale-105 duration-500 content-div '>

                        {/*Hover Effects*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Educational Counselling
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ashiqy04/Educational-Counselling'>
                                    <button className='hover:-translate-y-1 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/ashiqy04/Educational-Counselling'>
                                    <button className='hover:-translate-y-1 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code <BsGithub size={27}
                          className="hover:-translate-y-1 transition-transform cursor-pointer inline"/></button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${WorkImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto hover:scale-105 duration-500 content-div '>

                        {/*Hover Effects*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Online Shopping
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ashiqy04/Online-Shopping'>
                                    <button className='hover:-translate-y-1 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/ashiqy04/Online-Shopping'>
                                    <button className='hover:-translate-y-1 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code <BsGithub size={27}
                          className="hover:-translate-y-1 transition-transform cursor-pointer inline"/></button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${WorkImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto hover:scale-105 duration-500 content-div '>

                        {/*Hover Effects*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                User Management
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ashiqy04/User-Management-System-FullStack'>
                                    <button className='hover:-translate-y-1 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/ashiqy04/User-Management-System-FullStack'>
                                    <button className='hover:-translate-y-1 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code <BsGithub size={27}
                          className="hover:-translate-y-1 transition-transform cursor-pointer inline"/></button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{ backgroundImage: `url(${ExclImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto hover:scale-105 duration-500 content-div '>

                        {/*Hover Effects*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Excel File to table View
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ashiqy04/ExcelFile-to-Table-View-Frontend'>
                                    <button className='hover:-translate-y-1 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/ashiqy04/ExcelFile-to-Table-View-Frontend'>
                                    <button className='hover:-translate-y-1 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code-FE <BsGithub size={27}
                          className="hover:-translate-y-1 transition-transform cursor-pointer inline"/></button>
                                </a>
                                <a href='https://github.com/ashiqy04/ExcelFile-Table-View-Backend'>
                                    <button className='hover:-translate-y-1 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code-BE <BsGithub size={27}
                          className="hover:-translate-y-1 transition-transform cursor-pointer inline"/></button>
                                </a>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Work