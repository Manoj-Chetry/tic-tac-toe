const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");

const info = document.getElementById("user-info");
const restart = document.getElementById("restart");

flag = true;

const user1 = [];
const user2 = [];

let count1 = 0;
let count2 = 0;

restart.addEventListener("click", () => {
  location.reload();
});

function update(box) {
  if (flag == 0) {
    info.innerHTML = `User 2's turn`;
    user1[count1] = box;
    count1++;
    console.log(user1);
  } else {
    info.innerHTML = `User 1's turn`;
    user2[count2] = box;
    count2++;
    console.log(user2);
  }
  if (count1 + count2 == 9) {
    info.innerHTML = `The game is draw`;
  }
}

box1.addEventListener("click", function click() {
  box1.innerHTML = flag == 0 ? "X" : "0";
  flag = !flag;
  box1.style.pointerEvents = "none";
  update(1);
});
box2.addEventListener("click", function click() {
  box2.innerHTML = flag == 0 ? "X" : "0";
  flag = !flag;
  box2.style.pointerEvents = "none";
  update(2);
});
box3.addEventListener("click", function click() {
  box3.innerHTML = flag == 0 ? "X" : "0";
  flag = !flag;
  box3.style.pointerEvents = "none";
  update(3);
});
box4.addEventListener("click", function click() {
  box4.innerHTML = flag == 0 ? "X" : "0";
  flag = !flag;
  box4.style.pointerEvents = "none";
  update(4);
});
box5.addEventListener("click", function click() {
  box5.innerHTML = flag == 0 ? "X" : "0";
  flag = !flag;
  box5.style.pointerEvents = "none";
  update(5);
});
box6.addEventListener("click", function click() {
  box6.innerHTML = flag == 0 ? "X" : "0";
  flag = !flag;
  box6.style.pointerEvents = "none";
  update(6);
});
box7.addEventListener("click", function click() {
  box7.innerHTML = flag == 0 ? "X" : "0";
  flag = !flag;
  box7.style.pointerEvents = "none";
  update(7);
});
box8.addEventListener("click", function click() {
  box8.innerHTML = flag == 0 ? "X" : "0";
  flag = !flag;
  box8.style.pointerEvents = "none";
  update(8);
});
box9.addEventListener("click", function click() {
  box9.innerHTML = flag == 0 ? "X" : "0";
  flag = 1;
  box9.style.pointerEvents = "none";
  update(9);
});
