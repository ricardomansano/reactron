# Reactron

Reactron is a simple project that integrates [React.js](https://reactjs.org/), [Electron](https://electronjs.org/) and [Material Design](https://material-ui.com/pt/) as interface.

## Project Features

+ Routing
+ Execution of OS commands with return of information (stdout)
+ Construction of custom components
+ Menus, Dialogs and other Material UI components
+ Rest consume
+ Basic form
+ IO on disk (INI files)

## Installing

You will need [NPM](https://nodejs.org/en/) installed.
Follow the commands below:

```bash
# Clone repository
git clone https://github.com/ricardomansano/reactron.git reactron

#  Go to directory
cd reactron

# Install dependencies
npm install
```

## Run the project from the command

```bash
npm start
[or]
npm run start
```

## Compiling for distribution

```bash
npm run dist
```

The application will be generated in the `dist` folder of your project.

## How Reactron works with React

The template compiles the `*.js` (jsx) files contained in the `src` folder into standard JavaScript files into the `app` folder, including also the `*.html` and `*.css` files, along with the `file main.js`.

It then packages the application using `gulp` through `npm`.


<p align="center"> 
  <img src="https://github.com/ricardomansano/reactron/blob/master/images/electron_sequence.png" alt="electron_sequence" border="0">
</p>

## Screenshot

<p align="center"> 
  <img src="https://github.com/ricardomansano/reactron/blob/master/images/screen1.png" alt="electron_sequence" border="0">
</p>
<p align="center"> 
  <img src="https://github.com/ricardomansano/reactron/blob/master/images/screen2.png" alt="electron_sequence" border="0">
</p>
<p align="center"> 
  <img src="https://github.com/ricardomansano/reactron/blob/master/images/screen3.png" alt="electron_sequence" border="0">
</p>
<p align="center"> 
  <img src="https://github.com/ricardomansano/reactron/blob/master/images/screen4.png" alt="electron_sequence" border="0">
</p>

## Important tip
Do not use **folders with spaces** in the name.

EX: c://dir/reactron

## License

This project is under the license [MIT](https://www.opensource.org/licenses/mit-license.php)

Based on the project [Electrate](https://github.com/mmick66/electrate) (under license: [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.pt_BR))
