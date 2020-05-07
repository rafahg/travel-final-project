import React from "react";
import { shallow } from "enzyme";
import { findTestByAttr, checkProps } from "../../../test/TestUtils";

import CommentsHeader from "./CommentsHeader";

describe("CommentsHeader", () => {
  const setup = () => {
    return shallow(<CommentsHeader />);
  };

  describe("renders without error", () => {
    test("Comments Header", () => {
      const wrapper = setup();
      const commentsContainer = findTestByAttr(wrapper, "comments-container");
      expect(commentsContainer.length).toBe(1);
    });
  });
});
