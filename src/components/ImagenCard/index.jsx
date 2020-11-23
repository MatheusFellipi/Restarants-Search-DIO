import react, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Skeleton from '../Skeleton'

const Card = styled.div`
display: flex;
justify-content: center;
padding: 5px;
width:90px;
height:90px;
border-radius: 6px;
background-image: url(${props => props.photo});
background-size: cover;
`;
const Title = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 16px;
`;

const ImagensCard = ({ photo, title }) => {
  const [imgensLoader,setImgLoader] =useState(false);

  useEffect(()=>{
    const imgensLoader = new Image();
    imgensLoader.src=photo;
    imgensLoader.onload = ()=> setImgLoader(true);
  },[photo])
  return (
    <>
    {imgensLoader ? (<Card photo={photo}><Title>
      {title}
    </Title>
    </Card>):(
      <Skeleton width='90px' height='90px'/>
    )}
    </>
  )
}


export default ImagensCard;