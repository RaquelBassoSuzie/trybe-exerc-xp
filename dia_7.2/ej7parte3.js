const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  // crie uma função para adicionar o turno da noite na lesson2//
  const addnewKey = (obj, key, value) => {
      obj[key] = value;

  };
  addnewKey(lesson2, 'turno', 'noite');
  // crie uma função para listar as keys de 1 objeto. Deve receber 1 obj como param//
  const listKeys = (obj) => Object.keys(obj);
  //console.log(listKeys(lesson1))
  //crie uma função para mostrar tamanho de 1 obj//
  const sizeObjt = (obj) => Object.keys(obj).length;
  //console.log(sizeObjt(lesson1));
  // Object.assing//
  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  //console.log(allLessons);
  //ej. 6
  function getStudentsTotal(lessons){
    const keys = Object.keys(lessons);

    let total = 0;
    
    for (let index = 0; index < keys.length; index += 1){
    const currentKey = keys[index];
    total += lessons[currentKey].numeroEstudantes
  }

  return total
}

  console.log(getStudentsTotal(allLessons));