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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cartao = void 0;
const api_1 = require("./api");
const response_1 = require("./response");
const query_string_1 = __importDefault(require("query-string"));
class Cartao extends api_1.Api {
    constructor(configuration) {
        super('cartao', 'v2', configuration);
    }
    transaction(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.client.post('new', payload);
                return new response_1.Response(response);
            }
            catch (error) {
                return new response_1.Response(error.response);
            }
        });
    }
    split(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.client.post('split', payload);
                return new response_1.Response(response);
            }
            catch (error) {
                return new response_1.Response(error.response);
            }
        });
    }
    get(orderNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.client.get(`get/${orderNumber}`);
                return new response_1.Response(response);
            }
            catch (error) {
                return new response_1.Response(error.response);
            }
        });
    }
    cancel(orderNumber, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.client.put(`cancel/${orderNumber}?${query_string_1.default.stringify({ amount })}`);
                return new response_1.Response(response);
            }
            catch (error) {
                return new response_1.Response(error.response);
            }
        });
    }
    capture(orderNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.client.put(`capture/${orderNumber}`);
                return new response_1.Response(response);
            }
            catch (error) {
                return new response_1.Response(error.response);
            }
        });
    }
}
exports.Cartao = Cartao;
