import { MenuActionTypes } from './menu.types';

const INITIAL_STATE = {
	isMenuOpen: false
}

const menuReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case MenuActionTypes.OPEN_MENU:
			return {
				...state,
				isMenuOpen: true
			}
		case MenuActionTypes.CLOSE_MENU:
			return {
				...state,
				isMenuOpen: false
			}
		case MenuActionTypes.TOGGLE_MENU:
		return {
			...state,
			isMenuOpen: !state.isMenuOpen
		}
		default:
			return state
	}
}

export default menuReducer;