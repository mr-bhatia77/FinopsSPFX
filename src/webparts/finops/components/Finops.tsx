import * as React from "react";
// import styles from "./Finops.module.scss";
import './Finops.css';
import { IFinopsProps } from "./IFinopsProps";
import { escape } from "@microsoft/sp-lodash-subset";
import TotalConsolidated from "../pages/TotalConsolidated";


export default class Finops extends React.Component<IFinopsProps, {}> {
  public render(): React.ReactElement<IFinopsProps> {
    const {
      // description,
      // isDarkTheme,
      // environmentMessage,
      // hasTeamsContext,
      userDisplayName,
    } = this.props;

    return (
      <div>
        <h2>Well done, {escape(userDisplayName)}!</h2>
          
          <TotalConsolidated></TotalConsolidated>
        </div>
    );
  }
}
