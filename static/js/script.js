// <>  `` $

fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        let user = data.results[0];
        document.querySelector('#photo').src = user.picture.large;
        document.querySelector('#name').textContent = `${user.name.first} ${user.name.last}`;
        document.querySelector('#gender').textContent = `Sesso: ${user.gender}`;
        document.querySelector('#email').textContent = `Email: ${user.email}`;
        document.querySelector('#address').textContent = `Indirizzo: ${user.location.city} ${user.location.country}`;
    })
