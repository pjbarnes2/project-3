import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class Project3 extends LitElement {
  static properties = {
    header: { type: String },
  }

  static get tag() {
    return 'badge-list';
}

static get properties()
{
    return {
        badges: {type: Array},
        name: {type:String},
    }
}

  static styles = css`
    
    
    .wrapper {
  width: 400px;
  border: 2px solid black;
  display: inline-flex;
}

.image {
  width: 400px;
}
.header {
    line-height: 1em;
    font-size: 50px;
    font-family: "Monument Extended Ultrabold";
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    text-align: center;
}

.header h4 {
  margin: 16px;
  font-style: normal;
}

.buttons button:focus,
.buttons button:hover {
  background-color: rgba(200, 0, 50, 0.5);
}

.buttons button:active {
  background-color: rgba(50, 0, 200, 0.5);
}

.buttons {
  display: inline block;
}

button {
  padding: 12px;
  font-size: 32px;
}
name {
    line-height: 1.2em;
    font-size: 40px;
    fill: rgb(59, 59, 59);
    font-family: "Bryso Letter Gothic Bold";
    color: rgb(130, 73, 73);
    text-align: left;
}
.details summary {
  line-height: 1.2em;
    font-size: 40px;
    fill: rgb(59, 59, 59);
    font-family: "Bryso Letter Gothic Bold";
    color: rgb(130, 73, 73);
}

.dupe {
  background-color: white;
  display: inline-block;
  padding: 8px 8px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 80px;
  font-weight: bold;
  box-shaddow: 10px 5px 5px #ccc;
  text-decoration: none;
  font-family: Papyrus;
}

.changecolor {
  background-color: white;
  display: inline-block;
  padding: 8px 8px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 80px;
  font-weight: bold;
  box-shaddow: 10px 5px 5px #ccc;
  text-decoration: none;
}

.newtitle {
  background-color: white;
  display: inline-block;
  padding: 8px 8px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 80px;
  font-weight: bold;
  box-shaddow: 10px 5px 5px #ccc;
  text-decoration: none;
}

.delete {
  background-color: white;
  display: inline-block;
  padding: 8px 8px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 80px;
  font-weight: bold;
  box-shaddow: 10px 5px 5px #ccc;
  text-decoration: none;
}


@media only screen and (max-width: 425px) {
  .wrapper {
    font-weight: normal;
  }
  .wrapper .header h3 {
    font-size: 12px;
  }
  .wrapper .header h4 {
    font-size: 10px !important;
  }
  details {
    display: none;
  }
}

    `;
}


customElements.define('project-3', Project3);