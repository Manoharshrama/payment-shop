import { render, screen } from '@testing-library/react';
import App from './App';

test('dummy test that just runs code', () => {
  // This test will pass because no 'expect' statement is present,
  // and no errors are thrown during execution.
  render(<App />);
  console.log("Test ran successfully!");
});
