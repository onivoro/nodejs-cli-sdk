const DOUBLE_DASH = /^--/;

function isFlag(arg) {
  return arg && DOUBLE_DASH.test(arg);
}

function fromFlag(arg) {
  return arg && arg.replace(DOUBLE_DASH, '');
}

function helpRequested(args) {
  return args && args.length == 1 && args[0].replace(DOUBLE_DASH, '') === 'help';
}

export function argParser(args) {
  if (helpRequested(args)) {
    return null;
  }

  const output = {};

  for (let i = 0; i < args.length; i++) {
    const current = args[i];
    const next = args[i + 1];
    if (isFlag(current)) {
      output[fromFlag(current)] = next;
    }
  }

  return output;
}


