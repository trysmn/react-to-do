import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList';

const ToDos = [
{
    userId: 1,
    id: 1,
    title: "Learn React",
    completed: "false"
},
{
    userId: 1,
    id: 2,
    title: "Learn Python",
    completed: "false"
}
];

describe('ToDoList Component', () => {
    it('renders a ToDoList', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ToDoList />, div);
        ReactDOM.unmountComponentAtNode(div);
    }),

    it('displays its ToDos', () => {
        const { getByText, getByTestId, container } = render(<ToDoList todos={ToDos} />);
        const toDoListElement = getByTestId('toDoList');
        expect(toDoListElement.classList.length).toBe(2);
    });
});