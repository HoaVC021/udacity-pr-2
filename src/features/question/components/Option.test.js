import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Option from './Option'; // Adjust the import path as necessary
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
describe('Option Component', () => {
    const mockOnVote = jest.fn();

    const setup = (props) => {
        return render(<Option {...props} onVote={mockOnVote} />);
    };

    beforeEach(() => {
        jest.clearAllMocks(); // Clear previous mock calls
    });

    test('renders correctly with unanswered option', () => {
        const props = {
            optionName: 'optionOne',
            answered: false,
            selectedOption: '',
            option: { text: 'Option 1', votes: [] },
            totalVotes: 0,
        };

        setup(props);

        expect(screen.getByText(/option 1/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /click/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /click/i })).toBeEnabled();
    });

    test('renders correctly with answered option', () => {
        const props = {
            optionName: 'optionOne',
            answered: true,
            selectedOption: 'optionOne',
            option: { text: 'Option 1', votes: ['user1', 'user2'] },
            totalVotes: 2,
        };

        setup(props);

        expect(screen.getByText(/option 1/i)).toBeInTheDocument();
        expect(screen.getByText(/2 votes/i)).toBeInTheDocument();
        expect(screen.getByText(/100.00% votes/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /voted/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /voted/i })).toBeDisabled();
    });

    test('handles click event correctly', () => {
        const props = {
            optionName: 'optionOne',
            answered: false,
            selectedOption: '',
            option: { text: 'Option 1', votes: [] },
            totalVotes: 0,
        };

        setup(props);

        fireEvent.click(screen.getByRole('button', { name: /click/i }));

        expect(mockOnVote).toHaveBeenCalledWith('optionOne');
    });

    it("should match snapshot", () => {
        const mockOnVote = jest.fn();
        const { asFragment } = render(
            <Option
                optionName="optionOne"
                answered={false}
                selectedOption=""
                option={{ text: 'Option 1', votes: [] }}
                totalVotes={0}
                onVote={mockOnVote}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
