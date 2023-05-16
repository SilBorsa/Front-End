export class Laboral {
    idPersona:number;
    idLaboral?: number;
    nombreEmpresa: string;
    periodoEmpresa: string;
    descEmpresa: string;
    urlEmpresa: string;
    url_imgLab: string;

    constructor (idPersona: number,
                nombreEmpresa: string, 
                periodoEmpresa: string, 
                descEmpresa: string, 
                urlEmpresa: string, 
                url_imgLab: string) {
        this.idPersona = idPersona;
        this.nombreEmpresa = nombreEmpresa;
        this.periodoEmpresa = periodoEmpresa;
        this.descEmpresa = descEmpresa;
        this.urlEmpresa = urlEmpresa;
        this.url_imgLab = url_imgLab;
    }

}
