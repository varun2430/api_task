import express from "express";
import cors from "cors";

const PORT = 5000;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  const numbers = [];
  const characters = [];

  for (const element of data) {
    if (!isNaN(element)) {
      numbers.push(Number(element));
    } else if (typeof element === "string" && element.length === 1) {
      characters.push(element);
    }
  }

  let nearestChar = null;
  let minDistance = Infinity;

  for (const char of characters) {
    const distance = Math.abs(char.charCodeAt(0) - "z".charCodeAt(0));

    if (distance < minDistance) {
      minDistance = distance;
      nearestChar = char;
    }
  }

  res.json({
    is_success: true,
    user_id: "Varun_Kadkade_24042002",
    email: "varun.prashant2020@vitbhopal.ac.in",
    roll_number: "20BCE10472",
    numbers: numbers,
    alphabets: characters,
    highest_alphabet: nearestChar,
  });
});

app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1 });
});

// app.post((req, res) => {
//     const []
// })

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});
