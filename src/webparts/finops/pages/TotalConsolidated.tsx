import * as React from "react";
import { FunctionComponent } from "react";
import "./TotalConsolidated.css";
import ConsolidatedDataTable from "../common/ConsolidatedDataTable";

const TotalConsolidated: FunctionComponent = () => {
    
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
          <ConsolidatedDataTable />
        </div>
      </div>
    </div>
  );
};

export default TotalConsolidated;
