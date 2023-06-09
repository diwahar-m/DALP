// Copyright (C) 2020-2022 Intel Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import Icon from '@ant-design/icons';
import Popover from 'antd/lib/popover';

import { RotateIcon } from 'icons';
import { Rotation } from 'reducers';
import CVATTooltip from 'components/common/cvat-tooltip';
import withVisibilityHandling from './handle-popover-visibility';
import RotateImageIcon1 from '../../../../assets/rotate-image-icon.svg';

export interface Props {
    clockwiseShortcut: string;
    anticlockwiseShortcut: string;
    rotateFrame(rotation: Rotation): void;
}

const CustomPopover = withVisibilityHandling(Popover, 'rotate-canvas');
function RotateControl(props: Props): JSX.Element {
    const { anticlockwiseShortcut, clockwiseShortcut, rotateFrame } = props;

    return (
        <CustomPopover
            placement='right'
            content={(
                <>
                    <CVATTooltip title={`Rotate the image anticlockwise ${anticlockwiseShortcut}`} placement='topRight'>
                        <Icon
                            className='cvat-rotate-canvas-controls-left'
                            onClick={(): void => rotateFrame(Rotation.ANTICLOCKWISE90)}
                            component={RotateIcon}
                        />
                    </CVATTooltip>
                    <CVATTooltip title={`Rotate the image clockwise ${clockwiseShortcut}`} placement='topRight'>
                        <Icon
                            className='cvat-rotate-canvas-controls-right'
                            onClick={(): void => rotateFrame(Rotation.CLOCKWISE90)}
                            component={RotateIcon}
                        />
                    </CVATTooltip>
                </>
            )}
            trigger='hover'
        >
            {/* <Icon className='cvat-rotate-canvas-control' component={RotateImageIcon1} /> */}
            <RotateImageIcon1 className='cvat-rotate-canvas-control'  style={{marginTop:'5px'}}/>
        </CustomPopover>
    );
}

export default React.memo(RotateControl);
