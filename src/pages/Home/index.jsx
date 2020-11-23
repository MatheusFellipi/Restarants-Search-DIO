import React, { useState } from 'react';
import { useSelector } from 'react-redux'

import TextField, { Input } from '@material/react-text-field'
import MaterialIcon from '@material/react-material-icon'

import { Card, RestaurantsCard, Modal, Map, Loader ,Skeleton} from '../../components/index'


import { Container, Carousel, Search, Logo, Wrapper, ModalContent, ModalTitle, CaroselTitle } from './Styled'

import resFake from '../../assets/restaurante-fake.png'
import logo from '../../assets/logo.svg'



const Home = () => {

  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState('');
  const [placeId, setPlaceId] = useState(null);
  const [query, setQuery] = useState(null)
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true
  }
  function handleKeyPress(e) {
    if (e.key === 'Enter')
      setQuery(inputValue);
  }
  function hadleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true)

  }

  return (
    <Wrapper>
      <Container>

        <Search>
          <Logo src={logo} alt="logo do restaurante" />
          <TextField
            label='Pesquisar restaurantes'
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          ><Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          {restaurants.length > 0 ? (
            <>
              <CaroselTitle>Na sua Área</CaroselTitle>
              <Carousel {...settings}>


                {restaurants.map((restaurant) => (
                  <Card key={restaurant.place_id}
                    photo={restaurant.photo ? restaurant.photo[0].getUrl() :
                      resFake} title={restaurant} />))}

              </Carousel>

            </>
          ) : (<Loader />)}

        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantsCard onClick={() => hadleOpenModal(restaurant.place_id)} restaurant={restaurant} />))}


      </Container>
      <Map query={query} placeId={placeId} />

      <Modal open={modalOpened}
        onClose={() => setModalOpened(!modalOpened)} >
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
            <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
            <ModalContent size="medium">
              {restaurantSelected?.opening_hours?.open_now
                ? 'Aberto agora :)'
                : 'Fechado neste momento :('}
            </ModalContent>
          </>
        ) :(
          <>
            <Skeleton width='10px' height='10px'/>
            <Skeleton width='10px' height='10px'/>
            <Skeleton width='10px' height='10px'/>
            <Skeleton width='10px' height='10px'/>
          </>
        )}

      </Modal>
    </Wrapper>
  )
}

export default Home;
