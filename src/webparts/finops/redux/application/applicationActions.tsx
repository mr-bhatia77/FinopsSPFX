import { UPDATE_PAGE, UPDATE_CHAPTER, UPDATE_YEAR, UPDATE_NATION, CHANGE_DATA_FETCHING } from './applicationTypes';

export const updatePage = (page:string) => {
    return {
        type: UPDATE_PAGE,
        page: page
    }
}

export const updateChapter = (chapter:any) => {
    console.log(chapter)
    return {
        type: UPDATE_CHAPTER,
        chapter: chapter
    }
}

export const updateYear = (year:any) => {
    // console.log(chapter)
    return {
        type: UPDATE_YEAR,
        year: year
    }
}

export const updateNation = (nation:any) => {
    // console.log(chapter)
    return {
        type: UPDATE_NATION,
        nation: nation
    }
}

export const changeDataFetching = () => {
    // console.log(chapter)
    return {
        type: CHANGE_DATA_FETCHING,
    }
}