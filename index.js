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
        .then(json => {
            const h1 = document.createElement('h1');
            h1.textContent = json.id;
            document.querySelector('body').appendChild(h1);
        })
        .catch(error => {
            // alert('You\'ve got error!');
            // console.log(error.message);
            const h2 = document.createElement('h2');
            h2.style.color = 'red';
            h2.textContent = error.message;
            document.querySelector('body').appendChild(h2);
        })
}

submitData('Moshe', 'moshe@email.com');