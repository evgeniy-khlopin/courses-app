import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CourseCard from '../CourseCard';
import * as mocks from 'utils/mocks';
import { renderWithProviders } from 'utils/test-utils';

const mockedCourse = mocks.mockedCoursesList[0];
const mockedAuthorsList = mocks.mockedAuthorsList;

beforeEach(() => {
	renderWithProviders(
		<CourseCard courseData={mockedCourse} authorsList={mockedAuthorsList} />
	);
});

describe('CourseCard component', () => {
	it('loads and displays title', async () => {
		expect(screen.getByRole('heading').textContent).toBe(mockedCourse.title);
	});

	it('loads and displays description', async () => {
		expect(screen.getByTestId('course-description')).toHaveTextContent(
			mockedCourse.description.replace(/\s+/g, ' ')
		);
	});

	it('displays the correct duration', () => {
		const durationElement = screen.getByText('Duration:');
		expect(durationElement.parentElement.nextSibling.textContent).toBe(
			'01:00 hour'
		);
	});

	it('displays the correct authors', () => {
		const authorsElement = screen.getByText('Author:');
		expect(authorsElement.parentElement.nextSibling.textContent).toBe(
			'Vasiliy Dobkin, Nicolas Kim'
		);
	});

	it('displays the correct creation date', () => {
		const createdElement = screen.getByText('Created:');
		expect(createdElement.parentElement.nextSibling.textContent).toBe(
			'03.08.2021'
		);
	});
});
