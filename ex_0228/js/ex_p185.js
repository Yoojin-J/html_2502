// 1
export const fncA = () => {
    console.log("fncA");
};
export const fncB = () => {
    console.log("fncB");
};
export const msg = "hello";


// 2
const fncC = () => {
    console.log("fncC");
};
const fncD = () => {
    console.log("fncB");
};
export {
    fncC,
    fncD
};


// 3
const fncE = () => {
    console.log("fncC");
};
export default fncE;