import "dotenv/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import cors from "cors";
import express from "express";
import { connectDatabase } from "./config/database.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
const port = Number(process.env.PORT) || 5000;
const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const clientBuildDirectory = path.resolve(currentDirectory, "../dist");

app.use(cors({ origin: process.env.CLIENT_ORIGIN?.split(",") || true }));
app.use(express.json({ limit: "20kb" }));
app.use("/api/v1", contactRoutes);

app.use((error, request, response, _next) => {
  console.error(error);
  if (error.name === "ValidationError") return response.status(400).json({ message: "Please provide valid contact details." });
  return response.status(500).json({ message: "Unable to send your message. Please try again later." });
});

app.use(express.static(clientBuildDirectory));
app.get("/{*path}", (request, response) => response.sendFile(path.join(clientBuildDirectory, "index.html")));

connectDatabase()
  .then(() => app.listen(port, () => console.log(`Server listening on port ${port}`)))
  .catch((error) => {
    console.error("Unable to start server:", error.message);
    process.exit(1);
  });
