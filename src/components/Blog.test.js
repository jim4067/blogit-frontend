import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Blog from './Blog';

test("the Blog component is rendred", () => {
    const blog = {
        title : "the blog is in the test",
        author : "tester",
        likes : 3,
        url : "http://localhost"
    }

    const component = render(
        <Blog blog={blog} />
    );

    expect(component.container).toHaveContent("the blog is in the test");
});