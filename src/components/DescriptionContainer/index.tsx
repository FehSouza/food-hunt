import * as S from './styles.ts'

interface DescriptionContainerProps {
  theme: boolean
}

export const DescriptionContainer = ({ theme }: DescriptionContainerProps) => {
  return (
    <S.DescriptionContainer>
      <S.TitleHighlight $themeA={theme}>Delicious</S.TitleHighlight>
      <S.Title>Quench the Hunger</S.Title>
      <S.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet ipsum, auctor quis sagittis felis risus, a
        odio. Amet ante nulla sem mauris. Sollicitudin ultrices enim quam.
      </S.Text>
      <S.Button $themeA={theme}>Quench Now</S.Button>
    </S.DescriptionContainer>
  )
}
