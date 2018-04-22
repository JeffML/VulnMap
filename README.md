# VulnMap

![build status](https://travis-ci.org/JeffML/VulnMap.svg?branch=master)

This app geo-locates flagitious IP addresses using google's map API.  The IP addresses come from [AutoShun.org](https://www.autoshun.org/), specifically the  csv-style data source at <https://www.autoshun.org/download/?api_key=${process.env.AUTOSHUN_ACCOUNT_KEY}&format=csv>

A snapshot of the shun list is stored in shunlist.csv, and this is used as a cache in case of a 304 return from AutoShun.

## Geo IP

I use ipstack.com's geo ip service.  

<http://api.ipstack.com/${ip}?access_key=${process.env.GEO_IP_ACCESS_KEY}&format=1>

## TO RUN

You'll need to acquire an account key for both AutoShun and ipstack, and assign environment variables as noted above (AUTOSHUN_ACCOUNT_KEY and GEO_IP_ACCESS_KEY).

1.  download this repository
2.  npm install

In one console, run the webpack target, which will build the client bundle and watch for changes:
`npm run webpack`

In another console, start the server:
`npm run start`

The server serves both the client bundle and the service endpoints needed by the client.

## Not yet implemented

-   Scrollable table
-   Search
-   IP Geo location descriptions
-   map pins
