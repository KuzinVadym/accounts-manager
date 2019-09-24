import * as React from 'react';
import injectSheet from "react-jss";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

export interface Props {
    classes: any,
    error: boolean
    fieldType: string,
    usageType: string,
    visibility: boolean,
    showPasswordHandler: Function,
    onFieldTypeChange: Function,
}

const styles = (theme: any) => {
    return {
        warningIcon: {
            marginRight: "10px",
            color: "red",
            cursor: "pointer"
        },
        defaultIcon: {
            marginRight: "10px",
            color: theme.palette.primary.main,
            cursor: "pointer"
        }
    }
};

const InputFieldAdornment = ({classes, fieldType, onFieldTypeChange,
                                 usageType, error, visibility, showPasswordHandler}: Props) => {

    if (fieldType !== 'email') {
        return (
            <InputAdornment
                position="end"
                className={error ? classes.warningIcon : classes.defaultIcon}
                onClick={() => {
                    showPasswordHandler(!visibility);
                    const nextType = (fieldType === 'password') ? 'text' : 'password';
                    onFieldTypeChange(nextType);
                }}
            >
                <Icon>{
                    (usageType === 'password')
                        ? visibility ? 'visibility_off' :  'visibility'
                        : error ? 'warning' : null
                }</Icon>
            </InputAdornment>
        );
    } else {
        return null;
    }

}

export default injectSheet(styles)(InputFieldAdornment);