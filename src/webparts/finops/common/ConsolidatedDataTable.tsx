import * as React from 'react';
import { consolidatedStructure } from "../common/constants";
import DataGridTable from "../common/DataGridTable";
import { GridColDef } from "@mui/x-data-grid";

const consolidatedColumns: GridColDef[] = [
    {
      field: "type",
      headerName: "",
      width: 400,
      editable: true,
      cellClassName: "",
    },
    {
      field: "pyytdBudget",
      headerName: "Budget",
      width: 120,
      editable: true,
      headerClassName: "mediumFontSize",
      headerAlign: "center",
      cellClassName: "",
      align: "center",
    },
    {
      field: "pyytdActual",
      headerName: "Actual",
      width: 120,
      editable: true,
      headerClassName: "mediumFontSize",
      headerAlign: "center",
      cellClassName: "",
      align: "center",
    },
    {
      field: "pyttdVariance",
      headerName: "Variance",
      width: 120,
      editable: true,
      headerClassName: "mediumFontSize",
      headerAlign: "center",
      cellClassName: "",
      align: "center",
    },
    {
      field: "pyttdPercentVariance",
      headerName: "%Variance",
      width: 120,
      editable: true,
      headerClassName: "mediumFontSize",
      headerAlign: "center",
      cellClassName: "",
      align: "center",
    },
    {
      field: "pyBudget",
      headerName: `2022 Budget`,
      width: 120,
      editable: true,
      headerClassName: "mediumFontSize",
      headerAlign: "center",
      cellClassName: "",
      align: "center",
    },
    {
      field: "pyForecast",
      headerName: `2022 Forecast`,
      width: 120,
      editable: true,
      headerClassName: "mediumFontSize",
      headerAlign: "center",
      cellClassName: "",
      align: "center",
    },
    {
      field: "specialEvents",
      headerName: "Special Events",
      width: 120,
      editable: true,
      headerClassName: "mediumFontSize",
      headerAlign: "center",
      cellClassName: "",
      align: "center",
    },
    {
      field: "spin4",
      headerName: "Spin4",
      width: 120,
      editable: true,
      headerClassName: "mediumFontSize",
      headerAlign: "center",
      cellClassName: "",
      align: "center",
    },
    {
      field: "takeSteps",
      headerName: "Take Steps",
      width: 120,
      editable: true,
      headerClassName: "mediumFontSize",
      headerAlign: "center",
      cellClassName: "",
      align: "center",
    },
    {
      field: "other",
      headerName: "Other",
      width: 120,
      editable: true,
      headerClassName: "mediumFontSize",
      headerAlign: "center",
      cellClassName: "",
      align: "center",
    },
    {
      field: "admin",
      headerName: "Admin",
      width: 120,
      editable: true,
      headerClassName: "mediumFontSize",
      headerAlign: "center",
      cellClassName: "",
      align: "center",
    },
    {
      field: "totalCyBudget",
      headerName: `Total 2023 Budget`,
      width: 120,
      editable: true,
      headerClassName: "mediumFontSize",
      headerAlign: "center",
      cellClassName: "",
      align: "center",
    },
    {
      field: "forecastBudgetVariance",
      headerName: "Forecast vs Budget Variance",
      width: 120,
      editable: true,
      headerClassName: "mediumFontSize",
      headerAlign: "center",
      cellClassName: "",
      align: "center",
    },
    {
      field: "percentVariance",
      headerName: "% Variance",
      width: 120,
      editable: true,
      headerClassName: "mediumFontSize",
      headerAlign: "center",
      cellClassName: "",
      align: "center",
    },
    {
      field: "pyPercentGrowth",
      headerName: `2022`,
      width: 120,
      editable: true,
      headerClassName: "mediumFontSize",
      headerAlign: "center",
      cellClassName: "",
      align: "center",
    },
    {
      field: "cyPercentGrowth",
      headerName: `2023`,
      width: 120,
      editable: true,
      headerClassName: "mediumFontSize",
      headerAlign: "center",
      cellClassName: "",
      align: "center",
    },
  ];

const ConsolidatedDataTable = () => {

    const getAbsValue =(type:any)=>{
        const newType={...type}
        for(let i in newType) {
            if( i!== 'type' && i!=='color')
            newType[i] = Math.abs(newType[i])
        }
        return(newType)
    }

    const getRows = () => {
        const newRows: any = [];
        consolidatedStructure.conBudgetListEntity.forEach((type: any) => {
            newRows.push(getAbsValue(type));
        });
        return newRows;
      };

      const handleGetRowClassName = (params:any) => {
        return params.row.color;
}

  return (
    <DataGridTable
            columns={consolidatedColumns}
            rows={getRows()}
            handleGetRowClassName={handleGetRowClassName}
            page={'consolidated'}
          ></DataGridTable>
  )
}

export default ConsolidatedDataTable;