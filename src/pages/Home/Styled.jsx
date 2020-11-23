import styled from 'styled-components';
import Slider from "react-slick";


export const Wrapper = styled.div`
  display: flex;

`;
export const Container = styled.aside`
  background-color: ${(props)=>props.theme.colors.background};
  width:360px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding:16px;

`;
export const Logo = styled.img`
  margin-bottom :16px;
`;
export const Carousel = styled(Slider)`
  .slick-slide{
    margin-right: 30px 0
  }
`;
export const CaroselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size:24px;
  line-height: 29px;

  margin:16px 0;
`;

export const ModalTitle = styled.p`
  margin-bottom:10px;
  letter-spacing: 0.11px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  line-height:29px;
  font-size:24px;
  
`;

export const ModalContent = styled.p`
  margin-bottom:10px;
  letter-spacing: 0.15px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  line-height:19px;
  font-size:16px;  
`;
