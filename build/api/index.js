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
exports.APIClient = exports.isAPIError = void 0;
const MK_API_ERROR = Symbol();
function isAPIError(reason) {
    return reason[MK_API_ERROR] === true;
}
exports.isAPIError = isAPIError;
class APIClient {
    constructor(opts) {
        this.origin = opts.origin;
        this.credential = opts.credential;
        this.fetch = opts.fetch || ((...args) => fetch(...args));
    }
    request(endpoint, params = {}, credential) {
        const promise = new Promise((resolve, reject) => {
            this.fetch(`${this.origin}/api/${endpoint}`, {
                method: 'POST',
                body: JSON.stringify(Object.assign(Object.assign({}, params), { i: credential !== undefined ? credential : this.credential })),
                credentials: 'omit',
                cache: 'no-cache',
            }).then((res) => __awaiter(this, void 0, void 0, function* () {
                const body = res.status === 204 ? null : yield res.json();
                if (res.status === 200) {
                    resolve(body);
                }
                else if (res.status === 204) {
                    resolve(null);
                }
                else {
                    reject(Object.assign({ [MK_API_ERROR]: true }, body.error));
                }
            })).catch(reject);
        });
        return promise;
    }
}
exports.APIClient = APIClient;
//# sourceMappingURL=index.js.map