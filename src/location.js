
// @ts-ignore
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const redirectUrl = getParameterByName('ru');
if (redirectUrl) sessionStorage.setItem("ru", redirectUrl);
const tokenType = getParameterByName('tt');
if (tokenType) sessionStorage.setItem("tt", tokenType);
const userId = getParameterByName('userId');
if (userId) sessionStorage.setItem("userId", userId);
const email = getParameterByName('email');
if (email) sessionStorage.setItem("email", email);
const code = getParameterByName('code');
if (code) sessionStorage.setItem("code", code);

