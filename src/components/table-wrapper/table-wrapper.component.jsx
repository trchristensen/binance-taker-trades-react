import React from "react";
import SortTable from "../../components/sort-table/sort-table.component";

import "./table-wrapper.styles.scss";

class TableWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeframe: "",
      pairs: []
    };
  }

  getData() {
    let url = `https://arcane-ravine-11965.herokuapp.com/api/pairs/${
      this.state.timeframe ? this.state.timeframe : ""
    }`;
    fetch(url)
      .then(response => response.json())
      .then(pairs => {
        let obj = pairs;
        var array = [];
        for (var key in obj) {
          array.push(obj[key]);
        }
        console.log("fetched " + url);
        return array;
      })
      .then(pairs => this.setState({ pairs: pairs }));
  }

  componentDidMount() {
    this.getData();
  }

  handleClick = e => {
    this.setState(
      {
        timeframe: e.target.getAttribute("timeframe")
      },
      () => {
        console.log(this.state.timeframe);
        this.getData();
      }
    );
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  render() {
    return (
      <div className="table-wrapper">
        <div className="table-menu">
          <span timeframe="" onClick={this.handleClick}>
            15 Minutes
          </span>
          <span timeframe="hour" onClick={this.handleClick}>
            1 Hour
          </span>
        </div>
        
        {/* <SortTable pairs={this.state.pairs} /> */}
      </div>
    );
  }
}

export default TableWrapper;
