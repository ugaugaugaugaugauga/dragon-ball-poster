import { cn } from '@/lib/utils'

type Props = {
  font: string
  name: string
  engName: string
}

export const CharacterName = ({ font, name, engName }: Props) => {
  return (
    <>
      <h1 className={cn('text-5xl mb-1 border-b-2 border-white', font)}>
        {name}
      </h1>
      <h2 className={cn('text-3xl', font)}>{engName}</h2>
    </>
  )
}
