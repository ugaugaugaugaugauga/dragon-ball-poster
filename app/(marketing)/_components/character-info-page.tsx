'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export const CharacterInfoPage = ({ isCurrentPage }: any) => {
  return (
    <div className='relative h-full w-full'>
      <Image
        src={'/universe.jpg'}
        alt={'universe'}
        fill
        className='object-cover object-center brightness-50'
      />
      {isCurrentPage && (
        <motion.div
          transition={{
            delay: 0.3,
            duration: 0.2,
            ease: 'easeInOut',
          }}
          animate={{ x: 100, opacity: 1.0 }}
          className='h-40 w-40 rounded-full bg-slate-500 opacity-0'
        />
      )}
    </div>
  )
}
