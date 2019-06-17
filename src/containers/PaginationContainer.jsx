import React from "react";
import "./Pagination.css";
import PropTypes from "prop-types";

export default class PaginationContainer extends React.Component {
  constructor(props) {
    super();

    this.onPageChange = this.onPageChange.bind(this);
  }
  state = {
    firstThreeArray: [1],
    lastNumber: "",
    showEllipis: true
  };

  static propTypes = {
    pages: PropTypes.number,
    page: PropTypes.number,
    PageButtonComponent: PropTypes.any,
    onPageChange: PropTypes.func,
    prev: PropTypes.func,
    next: PropTypes.func
  };

  componentDidMount() {
    var fArray = [];
    if (this.props.pages <= 5) {
      for (var i = 1; i <= this.props.pages; i++) {
        fArray.push(i);
      }

      this.setState({ firstThreeArray: fArray });
    } else {
      if (this.props.page < 3) {
        this.setState({ firstThreeArray: [1, 2, 3] });
      } else {
        var index = 1;
        for (let j = this.props.page; j >= 0; j--) {
          fArray.push(j);
          if (index === 3) {
            break;
          }
          index++;
        }

        fArray.reverse();
        this.setState({ firstThreeArray: fArray });
      }
      this.setState({ lastNumber: this.props.pages });
    }
  }
  componentWillReceiveProps(nextProps) {
    var fArray = [];
    if (nextProps.pages <= 5) {
      for (var i = 1; i <= nextProps.pages; i++) {
        fArray.push(i);
      }
      this.setState({ firstThreeArray: fArray });
    } else {
      if (
        this.props.page !== nextProps.page ||
        this.props.pages !== nextProps.pages
      ) {
        if (nextProps.page < 3) {
          this.setState({ firstThreeArray: [1, 2, 3] });
        } else {
          fArray.push(nextProps.page - 1);
          fArray.push(nextProps.page);
          if (nextProps.page + 1 < nextProps.pages) {
            fArray.push(nextProps.page + 1);
          }
          if (
            nextProps.page === nextProps.pages - 2 ||
            nextProps.page === nextProps.pages - 1 ||
            nextProps.page === nextProps.pages
          ) {
            this.setState({ showEllipis: false });
          } else {
            this.setState({ showEllipis: true });
          }
          this.setState({ firstThreeArray: fArray });
        }
        this.setState({ lastNumber: nextProps.pages });
      }
    }
  }
  prev = () => {
    if (this.props.page > 1) {
      this.props.onPageChange(this.props.page - 1);
    }
  };
  next = () => {
    if (this.props.page < this.props.pages) {
      this.props.onPageChange(this.props.page + 1);
    }
  };
  onPageChange = no => {
    this.props.onPageChange(no);

    /*todo
     the idea was to get query values here
     to update the query to get data to the nex page
     const service = new ProService();*/
  };

  showEllipsis = () => {
    if (this.state.showEllipis) {
      return (
        <button>
          <li>...</li>
        </button>
      );
    }
  };
  isactive = page => {
    if (this.props.page === page) {
      return true;
    }
    return false;
  };
  showLastPagi = () => {
    if (this.props.page !== this.props.pages) {
      return (
        <button
          className={this.isactive(this.props.pages) ? "is-active" : ""}
          onClick={() => {
            this.onPageChange(this.props.pages);
          }}
        >
          <li>{this.props.pages}</li>
        </button>
      );
    }
  };
  showPrev = () => {
    if (this.props.page !== 1) {
      return (
        <button onClick={this.prev}>
          <li>{"<"}</li>
        </button>
      );
    }
  };
  showNext = () => {
    if (this.props.page < this.props.pages) {
      return (
        <button onClick={this.next}>
          <li>{">"}</li>
        </button>
      );
    }
  };

  render() {
    return (
      <div className={"default pagination"}>
        <ul>
          {this.showPrev()}
          {this.props.pages <= 5 ? (
            this.state.firstThreeArray.map((no, index) => {
              return (
                <button
                  key={index}
                  className={this.isactive(no) ? "is-active" : ""}
                  onClick={() => {
                    this.onPageChange(no);
                  }}
                >
                  <li>{no}</li>
                </button>
              );
            })
          ) : (
            <React.Fragment>
              {this.state.firstThreeArray.map((no, index) => {
                return (
                  <button
                    key={index}
                    className={this.isactive(no) ? "is-active" : ""}
                    onClick={() => {
                      this.onPageChange(no);
                    }}
                  >
                    <li>{no}</li>
                  </button>
                );
              })}
              {this.showEllipsis()}

              {this.showLastPagi()}
            </React.Fragment>
          )}
          {this.showNext()}
        </ul>
      </div>
    );
  }
}
