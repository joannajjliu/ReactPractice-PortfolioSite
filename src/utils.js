console.log("utils.js is running");

export const square = (x) => x * x;

export const add = (a, b) => a + b;

const subtract = (a, b) => a - b;
export default subtract;

// export { square, add, subtract as default }; //another way to do named export(s) and default export