import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { 
	SignInContainer, 
	FormInputWrapper, 
	ButtonsContainer, 
	RedirectLink 
} from './sign-up-mobile.styles';

class SignUpMobile extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if(password !== confirmPassword) {
			alert(`passwords don't match`);
			return;
		}
		
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);

			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});

		} catch(error) {
			console.error(error);
		}
	}

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		})
	}


	render() {
		const { displayName, email, confirmPassword } = this.state;
		return (
			<SignInContainer>
				
				<h1>Sign Up</h1>
				<span>Please enter your details below:</span>

				<form onSubmit={this.handleSubmit}>

					<FormInputWrapper>
						<FormInput 
							type="text"
							name="displayName"
							value={displayName}
							onChange={this.handleChange}
							label='Display Name'
							required
						/>
					</FormInputWrapper>

					<FormInputWrapper>
						<FormInput
						 	type="email"
							name="email"
							value={email}
							onChange={this.handleChange}
							label='Email'
							required
						 />
					 </FormInputWrapper>

					 <FormInputWrapper>
						<FormInput
						 	type="password"
							name="confirmPassword"
							value={confirmPassword}
							onChange={this.handleChange}
							label='Confirm Password'
							required
						 />
					 </FormInputWrapper>

					 <ButtonsContainer>

						<CustomButton type="submit"> Sign Up </CustomButton>

					</ButtonsContainer>

				</form>

			</SignInContainer>
		);
	}
}

export default SignUpMobile;