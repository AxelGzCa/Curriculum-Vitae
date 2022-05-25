if('serviceworker' in navigator){
    navigator.serviceworker.register('https://axelgzca.github.io/Curriculum-Vitae/serviceworker.js')
    .then(reg => console.log('Registro sw exitoso', reg))
    .catch(error => console.warn(error))
}