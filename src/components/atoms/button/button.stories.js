import React from "react";
import { Button } from "./button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Atoms/Button",
    component: Button,
    argTypes: {
        variant: {
            options: ["primary", "secondary"],
            control: { type: "radio" },
            defaultValue: "primary",
        },
        children: {
            control: "text",
            defaultValue: "Primary",
        },
        icon: {
            options: ["", "bag", "cart", "plus", "user", "x"],
            control: { type: "select" },
        },
        href: {
            control: "text",
        },
        onClick: {
            // Custom name for clicked action
            // action: "clicked"
        },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const BasicButtonTemplate = ({ children, href, onClick, variant, icon }) => (
    <Button variant={variant} href={href} icon={icon} onClick={onClick}>
        {children}
    </Button>
);

const FunctionalButtonTemplate = (args) => (
    <Button onClick={() => alert("Hello World ")} variant={args.variant}>
        Functional
    </Button>
);

const IconButton = ({ variant, children, icon }) => (
    <Button variant={variant} icon={icon}>
        {children}
    </Button>
);

const LinkedButtonTemplate = () => (
    <Button href={"/google"}>Go to Google</Button>
);

export const basicButton = BasicButtonTemplate.bind({});
export const iconButton = IconButton.bind({});
export const functionalButton = FunctionalButtonTemplate.bind({});
export const linkedButton = LinkedButtonTemplate.bind({});

// For setting default values
// basicButton.args = {
    // variant: "primary",
    // // children: "Hello World",
    // icon: "",
    // href: "",
    // onClick: () => alert("Hello World")
// };

// For including/excluding controls
// basicButton.parameters = { controls: { exclude: ['icon'] } };

