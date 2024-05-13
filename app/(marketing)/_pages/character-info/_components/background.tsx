import Image from 'next/image'

export const Background = () => {
  return (
    <Image
      src={'/bg1.jpg'}
      alt={'bg1'}
      fill
      className='object-cover object-center brightness-50'
    />
  )
}
