fetch('https://api.github.com/users/rajangithub0')
    .then((response) => {
        return response.json()
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))