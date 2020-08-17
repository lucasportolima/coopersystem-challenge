## Description
- This project was developed with the purpose of being a test of competence for the position of angular developer at coopersystem.

## Requirements

- [Node.js](https://nodejs.org)
- [Angular CLI](https://cli.angular.io/): `npm install -g angular-cli`

## Frameworks

- Framework javascript: [Angular](https://angular.io/)
- Build system: [Angular CLI](https://cli.angular.io/)

## Development server

```bash
# clone this repository
git clone ...

# navigate to folder
cd coopersystem-challenge

# install the dependecies
npm install

# serve with hot reload @ localhost:4200
npm start
```

## Models

- RepositoryPreview: {
    id: number;
    clone_url: string;
    html_url: string;
    created_at: string;
    description: string;
    default_branch: string;
    name: string;
    private: boolean;
    pushed_at: string;
}
- User: {
  name: string,
  avatar_url: string,
  login: string
}

## Pages

- '/': Get user
- 'user/${username}': List repositorys
- '***': Not Found

## Heroku server

- branch: master
- site: https://coopersystem-challenge.herokuapp.com/

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma] (http://localhost:9876/debug.html).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
