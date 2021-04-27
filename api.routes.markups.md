# Api routes Graphic Markups

## Graphic Markups

Create an API to access and sort large amounts of video metadata
this api constructed developer friendly. developer can pass pagination query parameters and request body filters and sorting

 1. query parameters - limit and skip
 2. filter
    value - string type parameter. you should pass filterable values for content.location
    exact - boolean parameter. true - apply exact filter otherwise which will work like contains operator
 3. sorting
    column - string parameter. you need to pass sorting column
    type - it describe "asc" / "desc"
    
    All above parameters will support null and empty if you dont want apply filter and sorting. but payload request inputs tightly coupled with Joi library which will validate the schema.
    this schema should contain below structure otherwise rest api will endup with error response 422 ( UNPROCESSABLE ENTITY ).
    Refer below schema construction for your integration
```
    const schemas = {
      markups: Joi.object().keys({
        sort: Joi.object().keys({
          column: Joi.string().valid('out_frame', 'in_frame').allow(null, ''),
          type: Joi.string().valid('asc', 'desc').allow(null, '')
        }),
        filter: Joi.object().keys({
          value: Joi.string().allow(null, ''),
          exact: Joi.boolean().allow(null, '')
        })
      })
      // define all the other schemas below
    };
```
    
```javascript
// Sample Request 1
// base url: http://localhost:8080
// path: /graphic/markups       
// method: post

        Request body:
     
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


```javascript
// Sample Request 2
// base url: http://localhost:8080
// path: /graphic/markups       
// method: post

        Request body:
     
        {
            "filter": {
                "value": "Cent",
                "exact": false
            },
            "sort": {
                "column": "out_frame",
                "type": "asc"
            },
            "test": 2
        }

        response: 422 UNPROCESSABLE ENTITY        
         {
             "error": "\"test\" is not allowed"
         }
```
