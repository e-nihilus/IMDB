import {Movie} from "./movie";
import {Profesional} from "./profesional";

let movie1 = new Movie("Tu casa", 2000, "España", "Acción");


let actor1 = new Profesional("Pepe", 23, 77, 180,  false, "USA", 0, "Actor");
let actor2 = new Profesional("Jhon", 47, 90, 193,  false, "USA", 2, "Actor");

movie1.actors.push(actor1);
movie1.actors.push(actor2);

movie1.director = new Profesional("Gustavo", 53, 98, 170, false, "España", 1, "Director");
movie1.writer = new Profesional("Harry", 38, 83, 174, false, "USA", 0, "Guionista");

movie1.printAllM();
