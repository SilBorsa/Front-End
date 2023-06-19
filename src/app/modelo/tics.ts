export class Tics {
    idPersona:number;
    idTic?: number;
    cursoTic: string;
    periodoTic: string;
    nombreInstTic: string;
    urlInstTic: string;
    url_imgTic: string;

    constructor (idPersona: number, 
                 cursoTic: string, 
                 periodoTic: string,
                 nombreInstTic: string, 
                 urlInstTic: string, 
                 url_imgTic: string) {
        this.idPersona = idPersona;
        this.cursoTic = cursoTic;
        this.periodoTic = periodoTic;
        this.nombreInstTic = nombreInstTic;
        this.urlInstTic = urlInstTic;
        this.url_imgTic = url_imgTic;
    }
}
