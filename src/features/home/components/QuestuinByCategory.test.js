import React from 'react';
import { render, screen } from '@testing-library/react';
import QuestionsByCategory from './QuestionsByCategory'; // Adjust the import path as necessary

// Mock the QuestionCard component
jest.mock('./QuestionCard', () => {
  return jest.fn(() => <div>Mocked QuestionCard</div>);
});

describe('QuestionsByCategory Component', () => {
  const title = "Sample Questions";
  const questions = [
    { id: '1', author: 'Alice', timestamp: Date.now() },
    { id: '2', author: 'Bob', timestamp: Date.now() },
    { id: '3', author: 'Charlie', timestamp: Date.now() },
  ];

  it('renders title correctly', () => {
    render(<QuestionsByCategory title={title} questions={questions} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders correctly with no questions', () => {
    render(<QuestionsByCategory title={title} questions={[]} />);

    expect(screen.getByText(title)).toBeInTheDocument();

    const questionCards = screen.queryAllByText('Mocked QuestionCard');
    expect(questionCards.length).toBe(0);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<QuestionsByCategory title={title} questions={questions} />);
    
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot with no questions', () => {
    const { asFragment } = render(<QuestionsByCategory title={title} questions={[]} />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
