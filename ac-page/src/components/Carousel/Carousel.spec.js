import React from "react";
import { mount } from "enzyme";

import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";

import Article from "../Article/Article";
import Image from "../Image/Image";

import Carousel from "./Carousel";

describe("the <Carousel> component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Carousel />);
  });

  it("should render a <Carousel> component", () => {
    expect(wrapper.find(Carousel).exists()).toBe(true);
  });

  it("should render the first image as selected", () => {
    expect(
      wrapper
        .find(".container")
        .find(Image)
        .at(0)
        .prop("src")
    ).toBe(img1);
  });

  it("should thumbnails of all images", () => {
    const srcProps = wrapper.find(Article).map(node => node.prop("src"));
    expect(srcProps).toEqual([img1, img2, img3]);
  });

  it("should select the thumbnail clicked", () => {
    wrapper
      .find(Article)
      .at(1)
      .simulate("click");
    expect(
      wrapper
        .find(".container")
        .find(Image)
        .at(0)
        .prop("src")
    ).toBe(img2);
  });

  it("should select the thumbnail when enter key is pressed", () => {
    wrapper
      .find(Article)
      .at(2)
      .simulate("keydown", { key: "Enter" });
    expect(
      wrapper
        .find(".container")
        .find(Image)
        .at(0)
        .prop("src")
    ).toBe(img3);
  });
});
