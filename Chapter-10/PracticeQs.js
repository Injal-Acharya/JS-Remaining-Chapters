//Problem: Note saving site that can store and delete the note at the local storage

let note 

alert("Your note is: " + localStorage.getItem('note'))

note = prompt("Enter your note here:")
if(note) {
    localStorage.setItem('note', note)
    alert("Note saved successfully")
}

let del = confirm("Do you want to delete your note?")
if(del){
    localStorage.removeItem('note')
    alert("Note removed successfully")
}
