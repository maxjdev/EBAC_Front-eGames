import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        isLoading={isLoadingSale}
        games={onSaleGames}
        title={'Promotions'}
        background={'gray'}
        id="on-sale"
      />
      <ProductsList
        isLoading={isLoadingSoon}
        games={soonGames}
        title={'Shortly'}
        background={'black'}
        id="coming-soon"
      />
    </>
  )
}

export default Home
