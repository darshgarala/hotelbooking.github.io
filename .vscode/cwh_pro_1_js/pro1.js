console.log("pro_1.js");
showNotes();

//local storage 
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        // string convert to array
        notesObj = JSON.parse(notes);
    }
    // The push() method adds new items to the end of an array.
    // The push() method changes the length of the array.
    // The push() method returns the new length.
    notesObj.push(addTxt.value);
    // localStorage.setItem(keyname, value);
    /*
    keyname	    =>   Required. A String specifying the name of the key you want to set the value of
    value	    =>   Required. A String specifying the value of the key you want to set the value of
    */
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notesObj);
    showNotes();
})


// function to show the elements from local storage
function showNotes() {
    // localStorage.getItem(keyname)
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        // string convert to array
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div id="notes" class="row container-fluid">
        <div class="noteCard my-2 mx-2 card" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p calss="card-text"> ${element}</p>
                <button id="${index}" onclick="Delete(this.id)" class="btn btn-primary" id="addBtn">Delete Note</button>
            </div>
        </div>
    </div>`;
    });

    let notesEle = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesEle.innerHTML = html;
    }
    else {
        notesEle.innerHTML = `nothing to show....!!!!...$..0..R..R..Y..`;
    }

}

// delete the note 
function Delete(index) {
    // console.log(`I am Delete`);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        // string convert to array
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


search = document.getElementById(`searchTxt`);
search.addEventListener("input", function () {
    let inputval = search.value;
    // console.log("inptut event ",inputval);

    let noteCard = document.getElementsByClassName(`noteCard`);

    Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        
        if (cardTxt.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    });
})