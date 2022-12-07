import * as React from "react";
import { FunctionComponent } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IDataGridTableProps } from "./IDataGridTableProps";


const DataGridTable: FunctionComponent<IDataGridTableProps> = (props) => {

    const {rows,columns,handleGetRowClassName,page} = props;

  return (
    <div className={page === 'consolidated' ? 'fixedHeightTable' : ''}>
      <DataGrid rows={rows} columns={columns}
      scrollbarSize={0} 
      hideFooter={true}
      rowsPerPageOptions={[]}
      getRowClassName={(params) => handleGetRowClassName(params)}
      style={{ border: '1px solid black' }}
      />
      
    </div>
  );
};

export default DataGridTable;
