import React from "react";
import { shallow } from "enzyme";
import { findTestByAttr, checkProps } from "../../test/TestUtils";

import SpotItemHeader from "./SpotItemHeader";

describe("SpotFiltered.js", () => {
  const setup = () => {
    return shallow(<SpotItemHeader />);
  };

  describe("renders without error", () => {
    test("header", () => {
      const wrapper = setup();
      const header = findTestByAttr(wrapper, "header-container");
      expect(header.length).toBe(1);
    });
  });
});
