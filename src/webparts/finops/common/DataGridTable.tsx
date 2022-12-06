import * as React from "react";
import { FunctionComponent } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IDataGridTableProps } from "./IDataGridTableProps";

// const rows: GridRowsProp = [
//   { id: 1, col1: "Hello Bharat", col2: "World" },
//   { id: 2, col1: "DataGridPro", col2: "is Awesome" },
//   { id: 3, col1: "MUI", col2: "is Amazing" },
// ];

// const columns: GridColDef[] = [
//   { field: "col1", headerName: "Column 1", width: 150 },
//   { field: "col2", headerName: "Column 2", width: 150 },
// ];

const DataGridTable: FunctionComponent<IDataGridTableProps> = (props) => {
  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <DataGrid rows={props.rows} columns={props.columns}
      scrollbarSize={0} 
      hideFooter={true}
      rowsPerPageOptions={[]}/>
      
    </div>
  );
};

export default DataGridTable;
