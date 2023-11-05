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

export const BackgroundContainer = styled.div`
  width: 1176px;
  height: 1176px;
  position: fixed;
  bottom: 0;
  right: 0;
  transform: translate(15%, -20%);
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 50%;
  z-index: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    right: 50%;
    transform: translate(50%, -15%);
  }

  @media (max-height: 740px) and (max-width: 768px) {
    transform: translate(50%, -10%);
  }
`

export const Border = styled.div`
  width: 556px;
  height: 556px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 45%);
  background-color: transparent;
  border-radius: 50%;
  border: 2px dashed ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    width: 368px;
    height: 368px;
    transform: translate(-50%, 102%);
  }
`

export const ListItems = styled.div`
  width: 556px;
  height: 556px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 45%);

  @media (max-width: 768px) {
    width: 368px;
    height: 368px;
    transform: translate(-50%, 102%);
  }
`

export const Item = styled.div<{ $index: number }>`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: -50px;
  transform: rotate(${({ $index }) => `${$index / 8}turn`});
  transform-origin: calc(556px / 2 + 100px / 2);
  overflow: hidden;

  @media (max-width: 768px) {
    transform-origin: calc(368px / 2 + 100px / 2);
  }
`

export const Image = styled.img`
  width: 150%;
  display: flex;
`

export const CarrouselContainer = styled.section`
  width: 1176px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex: 1;
  position: fixed;
  bottom: 0;
  right: 0;
  transform: translate(15%, -35%);
  z-index: 1;

  @media (max-width: 768px) {
    right: 50%;
    transform: translate(50%, -35%);
  }

  @media (max-height: 740px) and (max-width: 768px) {
    transform: translate(50%, -10%);
  }
`

export const ButtonArrow = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  transition-duration: 350ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary850};
  }

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`

export const CurrentItem = styled.div`
  width: 292px;
  height: 292px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 112px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin: 0 40px;
    width: 208px;
    height: 208px;
  }
`
