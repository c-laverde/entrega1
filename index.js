const registerInfo = {
    idCurso:{
        demand: true,
        alias: 'i'
    },
    nombre:{
        demand: true,
        alias: 'n'
    },
    cedula:{
        demand: true,
        alias: 'c'
    }

}

const { printCourses, findCourse } = require ('./courses');
const fs = require ('fs');
const argv = require('yargs')
            .command('inscribir','Realizar inscripción en el curso.', registerInfo)
            .argv;

const createRegister = (info) => {
    fs.writeFile('registro.txt', info, (err) => {
        if(err) throw (err);
        console.log('Registro exitoso, se ha creado un documento con la información del curso.');
    });
}

if(argv.i){
    const course = findCourse(argv.i);
    
    if(course){
        let courseInfo = `El usuario ${argv.n} identificado con cc ${argv.c} quedó inscrito al curso:
        Código: ${course.code} - Nombre: ${course.name}, Duración: ${course.time}, Valor: ${course.cost}`
    
        createRegister(courseInfo);
    
    } else {
        console.log('El curso ingresado no existe, por favor ingrese un código de curso válido.');
        printCourses((courseInfo) => {
            console.log(courseInfo);
        });
    }
} else {
    printCourses((courseInfo) => {
        console.log(courseInfo);
    });
}


