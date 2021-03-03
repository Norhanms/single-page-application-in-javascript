const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use("/static", express.static(path.resolve(__dirname, 'frontend', 'static')))
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
    console.log(req)
});

app.listen(port, () => console.log(`server listening at port ${port}...`))