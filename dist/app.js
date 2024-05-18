"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const router = express_1.default.Router();
router.get("/", (req, res) => {
    return res.status(200).json({
        message: "Hello AWS!"
    });
});
app.use(router);
exports.default = app;
