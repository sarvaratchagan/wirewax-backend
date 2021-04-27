# wirewax-backend

Create an API to access and sort large amounts of video metadata


#### Prerequisite:

 1) Node v12 +
 2) npm 6.14.4
 3) mongodb v4.2.3
 4) NoSql Booster (Optional) - Use your favorite GUI interface
 
 If you dont have install above dependencies please install other wise you can go for next steps
 
#### How to prepare database:
 
  1) Create database either from terminal or GUI interface. In my case (wirewax - db name) I just create it from 
     NoSql Booster app.
  2) Once you create database then add collection and import from this dataset json
    https://wirewax.s3-eu-west-1.amazonaws.com/CodeTest/graphics-markup-test-data.json
  3) then change db name in below file
  
    ```./server/config.js```

#### Run backend service

  1) install dependencies by ```npm install --verbose```
  2) then run ```npm start```. Now you will see some logs in console with `Wirewax Backend server started on port: 8080 env: dev`
  3) Now you can access the rest end point in local machine which is running in 8080 port. For example try from postman
     ```
        payload:
     
        {
            "filter": {
                "value": "Cent",
                "exact": false
            },
            "sort": {
                "column": "out_frame",
                "type": "asc"
            }
        }
     
        Auth Header:
        Bearer Token: eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMyIsImlhdCI6MTYxMTg0MDU2MSwiZXhwIjoxNjExOTI2OTYxfQ.1ev_zYNfVRi_rqXOdzfgLR2EHQiOFB4Iveo3rQha4ASlDyeHI27UEKd6XaYdSgWkgzDxscMMqnB23vEf0wAIow
     
        method: POST
        url: localhost:8080/graphic/markups?limit=5&skip=3
     
        response:
        
         [
             {
                 "in_frame": 1692,
                 "out_frame": 1753,
                 "content": {
                     "value": [
                         "Text"
                     ],
                     "labels": [
                         "text",
                         "black",
                         "font",
                         "white",
                         "logo",
                         "darkness",
                         "light",
                         "black-and-white",
                         "monochrome photography",
                         "brand"
                     ],
                     "location": [
                         "Centre"
                     ]
                 }
             },
             {
                 "in_frame": 1692,
                 "out_frame": 1753,
                 "content": {
                     "value": [
                         "Text"
                     ],
                     "labels": [
                         "text",
                         "black",
                         "font",
                         "white",
                         "logo",
                         "darkness",
                         "light",
                         "black-and-white",
                         "monochrome photography",
                         "brand"
                     ],
                     "location": [
                         "Centre"
                     ]
                 }
             },
             {
                 "in_frame": 1885,
                 "out_frame": 1919,
                 "content": {
                     "value": [
                         "Various/Multiple GFX"
                     ],
                     "labels": [
                         "player",
                         "sports",
                         "sports equipment",
                         "ball game",
                         "sport venue",
                         "goal",
                         "team sport",
                         "soccer player",
                         "football player",
                         "football"
                     ],
                     "location": [
                         "Centre",
                         "Right",
                         "Right",
                         "Upper Right",
                         "Upper Right"
                     ]
                 }
             },
             {
                 "in_frame": 1977,
                 "out_frame": 2009,
                 "content": {
                     "value": [
                         "Various/Multiple GFX"
                     ],
                     "labels": [
                         "sports",
                         "ball game",
                         "team sport",
                         "player",
                         "football player",
                         "tournament",
                         "games",
                         "basketball moves",
                         "competition event",
                         "championship"
                     ],
                     "location": [
                         "Centre",
                         "Upper Right",
                         "Upper Right"
                     ]
                 }
             },
             {
                 "in_frame": 2136,
                 "out_frame": 2244,
                 "content": {
                     "value": [
                         "Various/Multiple GFX"
                     ],
                     "labels": [
                         "player",
                         "sports",
                         "team sport",
                         "ball game",
                         "football player",
                         "product",
                         "sport venue",
                         "soccer player",
                         "fan",
                         "international rules football"
                     ],
                     "location": [
                         "Centre"
                     ]
                 }
             },
             {
                 "in_frame": 2136,
                 "out_frame": 2244,
                 "content": {
                     "value": [
                         "Various/Multiple GFX"
                     ],
                     "labels": [
                         "player",
                         "sports",
                         "football player",
                         "soccer",
                         "team sport",
                         "ball game",
                         "football",
                         "sport venue",
                         "tournament",
                         "sports equipment"
                     ],
                     "location": [
                         "Centre"
                     ]
                 }
             },
             {
                 "in_frame": 2565,
                 "out_frame": 2596,
                 "content": {
                     "value": [
                         "Various/Multiple GFX"
                     ],
                     "labels": [
                         "player",
                         "product",
                         "facial hair",
                         "team sport",
                         "football player",
                         "beard",
                         "team",
                         "sports",
                         "soccer player",
                         "international rules football"
                     ],
                     "location": [
                         "Lower",
                         "Upper Right",
                         "Centre"
                     ]
                 }
             },
             {
                 "in_frame": 2596,
                 "out_frame": 2656,
                 "content": {
                     "value": [
                         "Various/Multiple GFX"
                     ],
                     "labels": [
                         "player",
                         "sports",
                         "sport venue",
                         "sports equipment",
                         "team sport",
                         "ball game",
                         "soccer player",
                         "goal",
                         "football player",
                         "football"
                     ],
                     "location": [
                         "Centre"
                     ]
                 }
             },
             {
                 "in_frame": 2596,
                 "out_frame": 2656,
                 "content": {
                     "value": [
                         "Various/Multiple GFX"
                     ],
                     "labels": [
                         "player",
                         "sports",
                         "soccer player",
                         "sport venue",
                         "sports equipment",
                         "ball game",
                         "football player",
                         "goal",
                         "soccer-specific stadium",
                         "football"
                     ],
                     "location": [
                         "Centre"
                     ]
                 }
             },
             {
                 "in_frame": 2739,
                 "out_frame": 2785,
                 "content": {
                     "value": [
                         "Various/Multiple GFX"
                     ],
                     "labels": [
                         "player",
                         "sports",
                         "sport venue",
                         "team sport",
                         "ball game",
                         "football player",
                         "tournament",
                         "team",
                         "product",
                         "stadium"
                     ],
                     "location": [
                         "Centre",
                         "Upper Right"
                     ]
                 }
             }
         ]
     
     ```
