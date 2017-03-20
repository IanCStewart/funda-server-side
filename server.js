const express = require('express');
const art = require('ascii-art');

express()
  .use('/static', express.static('public', {maxAge: '31d'}))
  .get('/', home)
  .get('*', error)
  .listen(3000, function() {
    console.log('started on port 3000!');
    if (art) {
      art.font('Funda', 'Doom', 'magenta').font('  API', 'Doom', 'green', function(data) {
        console.log(data);
      });
    } else {
      console.log('Funda API');
    }
  });

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
          <p>Welkom op funda Chat.API</p>
        </section>
      `);
  }
}

function error(req, res) {
  respond(
    res,
    `
      <section class="message fundapi">
        <div class="avatar"><img src="/static/assets/img/fundapi-avatar.svg" /></div>
        <header><h1>404</h1></header>
        <p>It seems u have stumbled upon a non-excisting page "${req.originalUrl}"</p>
        <p>browse back <a href="/">home</a> to get back on track</p>
      </section>
    `
  );
}

function respond(res, body) {
  res.set('Content-Type', 'text/html');
  res.set('Cache-Control', 'public, max-age=2678400');
  res.end([
    '<!doctype html>',
    '<html lang="en">',
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">',
    '<link rel="stylesheet" href="/static/style.css">',
    '<script src="https://use.typekit.net/gco3gds.js"></script>',
    '<script>try{Typekit.load({ async: true });}catch(e){}</script>',
    '<title>Funda | API</title>',
    '<body>',
    '<header><img src="/static/assets/img/logo.svg" alt="Funda Logo"></header>',
    '<main>',
    '<article id="chat">',
    '<section id="chat-body">',
    body,
    '</section>',
    '<footer>',
    '<form id="chat-form">',
    '<input id="chatInput" name="chatInput" type="text" placeholder="type something..." autocomplete="off"/>',
    '<input type="submit" value="send" />',
    ''
  ].join('\n'));
}
