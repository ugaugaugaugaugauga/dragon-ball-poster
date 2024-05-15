'use client'
import { LayoutGrid } from '@/components/ui/layout-grid'
import { Background } from './_components/background'
import Image from 'next/image'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'
import { cn } from '@/lib/utils'

export function StoryPage() {
  return (
    <div className='relative h-full w-full flex flex-col items-center justify-center'>
      <Background />
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className='w-full max-w-sm bg-white'
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className={cn('md:basis-1/2 lg:basis-1/3 ')}
            >
              <Card>
                <CardHeader>hello</CardHeader>
                <CardContent>heha</CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
