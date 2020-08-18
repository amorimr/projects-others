import React from "react";
import { mount } from "enzyme";

import Footer from "./Footer";
import Image from "../Image/Image";

import esrb from "../../images/esrb.png";
import Mrating from "../../images/Mrating.png";
import PC from "../../images/PC.png";
import ps3 from "../../images/ps3.png";
import xbox from "../../images/xbox.png";
import ubisoft from "../../images/ubisoft.png";

describe("the <Footer> component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Footer />);
  });

  it("should render a <Footer> component", () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it("should render a copyright text", () => {
    expect(wrapper.find("p").text()).toBeTruthy();
  });

  it("should render logos", () => {
    expect(wrapper.find(Image).length).toBe(6);
  });

  it("should pass [src] props to the <Image> componet", () => {
    const images = [ubisoft, xbox, ps3, PC, esrb, Mrating];
    const srcProps = wrapper.find(Image).map(node => node.prop("src"));
    expect(srcProps).toEqual(images);
  });

  it("should pass [src] props to the <Image> componet", () => {
    const altProps = wrapper.find(Image).map(node => node.prop("alt"));
    expect(altProps.every(prop => prop !== undefined)).toBe(true);
  });
});
