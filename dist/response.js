"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
class Response {
    constructor(response) {
        this.success = response.data.success;
        if (this.success) {
            this.data = response.data.data;
        }
        else {
            this.error = { code: response.data.errorCode, message: response.data.errorMessage };
        }
    }
}
exports.Response = Response;
