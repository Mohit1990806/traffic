const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/", (req, res) => {
  exec("node traffic-bot.js", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.send("Error running bot.");
    }
    console.log(`stdout: ${stdout}`);
    res.send("✅ Traffic bot executed successfully!");
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
