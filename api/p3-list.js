export default async function handler(request, res) {

    const badgelist = [
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

    ]
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badgelist);

}