import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`🚀 Workspace Service running on port ${PORT}`);
});