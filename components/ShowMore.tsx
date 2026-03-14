"use client"

import { useRouter } from 'next/navigation';
import React from 'react'
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/constants';

export interface showMoreProps { 
    pageNumber: number,
    isNext: boolean
}

const ShowMore = ({pageNumber, isNext}: any) => {
 
    const router = useRouter();
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updateSearchParams('limit', `${newLimit}`)

        router.push(newPathName);
    }

  return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
            <CustomButton 
            title="Show More"
            btnType="button"
            containerStyles="bg-primary-blue rounded-full text-white"
            textStyles="text-white font-semibold"
            handleClick={handleNavigation}
            />
        )}

    </div>
  )  
}

export default ShowMore