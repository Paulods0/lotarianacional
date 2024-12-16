"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtTokenService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtTokenService {
    constructor() {
        this.secret = process.env.JWT_SECRET || "default_secret";
    }
    generateToken(payload) {
        return jsonwebtoken_1.default.sign(payload, this.secret, { expiresIn: "7d" });
    }
    verifyToken(token) {
        try {
            return jsonwebtoken_1.default.verify(token, this.secret);
        }
        catch (error) {
            return null;
        }
    }
}
exports.JwtTokenService = JwtTokenService;