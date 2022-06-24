"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cyan = exports.yellow = exports.green = exports.red = exports.CYAN = exports.YELLOW = exports.GREEN = exports.RED = exports.RESET = void 0;
exports.RESET = '\x1b[0m';
exports.RED = '\x1b[38;5;1m';
exports.GREEN = '\x1b[38;5;2m';
exports.YELLOW = '\x1b[38;5;3m';
exports.CYAN = '\x1b[38;5;6m';
const red = (text) => `${exports.RED}${text}${exports.RESET}`;
exports.red = red;
const green = (text) => `${exports.GREEN}${text}${exports.RESET}`;
exports.green = green;
const yellow = (text) => `${exports.YELLOW}${text}${exports.RESET}`;
exports.yellow = yellow;
const cyan = (text) => `${exports.CYAN}${text}${exports.RESET}`;
exports.cyan = cyan;
//# sourceMappingURL=colors.js.map