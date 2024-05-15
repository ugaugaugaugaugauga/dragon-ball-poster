import Image from 'next/image'

export const Background = () => {
  return (
    <Image
      src={'/bg2.jpg'}
      alt={'bg2'}
      fill
      className='object-cover object-center brightness-50'
    />
  )
}
