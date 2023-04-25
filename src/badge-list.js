import "./p3-card.js";
import { LitElement, html, css } from 'lit';

class BadgeList extends LitElement{
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

       
    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            border: 2px;
            
        }
        .item {
            display: inline-flex;
        }
        
    p3-card{
      margin: 10px;
      padding: 10px;
    }

      
    `;
    }

    constructor() {

        super();
        this.badges=[
            {
                "name": "Topher",
                "image": "https://i.kym-cdn.com/entries/icons/mobile/000/043/203/tophercover.jpg",
                "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
                "summary": "interesting fella", 
                "header": "Topher", 
                
    
            },
    
            {
                "name": "Amazon Cognito",
                "image": "av:games",
                "logo": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
                "summary": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html", 
                "header": "Joshua Hantman", 
                
    
            },
            {
                "name": "Amazon Cognito",
                "image": "av:games",
                "logo": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
                "summary": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html", 
                "header": "Joshua Hantman", 
                
    
            },
            {
                "name": "Amazon Cognito",
                "image": "av:games",
                "logo": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
                "summary": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html", 
                "header": "Joshua Hantman", 
                
    
    
            },
            {
                "name": "Amazon Cognito",
                "image": "av:games",
                "logo": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
                "summary": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html", 
                "header": "Joshua Hantman", 
                
    
            },
    
        ];
    
       

    }

    render() {
        return html`
        <div class="numBadges">
       
        </div>
        <div class="wrapper">
        ${this.badges.map(
              badge => html`
                <div class="card">
                <p3-card

                  name="${badge.name}"
                  image="${badge.image}" 
                    summary="${badge.summary}"
                    header="${badge.header}">
                </p3-card> 
                  </div>
              `)}
              </div>
        
        `;
    }


    }

customElements.define('badge-list', BadgeList);
