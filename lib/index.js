"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenList = void 0;
var tokenList = require("./tokens.json");
var TokenList = /** @class */ (function () {
    function TokenList(chainId) {
        this.chainId = chainId;
    }
    TokenList.prototype.tokens = function () {
        return tokenList[this.chainId.toString()];
    };
    TokenList.prototype.token = function (addressOrSymbol) {
        return this.tokens().find(function (token) { return token.address === addressOrSymbol || token.symbol === addressOrSymbol; });
    };
    return TokenList;
}());
exports.TokenList = TokenList;
