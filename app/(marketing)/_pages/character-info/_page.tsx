'use client'

import { Fragment, useState } from 'react'
import { Black_Han_Sans, Nanum_Myeongjo, Yeon_Sung } from 'next/font/google'
import { Background } from './_components/background'
import { CharacterSelectSideBar } from './_components/character-select-side-bar'
import { CharacterName } from './_components/character-name'
import { Character } from './_components/character'
import { TransformName } from './_components/transform-name'
import { TransformIcons } from './_components/transform-icons'
import { CharacterComment } from './_components/character-comment'
import { SidebarTitle } from './_components/sidebar-title'
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const blackHanSans = Black_Han_Sans({ weight: '400', subsets: ['latin'] })
const yeonSung = Yeon_Sung({ weight: '400', subsets: ['latin'] })
const NanumMyeongjo = Nanum_Myeongjo({ weight: '400', subsets: ['latin'] })

export enum CharacterType {
  S,
  V,
  SV,
}

enum GogetaTransformType {
  NORMAL,
  SAI,
  BLUE,
}

enum VegetaTransformType {
  SAI,
  GOD,
  BLUE,
}

enum SonGokuTransformType {
  SAI,
  GOD,
  BLUE,
}

export const CharacterInfoPage = ({ isCurrentPage }: any) => {
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterType>(
    CharacterType.SV,
  )
  const [selectedVegetaTransformType, setSelectedVegetaTransformType] =
    useState<VegetaTransformType>(VegetaTransformType.GOD)
  const [selectedSonGokuTransformType, setSelectedSonGokuTransformType] =
    useState<SonGokuTransformType>(SonGokuTransformType.SAI)
  const [selectedGogetaTransformType, setSelectedGogetaTransformType] =
    useState<GogetaTransformType>(GogetaTransformType.BLUE)

  const characters = [
    {
      name: '손오공',
      icon: '/s.png',
      engName: 'songoku',
      type: CharacterType.S,
      onCharacterIconClick: () => setSelectedCharacter(CharacterType.S),
      selectedTransformType: selectedSonGokuTransformType,
      characterInfo: [
        {
          transformType: SonGokuTransformType.SAI,
          transformName: '초사이어인',
          imgSrc: '/s2.webp',
          width: 750,
          comment: '"넌 내 소중한 것들을 많이 빼앗아 갔어.. 절대로 용서 못해!"',
          iconSrc: '/s-sai-icon.png',
          onIconClick: () =>
            setSelectedSonGokuTransformType(SonGokuTransformType.SAI),
        },
        {
          transformType: SonGokuTransformType.GOD,
          transformName: '초사이어인 갓',
          imgSrc: '/s3.webp',
          width: 550,
          comment:
            '"별은 부술 수 있어도, 단 한 명의 인간은 부술 수 없나보군..."',
          iconSrc: '/s-god-icon.png',
          onIconClick: () =>
            setSelectedSonGokuTransformType(SonGokuTransformType.GOD),
        },
        {
          transformType: SonGokuTransformType.BLUE,
          transformName: '초사이어인 블루',
          imgSrc: '/s4.webp',
          width: 900,
          comment: '"이제부터가 진정한 승부다."',
          iconSrc: '/s-blue-icon.png',
          onIconClick: () =>
            setSelectedSonGokuTransformType(SonGokuTransformType.BLUE),
        },
      ],
    },
    {
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
          iconSrc: '/v-sai-icon.png',
          onIconClick: () =>
            setSelectedVegetaTransformType(VegetaTransformType.SAI),
        },
        {
          transformType: VegetaTransformType.GOD,
          transformName: '초사이어인 갓',
          imgSrc: '/v3.webp',
          width: 550,
          comment: '"노력해도 절대 넘어설 수 없는 벽이 있다는 것을 보여주마."',
          iconSrc: '/v-god-icon.png',
          onIconClick: () =>
            setSelectedVegetaTransformType(VegetaTransformType.GOD),
        },
        {
          transformType: VegetaTransformType.BLUE,
          transformName: '초사이어인 블루',
          imgSrc: '/v4.webp',
          width: 350,
          comment: '"파괴할 수조차 없는 기술을 먹여주지."',
          iconSrc: '/v-blue-icon.png',
          onIconClick: () =>
            setSelectedVegetaTransformType(VegetaTransformType.BLUE),
        },
      ],
    },
    {
      name: '오지터',
      icon: '/sv-normal-icon.png',
      engName: 'Gogeta',
      type: CharacterType.SV,
      onCharacterIconClick: () => setSelectedCharacter(CharacterType.SV),
      selectedTransformType: selectedGogetaTransformType,
      characterInfo: [
        {
          transformType: GogetaTransformType.NORMAL,
          transformName: '노말',
          imgSrc: '/sv1.png',
          width: 650,
          comment: '"흠, 난 오지터. 오공과 베지터가 합체한 거라고."',
          iconSrc: '/sv-normal-icon.png',
          onIconClick: () =>
            setSelectedGogetaTransformType(GogetaTransformType.NORMAL),
        },
        {
          transformType: GogetaTransformType.SAI,
          transformName: '초사이어인',
          imgSrc: '/sv2.webp',
          width: 650,
          comment: '"30분이나 필요 없어. 손가락 하나면 충분하다!"',
          iconSrc: '/sv-sai-icon.png',
          onIconClick: () =>
            setSelectedGogetaTransformType(GogetaTransformType.SAI),
        },
        {
          transformType: GogetaTransformType.BLUE,
          transformName: '초사이어인 블루',
          imgSrc: '/sv3.webp',
          width: 550,
          comment: '"자, 이제 결판을 내자고."',
          iconSrc: '/sv-blue-icon.png',
          onIconClick: () =>
            setSelectedGogetaTransformType(GogetaTransformType.BLUE),
        },
      ],
    },
  ]

  return (
    <div className='relative h-full w-full text-white'>
      <Background />
      {isCurrentPage && (
        <>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
            className='pt-3 absolute top-0 left-0 flex flex-col '
          >
            <SidebarTitle font={NanumMyeongjo.className} />
            {characters.map((character) => (
              <CharacterSelectSideBar
                key={character.name}
                iconSrc={character.icon}
                alt={character.engName}
                isSelected={character.type === selectedCharacter}
                onIconClick={character.onCharacterIconClick}
                font={NanumMyeongjo.className}
              />
            ))}
          </motion.div>
          {characters.map((character) => (
            <Fragment key={character.type}>
              {selectedCharacter === character.type && (
                <section
                  key={character.type}
                  className='w-[650px] h-full mx-auto relative flex justify-center'
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='absolute top-48 -left-40 flex flex-col '
                  >
                    <CharacterName
                      font={blackHanSans.className}
                      name={character.name}
                      engName={character.engName}
                    />
                  </motion.div>
                  <div className='absolute top-96 -left-40 '>
                    {character.characterInfo.map((info) => (
                      <div key={info.transformName}>
                        <TransformName
                          isSelected={
                            info.transformType ===
                            character.selectedTransformType
                          }
                          font={blackHanSans.className}
                          name={info.transformName}
                        />
                      </div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className='flex'
                    >
                      {character.characterInfo.map((info) => (
                        <TransformIcons
                          key={info.iconSrc}
                          iconSrc={info.iconSrc}
                          alt={info.transformName}
                          isSelected={
                            info.transformType ===
                            character.selectedTransformType
                          }
                          onIconClick={info.onIconClick}
                        />
                      ))}
                    </motion.div>
                  </div>
                  {character.characterInfo.map((info) => (
                    <Character
                      key={info.imgSrc}
                      isSelected={
                        info.transformType === character.selectedTransformType
                      }
                      imgSrc={info.imgSrc}
                      alt={info.transformName}
                      width={info.width}
                    />
                  ))}
                  {/* <motion.div
                    initial={{ opacity: 0, width: 30 }}
                    animate={{ opacity: 1, width: 300 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='absolute top-[600px] -left-40 w-[300px] h-[200px] bg-slate-700 rounded-md'
                  >
                    <h3 className='border-b border-white pb-1 bg-slate-800 p-3'>
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 300 }}
                        transition={{ delay: 0.8, duration: 0.2 }}
                        className={cn('text-xl', yeonSung.className)}
                      >
                        캐릭터 소개
                      </motion.span>
                    </h3>
                  </motion.div> */}

                  <div className='absolute top-80 left-0 transform translate-x-[500px] flex flex-col'>
                    {character.characterInfo.map((info) => (
                      <CharacterComment
                        key={info.comment}
                        isSelected={
                          info.transformType === character.selectedTransformType
                        }
                        font={yeonSung.className}
                        comment={info.comment}
                      />
                    ))}
                  </div>
                </section>
              )}
            </Fragment>
          ))}
        </>
      )}
    </div>
  )
}
