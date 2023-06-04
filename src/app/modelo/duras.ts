export class Duras {
    idPersona:number;
    idDura?: number;
    nombreDura: string;
    porcentaje: number;
    num: number;
    giro: number;
    colorDura: string;

    constructor (idPersona: number, 
                 nombreDura: string, 
                 porcentaje: number, 
                 colorDura: string) {
        this.idPersona = idPersona;
        this.nombreDura = nombreDura;
        this.porcentaje = porcentaje;
        this.num = (440 - 440 * porcentaje / 100);
        this.giro = (3.6 * porcentaje);
        this.colorDura = colorDura;
    }
}
