import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const opitons = {
  showPagination: false,
  showPageSizeOptions: false,
  className: '-striped -highlight'
};
const configColumns = columns =>
  columns.map(column => ({ Header: column, accessor: column }));
const configDatas = (datas, columns) => {
  const newDatas = [];
  datas.forEach(data => {
    const newData = {};
    columns.forEach(column => {
      if (data[column]) {
        if (typeof data[column] === 'object') {
          newData[column] = `${data[column]}`;
        } else {
          newData[column] = data[column];
        }
      }
    });
    newDatas.push(newData);
  });
  return newDatas;
};
export default ({ data, columns }) => (
  <div style={{ width: '100%', padding: '5px', overflow: 'auto' }}>
    <ReactTable
      columns={configColumns(columns)}
      data={configDatas(data, columns)}
      defaultPageSize={data.length}
      {...opitons}
    />
  </div>
);
