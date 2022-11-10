"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenList = void 0;
var tokens_json_1 = require("./tokens/tokens.json");
var TokenList = /** @class */ (function () {
    function TokenList(chainId) {
        this.chainId = chainId;
    }
    TokenList.prototype.tokens = function () {
        return tokens_json_1.default[this.chainId];
    };
    TokenList.prototype.token = function (addressOrSymbol) {
        return (0, tokens_json_1.default)().find(function (token) { return token.address === addressOrSymbol || token.symbol === addressOrSymbol; });
    };
    return TokenList;
}());
exports.TokenList = TokenList;
