export type Lang = {
    name: string;
    keywords: Array<string>;
    rules: Array<Rule>;
}

export type Rule = {
    name: string;
    pattern: string;
}

export type Theme = {
    name: string;
    styleSets: Array<StyleSet>;
}

export type StyleSet = {
    language: string;
    rule: string;
    styles: Array<string>;
}