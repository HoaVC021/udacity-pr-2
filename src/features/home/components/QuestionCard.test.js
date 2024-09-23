import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import QuestionCard from './QuestionCard'; // Adjust the import path as necessary

// Mock the fDateTime utility
jest.mock('../../../utils/formatTime', () => ({
  fDateTime: jest.fn((timestamp) => new Date(timestamp).toLocaleString()),
}));

describe('QuestionCard Component', () => {
    const question = {
        id: '123',
        author: 'John Doe',
        timestamp: Date.now(),
    };

    it('renders question card correctly', () => {
        render(
            <MemoryRouter>
                <QuestionCard question={question} />
            </MemoryRouter>
        );

        // Check if the author's name is rendered
        expect(screen.getByText(/john doe/i)).toBeInTheDocument();

        // Check if the button is rendered
        expect(screen.getByRole('button', { name: /show/i })).toBeInTheDocument();
    });

    it('matches snapshot', () => {
        const { asFragment } = render(
            <MemoryRouter>
                <QuestionCard question={question} />
            </MemoryRouter>
        );

        // Create a snapshot of the rendered component
        expect(asFragment()).toMatchSnapshot();
    });
});
