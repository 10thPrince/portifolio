import React from 'react'
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import AWS from '../assets/aws.png';
import Firebase from '../assets/firebase.png';
import github from '../assets/github.png';
import mongo from '../assets/mongo.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import html from '../assets/html.png';

const Skills = () => {
  return (
    <div name='skills' className='text-gray-300 bg-[#0a192f] w-full h-screen'>
        {/* Container */} 
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
                <p className='py-4'>//These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                    <img src={html} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className='my-4 font-bold'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                    <img src={CSS} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className='my-4 font-bold'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                    <img src={Javascript} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className='my-4 font-bold'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                    <img src={react} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className='my-4 font-bold'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                    <img src={github} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className='my-4 font-bold'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                    <img src={node} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className='my-4 font-bold'>NODE</p>
                </div>
                <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                    <img src={mongo} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className='my-4 font-bold'>MONGO DB</p>
                </div>
                <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                    <img src={AWS} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className='my-4 font-bold'>AWS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills