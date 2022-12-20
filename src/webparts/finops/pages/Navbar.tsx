import * as React from 'react';
import {FunctionComponent, useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import {MenuItems,chapterMenuItems, yearList, chapterList, nationList } from "./MenuItems";
// import { useSelector, useDispatch } from 'react-redux';
import {IChapterInfo, IYear} from '../common/Iprops';
import NationDropDown from './NationDropDown';
import ChapterDropDown from './ChapterDropDown';
import YearDropDown from './YearDropDown';
import './Navbar.css';


interface INavbarProps {
    chapter:IChapterInfo, 
    year:IYear,
    currentPage?:string,
    pathName: string
}
  
interface Nav2State {
    [key: string]: boolean 
}

const Navbar:FunctionComponent<INavbarProps> = (props) => {

  const {chapter,year,pathName} = props;
  const {currentPage} = props;
  // const dispatch = useDispatch();
  // const location = useLocation();
  // const navigate =useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();
  const currentChapter = chapter;
  // const [loading, setLoading] = useState<boolean>(true)

  const initialNavbar1State = {
    Home: false,
    Templates: false,
    Chapters: false,
    'Total Consolidated': false,
    Charts: false
  }

  const initialNavbar2State:Nav2State = {
    'spin4': false,
    'takeSteps': false,
    'majorGifts': false,
    'specialEvents': false,
    'administration': false,
    'administration(M&T)': false,
    'consolidated': false,
    'budgetSpread': false
  }

  const [click, setClick] = useState(false);
  const [dropdown3, setDropdown3] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [dropdown2, setDropdown2] = useState(false)
  const [navbar1State, setNavbar1State] = useState({ ...initialNavbar1State, 'Home': true })
  const [navbar2State, setNavbar2State] = useState<Nav2State>({ ...initialNavbar2State, 'majorGifts': true })
  const [chapterDataList, setChapterDataList] = useState(chapterList)
  const [yearDataList, setYearDataList] = useState(yearList)
  const [nationDataList, setNationDataList] = useState(nationList)

  useEffect(()=>{
    setChapterDataList(chapterList);
    setYearDataList(yearList);
    setNationDataList(nationList);
  },[])

  useEffect(() => {
    setClick(false)
    if (navbar1State.Templates) {
      setNavbar2State({ ...initialNavbar2State, [currentPage]: true })
    }
    if (navbar1State.Chapters) {
      setNavbar2State({ ...initialNavbar2State, [currentPage]: true })
    }

  }, [navbar1State])

  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  return (
    <><nav className='navbar'>
    <Link to={`${pathName}/home`} className='navbar-logo'>
      {/* Crohn Colitis Foundation */}
      <img alt="Crohn Colitis Foundation" src="https://www.pathassist.org/resource/resmgr/2019_conference/website_images/ccf_logo_h_pos_rgb.png"
        width="200" height="60" style={{ backgroundColor: 'white', marginTop: '5px' }} />
    </Link>
    {/* <div className='menu-icon' onClick={handleClick}>
    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
  </div> */}
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li className='nav-item'>
        <Link to={`${pathName}/home`} className={navbar1State.Home ? 'nav-links-active' : 'nav-links'} onClick={() => setNavbar1State({ ...initialNavbar1State, 'Home': true })}>
          Home
        </Link>
      </li>
      <li className='nav-item'>
        {/* <Link to={`/template/majorGifts`} className={navbar1State.Templates ? 'nav-links-active' : 'nav-links'} onClick={() => setNavbar1State({ ...initialNavbar1State, 'Templates': true })}>
          Templates
        </Link> */}
        <div className={navbar1State.Templates ? 'nav-links-active' : 'nav-links'} onClick={() => setNavbar1State({ ...initialNavbar1State, 'Templates': true })}>
          Templates
        </div>
      </li>
      <li
        className='nav-item'
        onMouseEnter={onMouseEnter2}
        onMouseLeave={onMouseLeave2}
      >
        <a
          className={'nav-links'}>
          National <i className='fas fa-caret-down' />
        </a>
        {dropdown2 && <NationDropDown
          currentPage={currentPage}
          nationDataList={nationDataList} />}
      </li>
      <li
        className='nav-item'
        onMouseEnter={onMouseEnter3}
        onMouseLeave={onMouseLeave3}
      >
        <a
          className={navbar1State.Chapters ? 'nav-links-active' : 'nav-links'}>
          Chapters <i className='fas fa-caret-down' />
        </a>
        {dropdown3 && <ChapterDropDown
          currentPage={currentPage}
          chapterDataList={chapterDataList}
          currentChapter={currentChapter} />}
      </li>
      <li
        className='nav-item '
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <a
          className={'nav-links highlightedBox'}>
          {year.yearName} <i className='fas fa-caret-down' />
        </a>
        {dropdown && <YearDropDown
          currentPage={currentPage}
          yearDataList={yearDataList}
          currentChapter={currentChapter} />}
      </li>
      <li
        className='nav-item'
      > 
        <Link to={`${pathName}/totalConsolidated?chapterId=1`} className={navbar1State['Total Consolidated'] ? 'nav-links-active' : 'nav-links'} onClick={() => setNavbar1State({ ...initialNavbar1State, 'Total Consolidated': true })}>
          Master Consolidated
        </Link><br />
      </li>
      {/* <li
        className='nav-item'
      >
        <Link to={`/charts`} className={navbar1State.Charts ? 'nav-links-active' : 'nav-links'} onClick={() => setNavbar1State({ ...initialNavbar1State, 'Charts': true })}>
          Charts
        </Link><br />
      </li> */}
      {/* <li
        className='nav-item'
      >
        <Link to='/template/administration' className='nav-links' onClick={() => setNavbar1State({ ...initialNavbar1State, 'Templates': true })}>
          Bar Representation
        </Link><br />
         <div style={{color:'white'}}>(coming soon)</div> 
      </li> */}
      {/* <li>
      <Link
        to='/sign-up'
        className='nav-links-mobile'
        onClick={closeMobileMenu}
      >
        Sign Up
      </Link>
    </li> */}
    </ul>

    {/* <Button /> */}
  </nav>
    {navbar1State.Templates && <nav className='secondNavbar'>
      <div style={{ width: '80%' }} className='flex justifyEnd'>
        <ul className='secondNavMenu'>
          {MenuItems?.map((item) => {
            const navState = { ...initialNavbar2State }
            navState[`${item.page}`] = true;
            return <li key={item.title} className='nav-item'>
              <Link to={item.path} className={navbar2State[`${item.page}`] ? 'nav-links-active' : 'nav-links'} onClick={() => setNavbar2State(navState)}>
                {item.title}
              </Link>
            </li>
          })}
        </ul>
      </div>
      <div style={{ width: '15%' }} className='highlightedBox'>Template will froze by (30-11-2022)</div>
    </nav>}
    {(navbar1State.Chapters && !navbar1State['Total Consolidated']) && <nav className='secondNavbar'>
      <ul className='secondNavMenu'>
        {chapterMenuItems?.map((item) => {
          const navState = { ...initialNavbar2State }
          navState[`${item.page}`] = true;
          return <li key={item.title} className='nav-item'>
            <Link to={`${item.path}?chapterId=${currentChapter.chapterId}`} className={navbar2State[`${item.page}`] ? 'nav-links-active' : 'nav-links'} onClick={() => setNavbar2State(navState)}>
              {item.title}
            </Link>
          </li>
        })}
      </ul>
    </nav>}
  </>
  )
}

export default Navbar