import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import residentEvil from '../../assets/images/resident.png'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="About the game" background="black">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          repellendus unde, ipsa ratione molestiae, eligendi, numquam rerum
          explicabo ut consequuntur facilis odio beatae nesciunt cupiditate nam
          labore facere fuga temporibus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Culpa sapiente similique repellendus eveniet
          voluptate, dolorum fugit cupiditate eos ipsam, doloremque quia
          perspiciatis hic nam possimus aperiam beatae quibusdam voluptatem
          sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          obcaecati suscipit optio reiciendis officia impedit facere totam
          aspernatur, ut vitae accusantium. Nobis quasi in quo totam ipsa id ab
          consequatur.
        </p>
      </Section>
      <Section title="More details" background="gray">
        <p>
          <b>Lorem:</b> ipsum dolor sit.
          <br />
          <b>Lorem:</b> ipsum dolor sit amet consectetur.
          <b>Lorem:</b> ipsum dolor sit amet consectetur adipisicing elit. Earum
          repellendus unde, ipsa ratione. <br />
          <b>Lorem:</b> ipsum dolor sit amet consectetur adipisicing elit. Earum
          repellendus unde, ipsa ratione. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Earum repellendus unde, ipsa ratione.
        </p>
      </Section>
      <Gallery name="Game test" defaultCover={residentEvil} />
    </>
  )
}

export default Product
