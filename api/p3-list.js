export default async function handler(request, res) {

    const badgelist = [
        {
                
            "name": "Topher",
            "image": "https://i.kym-cdn.com/entries/icons/mobile/000/043/203/tophercover.jpg",
            "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
            "summary": "god king of the universe", 
            "summary2": "Y'ALL ALREADY KNOW WHO IT IS",
            "header": "Topher",
            

            "topblock1": "blue",
            "topblock2": "blue",
            "topblock3": "pink",
            "topblock4": "blue",
            "topblock5": "pink",
            "topblock6": "blue",
            "topblock7": "pink",
        
            "lowerblock1": "purple",
            "lowerblock3": "gray",
            "lowerblock5": "gray",
            "lowerblock7": "white",
        
            "headerColor": "white",
            "tvColor": "blue",
            "tvAntenna": "blue",
            "textColor": "black",
            "tvOutline": "pink",
            "cardColor": "yellow",
        
        },

        {
            "name": "Nature",
            "image": "https://th.bing.com/th/id/R.5bcd72ce9308cf5ff5c251f9b78a5e26?rik=%2bdZ0nenngS5Zpg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f02%2fbeautiful-mountain.jpg&ehk=13Qa308guXXwbNR4xV0aKRbk6yDrBr4Y%2fs07UHwUZao%3d&risl=&pid=ImgRaw&r=0",
            "logo": "https://th.bing.com/th/id/OIP.RlM10r9JQv4PHFlh5dLqpgHaEK?w=301&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
            "summary": "a wonderous beauty", 
            "summary2": "go outside",
            "header": "Nature",
            


            "topblock1": "green",
            "topblock2": "orange",
            "topblock3": "brown",
            "topblock4": "blue",
            "topblock5": "green",
            "topblock6": "blue",
            "topblock7": "blue",
        
            "lowerblock1": "green",
            "lowerblock3": "green",
            "lowerblock5": "green",
            "lowerblock7": "green",

            "tvColor": "green",
            "tvAntenna": "blue",
            "textColor": "white",
            "tvOutline": "pink",
            "cardColor": "blue",
            "headerColor": "white",

        },
        {
            "name": "Fresh Cut Grass",
            "image": "https://www.lawnstarter.com/blog/wp-content/uploads/2016/11/zoysia-grass.jpg",
            "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
            "summary": "good sent", 
            "summary2": "i have been working on this for 8 hours i need to go outside",
            "header": "Grass",

            "topblock1": "orange",
            "topblock2": "green",
            "topblock3": "brown",
            "topblock4": "green",
            "topblock5": "brown",
            "topblock6": "green",
            "topblock7": "orange",
        
            "lowerblock1": "green",
            "lowerblock3": "green",
            "lowerblock5": "green",
            "lowerblock7": "green",
        
            "headerColor": "black",
            "tvColor": "blue",
            "tvAntenna": "blue",
            "textColor": "white",
            "tvOutline": "pink",
            "cardColor": "red",

        },
        {
            "name": "Shrek",
            "image": "https://preview.redd.it/nvaxpuqwius41.jpg?auto=webp&s=803366717450b2e1afd8d216545578278a7b4564",
            "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",

            "summary": "Get out of my swamp", 
            "summary2": "donke",
            "header": "Shrek", 

            "topblock1": "green",
            "topblock2": "green",
            "topblock3": "pink",
            "topblock4": "brown",
            "topblock5": "pink",
            "topblock6": "green",
            "topblock7": "yellow",
        
            "lowerblock1": "gray",
            "lowerblock3": "gray",
            "lowerblock5": "gray",
            "lowerblock7": "white",
        
            "headerColor": "white",
            "tvColor": "blue",
            "tvAntenna": "blue",
            "textColor": "black",
            "tvOutline": "pink",
            "cardColor": "orange",


        },
        {
            "name": "Leon S Kennedy",
            "image": "https://www.vytukej.cz/wp-content/uploads/2018/07/leon.jpg",
            "logo": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0d/ee/1d/0dee1d6f-a954-20b6-c452-6f3fa8b8eac0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
            "summary": "Bingo enthusiest", 
            "summary2": ":)",
            "header": "Leon Skennedy", 
            
            "topblock1": "grey",
            "topblock2": "red",
            "topblock3": "pink",
            "topblock4": "red",
            "topblock5": "pink",
            "topblock6": "grey",
            "topblock7": "pink",
        
            "lowerblock1": "gray",
            "lowerblock3": "gray",
            "lowerblock5": "gray",
            "lowerblock7": "white",
        
            "headerColor": "white",
            "tvColor": "blue",
            "tvAntenna": "blue",
            "textColor": "black",
            "tvOutline": "pink",
            "cardColor": "pink",
        },

    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badgelist);

}