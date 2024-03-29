const weatherForm = document.querySelector("form"); 
const seachElement = document.querySelector("input"); 
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = seachElement.value;
    messageOne.textContent = "Loading...";
    messageTwo.textContent = "";
    fetch(`/weather?address=${location}`).then(res => {
    res.json().then(data => {
        console.log(data);
        if (data.error) {
            messageOne.textContent = data.error;
        } else {
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecastData;
        }
    });
});
})