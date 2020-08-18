import React from "react";
import { mount } from "enzyme";

import App from "./App";
import Carousel from "./components/Carousel/Carousel";
import ColBoxes from "./components/ColBoxes/ColBoxes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

describe("the <App> component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("should render the <App> component", () => {
    expect(wrapper.find(App).exists()).toBe(true);
  });

  it("should render the <Carousel> component", () => {
    expect(wrapper.find(Carousel).exists()).toBe(true);
  });

  it("should render the <ColBoxes> component", () => {
    expect(wrapper.find(ColBoxes).exists()).toBe(true);
  });

  it("should render the <Header> component", () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it("should render the <Footer> component", () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it("should render the <NavBar> component", () => {
    expect(wrapper.find(NavBar).exists()).toBe(true);
  });
});
