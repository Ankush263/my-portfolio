import React from 'react'
import celo from '../public/opensource/celo.jpg'
import web3 from '../public/opensource/web3.jpg'
import AllHacks from './AllHacks'

function Hackathons() {

  return (
    <div id='hackathons' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Hackathons
        </p>
        <h2 className='py-4'>All my Hackathons</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <AllHacks
            title='Web3athon'
            backgroundImg={web3}
            projectUrl='https://web3athon.hackerearth.com/'
            tech='Win 2nd🏆 place on CELO chain'
          />
          <AllHacks
            title='Build with Celo'
            backgroundImg={celo}
            projectUrl='https://build-with-celo.hackerearth.com/'
            tech='Ongoing'
          />
        </div>
      </div>
    </div>
  )
}

export default Hackathons