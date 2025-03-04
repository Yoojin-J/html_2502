export const fncA = () => {
    console.log("fncA");
}
export const fncB = () => {
    console.log("fncB");
}
export const msg = "hello";


const fncC = () => {
    console.log("fncC");
}
const fncD = () => {
    console.log("fncB");
}
export {
    fncC,
    fncD
}

const fncE = () => {
    console.log("fncC");
}
export default fncE;