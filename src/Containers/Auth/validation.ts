export function validateUserName(value: string): boolean {
    const regex = /^\w+([-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gm;
    return regex.test(value);
}


