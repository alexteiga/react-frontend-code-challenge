import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";

class FormContainer extends Component {

  state = {
    search: {
      postcode: '',
      category: '',
    },
    categoryOptions: this.props.data ? this.props.data : []
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({
        categoryOptions: nextProps.data
      });
    }
  }

  handleInput = (e)  => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        search: {
          ...prevState.search,
          [name]: value
        }
      })
    );
  };

  handleFormSubmit = (e) => {
    const { onFilterChange } = this.props;
    const { search } = this.state;
    const { category, postcode } = search;
    const query = {
      query: {
        category_id: category,
        location: postcode
      },
      headers: {
        paginationOffset: 0,
        paginationLimit: 100
      }
    };

    e.preventDefault();
    onFilterChange(query);
  };

  render() {
    const { search, categoryOptions } = this.state;
    const { category, postcode } = search;
    return (
      <div>
        <Form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Form.Row>
          <Form.Group as={Col} md="4">
            <Select
              title={"Category"}
              name={"category"}
              options={categoryOptions}
              value={category}
              placeholder={"Select Category"}
              handlechange={this.handleInput}
            />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Input
              inputtype={"text"}
              title={"Postcode"}
              name={"postcode"}
              value={postcode}
              placeholder={"Enter your postcode"}
              onChange={this.handleInput}
            />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Button
              action={this.handleFormSubmit}
              type={"primary"}
              title={"Submit"}
              style={buttonStyle}
            />
          </Form.Group>
          </Form.Row>
        </Form>
      </div>
    );
  }
}
const buttonStyle = {
  margin: "7% 10px 10px 10px"
};

export default FormContainer;
