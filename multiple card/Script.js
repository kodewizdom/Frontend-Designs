var arr = [
    {
        name: "Sajid Khan",
        img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        status: "Strangers"
    },
    {
        name: "Kaash",
        img: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        status: "Strangers"
    },
    {
        name: "Rebel",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        status: "Strangers"
    }
];

// function print() {
//     var clutter = "";

//     arr.forEach(function (val, index) {
//         clutter += `<div class="card">
//      <div id="img">
//         <img src="${val.img}">
//      </div>
//      <h3>${val.name}</h3>
//      <h5 id="${val.status}">${val.status}</h5>
//      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cumque pariatur atque ipsam.</p>
//      <button class="${val.status === "Strangers" ? "blue" : "red"}" onclick="toggleFriendStatus(${index})">${val.status === "Strangers" ? "Add Friend" : "Remove Friend"}</button>
//     </div>`;
//     });

//     var main = document.querySelector('#main');
//     main.innerHTML = clutter;
// }

// function toggleFriendStatus(index) {
//     if (arr[index].status === "Strangers") {
//         arr[index].status = "Friends";
//     } else {
//         arr[index].status = "Strangers";
//     }
//     print();
// }

// print();


function print() {
    var main = document.querySelector('#main');
    main.innerHTML = arr.map((val, index) => `
        <div class="card">
            <div id="img">
                <img src="${val.img}">
            </div>
            <h3>${val.name}</h3>
            <h5 id="${val.status}" class="${val.status === 'Strangers' ? 'red' : 'green'}">${val.status}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cumque pariatur atque ipsam.</p>
            <button class="${val.status === 'Strangers' ? 'blue' : 'red'}" onclick="toggleFriendStatus(${index})">${val.status === 'Strangers' ? 'Add Friend' : 'Remove Friend'}</button>
        </div>
    `).join('');
}

function toggleFriendStatus(index) {
    arr[index].status = arr[index].status === 'Strangers' ? 'Friends' : 'Strangers';
    print();
}

print();