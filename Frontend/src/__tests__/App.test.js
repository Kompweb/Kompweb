import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//arrange
describe('My First Test', function () {
  //act
  it('Does not do much', function () {
    //assert
    expect(true).to.equal(true);
  });
});
