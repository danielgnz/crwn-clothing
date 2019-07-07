import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { 
	SignInContainer, 
	FormContainer, 
	FormInputWrapper, 
	ButtonsContainer, 
	RedirectLink 
} from './sign-in-mobile.styles';

class SignInMobile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		}
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			throw new Error('Something went wrong')
		}
	}

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value })
	}

	render() {
		return (
			<SignInContainer>
				
				<h1> Sign In </h1>
				<span> Please enter your login credentials below: </span>

				<FormContainer onSubmit = { this.handleSubmit }>

					<FormInputWrapper>
						<FormInput 
							name="email"
							type="email"
							value={this.state.email}
							handleChange={this.handleChange}
							label="Email"
							required 
						/>
					</FormInputWrapper>

					<FormInputWrapper>
						<FormInput
						 	name="password"
						 	type="password"
						 	label="Password"
						 	value={this.state.password}
						 	handleChange={this.handleChange}
						 	required 
						 />
					 </FormInputWrapper>

					 <ButtonsContainer>

						<CustomButton type="submit"> Sign In</CustomButton>
						<span>Or, you can:</span>
						<CustomButton type="submit" onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google</CustomButton>
					
					</ButtonsContainer>

				</FormContainer>

				<RedirectLink to='/signup-mobile'>
					{`Don't have an account? Sign Up now.`}
				</RedirectLink>

			</SignInContainer>
		);
	}
}

export default SignInMobile;