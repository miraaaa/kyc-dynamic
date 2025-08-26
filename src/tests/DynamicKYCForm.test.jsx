/* eslint-env jest */
import { render, screen } from '@testing-library/react';
import DynamicKYCForm from '../components/DynamicForm/DynamicForm.jsx';
import schema from '../schema/defaultSchema.js';

describe('DynamicKYCForm', () => {
  it('renders the first question', () => {
    render(<DynamicKYCForm schema={schema} />);
    const firstLabel = screen.getByText(schema[0].label);
    expect(firstLabel).toBeInTheDocument();
  });

  it('shows Next button on first step', () => {
    render(<DynamicKYCForm schema={schema} />);
    expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument();
  });
});
