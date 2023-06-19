export class Estudio {
    idPersona:number;
    idEstudio?: number;
    tituloEstudio: string;
    periodoEstudio: string;
    nombreInstituto: string;
    urlInstituto: string;
    url_imgInst: string;

    constructor (idPersona: number, 
                 tituloEstudio: string,
                 periodoEstudio: string, 
                 nombreInstituto: string, 
                 urlInstituto: string, 
                 url_imgInst: string) {
        this.idPersona = idPersona;
        this.tituloEstudio = tituloEstudio;
        this.periodoEstudio = periodoEstudio;
        this.nombreInstituto = nombreInstituto;
        this.urlInstituto = urlInstituto;
        this.url_imgInst = url_imgInst;
    }
}
