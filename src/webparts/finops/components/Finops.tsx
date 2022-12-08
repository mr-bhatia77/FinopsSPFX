import * as React from "react";
// import styles from "./Finops.module.scss";
import "./Finops.css";
import { IFinopsProps } from "./IFinopsProps";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import Navbar from "../pages/Navbar";

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
      <Provider store={store}>
        <BrowserRouter>
          <App userDisplayName={userDisplayName}></App>
        </BrowserRouter>
      </Provider>
    );
  }
}
