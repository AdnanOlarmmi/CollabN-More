import workspaceRoutes from "./routes/workspace.routes.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => {
    res.json({
      status: "healthyyy",
      service: "workspace",
      timestamp: new Date().toISOString(),
    });
  });
  
app.use("/workspaces", workspaceRoutes);

export default app;