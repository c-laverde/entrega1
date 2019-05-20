const courses = [
    {
        code: 1,
        name: 'Angular',
        time: '40 horas',
        cost: 200
    },
    {
        code: 2,
        name: 'Node',
        time: '20 horas',
        cost: 150
    },
    {
        code: 3,
        name: 'Java',
        time: '100 horas',
        cost: 500
    }
]

const printCourses = (callback) => {
    courses.forEach((course, index) => {
        index++;
        setTimeout(() => {
            let courseInfo = `Código: ${course.code} - Nombre: ${course.name}, Duración: ${course.time}, Valor: ${course.cost}`; 
            callback(courseInfo);
        }, index * 2000);
    });
}

const findCourse = (idCourse) => courses.find(course => course.code == idCourse);

module.exports = {
    printCourses,
    findCourse
};