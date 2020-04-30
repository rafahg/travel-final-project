import React from "react";
import { mount } from "enzyme";
import { findTestByAttr, checkProps } from "../../test/TestUtils";
import SpotContext from "../../context/spot/SpotContext";
import SpotFiltered from "./SpotFiltered";

describe("SpotFiltered", () => {
  const state = {
    filtered: [
      {
        id: 1,
        title: "this is a great spot",
        date_created: "2020-01-06",
        date_updated: "2020-01-08",
      },
      {
        id: 2,
        title: "this is a post that goes on and on and on",
        date_created: "2020-02-06",
        date_updated: "2020-03-08",
      },
      {
        id: 3,
        title: "a brilliant time is to be had here",
        date_created: "2020-02-04",
        date_updated: "2020-03-09",
      },
    ],
    filterSpots: () => {},
    clearFilter: () => {},
  };

  const setup = (props) => {
    return mount(
      <SpotContext.Provider value={props}>
        <SpotFiltered />
      </SpotContext.Provider>
    );
  };

  describe("renders correctly", () => {
    test("SpotFiltered", () => {
      const wrapper = setup(state);
      const filterContainer = findTestByAttr(wrapper, "filter-container");
      expect(filterContainer.length).toBe(1);
    });
  });
});
