import React from "react";
import { shallow } from "enzyme";
import { findTestByAttr } from "../../../test/TestUtils";

import About from "./About";

describe("About.js", () => {
  const setup = () => {
    return shallow(<About />);
  };

  describe("renders without error", () => {
    test("the about container", () => {
      const wrapper = setup();
      const aboutContainer = findTestByAttr(wrapper, "about-container");
      expect(aboutContainer.length).toBe(1);
    });
  });
});
