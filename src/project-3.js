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
  background-color: black;
}

.image {
  width: 400px;
}
.companylogo
{
  display: block;
  margin-left: auto;
  width: 100px;
}
.header {
    line-height: 1em;
    font-size: 50px;
    font-family: "Monument Extended Ultrabold";
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: white;
    text-align: center;
}

.header h4 {
  margin: 16px;
  font-style: normal;
}


name {
    line-height: 1.2em;
    font-size: 40px;
    fill: rgb(59, 59, 59);
    font-family: "Bryso Letter Gothic Bold";
    color: rgb(130, 73, 73);
    text-align: left;
}
.summary {
margin: 0;
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: white;
    text-align: left;
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