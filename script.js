const popup = document.querySelector('.chat-popup')
const chatBtn = document.querySelector('.chat-btn')
const user1ans1 = document.querySelector('.user1ans1')
const user1ans2 = document.querySelector('.user1ans2')
const user1ans3 = document.querySelector(".user1ans3")
const user1ans4 = document.querySelector(".user1ans4")
const bot2 = document.querySelector('#bot2')
const bot3 = document.querySelector('#bot3')
const bot4 = document.querySelector("#bot4")
const bot5 = document.querySelector("#bot5")


// Toggle Chat Button

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})

user1ans1.addEventListener('click', ()=>{
    bot2.style.display = "block";
    user1ans3.style.display = "block";
    user1ans4.style.display = "block";
});

user1ans2.addEventListener('click', ()=>{
    bot3.style.display = "block";
    user1ans4.style.display = "block";
})

user1ans3.addEventListener('click', ()=>{
    bot5.style.display = "block";
})

user1ans4.addEventListener("click", () => {
    bot4.style.display = "block";
});