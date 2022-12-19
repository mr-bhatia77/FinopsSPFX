import * as React from "react";
import { FunctionComponent } from "react";
import { escape } from "@microsoft/sp-lodash-subset";
import TotalConsolidated from "../pages/TotalConsolidated";
import { useSelector } from 'react-redux';
import Navbar from "../pages/Navbar";

interface IAppProps {
  userDisplayName: string;
}
const App: FunctionComponent<IAppProps> = (props) => {
    const {userDisplayName} = props;
    const chapter = useSelector((state:any) => state.application.chapter);
    const year = useSelector((state:any)=>state.application.year);
    const isLocal = useSelector((state:any)=>state.application.isLocal);
    const page = useSelector((state:any)=>state.application.page);
    console.log('from app',chapter.chapterName,year.yearName,isLocal);
  return (
    <div>
      <h2>User Name == {escape(userDisplayName)}</h2>
      <Navbar chapter={chapter} year={year} currentPage={page}></Navbar>
      <TotalConsolidated></TotalConsolidated>
    </div>
  );
};

export default App;
