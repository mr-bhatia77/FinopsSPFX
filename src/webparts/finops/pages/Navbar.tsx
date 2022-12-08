// import * as React from 'react';
// import {FunctionComponent, useEffect, useState } from 'react';
// import { Link, useLocation, useSearchParams } from 'react-router-dom';
// import { chapterList, yearList, nationList } from "./MenuItems";
// // import { useSelector, useDispatch } from 'react-redux';


// interface INavbarProps {
//     chapter:string, 
//     year:string
// }
  

// const Navbar:FunctionComponent<INavbarProps> = (props) => {

//     const {chapter,year} = props;
//     // const dispatch = useDispatch();
//   const location = useLocation();
//   // const navigate =useNavigate();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const currentChapter = chapter;
//   const [loading, setLoading] = useState<boolean>(true)

//   const initialNavbar1State = {
//     Home: false,
//     Templates: false,
//     Chapters: false,
//     'Total Consolidated': false,
//     Charts: false
//   }

//   const initialNavbar2State = {
//     'spin4': false,
//     'takeSteps': false,
//     'majorGifts': false,
//     'specialEvents': false,
//     'administration': false,
//     'administration(M&T)': false,
//     'consolidated': false,
//     'budgetSpread': false
//   }

//   const [click, setClick] = useState(false);
//   const [dropdown3, setDropdown3] = useState(false)
//   const [dropdown, setDropdown] = useState(false)
//   const [dropdown2, setDropdown2] = useState(false)
//   const [navbar1State, setNavbar1State] = useState({ ...initialNavbar1State, 'Home': true })
//   const [navbar2State, setNavbar2State] = useState({ ...initialNavbar2State, 'majorGifts': true })
//   const [chapterDataList, setChapterDataList] = useState(chapterList)
//   const [yearDataList, setYearDataList] = useState(yearList)
//   const [nationDataList, setNationDataList] = useState(nationList)

//   useEffect(() => {
//     if (navbar1State.Templates) {
//       setNavbar2State({ ...initialNavbar2State, [currentPage]: true })
//     }
//     if (navbar1State.Chapters) {
//       setNavbar2State({ ...initialNavbar2State, [currentPage]: true })
//     }
//   }, [navbar1State])

//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar