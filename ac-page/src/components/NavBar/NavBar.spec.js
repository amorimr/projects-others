import React from "react";
import { mount } from "enzyme";

import NavBar from "./NavBar";

describe("the <NavBar> component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<NavBar />);
  });

  it("should render a <NavBar> component", () => {
    expect(wrapper.find(NavBar).exists()).toBe(true);
  });
});
