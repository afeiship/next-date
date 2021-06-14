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
| api            | params | description                                            |
| -------------- | ------ | ------------------------------------------------------ |
| get            | -      | Get timestamp at current date, for next/previous case. |
| create         | -      | Create data instance.                                  |
| compare        | -      | Compare data.                                          |
| format         | -      | Format date.                                           |
| timezoneOffset | -      | Get timezone offset.                                   |


## consts
| name   | description |
| ------ | ----------- |
| week   | WEEK        |
| day    | DAY         |
| hour   | HOUR        |
| minute | MIUNTE      |
| second | SECOND      |

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

// 6. get formated date
const options = { target: today, format: 'yyyy-mm-dd' };
const fmt1 = NxDate.get(1, 'day', options);
const fmt2 = NxDate.get(1, 'week', options);
const fmt3 = NxDate.get(-1, 'day', options);
const fmt4 = NxDate.get(-1, 'week', options);

// '2021-06-14'
// '2021-06-20'
// '2021-06-12'
// '2021-06-06'
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
