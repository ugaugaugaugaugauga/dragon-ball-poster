'use client'

import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const TestPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [delayIndex, setDelayIndex] = useState(currentIndex)
  const length = 5

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

  const testColor = useMemo(() => {
    return Array.from({ length }, (_, index) => getRandomColor())
  }, [])

  const test = Array.from({ length }, (_, index) => (
    <div
      key={index}
      className={cn(
        'relative min-w-full min-h-full duration-500 ease-in-out brightness-50',
        index === delayIndex && 'scale-[115%] z-20 brightness-100',
        index !== currentIndex && 'scale-[100%] brightness-50',
      )}
      style={{
        backgroundColor: testColor[index],
        translate: `${-100 * currentIndex}%`,
      }}
    />
  ))

  return (
    <div className='h-screen flex items-center'>
      <div className='relative h-[500px] w-full max-w-4xl mx-auto flex items-center justify-center'>
        <div className='w-full h-full flex'>
          {test.map((comp) => comp)}
          <button
            onClick={showPrevImage}
            className='absolute -left-10 top-1/2 transform -translate-y-1/2 hover:bg-slate-500 p-3 z-30'
          >
            <ArrowLeft />
          </button>
          <button
            onClick={showNextImage}
            className='absolute -right-10 top-1/2 transform -translate-y-1/2 hover:bg-slate-500 p-3 z-30'
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className='z-50'>
        {Array.from({ length }, (_, index) => (
          <button
            className={cn(
              'p-3 hover:bg-slate-200 transition-all duration-1000',
              index === currentIndex && 'bg-slate-300 ',
            )}
            onClick={() => setCurrentIndex(index)}
          >
            {index}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TestPage
