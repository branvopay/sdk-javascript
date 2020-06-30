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
exports.Recorrencia = void 0;
const api_1 = require("./api");
const response_1 = require("./response");
class Recorrencia extends api_1.Api {
    constructor(configuration) {
        super('cartao', 'v2', configuration);
    }
    save(payload, code) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.client.post(code ? `recurrent/${code}` : 'recurrent', payload);
                return new response_1.Response(response);
            }
            catch (error) {
                return new response_1.Response(error.response);
            }
        });
    }
    get(code) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.client.get(`recurrent/${code}`);
                return new response_1.Response(response);
            }
            catch (error) {
                return new response_1.Response(error.response);
            }
        });
    }
}
exports.Recorrencia = Recorrencia;
