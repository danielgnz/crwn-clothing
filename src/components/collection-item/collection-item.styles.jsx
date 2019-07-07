import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  
  @media all and (max-width: 480px){
    width: 100%;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    width: 48%;
  }

  @media all and (min-width: 768px) and (max-width: 1024px) {
    width: 30%;
  } 
`;

export const ImageContainer = styled.div`
 	width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;

    ${CollectionItemContainer}:hover & {
    	opacity: 0.8;
    }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Name = styled.span`
  font-size: 1.2em;
  font-weight: 550;
`;

export const Price = styled.span`
`;

export const AddToCartButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 60%;
  display: none;

  ${CollectionItemContainer}:hover & {
    opacity: 0.85;
    display: flex;
  }
`;

