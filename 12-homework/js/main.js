async function getPlanets() {
    await fetch('https://swapi.dev/api/planets/').then((res) => {
        return res.json()
    })
        .then((data) => data.results.map((e) => {
            const newLi = document.createElement('li');
            newLi.innerHTML = `${e.name}`;
            document.querySelector('#planetsList').append(newLi);
        }))

}

document.querySelector('#planets').addEventListener('click', getPlanets);
document.querySelector('#next').addEventListener('click', () => {
    window.location.href = 'planets.html';
})
const index = [1, 2, 3, 4, 5, 10, 13, 14, 18, 20, 21, 22, 23, 24, 25, 26];
index.forEach(item => {
    document.querySelector(`.character_${item}`).addEventListener('mousedown', async function getPeople() {

        await fetch(`https://swapi.dev/api/people/${item}/`).then((res) => {
            return res.json()
        })
            .then((data) => console.log(data));
        //event.target.classList.add('push_button');
        window.location.hash = `#name` + `${item}`;
    });
    /*document.querySelector(`.character_${item}`).addEventListener('mouseup', () => {
        event.target.classList.remove('push_button');
    })*/
})
const getInformation = () => {
    index.forEach(item => {
        const newLiName = document.createElement('li');

        async function getName(newLi) {
            await fetch(`https://swapi.dev/api/people/${item}/`).then((res) => {
                return res.json()
            })
                .then((data) => newLi.innerHTML = data.name);
        }

        getName(newLiName);
        document.querySelector(`#name` + `${item}`).append(newLiName);
        const newLiDay = document.createElement('li');

        async function getBirthDay(newLi) {
            await fetch(`https://swapi.dev/api/people/${item}/`).then((res) => {
                return res.json()
            })
                .then((data) => newLi.innerHTML = data.birth_year);
        }

        getBirthDay(newLiDay);
        document.querySelector(`#name` + `${item}`).append(newLiDay);
        const newLiGender = document.createElement('li');

        async function getGender(newLi) {
            await fetch(`https://swapi.dev/api/people/${item}/`).then((res) => {
                return res.json()
            })
                .then((data) => newLi.innerHTML = data.gender);
        }

        getGender(newLiGender);
        document.querySelector(`#name` + `${item}`).append(newLiGender);
    })
}
getInformation();

function getNewLi() {
    return document.createElement('li');
}

index.forEach(item => {
    const newLi = getNewLi();
    const img = document.createElement('img');
    document.querySelector('#characters').addEventListener('click', async function getCharacters() {
        await fetch(`https://swapi.dev/api/people/${item}/`).then((res) => {
            return res.json()
        })
            .then((data) => newLi.innerHTML = `${data.name}` + '_' + `${data.birth_year}` + '_' + `${data.gender}`)
        window.location.hash = "#all_characters";
        img.src = `images/${item}.png`;
        newLi.appendChild(img);
        document.querySelector('#charactersList').append(newLi);

    });
})
document.querySelector('#show_film').addEventListener('change', async function getFilms(event) {
    const newLi = getNewLi();
    await fetch(`https://swapi.dev/api/films/`).then((res) => {
        return res.json()
    })
        .then((data) => newLi.innerHTML = `${data.results[event.target.value - 1].title}`+'_'+`${data.results[event.target.value - 1].release_date.slice(0,4)}`+
            '_'+`${data.results[event.target.value - 1].director}`)
    document.querySelector('#filmsList').append(newLi);
})
indexPlanet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
indexPlanet.forEach(item => {
    document.querySelector('#wookiee').addEventListener('click', async function getWookiee() {
        const newLi = getNewLi();
        await fetch(`https://swapi.dev/api/planets/${item}/?format=wookiee`).then((res) => {
            return res.json()
        })
            .then((data) => newLi.innerHTML = data.whrascwo)
        document.querySelector('#wookieeList').appendChild(newLi);
    })
})




