const wizard = {
    name : 'Michel',
    skills : ['magie du feu', 'magie de la glace', 'fabrication de crème glacée'],
    age : 456,
    spell : function (){
        return "Abracadabra";
    }
}

wizard.name = "Robert";
wizard.mount = "Aigle"

console.log(wizard.spell());
