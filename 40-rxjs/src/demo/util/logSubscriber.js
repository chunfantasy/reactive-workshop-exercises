const log = name =>
  ['next', 'error', 'complete'].map(s => console.log.bind(console, name, s));

export default log;
