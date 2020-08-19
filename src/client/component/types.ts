export interface IPost {
    userName: string;
    message: string;
}

export type PostPropsType = {
    mix?: string;
} & IPost

export type TagPropsType = {
    mix?: string;
    // label: string;
} & ITab

export interface IImg {
    label: string;
    url: string;
    alt: string;
}

export interface INews {
    label: string;
    description: string;
    url: string;
    img: IImg;
}

export interface ITab {
    label: string;
}

export type MainPropsType = {
    news: INews[];
    filter: any;
}

export type NewsPropsType = {
    index: number;
} & INews
