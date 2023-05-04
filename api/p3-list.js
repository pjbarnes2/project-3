export default async function handler(request, res) {

    const badgelist = [
        {
            
            "name": "Topher",
            "image": "https://i.kym-cdn.com/entries/icons/mobile/000/043/203/tophercover.jpg",
            "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
            "summary": "interesting fella", 
            "summary2": "YALL ALREADY KNOW WHO IT IS",
            "header": "Topher",
            "tvColor": "yellow",
            "tvAntenna": "blue",
            "border": "orange",
            "textColor": "orange",
            "tvOutline": "pink",
            "cardColor": "yellow",
            "topblock1": "pink",
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
            "name": "Mountain",
            "image": "https://www.bing.com/images/search?view=detailV2&ccid=W81yzpMI&id=9C4D4ED21E3C592C474EA6592E81E7E99D74D6F9&thid=OIP.W81yzpMIz1_1wlH5t4peJgHaEo&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.5bcd72ce9308cf5ff5c251f9b78a5e26%3frik%3d%252bdZ0nenngS5Zpg%26riu%3dhttp%253a%252f%252fthewowstyle.com%252fwp-content%252fuploads%252f2015%252f02%252fbeautiful-mountain.jpg%26ehk%3d13Qa308guXXwbNR4xV0aKRbk6yDrBr4Y%252fs07UHwUZao%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1200&expw=1920&q=mountain+pictures&simid=607993023994276972&FORM=IRPRST&ck=F6666CA3C08A350BAF41DEC8A6FDBE74&selectedIndex=11&ajaxhist=0&ajaxserp=0",
            "logo": "https://th.bing.com/th/id/OIP.RlM10r9JQv4PHFlh5dLqpgHaEK?w=301&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
            "summary": "Tall", 
            "header": "Mountain"
            

        },
        {
            "name": "Dog",
            "image": "https://www.bing.com/images/search?view=detailV2&ccid=vpENuVG6&id=13DF45E7C8A77844B40526CB43784531EDC80CD3&thid=OIP.vpENuVG6_Ke79c0shGAHMQHaFn&mediaurl=https%3a%2f%2fstatic.businessinsider.com%2fimage%2f5484d9d1eab8ea3017b17e29%2fimage.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.be910db951bafca7bbf5cd2c84600731%3frik%3d0wzI7TFFeEPLJg%26pid%3dImgRaw%26r%3d0&exph=2497&expw=3296&q=dog&simid=608004929648082441&FORM=IRPRST&ck=3D14D93E3089BAA6E3F3BAAAC9C32D2F&selectedIndex=3",
            "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
            "summary": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html", 
            "header": "Dog"
            

        },
        {
            "name": "Shrek",
            "image": "https://preview.redd.it/nvaxpuqwius41.jpg?auto=webp&s=803366717450b2e1afd8d216545578278a7b4564",
            "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",

            "summary": "Get out of my swamp", 
            "header": "Shrek", 
            


        },
        {
            "name": "Leon S Kennedy",
            "image": "https://www.bing.com/images/search?view=detailV2&ccid=APPtDRBj&id=42DFD3541327422875BE942F03A505192BDA820B&thid=OIP.APPtDRBjuOHyvx8EmbySKQHaEK&mediaurl=https%3a%2f%2fwww.vytukej.cz%2fwp-content%2fuploads%2f2018%2f07%2fleon.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.00f3ed0d1063b8e1f2bf1f0499bc9229%3frik%3dC4LaKxkFpQMvlA%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=leon+kennedy+resident+evil+4+remake&simid=607986530011793092&FORM=IRPRST&ck=7608743469EE822AD9554544B3818916&selectedIndex=14&ajaxhist=0&ajaxserp=0",
            "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
            "summary": "Bingo enthusiest", 
            "header": "Leon Skennedy", 
            

        },

    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badgelist);

}