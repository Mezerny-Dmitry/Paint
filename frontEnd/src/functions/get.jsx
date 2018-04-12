export default function (arg) {
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

    fetch('/history')
        .then(status)
        .then(json)
        .then(function (data) {
            console.log('Request succeeded with JSON response', data);
            arg.setState({
                history: data
            })
        }).catch(function (error) {
        console.log('Request failed', error);
    });
}