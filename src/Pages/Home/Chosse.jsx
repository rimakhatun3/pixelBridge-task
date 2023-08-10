import React from 'react';

const Chosse = () => {
    return (
        <div className='mb-36'>
            <div className='flex flex-row justify-center items-center mb-28'>
                <img className='h-12' src="https://zkeypro.com/reason.png" alt="" />
            </div>
            
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 gap-x-24 gap-y-10 mx-24'>
                <div className='border pe-8   shadow-md shadow-red-300 rounded-tl-2xl border-red-300 rounded-xl group hover:scale-110   ' >
                <div className='ps-14  py-14 border border-blue-500 rounded-tl-2xl rounded-ee-md rounded-bl-md rounded-tr-md   '>
    <img src="https://zkeypro.com/icons/inovation.svg" alt="" />
    <h2 className='text-2xl font-bold my-4'>Inovation</h2>
    <p className='font-semibold'>First-ever combination of DEX Aggregator,<br/>Launchpad & Bridge with interconnected,<br/>featuresbecoming a gate way for projects and users to zkSync.</p>
</div>
                </div>

<div className='border pe-8 shadow-md shadow-red-300 rounded-tl-2xl border-red-300 rounded-xl group hover:scale-110   ' >
<div className='ps-14 py-14 border h-full border-blue-500 rounded-tl-2xl rounded-ee-md rounded-bl-md rounded-tr-md  '>
    <img src="https://zkeypro.com/icons/zkCompatibility.svg" alt="" />
    <h2 className='text-2xl font-bold my-4'>zkSync <br/> compatibility</h2>
    <p className='font-semibold'>Being highly compatible to zkSync, the transaction throughput on zkey Protocol is extremely high with low gas fees</p>
</div>
</div>

<div className='border pe-8 shadow-md shadow-red-300 rounded-tl-2xl border-red-300 rounded-xl group hover:scale-110   '  >
<div className='ps-14 py-14 border h-full border-blue-500 rounded-tl-2xl rounded-ee-md rounded-bl-md rounded-tr-md '>
    <img src="https://zkeypro.com/icons/dualStake.svg" alt="" />
    <h2 className='text-2xl font-bold my-4'>Dual stake</h2>
    <p className='font-semibold'>Staking on just one platform to receive reward from all zkey Protocol products. zkey Protocol incentitives and motivates our contributors.</p>
</div>
</div>
<div className='border pe-8 shadow-md shadow-red-300 rounded-tl-2xl border-red-300 rounded-xl group hover:scale-110   ' >
<div className='ps-14 py-14 border h-full border-blue-500 rounded-tl-2xl rounded-ee-md rounded-bl-md rounded-tr-md  '>
    <img src="https://zkeypro.com/icons/simplity.svg" alt="" />
    <h2 className='text-2xl font-bold my-4'>Simplity</h2>
    <p className='font-semibold'>zkey Protocol provides smooth, fast and convenient experience to users with simple interface</p>
</div>
</div>
<div className='border pe-8 shadow-md lg:h-[400px]  shadow-red-300 rounded-tl-2xl border-red-300 rounded-xl group hover:scale-110   '>
<div className='ps-14 py-14 border h-full border-blue-500 rounded-tl-2xl rounded-ee-md rounded-bl-md rounded-tr-md   '>
    <img src="https://zkeypro.com/icons/security.svg" alt="" />
    <h2 className='text-2xl font-bold my-4'>Security</h2>
    <p className='font-semibold'>Security above everything! Interaction in zkProtocol is transparent, private and secured.</p>
</div>
</div>
            </div>
        </div>
    );
};

export default Chosse;