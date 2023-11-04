import { Header } from '../../components'
import * as S from './styles.ts'

export const Home = () => {
  return (
    <>
      <Header />

      <S.Main>
        <S.DescriptionContainer>
          <S.TitleHighlight>Delicious</S.TitleHighlight>
          <S.Title>Quench the Hunger</S.Title>
          <S.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet ipsum, auctor quis sagittis felis risus, a
            odio. Amet ante nulla sem mauris. Sollicitudin ultrices enim quam.
          </S.Text>
          <S.Button>Quench Now</S.Button>
        </S.DescriptionContainer>

        <S.BackgroundContainer />

        <S.CarrouselContainer></S.CarrouselContainer>
      </S.Main>
    </>
  )
}
