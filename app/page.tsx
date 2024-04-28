'use client'

import { useEffect, useRef, useState } from 'react'
import Buttons from './components/buttons'
import Section from './components/section'

const pageObjArray = [
  { pageNum: 1, bgColor: 'bg-[#ffeaa7]' },
  { pageNum: 2, bgColor: 'bg-[#fab1a0]' },
  { pageNum: 3, bgColor: 'bg-[#fdcb6e]' },
  { pageNum: 4, bgColor: 'bg-[#e17055]' },
]

const Home = () => {
  const [windowObj, setWindowObj] = useState<Window>()
  const [currentPageNum, setCurrentPageNum] = useState<number>(1)
  const [isScrolling, setIsScrolling] = useState(false)

  const pageRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    windowObj?.scrollTo({
      top: 0,
    })
  }, [windowObj])

  let lastScrollY = 0
  var checkScrolling: any

  const handleScroll = () => {
    clearTimeout(checkScrolling)

    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY || currentScrollY < lastScrollY) {
      if (!isScrolling) setIsScrolling(true)
    }

    checkScrolling = setTimeout(() => {
      if (isScrolling) setIsScrolling(false)
    }, 66)

    lastScrollY = currentScrollY
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowObj(window)
    }
  }, [])

  const handlePointClick = (pageNum: number) => {
    if (!windowObj) return
    setCurrentPageNum(pageNum)
    windowObj.scrollTo({
      top: pageRefs.current[pageNum].offsetTop,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (!windowObj || !pageRefs.current) return

      const maxPage = pageRefs.current.length - 1
      const minPage = 1
      const nextPage = Math.min(currentPageNum + 1, maxPage)
      const prevPage = Math.max(currentPageNum - 1, minPage)

      if (event.deltaY > 0) {
        if (currentPageNum === nextPage) return
        windowObj.scrollTo({
          top: pageRefs.current[nextPage].offsetTop,
          behavior: 'smooth',
        })
        setCurrentPageNum(nextPage)
        return
      }
      if (event.deltaY < 0) {
        if (currentPageNum === prevPage) return
        windowObj.scrollTo({
          top: pageRefs.current[currentPageNum - 1].offsetTop,
          behavior: 'smooth',
        })
        setCurrentPageNum(prevPage)
        return
      }
    }

    windowObj?.addEventListener('wheel', handleWheel)
    return () => {
      windowObj?.removeEventListener('wheel', handleWheel)
    }
  }, [windowObj, currentPageNum])

  return (
    <>
      <main className='relative '>
        {pageObjArray.map((item, index) => {
          return (
            <Section
              key={index}
              pageNum={item.pageNum}
              bgColor={item.bgColor}
              pageRefs={pageRefs}
              currentPageNum={currentPageNum}
            />
          )
        })}
        <div className='flex flex-col space-y-4 fixed top-1/2 -translate-y-1/2 right-10 z-10'>
          <Buttons
            pageObjArray={pageObjArray}
            currentPageNum={currentPageNum}
            handlePointClick={handlePointClick}
          />
        </div>
      </main>
    </>
  )
}

export default Home
