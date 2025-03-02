export type animPreset = {
    [key: string]: {
        start: {
            [key: string]: string | number;
        };
        end: {
            [key: string]: string | number;
        };
    };
};

export type education = {
    date: string;
    label: string;
    location: string;
    length: number;
};

export type experience = {
    date: string;
    label: string;
    location: string;
    length: number;
};

export type metaList = {
    [key: string]: {
        [key: string]: string;
    };
};

export type skills = {
    label: string;
    score: number;
    tags: skillTag[];
};

type skillTag = {
    tag: string;
};

export type skillTags = {
    id: string;
    label: string;
};

export type skillWordCloud = skills & {
    text: string;
    value: number;
};
