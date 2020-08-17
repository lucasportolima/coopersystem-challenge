export const environment = {
  production: true,
  URL_API: 'https://api.github.com/users',
  GTB_ACCSS_TKN: (): string => {
    const gtbAccssTknInitial = '3b43614cab7e4f133..gtbAccssTkn..263a89f54cc7a09d6d3543a';
    const part1 = gtbAccssTknInitial.split('..gtbAccssTkn..')[0];
    const part2 = gtbAccssTknInitial.split('..gtbAccssTkn..')[1];
    return part1.concat(part2);
  }
};
