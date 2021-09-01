import { render, screen } from '@testing-library/react';
import Greeting from '@components/Greeting';

describe('Greeting component', () => {
	it('renders without crashing', () => {
		render(<Greeting name='Next.js Developer' />);

		const greetingSentence = screen.getByText(/Hello, Next.js Developer/i);

		expect(greetingSentence).toBeInTheDocument();
	});
});
