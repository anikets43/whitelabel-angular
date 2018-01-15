# Angular (4) - WhiteLabel


# Summary

* This application demonstrates the white label version
* Configuration based app

# Setup

Install the npm dependencies

```bash
npm install
```

# Serve

HTTP development server
```bash
npm run start
```

Then navigate to http://localhost:4200/


# Configuration
* appconfig.json
```
{
  "data": {
    "id": 1,
    "name": "Chrome Marketplace",
    "userName": "user1",
    "externalCSS": "tenant1.css",
    "icon": "../../assets/icons/chrome.png",
    "isWhiteLabelInstance": true,
    "blogUrl": "https://www.blogger.com/blogger.g?blogID=5261436164465310257#allposts",
    "banner": "https://cdn.shopify.com/s/files/1/0712/4089/collections/Coca-Cola_Banner.jpg?v=1484111982",
    "tenant": {
      "tenantId": 1,
      "tenantName": "Company1"
    }
  }
}
```

* Custom CSS: CSS styles like font, color, button styles, footer, etc can be customized into tenant specific file residing inside src\assets\css\{tenant}.css
