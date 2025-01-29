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

export type metaList = {
    [key: string]: {
        [key: string]: string;
    };
};

export type skillList = {
    label: string;
    score: number;
    tags: string[];
};

export type skillTags = {
    id: string;
    label: string;
};

export type skillWordCloud = skillList & {
    text: string;
    value: number;
};
