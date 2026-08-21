bluetooth-assigned-numbers
==========================

Bluetooth Assigned Numbers as JavaScript Maps to facilitate lookup.


Hello bluetooth-assigned-numbers!
---------------------------------

Include in an _index.html_ file any or all of the lookup scripts found in the __/dist__ folder of this repository:

```html
<html>
  <head></head>
  <body>
    <script src="js/bluetoothcharacteristicuuids.js"></script>
    <script src="js/bluetoothcompanyidentifiers.js"></script>
    <script src="js/bluetoothmemberuuids.js"></script>
  </body>
</html>
```

Reference in a _js/app.js_ file, as required, the constant provided by each script:

```javascript
console.log(BLUETOOTH_CHARACTERISTIC_UUIDS.get(0x2b46));
// Expected output: "Preferred Units"

console.log(BLUETOOTH_COMPANY_IDENTIFIERS.get(0x10bc));
// Expected output: "Harley-Davidson Motor Company"

console.log(BLUETOOTH_MEMBER_UUIDS.get(0xfeed));
// Expected output: "Tile, Inc."
```

Installation
------------

Developers who wish to create/update the lookup scripts can simply clone this repository and then, from the root folder, install dependencies with:

    npm install


Updating
--------

The source of truth for these lookups are the official [Bluetooth Assigned Numbers](https://www.bluetooth.com/specifications/assigned-numbers/) documents in YAML format.  The following documents can be retrieved from the [Bluetooth Assigned Numbers repository](https://bitbucket.org/bluetooth-SIG/public/src/main/assigned_numbers/) and saved to the __/src__ folder:
- characteristic_uuids.yaml
- company_identifiers.yaml
- member_uuids.yaml

From the root folder of this repository, execute the following to generate updated lookup scripts in the __/dist__ folder:

    npm run create-lookups


CSV files
---------

It is also possible to create CSV file representations to facilitate applications requiring human-readable/manipulable data.

From the root folder of this repository, execute the following to generate updated lookup scripts in the __/dist__ folder:

    npm run create-csv


Contributing
------------

Discover [how to contribute](CONTRIBUTING.md) to this open source project which upholds a standard [code of conduct](CODE_OF_CONDUCT.md).


Security
--------

Consult our [security policy](SECURITY.md) for best practices using this open source software and to report vulnerabilities.


License
-------

MIT License

Copyright (c) 2026 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
