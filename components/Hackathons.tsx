import React from 'react'
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
            backgroundImg='/opensource/web3.jpg'
            projectUrl='https://web3athon.hackerearth.com/'
            tech='Win 2nd🏆 place on CELO chain'
            github='https://github.com/FOWGit/WEB3athon-FOW'
            live='https://fow-original.netlify.app/'
          />
          <AllHacks
            title='Build with Celo'
            backgroundImg='/opensource/celo.jpg'
            projectUrl='https://build-with-celo.hackerearth.com/'
            // tech='Ongoing'
            github='https://github.com/Ankush263/FOW---build-with-celo-hackathon'
            live='https://fow-build-with-celo-hackathon.vercel.app/'
          />

          <AllHacks
            title='Buidl the Future'
            backgroundImg='/opensource/coinbase.png'
            projectUrl='https://buidl-the-future.hackerearth.com/'
          />

          <AllHacks
            title='Hackathon of Hope with Celo'
            backgroundImg='/opensource/hope.png'
            tech='Top 10 Project'
            projectUrl='https://hope.hackerearth.com/'
          />

          <AllHacks
            title='Octahacks 5.0'
            backgroundImg='/opensource/octahack.jpg'
            projectUrl='https://octahacks.devfolio.co/'
          />

          <AllHacks
            title='Eth for All'
            backgroundImg='/opensource/ethforall.png'
            projectUrl='https://ethforall.devfolio.co/overview'
          />
        </div>
      </div>
    </div>
  )
}

export default Hackathons