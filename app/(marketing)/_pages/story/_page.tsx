'use client'

import { Background } from './_components/background'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function StoryPage({ isCurrentPage }: any) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [delayIndex, setDelayIndex] = useState(currentIndex)

  const stories = [
    { imgSrc: '/story1.png', title: '브로리의 유배, 복수의 다짐' },
    { imgSrc: '/story2.png', title: '복수의 시작, 파라가스의 야망' },
    { imgSrc: '/story3.png', title: '분노의 브로리 사이언인의 위기' },
    { imgSrc: '/story4.png', title: '파라가스의 죽음, 각성 브로리' },
    { imgSrc: '/story5.png', title: '오지터의 등장, 싸움의 끝' },
  ]
  const length = stories.length
  useEffect(() => {
    setTimeout(() => {
      setDelayIndex(currentIndex)
    }, 500)
  }, [currentIndex])

  const showPrevImage = () => {
    setCurrentIndex((index) => {
      if (index === 0) return length - 1
      return index - 1
    })
  }

  const showNextImage = () => {
    setCurrentIndex((index) => {
      if (index === length - 1) return 0
      return index + 1
    })
  }

  const storyCardList = stories.map((story, i) => (
    <div
      key={i}
      className={cn(
        'relative min-w-full min-h-full duration-500 ease-in-out brightness-50',
        i === delayIndex && 'scale-125 z-20 brightness-100',
        i !== currentIndex && 'scale-100 brightness-50',
      )}
      style={{
        translate: `${-100 * currentIndex}%`,
      }}
    >
      <Image
        src={story.imgSrc}
        alt={'bg1'}
        fill
        className={cn(
          'object-cover transition',
          i !== currentIndex && 'grayscale',
          i === currentIndex && 'cursor-pointer',
        )}
      />
    </div>
  ))

  const handleSlideButtons = (
    <>
      <button
        onClick={showPrevImage}
        className='absolute -left-20 top-1/2 transform -translate-y-1/2  p-3 z-50 border-2 rounded-full bg-black text-yellow-300 border-yellow-300 hover:bg-black/50 group active:outline transition'
      >
        <ArrowLeft className='h-6 w-6 group-hover:scale-125 transition-all' />
      </button>
      <button
        onClick={showNextImage}
        className='absolute -right-20 top-1/2 transform -translate-y-1/2  p-3 z-50 border-2 rounded-full bg-black text-yellow-300 border-yellow-300 hover:bg-black/50 group active:outline transition'
      >
        <ArrowRight className='h-6 w-6 group-hover:scale-125 transition-all' />
      </button>
    </>
  )

  const pageButtons = stories.map((story, index) => (
    <button
      key={index}
      className={cn(
        'p-3 text-white transition-all duration-700',
        index === currentIndex && 'bg-slate-700 text-yellow-500',
      )}
      onClick={() => setCurrentIndex(index)}
    >
      <span>{story.title}</span>
    </button>
  ))

  return (
    <div className='relative h-full w-full flex flex-col items-center justify-center'>
      <Background />
      {isCurrentPage && (
        <div className='h-full w-full flex items-center'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className='relative h-[400px] w-full max-w-3xl mx-auto flex items-center justify-center'
          >
            <div className='w-full h-full flex'>
              {storyCardList}
              {handleSlideButtons}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='z-50 absolute top-0 left-0 bg-black/50 flex flex-col rounded-lg'
          >
            {pageButtons}
          </motion.div>
        </div>
      )}
    </div>
  )
}
