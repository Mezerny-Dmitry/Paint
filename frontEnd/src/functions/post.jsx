export default function (figures, setFigures) {
    let temp = JSON.stringify(figures);

    function status(response) {
        if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    function json(response) {
        return response.json();
    }
    
    fetch('/add', {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: temp
    })
        .then(status)
        .then(json)
        .then(function (data) {
            console.log('Request succeeded with JSON response', data);
            setFigures([]);
        })
        .catch(function (error) {
            console.log('Request failed', error);
        })

}