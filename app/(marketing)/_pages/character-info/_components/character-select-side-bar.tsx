import { cn } from '@/lib/utils'
import { Lobster } from 'next/font/google'
import Image from 'next/image'

type Props = {
  isSelected: boolean
  onIconClick: () => void
  iconSrc: string
  alt: string
  font: string
}

export const CharacterSelectSideBar = ({
  isSelected,
  onIconClick,
  iconSrc,
  alt,
  font,
}: Props) => {
  return (
    <>
      <div
        className={cn(
          'z-30 bg-slate-700 h-16 w-32 border-2 border-black relative cursor-pointer brightness-50 hover:brightness-100 transition',
          isSelected && 'brightness-100 border-yellow-500',
        )}
        onClick={onIconClick}
      >
        <Image
          src={iconSrc}
          alt={alt}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover'
        />
      </div>
    </>
  )
}
