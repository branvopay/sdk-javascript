"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
const environment_1 = require("./enum/environment");
class Configuration {
    constructor({ token, env }) {
        this._token = token;
        this._env = env;
    }
    getToken() {
        return this._token;
    }
    isProduction() {
        return this._env === environment_1.Environment.PRODUCTION;
    }
    isSandbox() {
        return this._env === environment_1.Environment.SANDBOX;
    }
}
exports.Configuration = Configuration;
