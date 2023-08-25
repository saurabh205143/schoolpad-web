import React from 'react';
import PropTypes from 'prop-types';

const PrintTemlate = ({ columns, rows }) => {
    
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>{row[col.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

PrintTemlate.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PrintTemlate;
