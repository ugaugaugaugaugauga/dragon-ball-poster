'use client'

import { cn } from '@/lib/utils'
import React, { cloneElement, useCallback } from 'react'
import { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
}

export const FullScrollPage = ({ children }: Props) => {
  const childrenArray = React.Children.toArray(children)
  const [windowObj, setWindowObj] = useState<Window>()
  const [currentPageNum, setCurrentPageNum] = useState<number>(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const pageRefs = useRef<HTMLDivElement[]>([])

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (!windowObj || !pageRefs.current || isScrolling) return

      const maxPage = pageRefs.current.length - 1
      const minPage = 0
      let nextPage = currentPageNum

      if (event.deltaY > 0) {
        nextPage = Math.min(currentPageNum + 1, maxPage)
      } else if (event.deltaY < 0) {
        nextPage = Math.max(currentPageNum - 1, minPage)
      }

      setIsScrolling(true)
      windowObj.scrollTo({
        top: pageRefs.current[nextPage].offsetTop,
        behavior: 'smooth',
      })

      setTimeout(() => {
        setCurrentPageNum(nextPage)
        setIsScrolling(false)
      }, 500)
    },
    [windowObj, currentPageNum, isScrolling],
  )

  const handlePointClick = useCallback(
    (pageNum: number) => {
      if (!windowObj) return
      setTimeout(() => {
        setCurrentPageNum(pageNum)
      }, 500)
      windowObj.scrollTo({
        top: pageRefs.current[pageNum].offsetTop,
        behavior: 'smooth',
      })
    },
    [windowObj],
  )

  const handleResize = useCallback(() => {
    if (!windowObj) return
    windowObj.scrollTo({
      top: pageRefs.current[currentPageNum].offsetTop,
    })
  }, [windowObj, currentPageNum])

  useEffect(() => {
    setWindowObj(window)
  }, [])

  useEffect(() => {
    if (!windowObj) return
    windowObj.scrollTo({
      top: 0,
    })
  }, [windowObj])

  useEffect(() => {
    if (!windowObj) return

    windowObj.addEventListener('wheel', handleWheel)
    return () => {
      windowObj.removeEventListener('wheel', handleWheel)
    }
  }, [windowObj, handleWheel])

  useEffect(() => {
    pageRefs.current = pageRefs.current.slice(0, childrenArray.length)
    childrenArray.forEach((_, index) => {
      const pageRef = pageRefs.current[index]
      if (pageRef && !pageRefs.current.includes(pageRef)) {
        pageRefs.current[index] = pageRef
      }
    })
  }, [childrenArray])

  useEffect(() => {
    if (!windowObj) return
    windowObj.addEventListener('resize', handleResize)
    return () => {
      windowObj.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return (
    <main className='relative h-screen'>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) {
              pageRefs.current[index] = el
            }
          }}
          className='h-full w-full'
        >
          {cloneElement(child as any, {
            isCurrentPage: currentPageNum === index,
          })}
        </div>
      ))}
      <div className='flex flex-col space-y-4 fixed top-1/2 -translate-y-1/2 right-10 z-50'>
        {childrenArray.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => handlePointClick(index)}
              className={cn(
                'w-4 h-4 flex items-center justify-center rounded-full  transition-colors duration-200 ease-in-out bg-gray-600 hover:bg-gray-200',
                currentPageNum === index && 'bg-gray-200 ',
              )}
            />
          )
        })}
      </div>
    </main>
  )
}
