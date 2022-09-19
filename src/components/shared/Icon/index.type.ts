import React from 'react';

export interface ISvgIcon {
    name: IconNames;
    color?: string;
    fill?: string;
    height?: string;
    width?: string;
    dimension?: string;
    className?: string;
    onClick?: () => void;

}

export type IconNames =
    | 'Logo';

export interface IIconMaps {
    name: IconNames;
    icon: React.FC<ISvgIcon>;
}