export interface IResponse {
    docs: []
}

interface IHeadline {
    main: string
}

export interface IArticle {
    abstract?: string,
    web_url?: string,
    snippet?: string,
    lead_paragraph?: string,
    print_section?: string,
    print_page?: string,
    source?: string,
    keywords: [{
        value: '',
    }],
    multimedia: [{
        url: string,

    }],
    headline: IHeadline
}

export interface IResults {
    response: IResponse
}

export interface IState {
    query?: string,
    startDate?: string,
    endDate?: string,
    response?: IResults,
}


export interface IValue{
    value: '',
    name: ''
}


