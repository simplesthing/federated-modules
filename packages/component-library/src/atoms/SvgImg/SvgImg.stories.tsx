import { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";
import Stars from "../../assets/stars.svg";
import SvgImg from "./svg-img";

export default {
  title: "Atoms/SvgImg",
  component: SvgImg,
} as ComponentMeta<typeof SvgImg>;

const Template: ComponentStory<typeof SvgImg> = (args) => <SvgImg {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  svgSrc: Stars,
  altText: "stars",
};
