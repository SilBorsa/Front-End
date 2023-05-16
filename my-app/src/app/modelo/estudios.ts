export class Estudios {
    idPersona:number;
    idEstudio?: number;
    nombreInstituto: string;
    tituloEstudio: string;
    periodoEstudio: string;
    urlInstituto: string;
    url_imgInst: string;

    constructor (idPersona: number, 
                 nombreInstituto: string, 
                 tituloEstudio: string, 
                 periodoEstudio: string, 
                 urlInstituto: string, 
                 url_imgInst: string) {
        this.idPersona = idPersona;
        this.nombreInstituto = nombreInstituto;
        this.tituloEstudio = tituloEstudio;
        this.periodoEstudio = periodoEstudio;
        this.urlInstituto = urlInstituto;
        this.url_imgInst = url_imgInst;
    }
}
