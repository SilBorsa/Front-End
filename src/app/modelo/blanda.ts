export class Blanda {
    idPersona:number;
    idBlanda?: number;
    nombreBlanda: string;
    colorBlanda: string;
    url_imgBlanda: string;

    constructor (idPersona: number, 
                 nombreBlanda: string, 
                 colorBlanda: string,
                 url_imgBlanda: string) {
        this.idPersona = idPersona;
        this.nombreBlanda = nombreBlanda;
        this.colorBlanda = colorBlanda;
        this.url_imgBlanda = url_imgBlanda;
    }
}
