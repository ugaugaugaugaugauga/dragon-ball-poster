import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
  isSelected: boolean
  imgSrc: string
  alt: string
  width: number
}

export const Character = ({ isSelected, imgSrc, alt, width }: Props) => {
  return (
    isSelected && (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='relative h-auto'
        style={{ width }}
      >
        <Image
          src={imgSrc}
          alt={alt}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover object-top'
        />
      </motion.div>
    )
  )
}
