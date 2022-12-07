import { GridRowsProp, GridColDef } from "@mui/x-data-grid";

export interface IDataGridTableProps {
    rows:GridRowsProp;
    columns:GridColDef[];
    handleGetRowClassName?(params:any):string
  }
  