import styled from 'styled-components'

export const DescriptionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 1;

  @media (max-width: 1120px) {
    justify-content: flex-start;
  }
`

export const TitleHighlight = styled.h2`
  font-size: 48px;
  font-weight: 500;
  line-height: 72px;
  letter-spacing: 0em;
  color: ${({ theme }) => theme.colors.primary};
  transition-duration: 350ms;

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
