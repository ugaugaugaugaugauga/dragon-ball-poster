'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const LayoutGrid = ({
  children,
  content,
}: {
  children: React.ReactNode
  content: React.ReactElement
}) => {
  const [selected, setSelected] = useState<boolean>(false)

  const handleClick = () => {
    setSelected(true)
  }

  const handleOutsideClick = () => {
    setSelected(false)
  }

  return (
    <div className='w-full h-full flex items-center'>
      <div className='p-10 grid grid-cols-1 w-full h-full md:grid-cols-3 max-w-7xl gap-4 mx-auto max-h-[1000px]'>
        <motion.div
          onClick={handleClick}
          className={cn(
            'relative overflow-hidden',
            selected &&
              'rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col',
          )}
          layout
        >
          {selected && <SelectedCard content={content} />}
          {children}
        </motion.div>
      </div>
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          'absolute h-screen w-screen left-0 top-0 bg-black opacity-0 z-10',
          selected ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        animate={{ opacity: selected ? 0.3 : 0 }}
      />
    </div>
  )
}

const SelectedCard = ({ content }: { content: React.ReactElement }) => {
  return (
    <div className='bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]'>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className='fixed inset-0 h-screen w-screen bg-black opacity-60 z-10'
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className='relative px-8 pb-4 z-[70]'
      >
        {content}
      </motion.div>
    </div>
  )
}

// const BlurImage = ({ card }: { card: Card }) => {
//   const [loaded, setLoaded] = useState(false)
//   return (
//     <Image
//       src={card.thumbnail}
//       height='500'
//       width='500'
//       onLoad={() => setLoaded(true)}
//       className={cn(
//         'object-cover object-top absolute inset-0 h-full w-full transition duration-200',
//         loaded ? 'blur-none' : 'blur-md',
//       )}
//       alt='thumbnail'
//     />
//   )
// }
