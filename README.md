# next-date
> Enhanced date for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-date
```

## apis
| api            | params | description                   |
| -------------- | ------ | ----------------------------- |
| now            | -      | Get timestamp.                |
| create         | -      | Create data instance.         |
| compare        | -      | Compare data.                 |
| format         | -      | Format date.                  |
| timezoneOffset | -      | Get timezone offset.          |
| dbdt           | -      | Get backup database datetime. |

## usage
```js
import NxDate from '@jswork/next-date';

//1. Timestamp:
NxDate.now();

//2. Get date instance:
NxDate.create() 
NxDate.create('2018-07-01 16:29:49');

//3. Compare:
NxDate.compare('2018-07-01 16:30:14','2018-07-01 16:30:19')
// -1 | 0 | 1

//4. format:
NxDate.format(inTarget,'yyyy-mm-dd HH:MM:ss');

// 5. timezone offset
NxDate.timezoneOffset();

// 6. monthly/datetime
```

## resources
- https://github.com/felixge/node-dateformat

## license
Code released under [the MIT license](https://github.com/afeiship/next-date/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-date
[version-url]: https://npmjs.org/package/@jswork/next-date

[license-image]: https://img.shields.io/npm/l/@jswork/next-date
[license-url]: https://github.com/afeiship/next-date/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-date
[size-url]: https://github.com/afeiship/next-date/blob/master/dist/next-date.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-date
[download-url]: https://www.npmjs.com/package/@jswork/next-date
