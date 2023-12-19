var friendBtn = document.getElementById("friendBtn");
var statusH5 = document.querySelector(".status");

friendBtn.addEventListener("click", function () {
    if (statusH5.textContent === "Stranger") {
        updateFriendStatus("Friends", "green", "Remove Friend");
    } else {
        updateFriendStatus("Stranger", "red", "Add Friend");
    }
});

function updateFriendStatus(newStatus, color, buttonText) {
    statusH5.textContent = newStatus;
    statusH5.style.color = color;
    friendBtn.textContent = buttonText;
}
