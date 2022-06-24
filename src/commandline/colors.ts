
export const RESET = '\x1b[0m';
export const RED = '\x1b[38;5;1m';
export const GREEN = '\x1b[38;5;2m';
export const YELLOW = '\x1b[38;5;3m';
export const CYAN = '\x1b[38;5;6m';

export const red = (text: string) => `${RED}${text}${RESET}`;
export const green = (text: string) => `${GREEN}${text}${RESET}`;
export const yellow = (text: string) => `${YELLOW}${text}${RESET}`;
export const cyan = (text: string) => `${CYAN}${text}${RESET}`;