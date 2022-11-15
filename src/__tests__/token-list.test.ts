import { TokenList } from '../index';

test('mainnet tokens', () => {
  expect(new TokenList(1).tokens());
});

test('mainnet ape token', () => {
  expect(new TokenList(1).token('APE').symbol === 'APE');
});

test('goerli tokens', () => {
  expect(new TokenList(5).tokens());
});

test('goerli ape token', () => {
  expect(new TokenList(5).token('APE').symbol === 'APE');
});

test('icon', () => {
  expect(new TokenList(1).icon().length > 0);
});
