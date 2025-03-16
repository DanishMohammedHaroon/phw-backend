import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(),"data", "users.json");

const readUsers = () => {
  try {
    const data = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading users file:", error);
    return [];
  }
};

const writeUsers = (users) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error("Error writing users file:", error);
  }
};

export default { readUsers, writeUsers };