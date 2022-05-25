if('serviceWorker' in navigator){
    navigator.serviceWorker.register('https://axelgzca.github.io/Curriculum-Vitae/serviceworker.js')
    .then(reg => console.log('Registro sw exitoso', reg))
    .catch(error => console.warn(error))
}