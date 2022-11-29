import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Atoms/Link",
    argTypes: {
        children: {
            control: "text",
            defaultValue: "Link here",
        },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const linkTemplate = ({ children}) => (
    <a href="#">{children}</a>
);


export const link = linkTemplate.bind({});


