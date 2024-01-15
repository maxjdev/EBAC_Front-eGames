import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useEffect, useState } from 'react'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface iGalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: iGalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList
          games={onSaleGames}
          title={'Promotions'}
          background={'gray'}
          id="on-sale"
        />
        <ProductsList
          games={soonGames}
          title={'Shortly'}
          background={'black'}
          id="coming-soon"
        />
      </>
    )
  }
  return <h4>Loading...</h4>
}

export default Home
