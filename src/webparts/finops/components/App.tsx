import * as React from "react";
import { FunctionComponent } from "react";
import { escape } from "@microsoft/sp-lodash-subset";
import TotalConsolidated from "../pages/TotalConsolidated";
import { useSelector } from 'react-redux';

interface IAppProps {
  userDisplayName: string;
}
const App: FunctionComponent<IAppProps> = (props) => {
    const {userDisplayName} = props;
    const appState = useSelector((state)=>state)
    console.log('from app',appState);
  return (
    <div>
      <h2>User Name == {escape(userDisplayName)}</h2>
      <TotalConsolidated></TotalConsolidated>
    </div>
  );
};

export default App;