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
async function checkPotability(data) {
    try {
        const response = await fetch("https://uid-backend-flask.vercel.app/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }

        const responseData = await response.json();
        if (responseData.potable) {
            document.getElementById("result").innerText = "Water is Potable";
        } else {
            document.getElementById("result").innerText = "Water is Not Potable";
        }

    } catch (error) {
        console.error("Error:", error);
    }
}

document.getElementById("potabilityForm").addEventListener("submit", function (event) {

    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    checkPotability(data);
}   );