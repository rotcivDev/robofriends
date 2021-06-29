import React from 'react';
import Card from './Card';
import {render, cleanup, screen} from '@testing-library/react';

describe('Card Component', () => {
  afterEach(cleanup)

  test('should render layout correctely passing name, email and id props dynamically', async () => {

    const mockProps = {
      name: 'Dynamic name',
      email: 'vsallesa@gmail.com',
      id: '10'
    }
    
    expect(render(<Card name={mockProps.name} email={mockProps.email} id={mockProps.id}/>)).toMatchSnapshot();
  
    const dinamicName = await screen.findByText(mockProps.name);
    const dinamicEmail = await screen.findByText(mockProps.email);
    const cardImg = await screen.findByAltText('robots');
    
    expect(cardImg).toBeInTheDocument()
    expect(dinamicName).toBeInTheDocument()
    expect(dinamicEmail).toBeInTheDocument()
  })

})
