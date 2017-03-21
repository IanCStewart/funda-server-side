const express = require('express');
const art = require('ascii-art');

express()
  .use('/static', express.static('public', {maxAge: '31d'}))
  .get('/', home)
  .get('*', error)
  .listen(3000, log);

function home(req, res) {
  if (req.query.chatInput) {
    res.redirect('/' + req.query.chatInput);
  } else {
    respond(
      res,
      `
        <section class="message fundapi">
          <div class="avatar"><img src="/static/assets/img/fundapi-avatar.svg" /></div>
          <header><h1>Fundapi</h1></header>
          <p>Welkom vul het onderstaande formulier in om een zoekopdracht te doen.</p>
          <form>
            <fieldset>
              <legend>Locatie</legend>
              <input type="text" name="location" placeholder="Locatie" autocomplete="off" />
            </fieldset>
            <fieldset>
              <legend>Type wooning</legend>
              <label><input type="radio" name="type" value="koop" />Koop</label>
              <label><input type="radio" name="type" value="huur" />Huur</label>
            </fieldset>
            <fieldset>
              <legend>Buiten ruimte</legend>
              <label><input type="radio" name="outdoor" value="balkon" />Balkon</label>
              <label><input type="radio" name="outdoor" value="dakterras" />Dakterras</label>
              <label><input type="radio" name="outdoor" value="tuin" />Tuin</label>
            </fieldset>
            <input type="submit" value="send" />
          </form>
        </section>
      `);
  }
}

function error(req, res) {
  respond(
    res,
    `
      <section class="message fundapi" style={{ background: blue }}>
        <div class="avatar"><img src="/static/assets/img/fundapi-avatar.svg" /></div>
        <header><h1>404</h1></header>
        <p>It seems u have stumbled upon a non-excisting page "${req.originalUrl}"</p>
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
