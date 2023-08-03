//### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
function conseguirTipoSuscripcion(suscripción) {
    if (suscripción == "Free") {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    } if(suscripción == "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    } if(suscripción == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    } if(suscripción == "ExpertPlus"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }else{
        console.warn("Solo puedes tomar los cursos gratis");
    }
}

conseguirTipoSuscripcion('Free')
//Solo puedes tomar los cursos gratis
//Solo puedes tomar los cursos gratis

function conseguirTipoSuscripcion(suscripción) {
    if (suscripción == "Free") {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    } if(suscripción == "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    } if(suscripción == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    } if(suscripción == "ExpertPlus"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }else{
        console.warn("Solo puedes tomar los cursos gratis");
    }
}

conseguirTipoSuscripcion('Free')
//Solo puedes tomar los cursos gratis

conseguirTipoSuscripcion("Basic")
//Puedes tomar casi todos los cursos de Platzi durante un mes

conseguirTipoSuscripcion('lalala')
//Solo puedes tomar los cursos gratis

//💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays o objetos y un solo condicional. 😏

const tiposDeSuscripciones = {
    Free: 'Solo puedes tomar los cursos gratis',
    Basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    Expert:'Puedes tomar casi todos los cursos de Platzi durante un mes',
    Premium :'Tú y alguien más pueden tomar TODOS los cursos de Platzi',
    ExpertPlus:' Puedes tomar TODOS los cursos de Platzi durante un año'
}
tiposDeSuscripciones.Free
//'Solo puedes tomar los cursos gratis'
tiposDeSuscripciones.Premium
//'Tú y alguien más pueden tomar TODOS los cursos de Platzi'
tiposDeSuscripciones['Free' ]
//'Solo puedes tomar los cursos gratis'
const ejemploSuscripciones = 'Free'
//undefined
tiposDeSuscripciones[ejemploSuscripciones]
//'Solo puedes tomar los cursos gratis'


function consegirTipoSuscripcion(suscripción) {
    if (tiposDeSuscripciones[suscripción]) {
        console.log(tiposDeSuscripciones[suscripción]);
        return;
    }
    console.warn('Este tipo de Suscripcion no existe');
}
consegirTipoSuscripcion('Free')
//Solo puedes tomar los cursos gratis
consegirTipoSuscripcion('ExpertPlus')
//Puedes tomar TODOS los cursos de Platzi durante un año
consegirTipoSuscripcion('lalala')
// Este tipo de Suscripcion no existe
