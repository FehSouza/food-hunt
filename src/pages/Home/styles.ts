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

export const DescriptionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 1;

  @media (max-width: 1024px) {
    justify-content: flex-start;
  }
`

export const TitleHighlight = styled.h2`
  font-size: 48px;
  font-weight: 500;
  line-height: 72px;
  letter-spacing: 0em;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 64px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
    line-height: 56px;
  }
`

export const Title = styled.h2`
  margin-top: 6px;
  font-size: 36px;
  font-weight: 500;
  line-height: 54px;
  letter-spacing: 0em;
  color: ${({ theme }) => theme.colors.title};

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 46px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 38px;
  }
`

export const Text = styled.p`
  max-width: 348px;
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    max-width: max-content;
  }
`

export const Button = styled.button`
  min-width: 164px;
  width: fit-content;
  margin-top: 32px;
  padding: 14px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  transition-duration: 350ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary850};
  }

  @media (max-width: 768px) {
    margin-top: 24px;
  }

  @media (max-width: 480px) {
    min-width: 154px;
    padding: 10px 28px;
  }
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

  @media (max-width: 1024px) {
    transform: translate(30%, 30%);
    top: 0;
  }

  @media (max-width: 480px) {
    transform: translate(33%, 35%);
  }
`

export const CarrouselContainer = styled.section`
  display: flex;
  flex: 1;
  z-index: 1;
`
