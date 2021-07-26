import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {changeInputValueAC} from "../../../h10/bll/settingsValueReducer";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    value: number
    onChanges: any
    min: number
};

const SuperRange: React.FC<SuperRangePropsType> = React.memo((
    {value, onChanges, min}
) => {

    const handleChange = (e: ChangeEvent<{}>, newValue: any) => {
        if(newValue < min){
            return
        }else{
           onChanges(changeInputValueAC(newValue))
        }
    }

    return (
        <>
            <Grid container>
                <Grid item style={{width: "400px"}}>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        // getAriaValueText={valuetext}
                    />
                </Grid>
            </Grid>
            {/*<input*/}
            {/*    type={'range'}*/}
            {/*    onChange={onChangeCallback}*/}
            {/*    className={finalRangeClassName}*/}

            {/*    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)*/}
            {/*/>*/}
        </>
    )
})

export default SuperRange
