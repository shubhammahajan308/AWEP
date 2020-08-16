function readValue() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username.trim() === "" || password.trim() === "") {
        if (username.trim() === "") {
            document.getElementById("id1").children[1].innerHTML = "please enter username";
        }
        else {
            document.getElementById("id2").children[1].innerHTML = "please enter password";
        }
    }
    else {

        console.log("Logged in successfully");
    }
}
function onSubmit() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var newElement = document.querySelector("#id3").cloneNode(true);
    newElement.childern[0].innerHTML = username;
    newElement.childern[1].innerHTML = password;

    var anotherpage = document.querySelector("#anotherPage");
    console.log(anotherpage)
    // newElement.appendChild(newElement.childern[0]);


    newElement.insertBefore(newElement, anotherpage.firstChild);
    console.log(anotherpage)
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}