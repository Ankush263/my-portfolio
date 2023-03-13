import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {

  const handleClick = () => {
    if(typeof window !== 'undefined') {
      window.location.replace("mailto:ankushbanik263@gmail.com")
    }
  }

  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi👋, I&#39;m <span className='text-[#5651e5]'> Ankush</span>
          </h1>
          <h1 className='py-2 text-gray-700'>{"A Web2 + Web3 Developer"}</h1>
          <h1 className='py-2 text-orange-600'>(🎉Win 2nd🏆 place in Web3athon🎉)</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            {`I’m focused on learning various stuff and collaborate with wide range of people`}
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/ankush-banik-b61bb6214/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/Ankush263'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <div onClick={handleClick}>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href='https://drive.google.com/file/d/1udQu6RcF22ZBob_4A0m9KF3JXEmyYSfM/view?usp=share_link'>
                  <BsFillPersonLinesFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;