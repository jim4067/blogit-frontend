import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import BlogForm from './BlogForm';

test("test whether the component is called with the correct props", () => {
    const createBlog = jest.fn();

    const component = render(
        <BlogForm createBlog={createBlog} />
    );
    component.debug();

    const author = component.container.querySelector('#author');
    const form = component.container.querySelector('form');

    fireEvent.change(author, {
        target: { value : "Jimmy Impulse" }
    });
    fireEvent.submit(form);

    expect(createBlog.mock.calls).toHaveLength(1);
    expect(createBlog.mock.calls[0][0].author).toBe("Jimmy Impulse");
});