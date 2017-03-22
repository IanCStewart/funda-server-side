const express = require('express');
const art = require('ascii-art');
const fetch = require('node-fetch');
const html = require('./lib/html');

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
    const location = req.query.location.replace(/ /g, '-');
    fetch(fundaEndpoint(req.query.type, location, options))
      .then(data => data.json())
      .then(json => makeHtml(json, html.mainHtml()))
      .then(houses => callback(houses))
      .catch(err => error(req, res, err));
  } else {
    callback(html.mainHtml());
  }

  function callback(body) {
    respond(res, body);
  }
}

function makeHtml(json, extraHtml) {
  let houses = '';
  json.Objects.forEach(object => {
    houses += html.housesHtml(
      object.Adres,
      object.FotoLarge,
      object.HuurprijsFormaat ? object.PrijsGeformatteerdTextHuur : object.PrijsGeformatteerdTextKoop
    );
  });
  extraHtml ? houses += extraHtml : null;
  return houses;
}

function error(req, res, err) {
  console.warn(err); // eslint-disable-line no-console
  respond(res, html.error());
}

function respond(res, body) {
  res.set('Cache-Control', 'public, max-age=2678400');
  res.send(html.docHtml(body));
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
