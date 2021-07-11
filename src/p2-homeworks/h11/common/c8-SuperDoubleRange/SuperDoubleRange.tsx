import React from 'react'
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    setValueMin: (num: number) => void
    setValueMax: (num: number) => void
    min: number
    max: number
    step: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = React.memo((
    {
        onChangeRange, value,
        setValueMin, setValueMax,
        min,max,step,
        // min, max, step, disable, ...
    }
) => {

    // сделать самому, можно подключать библиотеки

    const handleChange = (e: any, newValue: any) => {
        setValueMin(newValue[0])
        setValueMax(newValue[1])
    }
    return (
        <>
            DoubleRange
            <Grid container>
                <Grid item style={{width: "400px"}}>
                    <Slider
                        min={min}
                        max={max}
                        value={value}
                        step={step}

                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        // getAriaValueText={valuetext}
                    />
                </Grid>
            </Grid>
        </>
    )
})

export default SuperDoubleRange
