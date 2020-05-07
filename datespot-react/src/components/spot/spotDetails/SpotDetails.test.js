import React from "react";
import { shallow } from "enzyme";
import { findTestByAttr, checkProps } from "../../../test/TestUtils";

import SpotDetails from "./SpotDetails";

describe("SpotDetails.js", () => {
  let defaultProps = {
    location: {
      aboutProps: {
        title: "great location",
        description: "turned on by the sciences",
      },
    },
  };
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<SpotDetails {...setupProps} />);
  };

  describe("renders without error", () => {
    test("Spot Details", () => {
      const wrapper = setup();
      const spotDetailsContainer = findTestByAttr(
        wrapper,
        "spot-details-container"
      );
      expect(spotDetailsContainer.length).toBe(1);
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
