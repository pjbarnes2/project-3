
import { LitElement, html, css } from 'lit';
import "./p3-card.js";
export class BadgeList extends LitElement{
    static get tag() {
        return 'badge-list';
    }

    static get properties()
    {
        return {
            badges: {type: Array},
            name: {type:String},
            image:{type:String},
            logo:{type:String},
            summary:{type:String},
            header: {type:String},
            tvAntenna: {type:String},
            topblock1: { type: String},
            topblock2: { type: String},
            topblock3: { type: String},
            topblock4: { type: String},
            topblock5: { type: String},
            topblock6: { type: String},
            topblock7: { type: String},

            bottomBlock1: { type: String},
            bottomBlock3: { type: String},
            bottomBlock5: { type: String},
            bottomBlock7: { type: String},

            tvColor: { type: String},
          tvIntenna: {type: String},
          badgeBorder: { type: String},
          textColor: { type: String},
          tvOutline: { type: String},
          cardColor: { type: String},

        };
    }

       
    static get styles() {
        return css`
        :host {
            display: block;
            padding: 25px;
        }
        .wrapper {
            width: 340px;
        height: 258px;
        position: relative;
        }
        .card {
            display: inline-flex;
        }
        .logo {
            width:30px;
            height:30;
            position: absolute;
        bottom: 0px;
        right: 0px;
        z-index: 2;
        }
        
    p3-card{
      margin: 10px;
      padding: 10px;
    }

      
    `;
    }

    constructor() {

        super();
        
    this.logo= new URL('../assets/hax logo.jpg', import.meta.url).href;
    
    this.badges=[
            {
                
                "name": "Topher",
                "image": "https://i.kym-cdn.com/entries/icons/mobile/000/043/203/tophercover.jpg",
                "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
                "summary": "interesting fella", 
                "summary2": "Y'ALL ALREADY KNOW WHO IT IS",
                "header": "Topher",
                "tvColor": "yellow",
                "tvAntenna": "blue",
                "border": "orange",
                "textColor": "orange",
                "tvOutline": "pink",
                "cardColor": "yellow",
                "topblock1": "blue",
                "topblock2": "blue",
                "topblock3": "pink",
                "topblock4": "blue",
                "topblock5": "pink",
                "topblock6": "blue",
                "topblock7": "pink",
            
                "bottomBlock1": "gray",
                "bottomBlock3": "gray",
                "bottomBlock5": "gray",
                "bottomBlock7": "white",
            
                "badgeTitleColor": "white",
            
            },
    
            {
                "name": "Nature",
                "image": "https://th.bing.com/th/id/R.5bcd72ce9308cf5ff5c251f9b78a5e26?rik=%2bdZ0nenngS5Zpg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f02%2fbeautiful-mountain.jpg&ehk=13Qa308guXXwbNR4xV0aKRbk6yDrBr4Y%2fs07UHwUZao%3d&risl=&pid=ImgRaw&r=0",
                "logo": "https://th.bing.com/th/id/OIP.RlM10r9JQv4PHFlh5dLqpgHaEK?w=301&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
                "summary": "Tall", 
                "header": "Nature",
                "topblock1": "green",
                "topblock2": "orange",
                "topblock3": "brown",
                "topblock4": "blue",
                "topblock5": "pink",
                "topblock6": "blue",
                "topblock7": "pink",
            
                "bottomBlock1": "gray",
                "bottomBlock3": "gray",
                "bottomBlock5": "gray",
                "bottomBlock7": "white",
    
            },
            {
                "name": "Dog",
                "image": "https://www.lawnstarter.com/blog/wp-content/uploads/2016/11/zoysia-grass.jpg",
                "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
                "summary": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html", 
                "header": "Grass",
                "tvColor": "yellow",
                "tvAntenna": "blue",
                "border": "orange",
                "textColor": "orange",
                "tvOutline": "pink",
                "cardColor": "yellow",
                "topblock1": "orange",
                "topblock2": "blue",
                "topblock3": "pink",
                "topblock4": "blue",
                "topblock5": "pink",
                "topblock6": "blue",
                "topblock7": "pink",
            
                "bottomBlock1": "gray",
                "bottomBlock3": "gray",
                "bottomBlock5": "gray",
                "bottomBlock7": "white",
            
                "badgeTitleColor": "white",
            
    
            },
            {
                "name": "Shrek",
                "image": "https://preview.redd.it/nvaxpuqwius41.jpg?auto=webp&s=803366717450b2e1afd8d216545578278a7b4564",
                "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
    
                "summary": "Get out of my swamp", 
                "header": "Shrek", 
                "tvColor": "yellow",
                "tvAntenna": "blue",
                "border": "orange",
                "textColor": "orange",
                "tvOutline": "pink",
                "cardColor": "yellow",
                "topblock1": "green",
                "topblock2": "blue",
                "topblock3": "pink",
                "topblock4": "blue",
                "topblock5": "pink",
                "topblock6": "blue",
                "topblock7": "pink",
            
                "bottomBlock1": "gray",
                "bottomBlock3": "gray",
                "bottomBlock5": "gray",
                "bottomBlock7": "white",
            
                "badgeTitleColor": "white",
            
    
    
            },
            {
                "name": "Leon S Kennedy",
                "image": "https://www.vytukej.cz/wp-content/uploads/2018/07/leon.jpg",
                "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
                "summary": "Bingo enthusiest", 
                "header": "Leon Skennedy", 
                "tvColor": "yellow",
                "tvAntenna": "blue",
                "border": "orange",
                "textColor": "orange",
                "tvOutline": "pink",
                "cardColor": "yellow",
                "topblock1": "grey",
                "topblock2": "blue",
                "topblock3": "pink",
                "topblock4": "blue",
                "topblock5": "pink",
                "topblock6": "blue",
                "topblock7": "pink",
            
                "bottomBlock1": "gray",
                "bottomBlock3": "gray",
                "bottomBlock5": "gray",
                "bottomBlock7": "white",
            
                "badgeTitleColor": "white",
            
    
            },
    
        ];
       
       /**/ 

    }

    render() {
        return html`
        <div class="wrapper">
        ${this.badges.map(
              badge => html`
                <div class="card">
                    <p3-card
                        name="${badge.name}"
                        image="${badge.image}" 
                        summary="${badge.summary}"
                        logo="${badge.logo}"
                        header="${badge.header}"
                        topblock1="${badge.topblock1}"
                        topblock2="${badge.topblock2}"
                        topblock3="${badge.topblock3}"
                        topblock4="${badge.topblock4}"
                        topblock5="${badge.topblock5}"
                        topblock6="${badge.topblock6}"
                        topblock7="${badge.topblock7}"
                        lowerblock1="${badge.lowerblock1}"
                        lowerblock2="${badge.lowerblock2}"
                        lowerblock3="${badge.lowerblock3}"
                        lowerblock4="${badge.lowerblock4}"
                        lowerblock5="${badge.lowerblock5}"
                        lowerblock6="${badge.lowerblock6}"
                        lowerblock7="${badge.lowerblock7}"

                        > 
                    </p3-card> 
                </div>
              `)}
        </div>
        
        `;
    }


    }

customElements.define('badge-list', BadgeList);
