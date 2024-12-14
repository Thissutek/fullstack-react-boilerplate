import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

import App from '../App' 

test('renders the app correctly', () => {
    render(<App />);

    const linkElement = screen.getByText(/Hello, Full-stack React!/i);
    expect(linkElement).toBeInTheDocument();
})