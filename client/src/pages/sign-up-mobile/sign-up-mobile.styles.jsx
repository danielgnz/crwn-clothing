import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignInContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 10vh;

	span {
		font-size: 17px;
		text-align: center;
	}
`;

export const FormInputWrapper = styled.div`
	
`;

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	
	span {
		margin-top: 10px;
		margin-bottom: 5px;
		font-size: 16px;
	}
`;

export const RedirectLink = styled(Link)`
	font-size: 1.5em;
`