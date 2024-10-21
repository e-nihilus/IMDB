import { IMDB } from "./IMDB";
import {Movie} from "./movie";
import {Profesional} from "./profesional";
import {readFileSync} from "fs";
import {writeFileSync} from "fs";

//--------------------------movie1---------------------------------
let movie1:Movie = new Movie("Tu casa", 2000, "España", "Acción");
let actor1:Profesional = new Profesional("Pepe", 23, 77, 180,  false, "USA", 0, "Actor");
let actor2:Profesional = new Profesional("Jhon", 47, 90, 193,  false, "USA", 2, "Actor");
let director1:Profesional = new Profesional("Gustavo", 53, 98, 170, false, "España", 1, "Director");
let writer1:Profesional = new Profesional("Harry", 38, 83, 174, false, "USA", 0, "Guionista");

movie1.actors.push(actor1);
movie1.actors.push(actor2);
movie1.director = director1;
movie1.writer = writer1;
movie1.language = "Español";
movie1.plataforma = "Netflix";
movie1.isMCU = false;
movie1.mainCharacterName = "Antonio";
movie1.producer = "Españita goberment";
movie1.distributor = "Su padre"

//-----------------------------movie2----------------------------------
let movie2:Movie = new Movie("Mi casa", 2002, "España", "Acción");
let director2:Profesional = new Profesional("Rodolfo", 66, 104, 174, true, "España", 0, "Director");
let writer2:Profesional = new Profesional("Rufino", 28, 88, 179, false, "Francia", 0, "Guionista");

movie2.actors.push(actor1);
movie2.actors.push(actor2);
movie2.director = director2;
movie2.writer = writer2;
movie2.language = "Español";
movie2.plataforma = "Netflix";
movie2.isMCU = false;
movie2.mainCharacterName = "Antonio Jr";
movie2.producer = "Españita goberment";
movie2.distributor = "Su madre"

//----------------Reto5----------------------

let arrayPelis:Movie[] = [movie1, movie2];
let IMDBPeliculas:IMDB = new IMDB(arrayPelis);

for (let i = 0; i < IMDBPeliculas.peliculas.length; i++) {
    IMDBPeliculas.peliculas[i].printAllM();
}

//------------Reto6----------------

let data:string = JSON.stringify(IMDBPeliculas);
writeFileSync("imdbBBDD.json", data);

let data2:string = readFileSync("./imdbBBDD.json", "utf8");
let objt:IMDB = JSON.parse(data2);

console.log(objt);

//---------------Reto 7--------------------

IMDBPeliculas.escribirEnFicheroJSON("./imdbBBDD.json");

console.log(IMDBPeliculas.obtenerInstanciaIMDB("./imdbBBDD.json"));