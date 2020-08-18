import React from "react";
import { mount } from "enzyme";

import Image from "./Image";

describe("the <Image> component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Image src="test-src" alt="test alt" />);
  });

  it("should render an <img> tag with the [src] and [alt] props received by the component", () => {
    expect(wrapper.find("img").prop("src")).toBe("test-src");
    expect(wrapper.find("img").prop("alt")).toBe("test alt");
  });
});
