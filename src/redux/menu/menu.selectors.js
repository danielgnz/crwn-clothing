import { createSelector } from 'reselect';

const selectMenu = state => state.menu;

export const selectMenuOpen = createSelector(
	[selectMenu],
	menu => menu.isMenuOpen
);