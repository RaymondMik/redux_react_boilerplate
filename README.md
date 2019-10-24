<h2>Webpack Redux/React boilerplate</h2>
<p>A basic boilerplate for Redux/React projects easy to use, extend and customize.</p>

<h3>What you will find here</h3>
<p>Basically all you need to startup a Redux/React project, including Webpack configuration files and Dev Server, Redux store, actions, reducers and a React component with a simple example application.</p>
<h4><code>master</code> branch</h4>
You will find here a boilerplate to startup a basic Redux/React project with a store with actions, reducers and the React UI.

<h4><code>sagas-react_router</code> branch</h4>
You will find here a boilerplate to startup a Redux/React project sending HTTP requests to a RESTful API and with page routing, done respectively wih Redux Sagas and React Router v4.

<h4><code>typescript-version</code> branch</h4>
All the functionalities included in <code>sagas-react_router</code> but written in TypeScript.

<h3>Webpack Setup</h3>
<p>This boilerplate comes with two Webpack setups: development - defined in <code>webpack.dev.config.js</code> and production (actually a production build) - defined in <code>webpack.prod.config.js</code>.</p>

<h3>Get Started</h3>
<h4>Install the app</h4>
<p><code>npm install</code><p>

<h4>Development</h4>
<p>Run <code>npm run start-dev</code> to start the development environment. Webpack will bundle JavaScript and Sass (or CSS) files into a bundle.js, which will be added to the index.html file generated using <code>./src/index.html</code> as a template. Webpack Dev Server will serve the application on http://localhost:3000/ using BrowserSync.</p> 

<h4>Production</h4>
<p>Run <code>npm run build</code> to build the production code. Webpack will compile, uglify and bundle JavaScript files into <code>bundle.js</code> and will compile and minify Sass (or CSS) files into <code>style.css</code>. The production build will be served by Webpack Dev Server on http://localhost:8080.</p>

<h3>Hot module replacement</h3>
<p>This project has hot module replacement enabled in development on the Redux store and the React UI as well. That means that changes in the code of reducers or React components won't cause a page reload therefore retaining the current state of the application.</p>

<h3>Major tools and libraries you will find here</h3>
<ul>
    <li><a href="https://babeljs.io/" target="blank">Babel</a></li>
    <li><a href="https://browsersync.io/" target="blank">BrowserSync</a></li>
    <li><a href="http://airbnb.io/enzyme/" target="blank">Enzyme</a></li>
    <li><a href="https://eslint.org/" target="blank">ESLint</a></li>
    <li><a href="https://facebook.github.io/jest/" target="blank">Jest</a></li>
    <li><a href="http://postcss.org/" target="blank">PostCSS</a></li>
    <li><a href="https://reactjs.org/" target="blank">React</a></li>
    <li><a href="https://redux.js.org/" target="blank">Redux</a></li>
    <li><a href="https://sass-lang.com/" target="blank">Sass</a> (with sass-loader)</li>
</ul>

<h3>Configuration files</h3>
<p>Each tool has is own configuration file located in the root folder: </p>
<ul>
    <li>Babel: <code>.babelrc</code></li>
    <li>Enzyme: <code>enzymeSetup.js</code></li>
    <li>ES Lint: <code>.eslintrc.json</code></li>
    <li>Git: <code>.gitignore</code></li>
    <li>Jest: <code>jest.config.json</code></li>
    <li>PostCSS: <code>postcss.config.json</code></li>
    <li>Webpack: <code>webpack.config.js</code> (accessing different configuration files according to the selected environment)</li>
</ul>

<h3>Sass files</h3>
<p>In the <code>./src/styles</code> folder you will find Sass partials, mixins and variables I used for this example project. You can easily switch to scss syntax as this boilerplate also support scss files</p>

<h3>File loader</h3>
<p>I used <a href="https://github.com/webpack-contrib/file-loader" target="blank">Webpack File Loader</a> in order to include external resources such as images and fonts very easily.</p>

<h3>Fork it!</h3>
<p>I plan to extend this boilerplate by creating different branches for specific functionalities such as routing, sagas, etc., but still keeping it as basic as possible, so other developers can easily customize it according to their needs.</p>

