import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

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
		const { emailSignInStart } = this.props;
		const { email, password } = this.state;

		emailSignInStart(email, password);
	}

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value })
	}

	render() {
		const { googleSignInStart } = this.props;
		
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
						<CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> Sign In with Google</CustomButton>
					
					</ButtonsContainer>

				</FormContainer>

				<RedirectLink to='/signup-mobile'>
					{`Don't have an account? Sign Up now.`}
				</RedirectLink>

			</SignInContainer>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignInMobile);