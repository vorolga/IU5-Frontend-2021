//task1

function randomColor() {
    var r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);
    return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}
const firstElement = document.getElementById("task1");

firstElement.addEventListener(
    "click",
    () => (firstElement.style.background = randomColor())
);

//task2
let timerId;
let timer = 0;
const secondElement = document.getElementById("task2");
secondElement.addEventListener("mouseover", () => {
    timerId = setInterval(() => {
        timer++;
        secondElement.innerHTML = `${timer}`;
    }, 1000);
});
secondElement.addEventListener("mouseout", () => {
    clearInterval(timerId);
});

//task3
const listButton = document.getElementById("list_btn");
const list = document.getElementById("list_hidden");
listButton.addEventListener("click", () => {
    list.classList.toggle("list_visible");
});

//task4
const sphere = document.getElementById("sphere");
const fourthElement = document.getElementById("task4");

let sphereClicked = false;

sphere.addEventListener("click", () => {
    sphereClicked = true;
});
document.addEventListener("keydown", (event) => {
    if (event.code == "Escape") sphereClicked = false;
});

const rightBorder = fourthElement.offsetWidth - sphere.offsetWidth;
const bottomBorder = fourthElement.offsetHeight - sphere.offsetHeight;
fourthElement.addEventListener("mousemove", (event) => {
    if (sphereClicked) {
        let x = event.pageX - fourthElement.offsetLeft;
        let y = event.pageY - fourthElement.offsetTop;

        if (x < rightBorder && y < bottomBorder) {
            sphere.style.left = x + "px";
            sphere.style.top = y + "px";
        }
    }
});

//task5
let serials = [];
const serialsButton = document.getElementById("series_btn");
const episodes = document.getElementById("task5");
serialsButton.addEventListener("click", () => {
    let promise = fetch("https://breakingbadapi.com/api/episodes")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            for (let element of data) {
                if (!serials.includes(element.series)) {
                    serials.push(element.series);
                }
            }
            serials.forEach((element) => {
                episodes.innerHTML += `<h1>${element}</h1>`;
                let serialDiv = document.createElement("div");
                episodes.append(serialDiv);
                serialDiv.className = "serial";
                for (let element of data) {
                    let episodeDiv = document.createElement("div");
                    episodeDiv.className = "episode";
                    serialDiv.append(episodeDiv);
                    episodeDiv.innerHTML = `<h1>${element.title}</h1>`;
                    episodeDiv.innerHTML += `<h3>${element.episode} серия ${element.season} сезона</h3>`;
                    episodeDiv.innerHTML += `<p>Дата выхода: ${element.air_date}</p>`;
                    episodeDiv.innerHTML += `<h2>Персонажи</h2>`;
                    for (let item of element.characters) {
                        episodeDiv.innerHTML += `<p>${item}</p>`;
                    }
                }
            });
        });
});