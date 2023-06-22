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
          I specialize in building decentralized applications (Dapps) using smart contracts, with expertise in utilizing technologies like Pinata and IPFS in the Web3.0 ecosystem. Passionate about learning new technologies, I embrace the concept that there are multiple ways to achieve a task efficiently. As an Open Source enthusiast, I actively contribute to diverse projects and constantly strive to expand my skill set. I am known for being a quick learner, adapting to new tech stacks as needed. For me, being a great developer means selecting the best tool for each job.
          </p>
          <p className='py-2 text-gray-400'>
          I embarked on my development journey in 2021 and since then, I have immersed myself in various tech stacks while collaborating with talented individuals. I have gained experience working directly with remote companies through participation in numerous Hackathons. During my spare time, I focus on enhancing my data structures and algorithms (DSA) knowledge, and actively contribute to Open Source projects. With a strong foundation and a passion for innovation, I am dedicated to pushing the boundaries of what is possible in the world of technology.
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