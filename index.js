const cardLists = [
    {
        text: 1,
        color: "#000000"
    }, {
        text: 2,
        color: "#2B8EAD"
    }, {
        text: 3,
        color: "#333333"
    }, {
        text: 4,
        color: "#6F98A8"
    }, {
        text: 5,
        color: "#444444"
    }, {
        text: 6,
        color: "#BFBFBF"
    }, {
        text: 7,
        color: "#CFBFBF"
    }, {
        text: 8,
        color: "#2F454E"
    }, {
        text: 9,
        color: "#72C3DC"
    }
];

(function () {
    renderCards(cardLists);
})();

function renderCards(list) {
    const ul = document.getElementById("cardsContainer");
    ul.innerHTML = "";
    list.forEach((element) => {
        let li = document.createElement('li');
        li.setAttribute('class', 'card');
        li.innerHTML = `<span style="background-color:${element.color}"></span>${element.text}`;
        ul.appendChild(li);
    });
}

function shuffleList() {
    let list = JSON.parse(JSON.stringify(cardLists));
    let shuffledList = list.sort(() => Math.random() - 0.5);
    renderCards(shuffledList);

    // let shuffledList = JSON.parse(JSON.stringify(cardLists));
    // for (let i = list.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [list[i], list[j]] = [list[j], list[i]];
    // }
}

function sortList() {
    let list = JSON.parse(JSON.stringify(cardLists));
    renderCards(list);

    // let list = cardLists.sort((a, b) => a.text > b.text ? 1 : -1);
    // renderCards(list);
}