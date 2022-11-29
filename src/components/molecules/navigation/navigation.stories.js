import React from "react";
import { Navigation } from "./navigation";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Molecules/Navigation",
    component: Navigation,
    argTypes: {
        direction: {
            defaultValue: "horizontal",
            options: ["horizontal", "vertical"],
            control: { type: "select" },
        },
        items: {
            defaultValue: [{title: "Home", url:"/"},{title: "About", url:"/about"}]
        }
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const HorizontalNavigationTemplate = ({direction, items }) => (
    <Navigation direction={direction} items={items}></Navigation>
)

const VerticalNavigationTemplate = ({direction, items }) => (
    <Navigation direction={"vertical"} items={items}></Navigation>
)

export const horizontal = HorizontalNavigationTemplate.bind({});
export const vertical = VerticalNavigationTemplate.bind({});

