import React, { Component } from "react";

import "./sort-table.styles.scss";

class SortTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
        // timeframe: this.props.timeframe,
        // pairs: this.props.pairs,
    };

  }

  

  render() {
    return (
      <div className="sort-table">
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Net Volume</th>
              <th>Net Low</th>
              <th>Net Mid</th>
              <th>Net High</th>
            </tr>
          </thead>
          {this.props.pairs.map(
            ({ symbol, netVolume, netLow, netMid, netHigh }) => (
              <tbody>
                <tr key={symbol}>
                  <td>{symbol}</td>
                  <td>{netVolume}</td>
                  <td>{netLow}</td>
                  <td>{netMid}</td>
                  <td>{netHigh}</td>
                </tr>
              </tbody>
            )
          )}
        </table>
      </div>
    );
  }
}

export default SortTable;
