# VulnMap

![build status](https://travis-ci.org/JeffML/VulnMap.svg?branch=master)

This app geo-locates flagitious IP addresses using google's map API.  The IP addresses come from [AutoShun.org](https://www.autoshun.org/), specifically the  csv-style data source at <https://www.autoshun.org/download/?api_key=${process.env.AUTOSHUN_ACCOUNT_KEY}&format=csv>.

A snapshot of the shun list is stored in shunlist.csv, and this is used as a cache in case of a 304 return from AutoShun.

## Geo IP

I use ipstack.com's geo ip service.  An access key can be acquired at https://ipstack.com/.

<http://api.ipstack.com/${ip}?access_key=${process.env.GEO_IP_ACCESS_KEY}&format=1>

Each row has an AutoShun IP address.  The IP address is presented as a button; click on the IP address and you will be taken to the map location.

## Search

You can search by IP or Description (3 characters minimum). Partial searches are supported. Search results will be shown highlighted at the top of the table.

# TO RUN

You'll need to acquire an account key for both AutoShun and ipstack, and assign environment variables as noted above (AUTOSHUN_ACCOUNT_KEY and GEO_IP_ACCESS_KEY).

1.  download this repository
2.  npm install

In one console, run the webpack target, which will build the client bundle and watch for changes:
`npm run webpack`

In another console, start the server:

`GEO_IP_ACCESS_KEY=... AUTOSHUN_ACCOUNT_KEY=... npm run start`

where '...' is your key value that you acquired for the services.

The server serves both the client bundle and the service endpoints needed by the client. The one and only page is loaded at http://localhost:3000.

# TESTING

Tests can be run via `npm test`.  Travis CI runs just the unit tests, and uses secured keys for the geo ip and shun list services.
