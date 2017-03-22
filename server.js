const express = require('express');
const art = require('ascii-art');
const fetch = require('node-fetch');
const mainHtml = require('./lib/main-html');

require('dotenv').config();

const fundaKey = process.env.FUNDA_KEY;

if (!fundaKey) {
  throw new Error('Missing `FUNDA_KEY` in env.');
}

const fundaEndpoint = (type, address, options, page, size) => `http://funda.kyrandia.nl/feeds/Aanbod.svc/json/${fundaKey}/?type=${type}&zo=/${address}/+0.001km${options}/&page=${page ? page : '1'}&pagesize=${size ? size : '25'}`;

express()
  .use('/static', express.static('public', {maxAge: '31d'}))
  .get('/', home)
  .get('*', error)
  .listen(3000, log);

function home(req, res) {
  if (req.query.location && req.query.type) {
    const options = req.query.outdoor ? `/${req.query.outdoor}` : '';
    fetch(fundaEndpoint(req.query.type, req.query.location, options))
      .then(data => data.json())
      .then(json => makeHtml(json, mainHtml()))
      .then(houses => callback(houses))
      .catch(err => error(req, res, err));
  } else {
    callback(mainHtml());
  }

  function callback(body) {
    respond(res, body);
  }
}

function makeHtml(json, extraHtml) {
  let houses = '';
  json.Objects.forEach(object => {
    houses += `
      <section class="message house">
        <div class="avatar"><img src="static/assets/img/fundapi-avatar.svg" /></div>
        <header><h1>${object.Adres}</h1></header>
        <p>
          <img class="house-img" src="${object.FotoLarge}"/>
          ${object.HuurprijsFormaat ? object.PrijsGeformatteerdTextHuur : object.PrijsGeformatteerdTextKoop}
        </p>
      </section>
    `;
  });
  extraHtml ? houses += extraHtml : null;
  return houses;
}

function error(req, res, err) {
  console.warn(err); // eslint-disable-line no-console
  respond(
    res,
    `
      <section class="message fundapi">
        <div class="avatar"><img src="/static/assets/img/fundapi-avatar.svg" /></div>
        <header><h1>404</h1></header>
        <p>Oopsies something went wrong. If you think what you did is supposed to work please mail me at <a href="mailto:ian@icstewart.com">ian@icstewart.com</a></p>
        <p>browse back <a href="/">home</a> to get back on track</p>
      </section>
    `
  );
}

function respond(res, body) {
  res.set('Cache-Control', 'public, max-age=2678400');
  res.send(`
    <!doctype html>
    <html lang="en">
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
      <link rel="stylesheet" href="/static/style.css">
      <script src="https://use.typekit.net/gco3gds.js"></script>
      <script>try{Typekit.load({ async: true });}catch(e){}</script>
      <title>Funda | API</title>
      <body>
        <header><img src="/static/assets/img/logo.svg" alt="Funda Logo"></header>
        <main>
          <article id="chat">
            <section class="nojs" id="chat-body">
              ${body}
            </section>
            <footer>
              <form class="hidden" id="chat-form">
                <input id="chatInput" name="chatInput" type="text" placeholder="type something..." autocomplete="off" disabled />
                <input type="submit" value="send" disabled/>
  `);
}

function log() {
  console.log('started on port 3000!'); // eslint-disable-line no-console
  if (art) {
    art.font('Funda', 'Doom', 'blue').font('  API', 'Doom', 'green', function(data) {
      console.log(data); // eslint-disable-line no-console
    });
  } else {
    console.log('Funda API'); // eslint-disable-line no-console
  }
}
