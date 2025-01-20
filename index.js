function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email })
    })
        .then(res => { return res.json() })
        // .then(json => console.log(json))
        .then(json => {
            const h1 = document.createElement('h1');
            h1.textContent = json.id;
            document.querySelector('body').appendChild(h1);
        })
}

submitData('Moshe', 'moshe@email.com');