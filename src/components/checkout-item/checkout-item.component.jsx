import React from 'react';
import { connect } from 'react-redux';

import { removeItemFromCart, addItemToCart, decreaseItemQty } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, removeItem, addItemToCart, decreaseItemQty }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="left-arrow" onClick={() => decreaseItemQty(cartItem)}>&#10094;</div>
				<span className="value">{quantity}</span>
				<div className="right-arrow" onClick={() => addItemToCart(cartItem)}>&#10095;</div>
			</span>
			<span className="price">${price}</span>
			<div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	removeItem: item => dispatch(removeItemFromCart(item)),
	addItemToCart: item => dispatch(addItemToCart(item)),
	decreaseItemQty: item => dispatch(decreaseItemQty(item))
}) 

export default connect(null, mapDispatchToProps)(CheckoutItem);