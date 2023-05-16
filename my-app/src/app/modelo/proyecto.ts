export class Proyecto {
    idPersona:number;
    idPy?: number;
    nombrePy: string;
    periodoPy: string;
    descPy: string;
    fotoPy: number; //indica cantidad de fotos

    constructor (idPersona: number, 
                 nombrePy: string, 
                 periodoPy: string,
                 descPy: string,
                 fotoPy: number) {
        this.idPersona = idPersona;
        this.nombrePy = nombrePy;
        this.periodoPy = periodoPy;
        this.descPy = descPy;
        this.fotoPy = fotoPy;
    }
}
