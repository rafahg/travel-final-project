import checkPropTypes from "check-prop-types";

/**
 *
 * @param {ShallowWrapper} wrapper - Enzyme Shallow Wrapper
 * @param {*} value - Value of data test attribute to search
 * @returns {ShallowWrapper}
 */
export const findTestByAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
