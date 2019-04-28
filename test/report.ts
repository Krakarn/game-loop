const report = document.querySelector('#report') as HTMLDivElement;
const putReport = (html: string) => {
  const newReport = document.createElement('div');
  newReport.innerHTML = html;
  report.appendChild(newReport);
}

const putSuccess = (msg: string) =>
  putReport(`<div class="success">${msg}</div>`);
;

const putFailure = (msg: string) =>
  putReport(`<div class="failure">${msg}</div>`);
;

export const test = (name: string, f: Function) => {
  try {
    f();
    putSuccess(`Test ${name} succeded.`);
  } catch(e) {
    putFailure(`Test ${name} failed: ${e.message}`);
  }
};

export const assert = (condition: boolean, message: string) => {
  if (!condition) {
    throw new Error(message);
  }
};

export const expect = <T>(t: T) => ({
  toBe: (t2: T) => assert(
    t === t2,
    `expected ${t} to be ${t2}`,
  ),
  toBeInstanceOf: (c: any) => assert(
    t instanceof c,
    `expected ${t} to be instance of ${c.name || c}`,
  ),
  toBeOfType: (type: 'object' | 'number' | 'string' | 'function' | 'undefined') => assert(
    typeof t === type,
    `expected ${t} to be of type ${type}`,
  ),
});

const initializeReport = () => {
  const style = document.createElement('style') as HTMLStyleElement;
  style.innerText = `
    .success { background-color: green; color: white; }
    .failure { background-color: red; color: white; }
  `;
  document.body.appendChild(style);
};

initializeReport();
