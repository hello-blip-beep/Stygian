if(document.querySelector(".popup")){
    const button = document.querySelector(".button")
    const circle = document.querySelector(".circle")

    let bon = false;

    button.addEventListener("click", () => {
        if(!bon){
            bon = true;
            circle.style.animation = "moveCircleRight 1s forwards";
            button.style.animation = "backgroundYellow 1s forwards";
            chrome.tabs.executeScript({
                file: "appon.js"
            })
        }
        else{
            bon = false;
            circle.style.animation = "moveCircleLeft 1s forwards";
            button.style.animation = "backgroundBlue 1s forwards";
            chrome.tabs.executeScript({
                file: "appoff.js"
            })
        }
    })
}