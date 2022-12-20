import * as React from 'react';
import {FunctionComponent, useState } from 'react';
import {Link} from 'react-router-dom';
import "./Dropdown.css";
import {useDispatch} from 'react-redux';
import {updateYear} from '../redux/application/applicationActions'
import {IChapterInfo, IYear } from '../common/Iprops';

interface IYearDataList {
    yearInfoList:IYear[];
}
interface IYearDropDown {
    yearDataList:IYearDataList,
    currentPage:String,
    currentChapter?: IChapterInfo;
}

const YearDropDown:FunctionComponent<IYearDropDown> = (props)=> {

  const {yearDataList, currentPage} = props;
  const [click, setClick] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => setClick(!click);

  const selectYear = (item:any)=> {
    dispatch(updateYear(item))
  }

  return (
    <>
        <ul style={{zIndex: 1}}
          onClick={handleClick}
          className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        >
          {yearDataList?.yearInfoList?.map((item, index) => {
            return (
              <li key={index} onClick={()=>selectYear(item)}>
                  <Link to={`/chapter/${currentPage}?year=${item?.yearName}`} className='dropdown-link'> {item?.yearName}</Link>
              </li>
            );
          })}
        </ul>
    </>
  );
}

export default YearDropDown;
