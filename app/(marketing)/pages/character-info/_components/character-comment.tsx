import { cn } from '@/lib/utils'

type Props = {
  isSelected: boolean
  font: string
  comment: string
}

export const CharacterComment = ({ isSelected, font, comment }: Props) => {
  return (
    isSelected && (
      <h2
        className={cn(
          'text-2xl shadow-lg w-[250px] bg-black/30 rounded-xl',
          font,
        )}
      >
        {comment}
      </h2>
    )
  )
}
