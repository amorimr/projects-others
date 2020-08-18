import React from "react";
import { mount } from "enzyme";

import Image from "../Image/Image";

import banner from "../../images/banner.png";

import Header from "./Header";

describe("the <Header> component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Header />);
  });

  it("should render a <Header> component", () => {
    expect(wrapper.find(Header).exists()).toBe(true);
    expect(wrapper.find("header").exists()).toBe(true);
  });

  it("should pass [src] and [alt] props to the <Image> component", () => {
    expect(wrapper.find(Image).prop("src")).toBe(banner);
    expect(wrapper.find(Image).prop("alt")).toBe("assassin's creed banner");
  });
});
