export class Redes {
    idPersona:number;
    idRed?: number;
    nombreRed: string;
    urlRed: string;
    url_imgRed: string;

    constructor (idPersona: number, 
                 nombreRed: string, 
                 urlRed: string, 
                 url_imgRed: string) {
        this.idPersona = idPersona;
        this.nombreRed = nombreRed;
        this.urlRed = urlRed;
        this.url_imgRed = url_imgRed;
    }
}
