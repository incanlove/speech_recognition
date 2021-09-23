// creates const for the texts div
const texts = document.querySelector(".texts");
// I assume that this makes both windows children the same under 1 name
window.SpeechRecognition = 
    window.SpeechRecognition || window.webkitSpeechRecognition;
// interimresults is the results of the speech and has to return true or false
const recognition = new SpeechRecognition();
recognition.interimResults = true;
// this will create a new p tag for the results 
let p = document.createElement("p");
// this is an event lister and a function to add the results in p
recognition.addEventListener("result", (e) => {
        texts.appendChild(p);
        const text = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
    p.innerText = text;
    // we made it final in interimresults
    if (e.results[0].isFinal){
        // this is a response to a specific result in speech
        if (text.includes("how are you")){
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "I am fine";
            texts.appendChild(p);
        }
        // What we just did up there was create a p tag added some css from .reply then added to the html
        // somewhat the same thing in the next part 
        if(
            text.includes("what's your name") ||
            text.includes("what is your name")
            ) {
                p = document.createElement("p");
                p.classList.add("replay");
                p.innerText = "My name is Juan O. the developer of this project";
                texts.appendChild(p);
            }
            if (text.includes("open YouTube")) {
                p = document.createElement("p");
                p.classList.add("replay");
                p.innerText = "opening youtube channel";
                texts.appendChild(p);
                console.log("opening youtube");
                window.open("https://www.youtube.com/");
            }
            p = document.createElement("p");
    }
});

// const button = document.getElementById("start")

// button.addEventListener("clicked", function() {
//     recognition.start();
// });

// where the function will start and end 
// recognition.addEventListener("end,", () => {
//     recognition.start();
// });
// recognition.start();
