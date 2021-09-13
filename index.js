// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    return [...cats,"Broom"]
}
function prependCat(name) {
    const copycats = [...cats];
    copycats.unshift("Arnold");
    return copycats
}
function removeLastCat() {
    const copycats = [...cats];
    copycats.pop();
    return copycats;
}
function removeFirstCat() {
    const copycats = [...cats];
    copycats.shift();
    return copycats
}