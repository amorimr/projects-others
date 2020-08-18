import React from "react";
import { mount } from "enzyme";

import Article from "../Article/Article";
import img1 from "../../images/img1.png";

import ColBoxes from "./ColBoxes";

describe("the <ColBoxes> component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ColBoxes />);
  });

  it("should render a <ColBoxes> component", () => {
    expect(wrapper.find(ColBoxes).exists()).toBe(true);
  });

  it("should render 2x the [count] received by props of <Article> components", () => {
    expect(wrapper.find(Article).length).toBe(6);
    wrapper.setProps({ count: 8 });
    expect(wrapper.find(Article).length).toBe(16);
  });

  it("should pass the img1 as the [src] prop to the <Article> component", () => {
    const srcProps = wrapper.find(Article).map(node => node.prop("src"));
    expect(srcProps.every(prop => prop === img1)).toBe(true);
  });

  it("should pass an [alt] prop to the <Article> component", () => {
    const altProps = wrapper.find(Article).map(node => node.prop("alt"));
    expect(altProps.every(prop => prop === "assassins creed image")).toBe(true);
  });

  it("should pass a text prop to the <Article> component", () => {
    const textProps = wrapper.find(Article).map(node => node.prop("text"));
    expect(textProps.every(prop => prop !== undefined)).toBe(true);
  });
});
