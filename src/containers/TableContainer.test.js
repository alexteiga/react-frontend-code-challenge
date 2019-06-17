import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TableContainer from "./TableContainer";
import ReactTable from "react-table";

Enzyme.configure({ adapter: new Adapter() });

describe(`The Table Container`, () => {
  it("renders <TableContainer /> component", () => {
    const wrapper = shallow(<TableContainer />);
    setTimeout(() => {
      wrapper.update();
      expect(wrapper.find(<ReactTable />).exists);
    });
  });

  it("renders <TableContainer /> component with data", () => {
    const data = [
      {
        id: 77716,
        name: "Eriksson & Svensson AB 0f525e3b42b7a949caf9bef9c20f4479",
        slug: "ex-facilis",
        logo_url:
          "https://dummyimage.com/754x559?x=d29184c1-618b-06be-a6e3-bb8b1b968414",
        profile_url: "/pros/ex-facilis-77716/",
        review_rating: 0.0,
        reviews_count: 0,
        is_verified: false,
        subscription_level: "pay as you go",
        main_address: {
          address_line_1: "Studio 15Q\nWilliams coves",
          address_line_2: "Flat 37R",
          postcode: "SW11 5QL",
          town: "London"
        }
      },
      {
        id: 78957,
        name: "Lundqvist HB 517c06656dbcfb54cadb6a931ef10cbc",
        slug: "molestias-impedit",
        logo_url:
          "https://placeholdit.imgix.net/~text?txtsize=55&txt=611x788&w=611&h=788?x=4e3c6a73-470e-81a7-6564-beaa94deffd0",
        profile_url: "/pros/molestias-impedit-78957/",
        review_rating: 0.0,
        reviews_count: 0,
        is_verified: false,
        subscription_level: "pay as you go",
        main_address: {
          address_line_1: "Flat 7\nSmith flats",
          address_line_2: "Flat 89",
          postcode: "SW11 3BY",
          town: "London"
        }
      }
    ];

    const wrapper = shallow(<TableContainer data={data} />);
    setTimeout(() => {
      wrapper.update();
      expect(wrapper.find(<ReactTable />).exists);
    });
  });
});
