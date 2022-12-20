import * as React from "react";
import {Link} from 'react-router-dom';
import {FunctionComponent, useState } from 'react';
import "./Dropdown.css";
// import {useDispatch} from 'react-redux';
// import {updateNation} from '../redux/application/applicationActions'

interface INationDataList {
    nationDataList :INation;
    currentPage?: String
}

interface INation {
    nationInfoList : any[]
}



const NationDropDown:FunctionComponent<INationDataList> = (props)=> {

  const {nationDataList, currentPage} = props;
  const [click, setClick] = useState(false);

//   const dispatch = useDispatch();

  const handleClick = () => setClick(!click);

  const selectYear = (item:any)=> {
    // dispatch(updateYear(item))
  }

  return (
    <>
        <ul style={{zIndex: 1}}
          onClick={handleClick}
          className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        >
          {nationDataList?.nationInfoList?.map((item:any, index:any) => {
            return (
              <li key={index} onClick={()=>selectYear(item)}>
                  <Link to={`/chapter/${currentPage}?chapterId=${item?.nationId}`} className='dropdown-link'> {item?.nationName}</Link>
              </li>
            );
          })}
        </ul>
    </>
  );
}

export default NationDropDown;
