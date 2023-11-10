import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import dish1 from '../../assets/images/dish1.png'
import dish2 from '../../assets/images/dish2.png'
import dish3 from '../../assets/images/dish3.png'
import dish4 from '../../assets/images/dish4.png'
import { DescriptionContainer, Header } from '../../components'
import * as S from './styles.ts'

const variantsItem = { initial: { scale: 0 }, animate: { scale: 1 }, exit: { scale: 0 } } as const
const transition = { duration: 0.45, type: 'just' }

export const Home = () => {
  const [list, setList] = useState([dish1, dish2, dish3, dish4, dish1, dish2, dish3, dish4])
  const [currentItem, setCurrentItem] = useState(list[0])
  const [direction, setDirection] = useState(1)
  const [themeA, setThemeA] = useState(true)

  const handleNext = () => {
    setDirection(1)
    setThemeA((prev) => !prev)

    const position = list.indexOf(currentItem)
    const nextPosition = position + 1
    setCurrentItem(position === list.length - 1 ? list[0] : list[nextPosition])

    const [current, ...currentList] = list
    setList([...currentList, current])
  }

  const handlePrev = () => {
    setDirection(-1)
    setThemeA((prev) => !prev)

    const position = list.indexOf(currentItem)
    const prevPosition = position - 1
    setCurrentItem(position === 0 ? list[list.length - 1] : list[prevPosition])

    const currentList = [...list]
    const lastItem = currentList.pop()
    if (!lastItem) throw new Error('Last item undefined')
    setList([lastItem, ...currentList])
  }

  const rotationAngle = 360 / list.length

  const variantsList = {
    initial: { rotate: direction === 1 ? rotationAngle : -rotationAngle },
    animate: { rotate: 0 },
    exit: { rotate: direction === 1 ? rotationAngle : -rotationAngle },
  } as const

  return (
    <>
      <Header />

      <S.Main>
        <DescriptionContainer theme={themeA} />

        <S.BackgroundContainer $themeA={themeA}>
          <S.Border $themeA={themeA} />

          <S.ListItemsContainer>
            <AnimatePresence key={`list-${currentItem}`}>
              <S.ListItems
                layoutId={`list-${currentItem}`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variantsList}
                transition={transition}
              >
                {list.map((item, index) => (
                  <S.Item key={index} $index={index} $length={list.length}>
                    <S.Image src={item} />
                  </S.Item>
                ))}
              </S.ListItems>
            </AnimatePresence>
          </S.ListItemsContainer>
        </S.BackgroundContainer>

        <S.CarrouselContainer>
          <S.ButtonArrow onClick={handlePrev} $themeA={themeA}>
            <AiOutlineArrowDown size={28} />
          </S.ButtonArrow>

          <AnimatePresence>
            <S.CurrentImage
              src={currentItem}
              key={`item-${currentItem}`}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variantsItem}
              transition={transition}
            />
          </AnimatePresence>

          <S.ButtonArrow onClick={handleNext} $themeA={themeA}>
            <AiOutlineArrowDown size={28} />
          </S.ButtonArrow>
        </S.CarrouselContainer>
      </S.Main>
    </>
  )
}
