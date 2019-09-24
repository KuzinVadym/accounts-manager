import * as React from 'react';
import injectSheet from "react-jss";

export interface Props {
    classes: any,
    children: any
}

const styles = (theme: any) => {
    return {
        rules: {
            display: "flex",
            flexDirection: "column"
        }
    }
};

const NoMatch = ({classes, children}: Props) => {
    return (
        <div className={classes.rules}>
            {children}
        </div>
    );
};


export default injectSheet(styles)(NoMatch);
