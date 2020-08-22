import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Blog from './Blog';

describe("tests for the BlogForm", () => {
    let component;

    const blog = {
        title: "the blog is in the test",
        author: "tester",
        likes: 3,
        url: "http://localhost"
    }

    beforeEach(() => {
        component = render(
            <Blog blog={blog} />
        );
    });

    test("when the Blog component is rendered", () => {

        expect(component.container).toHaveTextContent("the blog is in the test");
        expect(component.container).toHaveTextContent("tester");
    });

    test("the author & url are not shown", () => {
        const theHiddenDiv = component.container.querySelector('.hidden-div');

        expect(theHiddenDiv).toHaveStyle('display : none');
    });

});

describe("the tests for clicking the buttons", () => {

    test("when the view button is clicked the author and url are shown", () => {
        const blog = {
            title: "the blog is in the test",
            author: "tester",
            likes: 3,
            url: "http://localhost"
        }

        const component = render(
            <Blog blog={blog} />
        );

        const viewButton = component.container.querySelector(".viewButton");

        fireEvent.click(viewButton);
        //component.debug();

        const theHiddenDiv = component.container.querySelector(".hidden-div");
        expect(theHiddenDiv).toHaveStyle('display : block');
        expect(theHiddenDiv).toHaveTextContent("tester");
        expect(theHiddenDiv).toHaveTextContent("http://localhost");
    });

    test("when the like button is clicked twice the event handler is called twice", () => {
        const blog = {
            title: "the blog is in the test",
            author: "tester",
            likes: 3,
            url: "http://localhost"
        }

        const mockHandler = jest.fn();

        const component = render(
            <Blog blog={blog} increaseLikesOf={mockHandler} />
        );

        const likeButton = component.getByText("like");
        fireEvent.click(likeButton);

        expect(mockHandler.mock.calls).toHaveLength(1);
    });
});
