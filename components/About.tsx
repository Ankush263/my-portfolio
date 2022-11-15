import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/two.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-400'>
            I specialized in building Dapps from smart contracts using pinata IPFS 
            and other web3.0 technologies. I&apos;m passionate about learning new technologies
            and understand there is more than one way to accomplish a task. 
            I am OpenSource enthusiastic, contributing to various kinds of projects in OpenSource and
            I am a quick learner and can pick up new tech stacks as needed. 
            I believe that being a great developer is not using one specific language, 
            but choosing the best tool for the job.
          </p>
          <p className='py-2 text-gray-400'>
          I started my development journey in 2021. 
          Throughout this journey, I learned various tech stacks 
          and collab with various people. I have experience working directly with remote companies 
          as I participate in various Hackathons. In my spare time, 
          I learn DSA and contribute to OpenSource.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;