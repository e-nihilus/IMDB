import {Profesional} from "./profesional";
import {writeFileSync} from "fs";
import {readFileSync} from "fs";

const readline = require('readline-sync');

const name:string = readline.question('Nombre del profesional? ');
const age:number = readline.question('Edad del profesional? ');
const weight:number = readline.question('Peso del profesional? ');
const hight:number = readline.question('Altura del profesional? ');
const isRetired:boolean = readline.question('Esta retirado? ');
const nationality:string = readline.question('Nacionalidad del profesional? ');
const oscarsNumber:number = readline.question('Numero de oscar? ');
const profesional:string = readline.question('Profesion? ');

let profesionalP:Profesional = new Profesional(name, age, weight, hight, isRetired, nationality, oscarsNumber, profesional);

let data:string = readFileSync("imdbBBDD.json", "utf8");
let movies = JSON.parse(data);
movies[0].director = profesionalP;
writeFileSync("imdbBBDD.json", JSON.stringify(movies));


