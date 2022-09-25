import React from "react";

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
    supportedLaguages: Array<SupportedLanguage>;
    containerStyle?: React.CSSProperties;
}

export type SupportedLanguage = {
    name: string;
    keywordsStyle?: Array<string>;
    styleSets : Array<StyleSet>;
}

export type StyleSet = {
    rule: string;
    styles: Array<string>;
}
