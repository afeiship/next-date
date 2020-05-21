# next-date
> Enhanced date for next.

## installation
```bash
npm install -S @feizheng/next-date
```

## apis
| api            | params | description           |
| -------------- | ------ | --------------------- |
| now            | -      | Get timestamp.        |
| create         | -      | Create data instance. |
| compare        | -      | Compare data.         |
| format         | -      | Format date.          |
| timezoneOffset | -      | Get timezone offset.  |

## usage
```js
import NxDate from '@feizheng/next-date';

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
```

## resources
- https://github.com/felixge/node-dateformat
