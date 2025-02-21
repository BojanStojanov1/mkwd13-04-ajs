import { writeFileSync, readFileSync } from "node:fs";

//Save notes
export const saveNotesToFile = notes => {
  const jsonNotes = JSON.stringify(notes, 0, 2);

  console.log("JS", notes);
  console.log("JSON", jsonNotes);

  writeFileSync("./data/notes.json", jsonNotes, "utf-8");
};

//Read notes
export const readNotesFromFile = () => {
  const jsonData = readFileSync("./data/notes.json", "utf-8");

  return JSON.parse(jsonData);
};
