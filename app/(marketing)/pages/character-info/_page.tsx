'use client'

import Image from 'next/image'
import { useState } from 'react'
import { SideNavigation } from './_components/side-navigation'
import { Black_Han_Sans, Lobster, Yeon_Sung } from 'next/font/google'
import { cn } from '@/lib/utils'

const font = Black_Han_Sans({ weight: '400', subsets: ['latin'] })
const font2 = Yeon_Sung({ weight: '400', subsets: ['latin'] })
const lobster = Lobster({ weight: '400', subsets: ['latin'] })

export enum CharacterType {
  S,
  V,
}

export enum VegetaTransformType {
  SAI,
  GOD,
  BLUE,
}

export const CharacterInfoPage = ({ isCurrentPage }: any) => {
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterType>(
    CharacterType.V,
  )
  const [selectedVegetaTransformType, setSelectedVegetaTransformType] =
    useState<VegetaTransformType>(VegetaTransformType.GOD)

  const vegeta = {
    name: '배지터',
    icon: '/v.png',
    engName: 'vegeta',
    type: CharacterType.V,
    onCharacterIconClick: () => setSelectedCharacter(CharacterType.V),
    selectedTransformType: selectedVegetaTransformType,
    characterInfo: [
      {
        transformType: VegetaTransformType.SAI,
        transformName: '초사이어인',
        imgSrc: '/v2.webp',
        width: 650,
        comment: '"움직이지 못하는 사이어인은 필요없다!"',
      },
      {
        transformType: VegetaTransformType.GOD,
        transformName: '초사이어인 갓',
        imgSrc: '/v3.webp',
        width: 550,
        comment: '"노력해도 절대 넘어설 수 없는 벽이 있다는 것을 보여주마."',
      },
      {
        transformType: VegetaTransformType.BLUE,
        transformName: '초사이어인 블루',
        imgSrc: '/v4.webp',
        width: 350,
        comment: '"파괴할 수조차 없는 기술을 먹여주지."',
      },
    ],
    transformIcons: [
      {
        transformType: VegetaTransformType.SAI,
        iconSrc: '/v-sai-icon.png',
        onClick: () => setSelectedVegetaTransformType(VegetaTransformType.SAI),
      },
      {
        transformType: VegetaTransformType.GOD,
        iconSrc: '/v-god-icon.png',
        onClick: () => setSelectedVegetaTransformType(VegetaTransformType.GOD),
      },
      {
        transformType: VegetaTransformType.BLUE,
        iconSrc: '/v-blue-icon.png',
        onClick: () => setSelectedVegetaTransformType(VegetaTransformType.BLUE),
      },
    ],
  }

  return (
    <div className='relative h-full w-full'>
      <Image
        src={'/bg1.jpg'}
        alt={'bg1'}
        fill
        className='object-cover object-center brightness-50'
      />
      {isCurrentPage && (
        <div className='relative h-full flex flex-col text-white'>
          <div className='pt-3 absolute top-0 left-0 flex flex-col'>
            <h1
              className={cn(
                'flex justify-center text-white text-2xl uppercase mb-3',
                lobster.className,
              )}
            >
              characters
            </h1>
            <div
              className={cn(
                'z-30 bg-slate-700 h-16 w-32 border-2 border-black relative cursor-pointer brightness-50 hover:brightness-100 transition',
                vegeta.type === selectedCharacter &&
                  'brightness-100 border-yellow-500',
              )}
              onClick={vegeta.onCharacterIconClick}
            >
              <Image
                src={vegeta.icon}
                alt={vegeta.engName}
                fill
                className='object-cover'
              />
            </div>
          </div>
          {selectedCharacter === CharacterType.V && (
            <section className='h-full xl:w-[1200px] w-full mx-auto flex justify-center'>
              <div className='relative w-[650px] h-full flex justify-center'>
                <div className='absolute top-48 -left-40 flex flex-col '>
                  <h1
                    className={cn(
                      'text-5xl mb-1 border-b-4 border-white',
                      font.className,
                    )}
                  >
                    베지터
                  </h1>
                  <h2 className={cn('text-3xl', font.className)}>vegeta</h2>
                </div>
                {vegeta.characterInfo.map((info) => (
                  <>
                    {info.transformType === vegeta.selectedTransformType && (
                      <Image
                        src={info.imgSrc}
                        alt={info.transformName}
                        width={info.width}
                        height={850}
                        className='object-cover object-top'
                      />
                    )}
                  </>
                ))}

                <div className='absolute top-96 -left-40 '>
                  <h2 className={cn('text-4xl mb-1 ', font.className)}>
                    {vegeta.characterInfo.map((info) => (
                      <>
                        {info.transformType ===
                          vegeta.selectedTransformType && (
                          <span>{info.transformName}</span>
                        )}
                      </>
                    ))}
                  </h2>
                  <div className='flex'>
                    {vegeta.transformIcons.map((icon) => (
                      <div
                        className={cn(
                          'relative h-20 w-20 border-2 border-black bg-slate-700 brightness-50 cursor-pointer hover:brightness-110 transition',
                          icon.transformType === vegeta.selectedTransformType &&
                            'border-4 border-yellow-400 brightness-100',
                        )}
                        onClick={icon.onClick}
                      >
                        <Image
                          src={icon.iconSrc}
                          alt='icon'
                          fill
                          className='object-cover'
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className='absolute top-80 left-0 transform translate-x-[500px] flex flex-col'>
                  <h2
                    className={cn(
                      'text-2xl shadow-lg w-[250px] bg-black/30 rounded-xl',
                      font2.className,
                    )}
                  >
                    {vegeta.characterInfo.map((info) => (
                      <>
                        {info.transformType ===
                          vegeta.selectedTransformType && (
                          <span>{info.comment}</span>
                        )}
                      </>
                    ))}
                  </h2>
                </div>
              </div>
            </section>
          )}
          {selectedCharacter === CharacterType.S && (
            <section className='h-full xl:w-[1200px] w-full mx-auto'>
              <div className='relative w-[550px] h-full'>
                <Image
                  src={'/s3.webp'}
                  alt={'v3'}
                  fill
                  className='object-cover object-top'
                />
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  )
}
