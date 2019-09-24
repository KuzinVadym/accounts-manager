import React, { useState } from 'react';
import injectSheet from "react-jss";

import TextField from "@material-ui/core/TextField";
import InputFieldAdornment from '../../Components/InputFieldAdornment';

export interface Props {
    classes: any,
    id?: string,
    type: string,
    label: string,
    value: string,
    onChange: Function,
    onBlur?: Function,
    onKeyDown?: Function,
    valid?: any,
    helperText?: any,
    helperTextStatus?: boolean,
    onFocus?: any,
    focus?: any,
}

const styles = (theme: any) => {
    return {
        inputRoot: {
            paddingRight: "0"
        },
        helperTextSuccess: {
            color: "#83dd0f",
            textAlign: "center"
        },
        helperTextFail: {
            color: "#dd150c",
            textAlign: "center"
        }
    }
};

const InputField =({ classes, id, type, label, value, onChange, onFocus, helperText, helperTextStatus, onBlur, onKeyDown, focus, valid=true }: Props) => {

    // @ts-ignore
    const [fieldType, changeFieldTypeHandler] = useState(type);
    const [showStatus, setShowStatusHandler] = useState(false);

    function helperStyle(status: any) {
        if (status !== undefined) {
            return (status) ? classes.helperTextSuccess : classes.helperTextFail
        }
        return null
    }

    return (
        <TextField
            id={id}
            variant="outlined"
            autoFocus={focus}
            InputLabelProps={{
                classes: {}
            }}
            InputProps={{
                classes: {
                    root: classes.inputRoot,
                },
                endAdornment:  <InputFieldAdornment
                    fieldType={fieldType}
                    usageType={type}
                    onFieldTypeChange={changeFieldTypeHandler}
                    error={!valid}
                    visibility={showStatus}
                    showPasswordHandler={setShowStatusHandler}
                />,
            }}
            FormHelperTextProps={{
                classes: {
                    root: helperStyle(helperTextStatus)
                },
            }}
            helperText={helperText}
            fullWidth={true}
            type={fieldType}
            label={label}
            value={value}
            error={!valid}
            onFocus={ onFocus ? () => {onFocus()} : undefined}
            onChange={(e) => { onChange(e.target.value) }}
            onKeyDown={onKeyDown ? (e) => onKeyDown(e) : undefined}
            onBlur={onBlur ? (e) => onBlur(e) : undefined}
        />
    );
};

export default injectSheet(styles)(InputField);
