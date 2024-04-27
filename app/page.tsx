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
  const [isTransitioning, setIsTransitioning] = useState(false)

  const totalNum = pageObjArray.length
  const pageRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowObj(window)
    }
  }, [])

  const handlePageChange = (event: Event) => {
    if (!windowObj || isTransitioning) return

    let scroll = windowObj.scrollY
    for (let i = 1; i <= totalNum; i++) {
      if (
        scroll > pageRefs.current[i].offsetTop - windowObj.outerHeight / 3 &&
        scroll <
          pageRefs.current[i].offsetTop -
            windowObj.outerHeight / 3 +
            pageRefs.current[i].offsetHeight
      ) {
        setCurrentPageNum(i)
        break
      }
    }
  }

  const handlePointClick = (pageNum: number) => {
    if (!windowObj || isTransitioning) return

    windowObj.scrollTo({
      top: pageRefs.current[pageNum].offsetTop,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    if (!windowObj) return

    windowObj.addEventListener('scroll', handlePageChange)
    return () => {
      windowObj.removeEventListener('scroll', handlePageChange)
    }
  }, [windowObj])

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (!windowObj || !pageRefs.current || isTransitioning) return

      setIsTransitioning(true)
      if (event.deltaY > 0 && currentPageNum + 1 < pageRefs.current.length) {
        windowObj.scrollTo({
          top: pageRefs.current[currentPageNum + 1].offsetTop,
          behavior: 'smooth',
        })
      } else if (event.deltaY < 0 && currentPageNum - 1 > 0) {
        windowObj.scrollTo({
          top: pageRefs.current[currentPageNum - 1].offsetTop,
          behavior: 'smooth',
        })
      }
      setTimeout(() => setIsTransitioning(false), 500)
    }

    windowObj?.addEventListener('wheel', handleWheel)
    return () => {
      windowObj?.removeEventListener('wheel', handleWheel)
    }
  }, [windowObj, currentPageNum, isTransitioning])
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
