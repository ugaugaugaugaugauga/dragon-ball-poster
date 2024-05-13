import { cn } from '@/lib/utils'
import { Lobster } from 'next/font/google'
import { CharacterType } from '../_page'
import Image from 'next/image'

const lobster = Lobster({ weight: '400', subsets: ['latin'] })

type Props = {
  selectedCharacter: CharacterType
  setType: (type: CharacterType) => void
}

export const SideNavigation = ({ selectedCharacter, setType }: Props) => {
  const characterIcons = [
    {
      type: CharacterType.S,
      imgUrl: '/s.png',
      alt: 's',
    },
    {
      type: CharacterType.V,
      imgUrl: '/v.png',
      alt: 'v',
    },
  ]
  return (
    <div className='pt-3 absolute top-0 left-0 flex flex-col'>
      <h1
        className={cn(
          'flex justify-center text-white text-2xl uppercase mb-3',
          lobster.className,
        )}
      >
        characters
      </h1>
      {characterIcons.map((item) => (
        <div
          className={cn(
            'z-30 bg-slate-700 h-16 w-32 border-2 border-black relative cursor-pointer brightness-50 hover:brightness-100 transition',
            item.type === selectedCharacter &&
              'brightness-100 border-yellow-500',
          )}
          onClick={() => setType(item.type)}
        >
          <Image
            src={item.imgUrl}
            alt={item.alt}
            fill
            className='object-cover'
          />
        </div>
      ))}
    </div>
  )
}
