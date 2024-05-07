'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { Dokdo } from 'next/font/google'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const dokdo = Dokdo({ weight: '400', subsets: ['latin'] })

export const LandingPage = ({ isCurrentPage }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const videoElement = videoRef.current

    if (!videoElement) return

    if (!isCurrentPage) {
      videoElement.pause()
      return
    }

    videoElement.play().catch((error) => {
      console.error('에러발생', error)
    })
  }, [isCurrentPage])

  return (
    <div className='relative h-full w-full'>
      <video
        ref={videoRef}
        src='/video1.mp4'
        className='brightness-[25%] absolute w-full h-full object-cover'
        loop
        muted
      />
      {isCurrentPage && (
        <div className='h-full w-full flex flex-col items-center justify-center z-50 relative'>
          <TextGenerateEffect
            words='최 대 의 적 사 이 언 인'
            className={cn(
              'text-white text-6xl tracking-tighter relative top-14',
              dokdo.className,
            )}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <Image src='/logo2.webp' alt='logo' width={750} height={384} />
            <h1
              className={cn(
                'relative text-white text-8xl text-center',
                dokdo.className,
              )}
            >
              브로리
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className='flex flex-col items-center mt-10 gap-y-3'
          >
            <ArrowDown className='animate-bounce text-white h-12 w-12' />
            <Button className='bg-white text-black w-[300px] font-bold hover:bg-slate-300'>
              영상 보러가기
            </Button>
          </motion.div>
        </div>
      )}
    </div>
  )
}
