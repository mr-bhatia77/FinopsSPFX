export interface IChapter {
    chapter: {
        chapterId: Number,
        chapterName:String,
        chapterDescription: String,
        chapterCode: Number,
        chapterArea: String,
        departmentCode: Number,
        subLedgerCode: Number,
        adminDepartmentCode: Number
    },
}

export interface IChapterInfo {
        chapterId: Number,
        chapterName:String,
        chapterDescription: String,
        chapterCode: Number,
        chapterArea: String,
        departmentCode: Number,
        subLedgerCode: Number,
        adminDepartmentCode: Number
}

export interface IYear {
    yearId: Number,
    yearName: String
}