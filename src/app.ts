import express from "express";

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    return res.status(200).json({
        message: "Hello AWS!"
    });
});

app.use(router)

export default app;