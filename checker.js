// Potable water example
const potableData = {
    ph: 7.0,
    Hardness: 180,
    Solids: 15667,
    Chloramines: 7.0,
    Sulfate: 310,
    Conductivity: 400,
    Organic_carbon: 15,
    Trihalomethanes: 70,
    Turbidity: 3.5
};

// Not potable water example
const notPotableData = {
    ph: 9.0,
    Hardness: 150,
    Solids: 10000,
    Chloramines: 3.0,
    Sulfate: 300,
    Conductivity: 400,
    Organic_carbon: 15,
    Trihalomethanes: 70,
    Turbidity: 3.0
};

// Function to check water potability
function checkPotability(data) {
    fetch('https://uid-backend-flask.vercel.app/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    	console.log(data);
        console.log(data.potable ? 'Water is Potable' : 'Water is Not Potable');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

checkPotability(potableData);
