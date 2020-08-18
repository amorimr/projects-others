import React from "react";
import { mount } from "enzyme";

import Button from "./Button";

describe("the <Link> component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Button text="I am a button" />);
  });

  it("should render the [text] prop received by the component", () => {
    expect(wrapper.find("button").text()).toBe("I am a button");
  });
});
