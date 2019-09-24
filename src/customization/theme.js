import { createMuiTheme } from '@material-ui/core/styles';

const backgroundColor = "#424242";
const textColor = "#fafafa";

const customTheme = {
    palette: {
        header: {
            backgroundColor: backgroundColor,
            textColor: textColor,
        },
        footer: {
            backgroundColor: backgroundColor,
            textColor: textColor,
            fontSize: "12px",
            link: {
                padding: "0 5px 0 5px",
                color: "red",
                textDecoration: "none",
                '&:hover': {
                    textDecoration: "underline",
                }
            },
        },
        navigation: {
            link: {
                color: "#9E9E9E",
                textDecoration: "none",
                '&:hover': {
                    color: "red",
                }
            }
        },
        snackbar: {
            success: {
                back: "#4caf50",
                color: "black"
            },
            warning: {
                back: "#ff9800",
                color: "black"
            },
            error: {
                back: "#b71c1c",
                color: "white"
            },
            info: {
                back: "#607d8b",
                color: "white"
            },
        }
    },
    typography: {
        useNextVariants: true,
    },
    images: {
        StratCard:
            'https://s3.eu-central-1.amazonaws.com/fcap-static-test/shop_statics/strat-card-img-01.jpg',
        Header:
            'https://s3.eu-central-1.amazonaws.com/fcap-static-test/shop_statics/fundamental-capital-logo-icon.svg',
        vvLogo:
            'https://s3.eu-central-1.amazonaws.com/fcap-static-test/logo_website_retina.png',
    },

};
// @ts-ignore
const theme = createMuiTheme(customTheme);

export default theme;
