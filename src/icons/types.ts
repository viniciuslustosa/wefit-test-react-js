import { IconList } from ".";

export type IconString = keyof typeof IconList;

export interface IconProps {
    color?: string;
    size?: number;
}

export interface IconDTO {
    name: IconString;
    color?: string;
    size?: number;
    onClick?: () => void
}

export interface IIcons {
    [key: string]: any;
}