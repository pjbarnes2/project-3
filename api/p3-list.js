export default async function handler(request, res) {

    const badgelist = [
        {
            "name": "Topher",
            "image": "https://i.kym-cdn.com/entries/icons/mobile/000/043/203/tophercover.jpg",
            "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
            "summary": "interesting fella", 
            "header": "Topher"
            

        },

        {
            "name": "Bryce",
            "image": "av:games",
            "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
            "summary": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html", 
            "header": "Joshua Hantman"
            

        },
        {
            "name": "Sketchy Bryce",
            "image": "data:image/jpeg;base64,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"
        ,
            "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
            "summary": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html", 
            "header": "Joshua Hantman"
            

        },
        {
            "name": "Shrek",
            "image": "https://preview.redd.it/nvaxpuqwius41.jpg?auto=webp&s=803366717450b2e1afd8d216545578278a7b4564",
            "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",

            "summary": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html", 
            "header": "Joshua Hantman", 
            


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