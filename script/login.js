document.getElementById("login-btn").addEventListener("click", function () {

    const number = document.getElementById("input-number").value;
    const pin = document.getElementById("input-pin").value;

    if (number === "01743620223" && pin === "1234") {
        window.location.href = "./home.html";
    } else {
        alert("Invalid number or PIN");
    }

});
