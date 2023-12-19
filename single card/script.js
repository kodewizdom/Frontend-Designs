var btn = document.querySelector("button");
var h5 = document.querySelector("h5");

var flag = 0;

btn.addEventListener("click", function () {
    if (flag == 0) {
        h5.innerHTML = "Friends";
        h5.style.color = "green";
        btn.innerHTML="Remove Friend"
        flag = 1;
    } else {
        h5.innerHTML = "Stranger";
        h5.style.color = "red";
        btn.innerHTML="Add Friend"
        flag = 0;
    }
})