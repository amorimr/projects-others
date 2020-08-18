import React from "react";
import { mount } from "enzyme";

import Article from "./Article";
import Image from "../Image/Image";

describe("the <Article> component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Article
        src="./thumbnail"
        alt="a thumbnail image"
        text="I am a thumbnail"
      />
    );
  });

  it("should render an aritcle tag", () => {
    expect(wrapper.find("article").exists()).toBe(true);
  });

  it("should pass the [src] and the [alt] props received to the <Image> component", () => {
    expect(wrapper.find(Image).prop("src")).toBe("./thumbnail");
    expect(wrapper.find(Image).prop("alt")).toBe("a thumbnail image");
  });

  it("should render an h3 tag with a text", () => {
    expect(wrapper.find("h3").text()).toBe("Assassin Creed");
  });
});
