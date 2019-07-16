import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { CartIconContainer, ShoppingIconItem, ItemCount } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount, ...props }) => (
	<CartIconContainer onClick={toggleCartHidden} {...props}>
		<ShoppingIconItem />
		<ItemCount>{itemCount}</ItemCount>
	</CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);