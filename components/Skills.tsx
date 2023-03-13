import Image from 'next/image';
import React from 'react';
import Java from '../public/skills/java.png'
import html from '../public/skills/html.png'
import expressjs from '../public/skills/expressjs.png'
import mongodb from '../public/skills/mongodb.png'
import css from '../public/skills/css.png'
import ts from '../public/skills/ts.png'
import javascript from '../public/skills/javascript.png'
import react from '../public/skills/react.png'
import tailwind from '../public/skills/tailwind.png'
import node from '../public/skills/node.png'
import next from '../public/skills/nextjs.png'
import solidity from '../public/skills/solidity.png'
import hardhat from '../public/skills/hardhat.png'
import ethers from '../public/skills/ethers.png'
import ipfs from '../public/skills/ipfs.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>

        <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 bg-red-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ts} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Type Script</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 bg-red-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={mongodb} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>mongoDB</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 bg-red-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={expressjs} width='80px' height='70px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Express js</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 bg-red-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 bg-red-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={react} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 bg-red-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          
          <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 bg-red-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={node} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Node</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 bg-red-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={next} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 bg-red-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={solidity} width='45px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Solidity</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 bg-red-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={hardhat} width='80px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Hardhat</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 bg-red-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ethers} width='100px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Ethers js</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 bg-red-500'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ipfs} width='200px' height='100px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>IPFS</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;