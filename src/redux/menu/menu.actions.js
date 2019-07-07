import { MenuActionTypes } from './menu.types';

export const openMenu = () => ({
	type: MenuActionTypes.OPEN_MENU
});

export const closeMenu = () => ({
	type: MenuActionTypes.CLOSE_MENU
})

export const toggleMenu = () => ({
	type: MenuActionTypes.TOGGLE_MENU
})