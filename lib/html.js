module.exports = { mainHtml, housesHtml, docHtml, offline, error };

function docHtml(body) {
  return `
    <!doctype html>
    <html lang="en">
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="/manifest.json" rel="manifest">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
      <link rel="stylesheet" href="/style.css">
      <script src="/funda.js" defer></script>
      <script src="https://use.typekit.net/gco3gds.js"></script>
      <script>try{Typekit.load({ async: true });}catch(e){}</script>
      <title>Funda | API</title>
      <body>
        <header><img src="/assets/img/logo.svg" alt="Funda Logo"></header>
        <main>
          <article id="chat">
            <section class="nojs" id="chat-body">
              ${body}
            </section>
            <footer>
              <form class="hidden" id="chat-form">
                <input id="chatInput" name="chatInput" type="text" placeholder="type something..." autocomplete="off" disabled />
                <input type="submit" value="send" disabled/>
              </form>
            </footer>
          </article>
        </main>
        <script>
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
          }
        </script>
      </body>
  `;
}

function error() {
  return `
    <section class="message fundapi">
      <div class="avatar"><img src="/assets/img/fundapi-avatar.svg" /></div>
      <header><h1>404</h1></header>
      <p>Oopsies something went wrong. If you think what you did is supposed to work please mail me at <a href="mailto:ian@icstewart.com">ian@icstewart.com</a></p>
      <p>browse back <a href="/">home</a> to get back on track</p>
    </section>
  `;
}

function housesHtml(adress, image, price) {
  return `
    <section class="message house">
      <div class="avatar"><img src="/assets/img/fundapi-avatar.svg" /></div>
      <header><h1>${adress}</h1></header>
      <p>
        <img class="house-img" src="${image}"/>
        ${price}
      </p>
    </section>
  `;
}

function mainHtml() {
  return `
    <section class="message fundapi">
      <div class="avatar"><img src="/assets/img/fundapi-avatar.svg" /></div>
      <header><h1>Fundapi</h1></header>
      <p>Vul het onderstaande formulier in om een zoekopdracht te doen.</p>
      <form>
        <fieldset>
          <legend>Plaats</legend>
          <section>
            <input type="text" name="location" placeholder="Plaats" autocomplete="off" />
          </section>
        </fieldset>
        <fieldset>
          <legend>Type wooning</legend>
          <section>
            <input id="koop" type="radio" name="type" value="koop" checked />
            <label for="koop">Koop</label>
            <input id="huur" type="radio" name="type" value="huur" />
            <label for="huur">Huur</label>
          </section>
        </fieldset>
        <fieldset>
          <legend>Buiten ruimte</legend>
          <section>
            <input id="balkon" type="radio" name="outdoor" value="balkon" />
            <label for="balkon">Balkon</label>
            <input id="dakterass" type="radio" name="outdoor" value="dakterras" />
            <label for="dakterass">Dakterras</label>
            <input id="tuin" type="radio" name="outdoor" value="tuin" />
            <label for="tuin">Tuin</label>
          </section>
        </fieldset>
        <input type="submit" value="send" />
      </form>
    </section>
  `;
}

function offline() {
  return `
  <!doctype html>
  <html lang="en">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/manifest.json" rel="manifest">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
    <link rel="stylesheet" href="/style.css">
    <script src="https://use.typekit.net/gco3gds.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>
    <title>Funda | API</title>
    <body>
      <header><img src="/assets/img/logo.svg" alt="Funda Logo"></header>
      <main>
        <article id="chat">
          <section class="nojs" id="chat-body">
            <section class="message house">
              <div class="avatar"><img src="/assets/img/fundapi-avatar.svg" /></div>
              <header><h1>Oflline</h1></header>
              <p>
                Kill the dino!
              </p>
            </section>
          </section>
          <footer>
            <form class="hidden" id="chat-form">
              <input id="chatInput" name="chatInput" type="text" placeholder="type something..." autocomplete="off" disabled />
              <input type="submit" value="send" disabled/>
            </form>
          </footer>
        </article>
      </main>
      <script>
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js')
        }
      </script>
    </body>
  `
}
