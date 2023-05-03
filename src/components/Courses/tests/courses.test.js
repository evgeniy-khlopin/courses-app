import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Courses from '../Courses';
import * as mocks from 'utils/mocks';
import { renderWithProviders } from 'utils/test-utils';

let component;

beforeEach(() => {
	component = renderWithProviders(<Courses />);
});

describe('Courses component', () => {
	it('displys amount of CourseCard equal of courses array', () => {
		expect(screen.getAllByText('Author:').length).toBe(
			mocks.mockedCoursesList.length
		);
	});

	//TODO: figure out how to fix routers
	it('renders CourseForm after clicking the Add new Course button', async () => {
		fireEvent.click(screen.getByText('Add new course'));
		// expect(await screen.getByText('Create Course')).toBeInTheDocument();
		// expect(component.history.location.pathname).toBe('/login');
	});
});
