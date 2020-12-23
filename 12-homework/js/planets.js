async function getPlanets() {
    await fetch('https://swapi.dev/api/planets/').then((res) => {
        return res.json()
    })
        .then((data) => data.results.map((e)=>{
            const newLi = document.createElement('li');
            newLi.innerHTML = `name: ${e.name}`+' '+`climate: ${e.climate}`+' '+`diameter: ${e.diameter}`+' '+`population: ${e.population}`;
            document.querySelector('#planetsList').append(newLi);
        }))

}
getPlanets();
document.querySelector('#back').addEventListener('click', ()=>{
    window.location.href='index.html';
})
