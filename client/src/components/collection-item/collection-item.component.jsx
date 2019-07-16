import React from 'react';
import { connect } from 'react-redux';

import { addItemToCart } from '../../redux/cart/cart.actions';

import { 
	CollectionItemContainer,
	ImageContainer,
	CollectionFooterContainer,
	Name,
	Price,
	AddToCartButton
} from './collection-item.styles';

const CollectionItem = ({ item, addItemToCart }) => {
	const { name, price, imageUrl } = item;
	return (
		<CollectionItemContainer>	
			<ImageContainer
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<CollectionFooterContainer>
				<Name>{name}</Name>
				<Price>${price}</Price>
			</CollectionFooterContainer>
			<AddToCartButton 
				onClick={() => addItemToCart(item)} 
				inverted
			>
				Add to cart
			</AddToCartButton>
		</CollectionItemContainer>
	);
}

const mapDispatchToProps = dispatch => ({
	addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);