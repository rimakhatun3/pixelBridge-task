import React from 'react';

const Introduce = () => {
    return (
        <div className='mt-28 mb-40 '>
            <p className='flex flex-row items-center justify-center mb-20'>
            <img className='h-12 text-center' src="https://zkeypro.com/zkeylogo.svg" alt="" />
            </p>
           <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-24' >
<div className='shadow-red-300 shadow-md h-full border-opacity-30 border border-red-300 ps-4 pb-5 pe-10 rounded-lg group hover:scale-110' >
    <img src="https://zkeypro.com/vaults.png" alt="" />
</div>
<div className=' h-full border-opacity-30 border border-red-300 shadow-red-300 shadow-md  ps-4 pb-5 pe-10 rounded-lg group hover:scale-110'>
<img src="https://zkeypro.com/lending.png" alt="" />
</div>
<div className=' shadow-red-300 shadow-md  h-full border-opacity-30 border border-red-300 ps-4 pb-5 pe-10 rounded-lg group hover:scale-110'>
<img src="https://zkeypro.com/governance.png" alt="" />
</div>
           </div>
        </div>
    );
};

export default Introduce;