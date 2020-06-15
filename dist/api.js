"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const axios_1 = __importDefault(require("axios"));
class Api {
    constructor(path, version, configuration) {
        this.PRODUCTION_URL = 'https://api.branvopay.com';
        this.SANDBOX_URL = 'https://sandbox-api.branvopay.com';
        const baseUri = configuration.isProduction() ? this.PRODUCTION_URL : this.SANDBOX_URL;
        this.client = axios_1.default.create({
            baseURL: `${baseUri}/${path}/${version}/`,
            headers: {
                'Account-Token': configuration.getToken(),
                'Content-Type': 'application/json',
            },
        });
    }
}
exports.Api = Api;
