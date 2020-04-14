console.log("NotesApp");

const notes = require('./notes.js');

var command = (process.argv[2]);
var title = (process.argv[4]) ;
var body = (process.argv[6]) ;

if(command === "add"){
  console.log("Note created");
  notes.addingNote(title, body);
}else if (command === "read") {
    console.log("removing note");
      notes.readNote(title);
}else if (command === "remove") {
    console.log("removing note");
      notes.removeNote(title);
}else if (command === "list") {
    console.log("list notes");
        notes.listNotes();
}else {
    console.log("Options: ");
    console.log("--help             Show help           [boolean] ");
    console.log("--title            Title of note       [required] ")
    console.log("--body             Body of note        [required] ");
;
      console.log("Missing required argument : title");
}
