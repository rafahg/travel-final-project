import React from "react";
import { shallow } from "enzyme";
import { findTestByAttr, checkProps } from "../../test/TestUtils";

import SpotItem from "./SpotItem";

describe("SpotFiltered.js", () => {
  const defaultProps = {
    title: "great location",
    description: "turned on by the sciences",
    image: "some link",
  };

  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<SpotItem {...defaultProps} />);
  };

  describe("renders without error", () => {
    test("the input filter", () => {
      const wrapper = setup();
      const card = findTestByAttr(wrapper, "card-container");
      expect(card.length).toBe(1);
    });
  });

  describe("display", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });
    test("correct title", () => {
      const titleContainer = findTestByAttr(wrapper, "text-container");
      expect(titleContainer.text()).toContain("great location");
    });
    test("description displays correctly", () => {
      const descriptionContainer = findTestByAttr(
        wrapper,
        "description-container"
      );
      expect(descriptionContainer.text()).toContain(
        "turned on by the sciences"
      );
    });
  });
});
