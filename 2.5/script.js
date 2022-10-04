//Ändern Sie den Namen eines bestehenden Albums
document.addEventListener("DOMContentLoaded", () => {
    const changeAlbum = document.getElementById("changeAlbum");
    const changeTrack = document.getElementById("changeTrack");
    const delTrack = document.querySelector("#delTrack");
    const delAlbum = document.getElementsByClassName(".delAlbum");
    //const newTrack = document.querySelector("#newTrack");
    //const newAlbum = document.querySelector("#newAlbum");

    changeAlbum.innerText = "Test";
    changeTrack.innerText = "Noch ein Test"
    delTrack.remove()
    delAlbum.remove()
    const newTrack = document.createElement("li");
    newTrack.innerText = "Neues Lied";
    newSong.appendChild(newTrack)

    const newAlbumTitle = document.createElement("h2");
    newAlbumTitle.innerText = "Neues Album"

    const newAlbum = document.createElement("ol");
    newAlbum.innerText = "Test"
    newAlbum.appendChild(newAlbum)

})

//Ändern Sie den Track-Namen sowie die Track Zeit eines bestehenden Albums
//Löschen Sie einen Track eines bestehenden Albums

//Löschen Sie ein bestehendes Album

//Fügen Sie einen neuen Track zu einem bestehenden Album hinzu
//Fügen Sie ein völlig neues Album hinzu
