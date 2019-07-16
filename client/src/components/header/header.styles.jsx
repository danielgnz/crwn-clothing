import styled from 'styled-components';
import { Link } from 'react-router-dom';

// const boxShadowEffect1 = css`
// 	box-shadow: 0 10px 6px -6px #777;
// `;

// const getStickyStyles = props => {
// 	// if(props.isSticky)
// 	// 	return boxShadowEffect1;
// 	return;
// }

// const getBoxShaddowEffect = props => {
// 	if(props.isShadowActive)
// 		return boxShadowEffect1;
// 	return;
// }

export const HeaderContainer = styled.div`
	position: fixed;
	display: flex;
	justify-content: space-between;
	height: 10vh;
	width: 100%;
	padding: 25px;
	margin-bottom: 25px;
	top: 0;
	background: #fff;
	z-index: 1;

	
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
`;

export const OptionsContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-right: 5%;

	@media (max-width: 599px) {
		position: fixed;
		width: 100%;
		height: 30vh;
		display: ${props => (props.isOpen ? 'flex' : 'none')};
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		background: #000;
		z-index: 1;
		opacity: 0.85;
		top: 10%;
		right: 0%;
		margin-right: 0;
	}
`;

export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;

	@media (max-width: 599px) {
		z-index: 3;
		color #fff;
		font-size: 1.2em;
	}
`;

export const Hamburger = styled.div`
	margin-right: 13%;
	margin-top: 1.5%;

	@media (min-width: 600px) {
		display: none;
	}
`;

export const Line = styled.div`
	width: 30px;
	height: 3px;
	background: #000;
	margin: 5px;
`;

export const MobileCartIcon = styled.div`

`;

export const DesktopCartIcon = styled.div`
	margin-right: 5%;
`;
