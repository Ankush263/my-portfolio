import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const ProjectItem = ({title, backgroundImg, tech, github, live}: any) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
      <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' /> 
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <div className="w-11/12 h-20 flex justify-around items-center">
          <Link href={live}>
              <a target="_blank"><p className='text-center px-5 py-2 rounded-lg bg-green-400 text-gray-700 font-bold text-lg cursor-pointer'>Live</p></a>
          </Link>
          <Link href={github}>
            <a target="_blank">
              <div className='rounded-full p-5 cursor-pointer shadow-lg shadow-gray-700 bg-black'>
                <FaGithub />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem