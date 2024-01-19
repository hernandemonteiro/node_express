import StartUp from "./src/StartUp";

const port = 8001;
const url = "http://localhost:" + port;

StartUp.start(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`\nAPI is running!`);
    console.log("\nLink to access:");
    console.log(url);
  }
});
