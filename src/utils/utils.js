import _ from "lodash";

const truncate = (str, length = 500, separator = "...") => {
  return _.truncate(str, {
    length: length,
    separator: separator,
  });
};

export default truncate;
