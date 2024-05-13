import { cn } from '@/lib/utils'

type Props = {
  isSelected: boolean
  font: string
  name: string
}

export const TransformName = ({ isSelected, font, name }: Props) => {
  return isSelected && <h2 className={cn('text-4xl mb-1 ', font)}>{name}</h2>
}
