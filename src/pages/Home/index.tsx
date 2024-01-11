import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
/* import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png' */
import { useEffect, useState } from 'react'

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
  const [promotions, setPromotions] = useState<Game[]>([])
  const [shortly, setShortly] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromotions(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList
        games={promotions}
        title={'Promotions'}
        background={'gray'}
      />
      <ProductsList games={shortly} title={'Shortly'} background={'black'} />
    </>
  )
}

export default Home
