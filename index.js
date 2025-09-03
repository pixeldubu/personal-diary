import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Array to hold all diary entries in memory (not persistent, cleared when server restarts)
const allEntries = [];

// Middleware: parse form data (application/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware: serve static files from "public" folder (CSS, JS, images, etc.)
app.use(express.static("public"));

// GET route: render homepage with all diary entries
app.get("/", (req, res) => {
  res.render("index.ejs", { entries: allEntries });
});

// POST route: add a new diary entry
app.post("/post", (req, res) => {
    // Add new entry at the beginning of the array
    allEntries.unshift({
        // Format date as "Month Day, Year" (e.g., August 29, 2025)
        date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
        title: req.body["title"],   // Get entry title from form
        entry: req.body["entry"]    // Get entry text from form
    });

    // Re-render homepage with updated entries
    res.render("index.ejs", { entries: allEntries });
});

// POST route: edit an existing diary entry
app.post("/edit", (req, res) => {
    const index = req.body["index"];  // Entry index passed from form
    
    // Update entry fields and include date it was last edited
    allEntries[index].date = "Last Edited: " + new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    allEntries[index].title = req.body["title"];
    allEntries[index].entry = req.body["entry"];

    // Redirect back to homepage
    res.redirect("/");
});

// POST route: delete a diary entry
app.post("/delete", (req, res) => {
    const index = req.body["index"];  // Entry index passed from form
    
    // Remove entry from array
    allEntries.splice(index, 1);

    // Redirect back to homepage
    res.redirect("/");
});

// Start server on port 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});