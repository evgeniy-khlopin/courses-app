import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { renderWithProviders } from 'utils/test-utils';

beforeEach(() => {
	renderWithProviders(<Header />);
});

describe('Header component', () => {
	it('displys user`s name', () => {
		expect(screen.getByText('Username')).toBeInTheDocument();
	});

	it('displays logo', () => {
		expect(screen.getByAltText('logo')).toBeInTheDocument();
	});
});
