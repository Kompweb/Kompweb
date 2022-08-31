// import { render, screen } from '@testing-library/react';
// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
// import * as rtl from 'testing-library/react';
import { render } from 'testing-library/react';
import App from '../App';

test('renders App without errors', async () => {
  render(<App />);
});

// it('renders a span with the text LogIn', () => {
//   const wrapper = rtl.render(<App />);
//   // const element = wrapper.queryByText(/hello/i);
//   expect(element).toBeInTheDocument();
//   expect(element).toBeTruthy();
//   expect(element).toBeVisible();
//   // console.log(wrapper);
// });

// test/Login.test.js

// test('allows user to log in', async () => {
// Render components, perform requests, receive mocked responses.
// });

// const server = setupServer(
//   rest.get('/greeting', (req, res, ctx) => {
//     return res(ctx.json({ greeting: 'hello there' }));
//   })
// );
// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// test('loads and displays greeting', async () => {
// Arrange
// Act
// Assert
// });

// import App from '../App';
// import * as rtl from 'testing-library/react';
// import 'jest-dom/extend-expect';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// //arrange
// describe('My First Test', function () {
//   //act
//   it('Does not do much', function () {
//     //assert
//     expect(true).to.equal(true);
//   });
// });
