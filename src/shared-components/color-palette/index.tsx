import React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import {Tableau10} from "../../theme/constants";

const ColorPalette = ({color, setColor}: { color: string, setColor: (value: string) => void }) => {
    const handleChange = (_: React.MouseEvent<HTMLElement>, nextColor: string) => {
        setColor(nextColor);
    };

    return <>
        <ToggleButtonGroup
            // orientation="vertical"
            value={color}
            exclusive
            onChange={handleChange}
        >
            {Tableau10.map((value) => (
                <ToggleButton key={value} value={value} sx={{p: 1}}>
                    <div
                        style={{
                            width: 15,
                            height: 15,
                            backgroundColor: value,
                            display: 'inline-block',
                        }}
                    />
                </ToggleButton>
            ))}
        </ToggleButtonGroup></>
}

export default ColorPalette
