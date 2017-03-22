module.exports = mainHtml;

function mainHtml() {
  return `
    <section class="message fundapi">
      <div class="avatar"><img src="/static/assets/img/fundapi-avatar.svg" /></div>
      <header><h1>Fundapi</h1></header>
      <p>Vul het onderstaande formulier in om een zoekopdracht te doen.</p>
      <form>
        <fieldset>
          <legend>Locatie</legend>
          <section>
            <input type="text" name="location" placeholder="Locatie" autocomplete="off" />
          </section>
        </fieldset>
        <fieldset>
          <legend>Type wooning</legend>
          <section>
            <input id="koop" type="radio" name="type" value="koop" />
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
