import {Movie} from "./movie";

export class IMDB{
    //atributos
    peliculas: Movie[];

    //constructor
    constructor(peliculas:Movie[]){
        this.peliculas=peliculas;
    }
}