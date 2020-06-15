"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boleto = void 0;
const api_1 = require("./api");
const response_1 = require("./response");
class Boleto extends api_1.Api {
    constructor(configuration) {
        super('boleto', 'v2', configuration);
    }
    emission(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.client.post('emission', payload);
                return new response_1.Response(response);
            }
            catch (error) {
                return new response_1.Response(error.response);
            }
        });
    }
    cancel(code) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.client.put(`cancel/${code}`);
                return new response_1.Response(response);
            }
            catch (error) {
                return new response_1.Response(error.response);
            }
        });
    }
    consult(code) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.client.get(`consult/${code}`);
                return new response_1.Response(response);
            }
            catch (error) {
                return new response_1.Response(error.response);
            }
        });
    }
}
exports.Boleto = Boleto;
