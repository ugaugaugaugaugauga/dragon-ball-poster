import { motion } from 'framer-motion'

interface Props {
  pageNum: number
  bgColor: string
  pageRefs: React.MutableRefObject<HTMLDivElement[]>
}

const Section = ({ pageNum, bgColor, pageRefs }: Props) => {
  return (
    <div
      ref={(element) => {
        pageRefs.current[pageNum] = element!
      }}
      className={`w-full h-screen ${bgColor}`}
    >
      <span>Page {pageNum}</span>
      <motion.div
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        animate={{ x: 100, opacity: 1.0 }}
        className='h-40 w-40 rounded-full bg-slate-500 opacity-0'
      />
    </div>
  )
}

export default Section
