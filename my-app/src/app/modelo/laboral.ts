export class Laboral {
    idLaboral?: number;
    nombreEmpresa: string;
    descEmpresa: string;
    urlEmpresa: string;
    url_imgLab: string;

    constructor (nombreEmpresa: string, descEmpresa: string, urlEmpresa: string, url_imgLab: string) {
        this.nombreEmpresa = nombreEmpresa;
        this.descEmpresa = descEmpresa;
        this.urlEmpresa = urlEmpresa;
        this. url_imgLab = url_imgLab;
    }

}
