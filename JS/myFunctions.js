const buttonContainer = document.getElementById("buttonContainer");

buttonContainer.querySelectorAll(".hide-button").forEach(function (hideButton) {
    hideButton.addEventListener("click", function (event) {
        const imgContainer = hideButton.parentElement;
        imgContainer.style.display = "none"; 
    });
});

const buttonWrappers = buttonContainer.querySelectorAll(".button-wrapper");
buttonWrappers.forEach(function (buttonWrapper) {
    const imgContainer = buttonWrapper.querySelector(".img-container");

    const button = buttonWrapper.querySelector("button");
    button.addEventListener("click", function () {
        imgContainer.style.display = "block";
    });
});
