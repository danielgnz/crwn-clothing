import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';

// import { openMenu, closeMenu, toggleMenu } from '../../redux/menu/menu.actions';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { 
	HeaderContainer, 
	LogoContainer, 
	OptionsContainer, 
	OptionLink, 
	Hamburger,
	Line,
	MobileCartIcon,
	DesktopCartIcon
} from './header.styles';

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isMenuOpen: false
		}
	}
	
	openMenu = (event) => {
		event.preventDefault();
		this.setState({ isMenuOpen: true }, () => {
			document.addEventListener('click', this.closeMenu);
		})
	}

	closeMenu = () => {
		this.setState({ isMenuOpen: false }, () => {
			document.removeEventListener('click', this.closeMenu);
		})
	} 

	render() {
		const breakpoints = {
			mobile: 600,
		};
		const { currentUser, hidden, signOutStart } = this.props;
		const { isMenuOpen } = this.state;

		return (
		<HeaderContainer id="header">
			<LogoContainer to="/">
				<Logo className="logo" />
			</LogoContainer>
			<OptionsContainer isOpen={isMenuOpen}>
				<OptionLink to="/"  >
					HOME
				</OptionLink>
				<OptionLink to="/shop"  >
					COLLECTIONS
				</OptionLink>
				<OptionLink to="/contact"  >
					CONTACT
				</OptionLink>
				{
					currentUser ? (
					<OptionLink 
						as='div' 
						onClick={signOutStart}
						>
							SIGN OUT
					</OptionLink> )
					:
					<OptionLink to="/signin" >
						SIGN IN
					</OptionLink>
				}

			</OptionsContainer>
			{
				window.innerWidth < breakpoints.mobile 
				? <MobileCartIcon><CartIcon /></MobileCartIcon>
				: <DesktopCartIcon><CartIcon /></DesktopCartIcon>
			}

			<Hamburger onClick={this.openMenu}>
				<Line />
				<Line />
				<Line />
			</Hamburger>
			
			{
				hidden ? null : <CartDropdown />
			}

		</HeaderContainer>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
	// isMenuOpen: selectMenuOpen
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
})

// const mapDispatchToProps = dispatch => ({
// 	closeMenu: () => dispatch(closeMenu()),
// 	openMenu: () => dispatch(openMenu()),
// 	toggleMenu: () => dispatch(toggleMenu())
// })

export default connect(mapStateToProps, mapDispatchToProps)(Header);