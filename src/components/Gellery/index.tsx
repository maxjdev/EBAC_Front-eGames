import Section from '../Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'
import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import witch from '../../assets/images/gallery.jpg'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import exit from '../../assets/images/fechar.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: witch
  },
  {
    type: 'image',
    url: witch
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/yF29baX-IsA?si=Ab79Kc7MbtIMEaaM'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Gallery" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Media ${index + 1} de ${name}`}
              />
              <Action>
                <img src={getMediaIcon(media)} alt="Click to maximize image" />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={exit} alt="Exit icon" />
          </header>
          <img src={hogwarts} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}
export default Gallery
