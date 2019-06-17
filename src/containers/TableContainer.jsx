import React from "react";
import ReactTable from "react-table";
import Pagination from "./PaginationContainer";
import "react-table/react-table.css";
import "../App.css";
import StarRatingComponent from "react-star-rating-component";

export default class TableContainer extends React.Component {
  render() {
    const { data } = this.props;
    let length = 0, pageSize = 1;
    if (data) {
      pageSize = data.length > 20 ? 20 : data.length;
      length = data.length;
    }

    const textAlignLeft = {
      textAlign: "left",
      marginLeft: "5%"
    };
    return (
      <div style={{ boxShadow: "3px 3px 8px rgba(0, 0, 0, 0.15)" }}>
        <ReactTable
          data={data}
          PaginationComponent={Pagination}
          pageSize={pageSize}
          showPagination={!(length === 0)}
          className="-striped -highlight"
          columns={[
            {
              Header: () => <div style={textAlignLeft}>Id</div>,

              accessor: "id",
              minWidth: 50,
              style: { textAlign: "left", marginLeft: "1%" }
            },
            {
              Header: () => <div style={textAlignLeft}>Name</div>,

              accessor: "name",
              minWidth: 200,
              style: { textAlign: "left", marginLeft: "1%" }
            },
            {
              Header: () => <div style={textAlignLeft}>Postcode</div>,

              accessor: "main_address.postcode",
              minWidth: 100,
              style: { textAlign: "left", marginLeft: "1%" }
            },
            {
              Header: () => <div style={textAlignLeft}>Review Rating</div>,
              accessor: "review_rating",
              minWidth: 200,
              style: { textAlign: "left", marginLeft: "1%" },
              Cell: row => (
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  editing={false}
                  value={row.original.review_rating}
                />
              )
            }
          ]}
        />
      </div>
    );
  }
}
