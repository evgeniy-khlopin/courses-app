import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export default configureStore({
	reducer: rootReducer,
	devTools: true,
});

export const setupStore = (preloadedState) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	});
};
