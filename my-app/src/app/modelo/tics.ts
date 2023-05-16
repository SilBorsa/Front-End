export class Tics {
    idPersona:number;
    idTic?: number;
    nombreInstTic: string;
    cursoTic: string;
    periodoTic: string;
    urlInstTic: string;
    url_imgTic: string;

    constructor (idPersona: number, 
                 nombreInstTic: string, 
                 cursoTic: string, 
                 periodoTic: string, 
                 urlInstTic: string, 
                 url_imgTic: string) {
        this.idPersona = idPersona;
        this.nombreInstTic = nombreInstTic;
        this.cursoTic = cursoTic;
        this.periodoTic = periodoTic;
        this.urlInstTic = urlInstTic;
        this.url_imgTic = url_imgTic;
    }
}
