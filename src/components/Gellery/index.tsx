import Section from '../Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'
import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import witch from '../../assets/images/gallery.jpg'
import spiderman from '../../assets/images/banner-homem-aranha.png'
import exit from '../../assets/images/fechar.png'
import { useState } from 'react'

interface iGalleryItem {
  type: 'image' | 'video'
  url: string
}

const mock: iGalleryItem[] = [
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

interface ModalState extends iGalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: iGalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: iGalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Gallery" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
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
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={exit} alt="Exit icon" onClick={() => closeModal()} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url} frameBorder={0}></iframe>
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}
export default Gallery
