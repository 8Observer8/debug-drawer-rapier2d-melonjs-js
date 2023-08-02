Buy me a coffee: https://boosty.to/ivan_8observer8/donate This service supports PayPal. You can perform single sign-on with your Google account.

[Live demo](https://8observer8.github.io/webgl10-js/debug-drawer-rapier2d-melonjs-js/)

Playgrounds:

- [Replit](https://replit.com/@8Observer8/Debug-drawer-of-colliders-using-Rapier2D-Melonjs-JS)
- [Plunker](https://plnkr.co/edit/jjDA2AYVyTIVi3hk?preview)
- [Glitch](https://glitch.com/edit/#!/furry-tiny-temple)

Topic and discussion:

- [Melon.js topic](https://melonjs.discourse.group/t/basic-examples-of-using-rapier2d-with-melon-js-in-javascript/58)
- [Melon.js discussion](https://github.com/melonjs/melonJS/discussions/1196)

![debug-drawer-rapier2d-melonjs-js](https://github.com/8Observer8/debug-drawer-rapier2d-melonjs-js/assets/3908473/1deb0c73-f441-49e1-9b2a-c84527ad8771)

Instruction for building and running the project in debug and release using Rollup:

- Install these packages globally with the command:

> npm i -g http-server rollup uglify-js

- Run http-server in the project directory:

> http-server -c-1

Note. The `-c-1` key allows you to disable caching.

- Start development mode with the following command:

> npm run dev

Note. Rollup will automatically keep track of saving changes to files and build a new index.js file ready for debugging. You can debug your project step by step in the browser by setting breakpoints.

- Go to the browser and type the address: localhost:8080/index.html

- Create a compressed file ready for publishing. Stop development mode, for example, with this command Ctrl + C in CMD, if it was launched before and enter the command:

> npm run release

Note. After this command, Rollup will create a compressed index.js file. Compression is done using the uglify-js package.
