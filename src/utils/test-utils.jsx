import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from 'store';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from '@remix-run/router';
import * as mocks from 'utils/mocks';

export function renderWithProviders(
	ui,
	{
		preloadedState = {
			user: { role: 'admin', name: 'Username', isAuth: true },
			courses: mocks.mockedCoursesList,
		},
		// Automatically create a store instance if no store was passed in
		store = setupStore(preloadedState),
		history = createMemoryHistory(),
		...renderOptions
	} = {}
) {
	function Wrapper({ children }) {
		return (
			<MemoryRouter history={history}>
				<Provider store={store}>{children}</Provider>
			</MemoryRouter>
		);
	}

	// Return an object with the store and all of RTL's query functions
	return {
		store,
		history,
		...render(ui, { wrapper: Wrapper, ...renderOptions }),
	};
}
