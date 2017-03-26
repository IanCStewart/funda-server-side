# funda-server-side
Refactoring funda web app to have server side rendering.

## Cloning

```
$ cd ~/Sites/ && git clone git@github.com:IanCStewart/funda-server-side.git
```

## Deployment

```
$ cd funda-server-side && touch .env && vim .env
```

Fill `.env` with Funda and Google API keys. For exmaple:
```
FUNDA_KEY=Y2o3uRf34Un54dAK56ey3HErE
GOOGLE_KEY=Y2o3uRg34Oo54GleK56ey3HErE
```

Run on localhost:
```
$ npm i && npm start
```

Terminal should return something like this:
```
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
started on port 3000!
______                    _            ___  ______  _____
|  ___|                  | |          / _ \ | ___ \|_   _|
| |_    _   _  _ __    __| |  __ _   / /_\ \| |_/ /  | |  
|  _|  | | | || '_ \  / _` | / _` |  |  _  ||  __/   | |  
| |    | |_| || | | || (_| || (_| |  | | | || |     _| |_
\_|     \__,_||_| |_| \__,_| \__,_|  \_| |_/\_|     \___/
```

If `npm start` throws an `error` please check if port `3000` is free.

## Todo

- [ ] Refactor app.js to modules.
- [ ] Browserify app.js
- [ ] Improve Performace
  - [ ] Gzip
  - [ ] Critical CSS
  - [ ] Image optim
  - [ ] And more...
