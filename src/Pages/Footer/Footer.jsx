import React from 'react';
import { FaArrowAltCircleUp, FaDiscord, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <p className='  bg-gradient-to-r from-black via-blue-800 to-stone-900  h-1' />
            <div className='px-24 mt-16'>
            <div className='lg:flex justify-between '>
            <div className='lg:flex gap-x-16 '>
            <div className='flex flex-col gap-y-4'>
                <a className='text-2xl font-bold' href="">About Us</a>
                <a target='_blank' className='text-lg font-semibold' href="https://zkey-protocol.gitbook.io/documentation/zkey-protocol/introduction">Documentation</a>
                
            </div>
            <div className='flex flex-col gap-y-2'>
            <a className='text-2xl font-bold mb-2' href="">Products</a>
                <a target='_blank' className='text-lg font-semibold' href="https://zkeypro.com/">zkey Aggregator</a>
                <a target='_blank' className='text-lg font-semibold' href="https://zkeypro.com/">zkey Launchpad</a>
            </div>
            
            </div>
            <div>
                <h2 className='text-2xl font-bold mb-4 '>Social</h2>
            <div className='flex gap-2'>
            <a target='_blank' href="https://twitter.com/i/flow/login?redirect_after_login=%2FzkeyProtocol">
<img src="https://zkeypro.com/icons/twitter.png" alt="" />
                </a>
                <a target='_blank' href="https://discord.com/invite/zkeyprotocol">
<img src="https://zkeypro.com/icons/dicord.png" alt="" />
                </a>

                <a target='_blank' href="https://t.me/zkeyProtocol_chat">
<img src="https://zkeypro.com/icons/telegram.png" alt="" />
                </a>
                <a target='_blank' href="https://t.me/zkeyProtocol">
<img src="https://zkeypro.com/icons/telegramAnn.png" alt="" />
                </a>
            </div>
            </div>

            </div>
            <div className="w-full text-center mb-2 sm:mb-0 my-10 pb-12">
        <span className="text-white text-lg">&copy;  Protocol 2023, All rights reserved.</span>
      </div>
        </div>
        </div>
    );
};

export default Footer;