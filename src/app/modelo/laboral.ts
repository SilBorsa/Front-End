export class Laboral {
    idPersona:number;
    idLaboral?: number;
    periodoEmpresa: string;
    nombreEmpresa: string;
    urlEmpresa: string;
    url_imgLab: string;
    descEmpresa: string;

    constructor (idPersona: number,
                periodoEmpresa: string, 
                nombreEmpresa: string, 
                urlEmpresa: string, 
                url_imgLab: string,
                descEmpresa: string) {
        this.idPersona = idPersona;
        this.periodoEmpresa = periodoEmpresa;
        this.nombreEmpresa = nombreEmpresa;
        this.urlEmpresa = urlEmpresa;
        this.url_imgLab = url_imgLab;
        this.descEmpresa = descEmpresa;
    }

}
