import React from 'react';
import Introduce from '../Introduce';
import Gateway from '../Gateway';
import Chosse from '../Chosse';

const Home = () => {
    return (
        <div className='' >
         <div className=' grid lg:grid-cols-2 justify-around items-center -mt-24'>
         <div className='relative lg:ms-40 lg:me-16'>
            <img src="https://zkeypro.com/line1.svg" alt="" />

<div className='absolute top-14 left-7 '>
<p className='text-5xl font-bold mb-3'>Basic key element <br/>
for mass adoption of <br/>
crypto on <span className='text-indigo-500'>zkSync</span> </p>
<div className='mt-8 relative'>
   <p className=''>Powered by</p> 
   <img className='absolute top-0 left-24' src="https://zkeypro.com/icons/avalanche.svg" alt="" />
</div>
</div>



         </div>
         <div className='w-12/12 -ms-36 -mt-28'>
            <img   src="https://zkeypro.com/assets/zkeypro.png" alt="" />
         </div>
         </div>
         <div className='lg:flex justify-between me-11'>
   <div className='   w-full group hover:scale-110 flex flex-col justify-center items-center'>
    <img className='h-[400px] ' src="https://zkeypro.com/vaultsbanner.png" alt="" />
<div className='items-center text-center'>
<h2 className='text-5xl text-center'><span className='text-indigo-500'>zkey</span> Aggregator</h2>
    <div className='text-center mt-4 tooltip tooltip-success ' data-tip="Coming Soon">
    <button className=' mt-4 px-28  bg-[#8B8DFC] py-3 rounded-lg'>Get started</button>
    </div>
    </div>

   </div>
   <div className='h-full   w-full group hover:scale-110 flex flex-col justify-center items-center'>
    <img className='h-[400px]' src="https://zkeypro.com/vaultsbanner2.png" alt="" />
<div className='items-center text-center w-full'>
<h2 className='text-5xl text-center'><span className='text-indigo-500'>zkey</span> Aggregator</h2>
    <div className='text-center   mt-4 tooltip tooltip-success ' data-tip="Coming Soon">
    <button className=' mt-4 px-28  bg-[#8B8DFC] py-3 rounded-lg'>Get started</button>
    </div>
    </div>

   </div>
</div>
         <Introduce></Introduce>
         <Gateway></Gateway>
         <Chosse></Chosse>
        </div>
    );
};

export default Home;