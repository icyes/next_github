const Redis = require("ioredis")
const redis = new Redis({
  port: 6379,
  host: '127.0.0.1',
  password: 'root@redis',
  family: 4,
});

(async function () {
  const keys = await redis.keys("*");
  console.log('key', keys);
})()
