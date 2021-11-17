export default class Item{
    constructor(id,nombre,cant=1,ars=null,usd=null,eur=null){
        this.setId(id);
        this.setNombre(nombre);
        this.cant=cant;
        this.ars=ars;
        this.usd=usd;
        this.eur=eur;
    }

    setId(id){
        if(!id){
            throw new Error("INVALID_ARG: id cannot be empty")
        }
        this.id=id;
    }
    setNombre(nombre){
        if(!nombre){
            throw new Error("INVALID_ARG: name cannot be empty")
        }
        this.nombre=nombre;
    }

}