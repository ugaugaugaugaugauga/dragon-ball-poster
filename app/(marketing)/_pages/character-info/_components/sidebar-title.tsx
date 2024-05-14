import { cn } from '@/lib/utils'

type Props = {
  font: string
}

export const SidebarTitle = ({ font }: Props) => {
  return (
    <h1
      className={cn(
        'flex justify-center text-white text-xl uppercase mb-3',
        font,
      )}
    >
      characters
    </h1>
  )
}
