# VulnMap

Map of Shunned IP addresses (from [AutoShun.org](https://www.autoshun.org/)).

This app uses the csv-style data source at
<https://www.autoshun.org/download/?api_key=${accountKey}&format=csv>

Where ${accountKey} is an assigned AutoShun key (not stored in this repository).

A snapshot of the shun list is stored in shunlist.csv, and this is used by default. To load it dynamically, set the accountKey in config.js:

```javascript
{
    AutoShun: {accountKey: 12345}
}
```
