import { IconMaps } from 'assets/icons/icon-map';
import React from 'react';

// import {IconsMaps} from 'assets/icons/icon-map'
import { ISvgIcon } from './index.type';

const EmptyIcon: React.FC = () => <div />

export const SvgIcon = (props: ISvgIcon) => {
    const { dimension = '1rem' } = props
    const CustomIcon = IconMaps.find((icon: { name: string }) => icon.name === props.name)?.icon || EmptyIcon

    if (!props.height || !props.width) {
        props = { ...props, height: dimension, width: dimension }
    }

    return <CustomIcon {...props} />
}