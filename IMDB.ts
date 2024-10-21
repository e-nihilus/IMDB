import {Movie} from "./movie";
import {readFileSync} from "fs";
import {writeFileSync} from "fs";

export class IMDB{
    //atributos
    peliculas: Movie[];

    //constructor
    constructor(peliculas:Movie[]){
        this.peliculas=peliculas;
    }

    //metodos

    public escribirEnFicheroJSON(nombreFichero: string){
        let escribirFichero:string = JSON.stringify(this.peliculas);
        writeFileSync(nombreFichero, escribirFichero);
    }

    public obtenerInstanciaIMDB(nombreFichero:string):IMDB{
        let leerFichero:string = readFileSync(nombreFichero, "utf8");
        let result:IMDB = JSON.parse(leerFichero);

        return result
    }

}