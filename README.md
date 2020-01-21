# perspectives-screens
Contains screen libraries for various models.


## Usage
This is how to add a screen library for a new model to this project:
*  Add a `.js` file in `src` for a model. Use the (capitalised) model name (but without the `model:` part).
*  In `webpack.config.js`, add a new element to the `entry` section:

```
entry:
  { Perspectives: path.join(__dirname, "src/Perspectives.js"
  , MyNewModel: path.join(__dirname, "src/MyNewModel.js" )
},
```

## Build
Build the screen libraries by running Webpack.

```
$ npx webpack
```

Or let Webpack watch your developments:

```
npx webpack --watch &
```
## Automatic upload to Couchdb
This project uses the Gulp plugin `screenuploader`, so after a build any newly built screen libraries are automatically uploaded to config.database (see the `.screenUploadConfig` file).

In order to run the Gulp task defined with this plugin, activate (in Atom) the package `gulp-control`. Then from the pane that this package opens, start and stop the task.

## Dependencies
This project depends on the following other Perspectives projects:
*  perspectives-proxy
*  perspectives-react
*  screenuploader

## Develop
For quick integration with the Perspectives dependencies, execute the command file `.createPerspectivesLinks.sh`
