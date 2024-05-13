import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

type Props = {
  isSelected: boolean
  font: string
  comment: string
}

export const CharacterComment = ({ isSelected, font, comment }: Props) => {
  return (
    isSelected && (
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className={cn(
          'text-3xl shadow-lg w-[300px] bg-black/40 rounded-xl',
          font,
        )}
      >
        {comment}
      </motion.h2>
    )
  )
}
