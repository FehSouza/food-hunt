import { AiOutlineArrowDown } from 'react-icons/ai'
import dish1 from '../../assets/images/dish1.png'
import dish2 from '../../assets/images/dish2.png'
import dish3 from '../../assets/images/dish3.png'
import dish4 from '../../assets/images/dish4.png'
import dish5 from '../../assets/images/dish5.png'
import dish6 from '../../assets/images/dish6.png'
import dish7 from '../../assets/images/dish7.png'
import dish8 from '../../assets/images/dish8.png'
import { DescriptionContainer, Header } from '../../components'
import * as S from './styles.ts'

export const Home = () => {
  const list = [dish1, dish2, dish3, dish4, dish5, dish6, dish7, dish8]

  return (
    <>
      <Header />

      <S.Main>
        <DescriptionContainer />

        <S.BackgroundContainer>
          <S.Border />

          <S.ListItems>
            {list.map((item, index) => (
              <S.Item key={index} $index={index}>
                <S.Image src={item} />
              </S.Item>
            ))}
          </S.ListItems>
        </S.BackgroundContainer>

        <S.CarrouselContainer>
          <S.ButtonArrow>
            <AiOutlineArrowDown size={28} />
          </S.ButtonArrow>

          <S.CurrentItem>
            <S.Image src={dish1} />
          </S.CurrentItem>

          <S.ButtonArrow>
            <AiOutlineArrowDown size={28} />
          </S.ButtonArrow>
        </S.CarrouselContainer>
      </S.Main>
    </>
  )
}
