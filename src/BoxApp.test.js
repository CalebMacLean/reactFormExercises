// Imports
import React from 'react';
import {render} from '@testing-library/react';
import App from './BoxApp';

// Test Suite
describe('App', () => {
    // Smoke Test
    it('renders without crashing', () => {
        render(<App />);
    });
    // Snapshot Test
    it('matches snapshot', () => {
        const {asFragment} = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    });
});