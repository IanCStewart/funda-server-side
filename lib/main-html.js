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
  `;
}
