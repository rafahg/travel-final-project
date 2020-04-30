import React from "react";
import { shallow } from "enzyme";
import { findTestByAttr, checkProps } from "../../test/TestUtils";

import SpotDetails from "./SpotDetails";

describe("SpotDetails.js", () => {
  let defaultProps = {
    location: {
      aboutProps: {
        title: "nima",
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
});
