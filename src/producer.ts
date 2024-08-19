import { Kafka } from "kafkajs";
var count = 0;
const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"]
})

const producer = kafka.producer();

async function main(key : number, userId : number) {
  await producer.connect();
  console.log("user : ", userId, "key : ", key)
  await producer.send({
    topic: "payment-done",
    messages: [{
      value: `hi there ${key} `,
      key: `user ${userId}`
    }]
  });
}



setInterval(()=> {
count++;
const userId = Math.floor(Math.random() *10)
main(count, userId)
}, 1000)

// main();