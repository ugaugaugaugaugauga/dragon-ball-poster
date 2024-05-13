import { cn } from '@/lib/utils'
import Image from 'next/image'

type Props = {
  isSelected: boolean
  onIconClick: () => void
  iconSrc: string
  alt: string
}

export const TransformIcons = ({
  isSelected,
  onIconClick,
  iconSrc: imgSrc,
  alt,
}: Props) => {
  return (
    <div
      className={cn(
        'z-20 relative h-20 w-20 border-2 border-black bg-slate-700 brightness-50 cursor-pointer hover:brightness-110 transition',
        isSelected && 'border-4 border-yellow-400 brightness-100',
      )}
      onClick={onIconClick}
    >
      <Image
        src={imgSrc}
        alt={alt}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        fill
        className='object-cover'
      />
    </div>
  )
}
