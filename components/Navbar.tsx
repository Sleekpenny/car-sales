import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <div className='w-full absolute z-10'>
        <nav className='nav__prop'>
            <Link href='/'>
                <Image src='/logo.svg' alt='Car Hub Logo' width={118} height={18} className='object-contain' />
            </Link>

             <CustomButton 
             title="Sign In"
             btnType="button"
             containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
             />
        </nav>
    </div>
  )
}

export default Navbar