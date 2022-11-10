import * as tokenList from '../tokens.json';
export class TokenList {
  chainId: number;
  constructor(chainId: number) {
    this.chainId = chainId;
  }

  tokens() {
    return tokenList[this.chainId.toString()];
  }

  token(addressOrSymbol: string) {
    return this.tokens().find((token: any) => token.address === addressOrSymbol || token.symbol === addressOrSymbol);
  }
}
