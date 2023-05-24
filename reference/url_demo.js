const url = require('url');

const MyUrl = new URL('http://stranka.com/heh.html?id=100&status=active');

console.log(MyUrl.href);
console.log(MyUrl.toString());
console.log(MyUrl.host);
console.log(MyUrl.hostname);
console.log(MyUrl.pathname);
console.log(MyUrl.search);
console.log(MyUrl.searchParams);
MyUrl.searchParams.append('abc', '123');
console.log(MyUrl.searchParams);
MyUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));