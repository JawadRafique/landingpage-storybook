import React from "react";
import { Footer } from "./footer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Organisms/Footer",
    component: Footer,
    argTypes: {
        menus: {
            defaultValue: [
                {
                    title: "Menu1",
                    items: [
                        { title: "Home", url: "/home" },
                        { title: "About", url: "/about" },
                        { title: "Contact", url: "/contact" },
                    ],
                },
                {
                    title: "Menu2",
                    items: [
                        { title: "About", url: "/about" },
                        { title: "Home", url: "/home" },
                        { title: "Contact", url: "/contact" },
                    ],
                },
                {
                    title: "Menu3",
                    items: [
                        { title: "Contact", url: "/contact" },
                        { title: "Home", url: "/home" },
                        { title: "About", url: "/about" },
                    ],
                },
            ],
        },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const FooterTemplate = ({ menus }) => <Footer menus={menus}></Footer>;

export const footer = FooterTemplate.bind({});
