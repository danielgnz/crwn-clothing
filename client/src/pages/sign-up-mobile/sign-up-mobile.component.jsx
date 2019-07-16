import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';

import { signUpStart } from '../../redux/user/user.actions';

import { 
	SignInContainer, 
	FormInputWrapper, 
	ButtonsContainer, 
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
		const { signUpStart } = this.props;
		const { displayName, email, password, confirmPassword } = this.state;

		if(password !== confirmPassword) {
			alert(`passwords don't match`);
			return;
		}
		
		signUpStart(email, password, displayName);

		this.setState({
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		});
	}

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		})
	}


	render() {
		const { displayName, email, password, confirmPassword } = this.state;
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
							name="password"
							value={password}
							onChange={this.handleChange}
							label='Password'
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

const mapDispatchToProps = dispatch => ({
	signUpStart: (email, password, displayName) => dispatch(signUpStart({ email, password, displayName }))
})

export default connect(null, mapDispatchToProps)(SignUpMobile);