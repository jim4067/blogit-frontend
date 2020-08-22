import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
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

    test("when the view button is clicked the author and url are shown", () => {
        const the hiddenDiv = component.container.querySelector('.hiddend-div');
    });
});

