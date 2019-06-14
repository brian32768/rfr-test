This project is currently contains my experiments with
redux-first-router.

It has a simple navbar and lets me test jumping from one page to another
through the navbar and using browser history.

Parts of it work!

On the "map" page, there is a form. I want to type a "geohash" string and have
that string copy into the URL address bar. (A history "replace" operation.
It's not doing that yet.

The "User" links in the navbar are from the redux-first-router examples and
are just hanging around right now to give me some alternative targets for
the navbar.

## Available Scripts

The project uses the parcel bundler.
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:1234](http://localhost:1234) to view it in the browser;
it should open automatically.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

Since this is just hackery there is no provision to test or deploy.
