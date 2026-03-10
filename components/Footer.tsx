import React from 'react'
import Image from 'next/image';
import { footerLinks } from '@/constants';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 max-w-360! mx-auto! px-6! md:px-0!'>

      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src='/logo.svg' alt='' width={118} height={18} className='object-contain' />
          <p className="text-base text-gray-700">Carhub 2023 <br /> All rights reserved &copy; </p>
        </div>

        <div className="max-md:mt-5 gap-10 grid grid-cols-2 md:grid-cols-3">
          {footerLinks.map(({title, links})=>(
            <div key={title} className='footer__link'>
              <h3 className='font-bold md:text-center'>{ title }</h3>
              {links.map((item)=> (
                <Link href={item.url} key={item.title} className='text-neutral-800 md:text-center'> {item.title} </Link> 
              ))}
              </div>
          ))}
        </div>
      </div>

        <div className='flex justify-between flex-col md:flex-row items-center flex-wrap mt-10! border-gray-0 sm:px-16 py-10'>
          <p>@2023 CarHub. All Rights Reserved</p>
          <div className="footer__copyrights-link">
            <Link href="/" className='text-gray-500'>Privacy Policy</Link>
            <Link href="/" className='text-gray-500'>Terms of Use</Link>
          </div>
        </div>

    </footer>
  )
}

export default Footer