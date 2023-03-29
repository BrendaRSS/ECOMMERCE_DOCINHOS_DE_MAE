import express, { Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import httpStatus from "http-status";
import authRoutes from "./routes/authRoutes";

const app = express();
app.use(express.json());
app.use(cors());
app.use(authRoutes);

app.get("/health", (req: Request, res: Response) => {
    return res.status(httpStatus.OK).send("tudo ok!")
});

const port = process.env.PORT
app.listen(port, () => console.log(`Server running in port ${port}`));

export default app;