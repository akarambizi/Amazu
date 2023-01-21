export interface IGridStylesProps {
    spacing?: boolean;
    transition?: boolean;
}

export interface ITitleStylesProps {
    fullWidth?: boolean;
    centered?: boolean;
    marginBottom?: string;
    as?: string;
}

export interface ITextStylesProps {
    display?: string;
    heading?: boolean;
    fullWidth?: boolean;
    centered?: boolean;
    marginBottom?: string;
    sm?: boolean;
    bold?: boolean;
    secondary?: boolean;
    width?: string;
}

export interface IButtonStylesProps {
    inlineBlock?: boolean;
    secondary?: boolean;
    width?: string;
    shadow?: boolean;
}

export interface ITabsStylesProps {
    marginBottom?: boolean;
    centered?: boolean;
}

export interface ITabStylesProps {
    active?: boolean;
}
