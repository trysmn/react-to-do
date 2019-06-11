import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Header from './Header';

describe('Header Component', () => {
    it('renders a Header', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    }),

    it('displays its text', () => {
        const { getByTestId } = render(<Header/>);
        const elem = getByTestId('header');
        expect(elem.innerHTML).toBe('My ToDoList App');
    });
});

