import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Web3.0 Polygon Ecommarce'
            backgroundImg='/Projects/ecommercePolygon.png'
            github='https://github.com/Ankush263/Polygon-Ecommerce-Shop'
            live='https://polygon-ecommerce-shop.vercel.app/'
            tech='Next JS'
          />
          <ProjectItem
            title='Anime NFT Marketplace'
            backgroundImg='/Projects/nft.png'
            github='https://github.com/Ankush263/NFT--MarketPlace'
            live='https://anime-nft-marketplace.vercel.app/'
            tech='React JS'

          />
          <ProjectItem
            title='Staking Coins Dapp'
            backgroundImg='/Projects/staking.png'
            github='https://github.com/Ankush263/Staking-Coins-Dapp--Project'
            live='https://staking-coin-dapp.vercel.app'
            tech='React JS'

          />
          <ProjectItem
            title='DANK Token Faucet'
            backgroundImg='/Projects/tokenfaucet.png'
            github='https://github.com/Ankush263/DANK--Token'
            live='https://dank-token.netlify.app/'
            tech='React JS'

          />
          <ProjectItem
            title='ANK Token Swap'
            backgroundImg='/Projects/tokenswap.png'
            github='https://github.com/Ankush263/ANK-Token-Swap-Ethereum-'
            live='https://ank-token-swap.netlify.app/'
            tech='Next JS'

          />
          <ProjectItem
            title='Send eth'
            backgroundImg='/Projects/sendeth.png'
            github='https://github.com/Ankush263/Web3.0---SendETH'
            live='https://send-eth-dapp.netlify.app'
            tech='React JS'
          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;