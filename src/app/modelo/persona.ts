export class Persona {
    idPersona?: number;
    nombrePersona: string;
    apellidoPersona: string;
    subTitulo: string;
    emailPersona: string;
    celuPersona: string;
    acercaPersona: string;
    url_imgPersona: string;

    constructor(nombrePersona: string, 
                apellidoPersona: string, 
                subTitulo: string,
                emailPersona: string,
                celuPersona: string,
                acercaPersona: string,
                url_imgPersona: string) {
        this.nombrePersona = nombrePersona;
        this.apellidoPersona = apellidoPersona;
        this.subTitulo = subTitulo;
        this.emailPersona = emailPersona;
        this.celuPersona = celuPersona;
        this.acercaPersona = acercaPersona;
        this.url_imgPersona = url_imgPersona;
    }
}