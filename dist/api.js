"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const axios_1 = require("axios");
class Api {
    constructor() {
        this.PRODUCTION_URL = "https://api.branvopay.com";
        this.SANDBOX_URL = "https://sandbox-api.branvopay.com";
    }
    Api(path, version, configuration) {
        const baseUri = configuration.isProduction()
            ? this.PRODUCTION_URL
            : this.SANDBOX_URL;
        this.client = axios_1.default.create({
            baseURL: `${baseUri}/${path}/${version}/`,
            headers: {
                "Account-Token": configuration.getToken(),
            },
        });
    }
}
exports.Api = Api;
