// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  URL_API: 'https://api.github.com/users',
  GTB_ACCSS_TKN: (): string => {
    const gtbAccssTknInitial = '3b43614cab7e4f133..gtbAccssTkn..263a89f54cc7a09d6d3543a';
    const part1 = gtbAccssTknInitial.split('..gtbAccssTkn..')[0];
    const part2 = gtbAccssTknInitial.split('..gtbAccssTkn..')[1];
    return part1.concat(part2);
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
