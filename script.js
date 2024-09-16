document.getElementById('btn-go').addEventListener('click', () => {
    fetch('https://api-go-one.vercel.app/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('response').textContent = 'Error fetching API Go: ' + error;
        });
});

document.getElementById('btn-python').addEventListener('click', () => {
    fetch('https://api-python-murex.vercel.app/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('response').textContent = 'Error fetching API Python: ' + error;
        });
});
