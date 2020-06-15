This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

My notes

Setting up CD on Heroku
https://dev.to/webdevraj/deploy-a-react-app-on-heroku-the-right-way-5efo

- log in to heroku from the commandline
  - `heroku login`
- create a new app with the buildpack, this ensures its a production version
  - `heroku create phil-dev-portfolio --buildpack https://github.com/mars/create-react-app-buildpack.git`
- add a `static.json` file to the root directory with the following contents:

```json
{
"root": "build/",
  "clean_urls": false,
  "routes": {
    "/**": "index.html"
  }
}
```

- commit changes and push to heroku master
  - `git push heroku master`
- about half an hour later......open the deployed app with
  - `heroku open` or by going to the app's address

Setting up CI on Travis

- Add the repository to your travis account on the website
- Make sure you have the correct Travis cli installed (Doh!) https://github.com/travis-ci/travis.rb
- login in
  - `travis login`
- create a basic .travis.yml file

```
language: node_js
node_js:
- 14.4.0
```

- run `travis setup heroku` to get the basics in there
- run `travis encrypt <heroku api key from account settings> --add deploy.api_key --pro`
  - the pro is important as it is needed when you're using travis.com as opposed to .org
  - this will generate and add an encrypted key to the travis.yaml file
- turn on 'wait for CD to pass' in the heroku settings for the project
- delete the yarn.lock file
- trigger a build, either by pushing to master or doing it manually on the website
- if all tests pass, this should all run through, now deploying to Heroku on success
- to be triple-sure you can push a failing test to master, and travis should block the build from deploying to heroku

[![Coverage Status](https://coveralls.io/repos/github/PhilipVigus/dev-portfolio/badge.svg?branch=master)](https://coveralls.io/github/PhilipVigus/dev-portfolio?branch=master)