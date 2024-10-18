import { Profesional } from "./profesional";

export class Movie{

    //atributos
    public title: string;
    public releaseYear: number;
    public actors: Profesional[];
    public nacionality: string;
    public director: Profesional;
    public writer: Profesional;
    public language: string;
    public plataforma: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

    //constructor
    constructor(title:string, releaseYear:number, nacionality:string, genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = [];
        this.nacionality =  nacionality;
        this.director;
        this.writer;
        this.language;
        this.plataforma;
        this.isMCU
        this.mainCharacterName;
        this.producer;
        this.distributor
        this.genre = genre;
    }
    
    //metodos
    public printAllM(): void {
        console.log("Titulo: " + this.title);
        console.log("Años de lanzamiento: " + this.releaseYear);
        console.log("Actores:");
        this.actors.forEach(actor => actor.printAllP());
        console.log("Nacionalidad: " + this.nacionality);
        console.log("Director:");
        this.director.printAllP();
        console.log("Escritor:");
        this.writer.printAllP();
        console.log("Idioma: " + this.language);
        console.log("Plataforma: " + this.plataforma);
        console.log("Pertenece al MCU: " + this.isMCU);
        console.log("Nombre del protagonista: " + this.mainCharacterName);
        console.log("Productor: " + this.producer);
        console.log("Distribuidor: " + this.distributor);
        console.log("Genero: " + this.genre + "\n");
    }
}

