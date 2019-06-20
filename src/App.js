import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormContainer from "./containers/FormContainer";
import TableContainer from "./containers/TableContainer";
import CategoriesService from "./api/CategoriesService";
import ProService from "./api/ProService";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: false,
    categories: [],
    pros: []
  };

  componentDidMount() {
    this.getCategories();
    //initial data by default
    const query = {
      query: {
        category_id: 2,
        location: "sw11"
      },
      headers: {
        paginationOffset: 0,
        paginationLimit: 100
      }
    };
    this.getPros(query);
  }

  getCategories = () => {
    const service = new CategoriesService();
    this.setState({ isLoading: true });
    service
      .getData()
      .then(data => {
        this.setState({
          isLoading: false,
          categories: data
        });
      })
      .catch(error => {
        this.setState({ isLoading: false });
        console.log("fethCategoriesService.error", error);
      });
  };

  getPros = query => {
    const service = new ProService();
    service
      .getData(query)
      .then(result => {
        this.setState({
          isLoading: false,
          pros: result.data,
          query: { query: query }
        });
      })
      .catch(error => {
        this.setState({ isLoading: false });
        console.log("fethProsService.error", error);
      });
  };

  render() {
    const { isLoading, categories, pros } = this.state;
    return (
      <div className="App">
        {isLoading && (
          <div>
            <span> loading ... </span>
          </div>
        )}
        {!isLoading && (
          <Container>
            <Row>
              <Col>
                <header className="App-header">
                  <h1> Front-End code challenge </h1>
                </header>
              </Col>
              <hr />
            </Row>
            <Row>
              <Col>
                <FormContainer
                  data={categories}
                  onFilterChange={this.getPros}
                />
              </Col>
              <hr />
            </Row>
            <Row>
              <Col>
                <TableContainer data={pros} />
              </Col>
            </Row>
          </Container>
        )}
      </div>
    );
  }
}

export default App;
