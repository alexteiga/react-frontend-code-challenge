import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FormContainer from "./FormContainer";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";

Enzyme.configure({ adapter: new Adapter() });

describe(`The Form Container`, () => {
  it("renders <FormContainer /> component with data", () => {
    const data = [
      {
        id: 1,
        name: "Appliance Installer / Repairer",
        is_hidden: false
      },
      {
        id: 13,
        name: "Electric oven / cooker installation / repair",
        is_hidden: false
      }
    ];
    const wrapper = shallow(<FormContainer data={data} />);
    setTimeout(() => {
      wrapper.update();
      expect(wrapper.find(<FormContainer />).exists);
    });
  });

  it("renders <Input /> component", () => {
    const wrapper = shallow(<FormContainer />);
    setTimeout(() => {
      wrapper.update();
      expect(wrapper.find(<Input />).exists);
    });
  });

  it("renders <FormContainer /> component", () => {
    const wrapper = shallow(<FormContainer />);
    setTimeout(() => {
      wrapper.update();
      expect(wrapper.find(<Select />).exists);
    });
  });

  it("renders <FormContainer /> component", () => {
    const wrapper = shallow(<FormContainer />);
    setTimeout(() => {
      wrapper.update();
      expect(wrapper.find(<Button />).exists);
    });
  });
});
