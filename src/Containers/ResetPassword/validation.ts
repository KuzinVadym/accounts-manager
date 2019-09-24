export function validateUserName(value: string): boolean {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gm;
    return regex.test(value);
}

export function validatePassword(value: string): boolean {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@_#$%^&*])(?=.{8,})/gm;
    return regex.test(value);
}

export function capitalInPassword(value: string): boolean {
    const regex = /^(?=.*[A-Z])/gm;
    return regex.test(value);
}
export function charInPassword(value: string): boolean {
    const regex = /^(?=.*[!@_#$%^&*])/gm;
    return regex.test(value);
}
export function numberInPassword(value: string): boolean {
    const regex = /^(?=.*[0-9])/gm;
    return regex.test(value);
}
export function lengthInPassword(value: string): boolean {
    const regex = /^(?=.{8,})/gm;
    return regex.test(value);
}

export function validatePassConfirm(password: string): Function {
    return function (value: string) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@_#$%^&*])(?=.{8,})/gm;

        return regex.test(value) && password === value;
    }
}

export function matchPassword(value: string, password: string): boolean {
    return password === value;
}

export function passwordRules(password: string) {
    return [
        {text: 'At least 1 capital letter', status: capitalInPassword(password)},
        {text: 'At least 1 special character*', tooltip: '! @ _ # $ % ^ & *', status: charInPassword(password)},
        {text: 'At least 1 capital number', status: numberInPassword(password)},
        {text: 'More than 8 symbols long', status: lengthInPassword(password)},
    ];
}

export function rulesVisibleStatus(password: string, status: boolean) {
    if (password.length > 0) {
        return (capitalInPassword(password) && charInPassword(password)
            && numberInPassword(password) && lengthInPassword(password));
    } else {
        return status;
    }
}

export function passwordConfirmationRules(confirmation: string, password: string) {
    return [
        {text: 'At least 1 capital letter', status: capitalInPassword(confirmation)},
        {text: 'At least 1 special character*', tooltip: '! @ _ # $ % ^ & *', status: charInPassword(confirmation)},
        {text: 'At least 1 capital number', status: numberInPassword(confirmation)},
        {text: 'More than 8 symbols long', status: lengthInPassword(confirmation)},
        {text: 'Passwords should match', status: matchPassword(confirmation, password)},
    ];
}

export function rulesVisibleConfirmStatus(confirmation: string, password: string, status: boolean) {
    if (confirmation.length > 0) {
        return (capitalInPassword(confirmation) && charInPassword(confirmation)
            && numberInPassword(confirmation) && lengthInPassword(confirmation) && matchPassword(confirmation, password));
    } else {
        return status;
    }
}





