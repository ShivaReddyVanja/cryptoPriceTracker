import React from 'react';

const Navbar: React.FC = () => {
    return (
       
        <div className='flex text-xl'>
            <div className='flex space-x-20 ml-5'>
            <p>Crypto</p>
            <p>Exchanges</p>
            <p>watchlist</p>
            <p>search</p>
            </div>
          
        </div>
    );
};

export default Navbar;
