import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Blog from './Blog';

test("the Blog component is rendered", () => {
    const blog = {
        title: "the blog is in the test",
        author: "tester",
        likes: 3,
        url: "http://localhost"
    }

    const component = render(
        <Blog blog={blog} />
    );

    const theHiddenDiv = component.container.querySelector('.hidden-div');

    expect(component.container).toHaveTextContent("the blog is in the test");
    expect(component.container).toHaveTextContent("tester");

    expect(theHiddenDiv).toHaveStyle('display : none');
});