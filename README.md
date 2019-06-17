This project is my first sample project for redux-first-router.

It has a simple navbar and lets me test jumping from one page to another
through the navbar and using browser history.

Since my goal is a mapping app, it has a simulated map page. You can
enter center/zoom in a form on the Map page and it will update them
navbar button and the address bar. You can modify the address bar
and it will update the Map page.

### It all works!

On the "map" page, there is a form. Type a "center" string (anything!) and
that string should copy into the URL address bar.

The "User" links in the navbar are from the redux-first-router examples and
are just hanging around right now to give me some alternative targets for
the navbar.

## Available Scripts

The project uses the parcel bundler.
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:1234](http://localhost:1234) to view it in the browser;
it should open automatically.

The Web page will reload if you make edits.<br />
You will also see lint errors in the console.

Since this is just hackery there is no provision to test or deploy.

### My tests

Type in URL directly, parameters are "g" and "z", for examples

http://localhost/map?g=HASH&z=10

Try the parameters separately and together.

Form entry: enter center and zoom on the form and hit submit.

Navigation links: make sure the Map link gets rewritten to include parameters

History: You should be able to click the nav links in any order and then unwind
them with browser history arrows. The correct values should be restored for
the map parameters.

## Disclaimer

I make no assertions about "best practices"!! I'm learning everyday.
If you learn something by looking at this code, great.
Teach me by sending comments! -- Brian
