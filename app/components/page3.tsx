'use client'

import { motion } from 'framer-motion'

export const Page3 = ({ isCurrentPage }: any) => {
  return (
    <div className='bg-yellow-300 h-full'>
      {isCurrentPage && (
        <motion.div
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          animate={{ x: 100, opacity: 1.0 }}
          className='h-40 w-40 rounded-full bg-slate-500 opacity-0'
        />
      )}
    </div>
  )
}
