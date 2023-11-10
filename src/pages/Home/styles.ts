import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  max-width: 1132px;
  display: flex;
  flex: 1;
  margin: 0 auto;
  padding: 0 16px;
  padding-bottom: 122px;
  box-sizing: border-box;
`

export const BackgroundContainer = styled.div<{ $themeA: boolean }>`
  width: 1176px;
  height: 1176px;
  position: fixed;
  bottom: 0;
  right: 0;
  transform: translate(15%, -20%);
  background-color: ${({ theme, $themeA }) => ($themeA ? theme.colors.primaryLight : theme.colors.secondaryLight)};
  border-radius: 50%;
  z-index: 0;
  overflow: hidden;
  transition-duration: 350ms;

  @media (max-width: 768px) {
    right: 50%;
    transform: translate(50%, -11%);
  }
`

export const Border = styled.div<{ $themeA: boolean }>`
  width: 556px;
  height: 556px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 45%);
  background-color: transparent;
  border-radius: 50%;
  border: 2px dashed ${({ theme, $themeA }) => ($themeA ? theme.colors.primary : theme.colors.secondary)};
  transition-duration: 350ms;

  @media (max-width: 768px) {
    width: 368px;
    height: 368px;
    transform: translate(-50%, 102%);
  }
`

export const ListItemsContainer = styled.div`
  width: 556px;
  height: 556px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 45%) rotate(90deg);

  @media (max-width: 768px) {
    width: 368px;
    height: 368px;
    transform: translate(-50%, 104%) rotate(90deg);
  }
`

export const ListItems = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const Item = styled(motion.div)<{ $index: number; $length: number }>`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: -50px;
  transform: rotate(${({ $index, $length }) => `${$index / $length}turn`});
  transform-origin: calc(556px / 2 + 100px / 2);
  overflow: hidden;

  @media (max-width: 768px) {
    transform-origin: calc(368px / 2 + 100px / 2);
  }
`

export const Image = styled.img`
  width: 150%;
  display: flex;
  transform: rotate(270deg);
`

export const CarrouselContainer = styled.section`
  width: 1176px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex: 1;
  gap: 516px;
  padding-bottom: 122px;
  position: fixed;
  bottom: 0;
  right: 0;
  transform: translate(15%, 0);
  z-index: 1;

  @media (max-width: 768px) {
    gap: 328px;
    padding-bottom: 64px;
    right: 50%;
    transform: translate(50%, 0);
  }

  @media (max-width: 400px) {
    gap: 296px;
  }
`

export const ButtonArrow = styled.button<{ $themeA: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  background-color: ${({ theme, $themeA }) => ($themeA ? theme.colors.primary : theme.colors.secondary)};
  border-radius: 50%;
  transition-duration: 350ms;

  &:hover {
    background-color: ${({ theme, $themeA }) => ($themeA ? theme.colors.primary850 : theme.colors.secondary850)};
  }

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`

export const CurrentImage = styled(motion.img)`
  width: 432px;
  height: 432px;
  position: absolute;
  bottom: 32px;

  @media (max-width: 768px) {
    width: 304px;
    height: 304px;
    bottom: -16px;
  }
`
