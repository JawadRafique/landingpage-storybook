import React from "react";
import { Header } from "./header";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Organisms/Header",
    component: Header,
    argTypes: {
        navigation: {
            defaultValue: [
                { title: "general", items: [{ icon: null, title: "Shop", url: "#"}, { icon: null, title: "About", url: "#"}, { icon: null, title: "FAQ", url: "#"}, { icon: null, title: "Contact", url: "#"}] },
                { title: "account", items: [{ icon: null, title: "Insights", url: "#"}, { icon: null, title: "Account", url: "#"}, { icon: "user", title: "User", url: "#"}, { icon: "bag", title: "Cart", url: "#"}] },
            ],
        },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const HeaderTemplate = ({ navigation}) => {
    return <Header navigation={navigation}></Header>
};

export const header = HeaderTemplate.bind({});
