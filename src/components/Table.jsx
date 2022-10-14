import React from "react";
import "./Table.css";

const Table = ({ countries }) => {
  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }

  return (
    <div className="table">
      {countries.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{numberWithCommas(cases)}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};

export default Table;
