// Copyright (C) 2020-2022 Intel Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import Popover from 'antd/lib/popover';
import Icon from '@ant-design/icons';

import { Canvas } from 'cvat-canvas-wrapper';
import { Canvas3d } from 'cvat-canvas3d-wrapper';
import { ShapeType } from 'reducers';

import { CubeIcon } from 'icons';

import DrawShapePopoverContainer from 'containers/annotation-page/standard-workspace/controls-side-bar/draw-shape-popover';
import withVisibilityHandling from './handle-popover-visibility';
import CuboidIcon1 from '../../../../assets/cuboid-icon1.svg';

export interface Props {
    canvasInstance: Canvas | Canvas3d;
    isDrawing: boolean;
    disabled?: boolean;
}

const CustomPopover = withVisibilityHandling(Popover, 'draw-cuboid');
function DrawCuboidControl(props: Props): JSX.Element {
    const { canvasInstance, isDrawing, disabled } = props;
    const dynamicPopoverProps = isDrawing ? {
        overlayStyle: {
            display: 'none',
        },
    } : {};

    const dynamicIconProps = isDrawing ? {
        className: 'cvat-draw-cuboid-control cvat-active-canvas-control',
        onClick: (): void => {
            canvasInstance.draw({ enabled: false });
        },
    } : {
        className: 'cvat-draw-cuboid-control',
    };

    return disabled ? (
        <Icon className='cvat-draw-cuboid-control cvat-disabled-canvas-control' component={CubeIcon} />
    ) : (
        <CustomPopover
            {...dynamicPopoverProps}
            overlayClassName='cvat-draw-shape-popover'
            placement='right'
            content={<DrawShapePopoverContainer shapeType={ShapeType.CUBOID} />}
        >
            {/* <Icon {...dynamicIconProps} component={CubeIcon} /> */}
            <CuboidIcon1 {...dynamicIconProps}/>
        </CustomPopover>
    );
}

export default React.memo(DrawCuboidControl);