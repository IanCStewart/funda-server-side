module.exports = { mainHtml, housesHtml, docHtml, offline, error };

function docHtml(body) {
  return `
    <!doctype html>
    <html lang="en">
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="theme-color" content="#F7A100">
      <link href="/manifest.json" rel="manifest">
      <script src="/funda.js" defer></script>
      <title>Funda | API</title>
      <script id="loadcss">
        // loadCSS
        !function(e){"use strict";var n=function(n,t,o){function i(e){return a.body?e():void setTimeout(function(){i(e)})}function r(){l.addEventListener&&l.removeEventListener("load",r),l.media=o||"all"}var d,a=e.document,l=a.createElement("link");if(t)d=t;else{var s=(a.body||a.getElementsByTagName("head")[0]).childNodes;d=s[s.length-1]}var f=a.styleSheets;l.rel="stylesheet",l.href=n,l.media="only x",i(function(){d.parentNode.insertBefore(l,t?d:d.nextSibling)});var u=function(e){for(var n=l.href,t=f.length;t--;)if(f[t].href===n)return e();setTimeout(function(){u(e)})};return l.addEventListener&&l.addEventListener("load",r),l.onloadcssdefined=u,u(r),l};"undefined"!=typeof exports?exports.loadCSS=n:e.loadCSS=n}("undefined"!=typeof global?global:this);
        var fontStyles = loadCSS('/style.css', document.getElementById("loadcss"));
      </script>
      <style>
        html,body,div,h1,p,img,fieldset,form,label,legend,article,footer,header,section{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,footer,header,section{display:block}body{line-height:1}:root{--color-orange:#F7A100;--color-light-blue:#E6F2F7;--color-blue:#60C5F8;--color-dark-blue:#0071B3;--color-brown:#53241B;--color-white:#FFF;--color-grey:#999;--color-black:#333;--text-large:calc(var(--text-body) * 2.25);--text-medium:calc(var(--text-body) * 1.75);--text-small:calc(var(--text-body) * 1.375);--text-body:1.6rem;--text-xs:1.2rem}html{font-size:62.5%;font-family:"proxima-nova";height:100%}body{height:100%;width:100vw}header{background:var(--color-orange);padding:1rem;color:var(--color-white)}header img{height:3.5rem}main{height:calc(100% - 5.5rem);width:100%}#chat{height:100%;width:100%;background:url(/assets/img/chat-background.jpg);background-size:cover;background-position:center;font-size:var(--text-body);position:relative}#chat-body{width:100%;padding:1.6rem;box-sizing:border-box;overflow-y:scroll;max-height:calc(100% - 4.8rem);position:absolute;bottom:4.8rem;left:0}#chat-body.nojs{max-height:100%;bottom:0}#chat footer{position:absolute;bottom:0;left:0;width:100%}#chat footer form{width:100%;height:4.8rem;position:relative}#chat footer input[type="text"]{width:100%;height:100%;padding:1.6rem;padding-right:6rem;box-sizing:border-box;border:none;font-size:inherit;line-height:var(--text-body)}#chat footer input[type="submit"]{position:absolute;top:0;right:0;padding:1.6rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;color:var(--color-dark-blue);border:none;font-size:inherit;line-height:var(--text-body)}#chat .message{display:flex;flex-direction:column;align-items:flex-start;color:var(--color-white);margin-bottom:1rem;position:relative;padding-left:8rem}#chat .avatar{position:absolute;top:0;left:0}.avatar img{width:6rem;height:6rem}#chat header{font-weight:700;background:none;padding:0;padding-bottom:1rem;color:var(--color-black)}#chat .message p,#chat .message form{max-width:80%;padding:1rem;background:var(--color-blue);border-radius:.5rem}#chat .message p+form{margin-top:.5rem}#chat .message form{display:flex;flex-direction:column;justify-content:space-between}#chat .message form legend{font-weight:700;font-size:var(--text-small);margin-bottom:.5rem}#chat .message form fieldset{margin-bottom:1rem}#chat .message form fieldset section{display:flex;flex-wrap:wrap;justify-content:space-around;align-content:center}#chat .message form label{margin:0 .5rem;margin-bottom:.25rem;padding:1rem;background:var(--color-dark-blue)}#chat .message form input:checked+label{background:var(--color-orange)}#chat .message form input{font-size:var(--text-body);padding:calc(1.6rem / 2)}#chat .message form input[type="radio"]{opacity:0;position:absolute;z-index:-999}#chat .message form input[type="text"]{appearance:none;width:100%;border:none}#chat .message form input[type="submit"]{max-width:20rem;width:100%;background-color:var(--color-orange);color:var(--color-white);border:none;margin:0 auto}.hidden{display:none}
      </style>
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
        <script src="https://use.typekit.net/gco3gds.js"></script>
        <script>try{Typekit.load({ async: true });}catch(e){}</script>
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
    <meta name="theme-color" content="#F7A100">
    <link href="/manifest.json" rel="manifest">
    <script id="loadcss">
      // loadCSS
      !function(e){"use strict";var n=function(n,t,o){function i(e){return a.body?e():void setTimeout(function(){i(e)})}function r(){l.addEventListener&&l.removeEventListener("load",r),l.media=o||"all"}var d,a=e.document,l=a.createElement("link");if(t)d=t;else{var s=(a.body||a.getElementsByTagName("head")[0]).childNodes;d=s[s.length-1]}var f=a.styleSheets;l.rel="stylesheet",l.href=n,l.media="only x",i(function(){d.parentNode.insertBefore(l,t?d:d.nextSibling)});var u=function(e){for(var n=l.href,t=f.length;t--;)if(f[t].href===n)return e();setTimeout(function(){u(e)})};return l.addEventListener&&l.addEventListener("load",r),l.onloadcssdefined=u,u(r),l};"undefined"!=typeof exports?exports.loadCSS=n:e.loadCSS=n}("undefined"!=typeof global?global:this);
      var fontStyles = loadCSS('/style.css', document.getElementById("loadcss"));
    </script>
    <style>
      html,body,div,h1,p,img,fieldset,form,label,legend,article,footer,header,section{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,footer,header,section{display:block}body{line-height:1}:root{--color-orange:#F7A100;--color-light-blue:#E6F2F7;--color-blue:#60C5F8;--color-dark-blue:#0071B3;--color-brown:#53241B;--color-white:#FFF;--color-grey:#999;--color-black:#333;--text-large:calc(var(--text-body) * 2.25);--text-medium:calc(var(--text-body) * 1.75);--text-small:calc(var(--text-body) * 1.375);--text-body:1.6rem;--text-xs:1.2rem}html{font-size:62.5%;font-family:"proxima-nova";height:100%}body{height:100%;width:100vw}header{background:var(--color-orange);padding:1rem;color:var(--color-white)}header img{height:3.5rem}main{height:calc(100% - 5.5rem);width:100%}#chat{height:100%;width:100%;background:url(/assets/img/chat-background.jpg);background-size:cover;background-position:center;font-size:var(--text-body);position:relative}#chat-body{width:100%;padding:1.6rem;box-sizing:border-box;overflow-y:scroll;max-height:calc(100% - 4.8rem);position:absolute;bottom:4.8rem;left:0}#chat-body.nojs{max-height:100%;bottom:0}#chat footer{position:absolute;bottom:0;left:0;width:100%}#chat footer form{width:100%;height:4.8rem;position:relative}#chat footer input[type="text"]{width:100%;height:100%;padding:1.6rem;padding-right:6rem;box-sizing:border-box;border:none;font-size:inherit;line-height:var(--text-body)}#chat footer input[type="submit"]{position:absolute;top:0;right:0;padding:1.6rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;color:var(--color-dark-blue);border:none;font-size:inherit;line-height:var(--text-body)}#chat .message{display:flex;flex-direction:column;align-items:flex-start;color:var(--color-white);margin-bottom:1rem;position:relative;padding-left:8rem}#chat .avatar{position:absolute;top:0;left:0}.avatar img{width:6rem;height:6rem}#chat header{font-weight:700;background:none;padding:0;padding-bottom:1rem;color:var(--color-black)}#chat .message p,#chat .message form{max-width:80%;padding:1rem;background:var(--color-blue);border-radius:.5rem}#chat .message p+form{margin-top:.5rem}#chat .message form{display:flex;flex-direction:column;justify-content:space-between}#chat .message form legend{font-weight:700;font-size:var(--text-small);margin-bottom:.5rem}#chat .message form fieldset{margin-bottom:1rem}#chat .message form fieldset section{display:flex;flex-wrap:wrap;justify-content:space-around;align-content:center}#chat .message form label{margin:0 .5rem;margin-bottom:.25rem;padding:1rem;background:var(--color-dark-blue)}#chat .message form input:checked+label{background:var(--color-orange)}#chat .message form input{font-size:var(--text-body);padding:calc(1.6rem / 2)}#chat .message form input[type="radio"]{opacity:0;position:absolute;z-index:-999}#chat .message form input[type="text"]{appearance:none;width:100%;border:none}#chat .message form input[type="submit"]{max-width:20rem;width:100%;background-color:var(--color-orange);color:var(--color-white);border:none;margin:0 auto}.hidden{display:none}
    </style>
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
      <script src="https://use.typekit.net/gco3gds.js"></script>
      <script>try{Typekit.load({ async: true });}catch(e){}</script>
      <script>
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js')
        }
      </script>
    </body>
  `
}
