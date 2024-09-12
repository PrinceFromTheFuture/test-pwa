import readlineSync from "readline-sync";
import { execSync } from "child_process";

// Prompt the user for a commit message
const commitMessage = readlineSync.question("Enter your commit message: ");

// Run git commands with the input message
try {
  execSync("git add .");
  execSync(`git commit -m "${commitMessage}"`);
  execSync("git push");
  console.log("Commit and push successful!");
} catch (error) {
  console.error("Error committing changes:", error.message);
}
