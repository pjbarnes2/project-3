import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class P3Card extends LitElement {

  static get properties() {
    return {
      
      name: {
        type: String,
        reflect: true
      }, 
      image: {type: String},
      companylogo:{type: String},
      name: {type:String},
      summary: {
        type: String,
      }, 
    
    }
  }

  static get styles(){
    return css`
    
    :host{

    display: block;
    }
    .wrapper {
  width: 400px;
  border: 2px solid black;
  display: inline-flex;
  background-color: black;
}
.body{
        font-family: sans-serif;
        background-color: #cfe6f4;
        padding: auto;
        text-align: left;
        height: auto;
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


.name {
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
  constructor() {
    super();
    this.name = "Topher";
    this.summary = "Powerful Being";
    this.companylogo = "Cool Guy";
  
  }


    render() {
      return html`
    
<div class="wrapper">
  <div class="container">
   
    <div class="header">
      <h3>Topher</h3>
      
    </div>
     <img class="image" src="https://i.kym-cdn.com/entries/icons/mobile/000/043/203/tophercover.jpg" />
<img class="companylogo" src= "https://i.kym-cdn.com/entries/icons/mobile/000/043/203/tophercover.jpg" />
    < class="name">
      <summary class="summary">
        <ul>
        Topher Lastname
        </ul>
      <div>
        <ul>
          killed god and took his place</li>
          owns 70% of all rae dunn mugs</li>
        </ul>
       
        </summary>
    </div>
 
    `;
  }
}

customElements.define('p3-card', P3Card);