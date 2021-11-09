function submitData(name,email) {
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })
    .then(resp => resp.json())
    .then(data => {
        document.body.innerHTML+=data.id;
    })
    .catch(error => {
        document.body.querySelector('script').innerHTML = error.message;
        console.log(document.body.innerHTML)
    });
}