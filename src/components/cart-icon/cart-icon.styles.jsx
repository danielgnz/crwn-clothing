import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
	width: 35px;
	height: 35px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export const ShoppingIconItem =styled(ShoppingIcon)`
	width: 100%;
	height: 100%;
`;

export const ItemCount = styled.span`
	position: absolute;
	font-size: 0.9em;
	font-weight: bold;
	bottom: 10%;
`;