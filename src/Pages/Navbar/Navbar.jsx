import React from 'react';

const Navbar = () => {
    return (
        <div>
           <div className="navbar">
  <div className="navbar-start">
   
    <a target='_blank' className="btn btn-ghost normal-case text-2xl" href="https://zkey-protocol.gitbook.io/documentation/zkey-protocol/introduction">Tresorit</a>
  </div>
  
  <div className="navbar-end">
    
  <a target='_blank' className='text-lg font-semibold btn btn-ghost' href="https://zkey-protocol.gitbook.io/documentation/zkey-protocol/introduction">Document</a>
    <a className="btn btn-ghost cursor-pointer bg-[#8B8DFC] text-sm font-semibold hover:bg-[#8B8DFC] rounded-3xl px-5 mx-8 bg-fixed z-auto bg-[url('https://dribbble.com/shots/13971601-Tresorit-Wallpaper-HD/attachments/5584810?mode=media')]">Launch App</a>
  </div>
</div> 
        </div>
    );
};

export default Navbar;