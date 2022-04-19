import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Header } from "./Header";
import React from "react";
import moonStars from "../../assets/moon-stars.svg";
import stars from "../../assets/stars.svg";

export default {
  title: "Molecules/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe",
  },
  text: "storybook example",
  logo: stars,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  text: "storybook example",
  logo: moonStars,
};
