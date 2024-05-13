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
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={850}
        className='object-cover object-top'
      />
    )
  )
}
