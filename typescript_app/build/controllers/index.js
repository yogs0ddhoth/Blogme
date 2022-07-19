"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const api_1 = __importDefault(require("./api"));
const homeRoutes_1 = __importDefault(require("./homeRoutes"));
router.use('/', homeRoutes_1.default);
router.use('/api', api_1.default);
exports.default = router;
