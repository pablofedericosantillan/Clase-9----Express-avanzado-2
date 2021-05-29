class Productos {
    constructor(){
        this.item = [];
        }

    guardar(newProduct){
            try{
                newProduct.id=this.item.length+1;
                this.item.push(newProduct);
                return this.item;

               }catch(err){
                console.log('Hubo un error en la funcion guardar'); 
               }
    }
 }

// exporto una instancia de la clase
module.exports = new Productos();