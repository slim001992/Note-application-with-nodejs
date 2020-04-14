console.log("NotesApp");

const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if(command === "add"){
  console.log("adding note");
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
