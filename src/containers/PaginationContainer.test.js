import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Pagination from "./PaginationContainer";
import TableContainer from "./TableContainer";

Enzyme.configure({ adapter: new Adapter() });

describe(`The Pagination Container`, () => {
  it("renders <Pagination /> component", () => {
    const wrapper = shallow(<TableContainer />);
    setTimeout(() => {
      wrapper.update();
      expect(wrapper.find(<Pagination />).exists);
    });
  });
});
