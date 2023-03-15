fetch('https://api.github.com/users/jessedegroothva')
    .then(res => {
        if(res.ok) res.json()})
        .then(data => console.log(data))
        .catch(err => console.log(err))