import * as React from 'react';
import injectSheet from "react-jss";

export interface Props {
    classes: any
}

const styles = (theme: any) => {
    return {
    }
};

const NoMatch = ({classes}: Props) => {
    return (
        <div>
            NoMatch
        </div>
    );
}


export default injectSheet(styles)(NoMatch);
