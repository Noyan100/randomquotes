let part_one = document.querySelector(".part-one");
let part_two = document.querySelector(".part-two");
let part_three = document.querySelector(".part-three");

let author = document.querySelector(".author");

document.querySelector(".button-generate")
.addEventListener('click', () => {
    let quote_1 = ["Компания", "Твой друг", "Завод", "Рандомный чел"];
    let quote_2 = ["ждет", "не ждет", "ненавидит", "любит"];
    let quote_3 = ["тебя", "не тебя", "твоих коллег"];
    let authors = ["Автор рандомных цитат", "Ты", "Любитель", "Случайный человек", "Жак Фреско"];

    part_one.innerHTML = quote_1[Math.floor(Math.random() * quote_1.length)]
    part_two.innerHTML = quote_2[Math.floor(Math.random() * quote_2.length)]
    part_three.innerHTML = quote_3[Math.floor(Math.random() * quote_3.length)]

    author.innerHTML = authors[Math.floor(Math.random() * authors.length)]
});