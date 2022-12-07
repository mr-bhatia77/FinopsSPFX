import * as React from "react";
import { GridColDef } from "@mui/x-data-grid";
import { FunctionComponent } from "react";
import { consolidatedStructure } from "../common/constants";
import DataGridTable from "../common/DataGridTable";
import "./TotalConsolidated.css";

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

const TotalConsolidated: FunctionComponent = () => {
  const getRows = () => {
    const newRows: any = [];
    consolidatedStructure.conBudgetListEntity.forEach((type: any) => {
      newRows.push(type);
    });
    return newRows;
  };
  return (
    <div>
      <div className="container">
        <div style={{ width: "2563px", marginLeft: "5%" }}>
          <div className="mt-20">
            <a
              href="https://app.powerbi.com/groups/me/reports/1228f406-3c2b-4187-bd8d-8174ab35d0ae/ReportSection4f9802e3d96768f65bf1?ctid=e39845e8-f42d-4832-9d77-07d6601cd5b5&redirectedFromSignup=1"
              target="_blank"
            >
              click here for detailed report
            </a>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
            }}
          ></div>
          <div className="flex mt-20">
            <div
              className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
              style={{ width: "400px" }}
            >
              <h4>
                Crohn's & Colitis Foundation
                <br />
                Consolidated Foundation
                <br />
                30-09-2021
              </h4>
            </div>
            <div
              className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
              style={{ width: "480px" }}
            >
              <h4>YTD - September, 2021</h4>
            </div>
            <div
              className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
              style={{ width: "120px" }}
            >
              <h4></h4>
            </div>
            <div
              className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
              style={{ width: "120px" }}
            >
              <h4>EOY</h4>
            </div>
            <div
              className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
              style={{ width: "840px" }}
            >
              <h4>2022 Budget</h4>
            </div>
            <div
              className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
              style={{ width: "120px" }}
            >
              <h4></h4>
            </div>
            <div
              className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
              style={{ width: "240px" }}
            >
              <h4></h4>
            </div>
            <div
              className="blackAndWhite borderRight flex verticalAlign textAlignCenter"
              style={{ width: "240px" }}
            >
              <h4>% Growth</h4>
            </div>
          </div>
          <DataGridTable
            columns={consolidatedColumns}
            rows={getRows()}
          ></DataGridTable>
        </div>
      </div>
    </div>
  );
};

export default TotalConsolidated;
