import { render, screen } from '@testing-library/react';
import App from './App';

/** 
 * 
 * @Description: Creating a basic calculator in JavaScript React  
 * @Author: Roderichs
 * @Date: 15/02/2020
 * 
*/

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
