import * as React from "react";
import {FunctionComponent, useState } from 'react';
import {Link} from 'react-router-dom';
import "./Dropdown.css";
import {useDispatch} from 'react-redux';
import {updateChapter} from '../redux/application/applicationActions'
import {IChapterInfo} from '../common/Iprops';

interface chapterDataList {
    chapterInfoList:IChapterInfo[]
}

interface IChapterDropDown {
    chapterDataList :chapterDataList;
    currentPage: String;
    currentChapter?: IChapterInfo;
}

const ChapterDropdown:FunctionComponent<IChapterDropDown> = (props)=> {

  const {chapterDataList, currentPage} =props;
  const [click, setClick] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => setClick(!click);

  const selectChapter = (item:any)=> {
    dispatch(updateChapter(item))
  }

  return (
    <>
        <ul style={{zIndex: 1}}
          onClick={handleClick}
          className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        >
          {chapterDataList?.chapterInfoList?.map((item, index) => {
            return (
              <li key={index} onClick={()=>selectChapter(item)}>
                  <Link to={`/chapter/${currentPage}?chapterId=${item?.chapterId}`} className='dropdown-link'> {item?.chapterDescription}</Link>
              </li>
            );
          })}
        </ul>
    </>
  );
}

export default ChapterDropdown;
