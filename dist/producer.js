"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const kafkajs_1 = require("kafkajs");
var count = 0;
const kafka = new kafkajs_1.Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"]
});
const producer = kafka.producer();
function main(key, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield producer.connect();
        console.log("user : ", userId, "key : ", key);
        yield producer.send({
            topic: "payment-done",
            messages: [{
                    value: `hi there ${key} `,
                    key: `user ${userId}`
                }]
        });
    });
}
setInterval(() => {
    count++;
    const userId = Math.floor(Math.random() * 10);
    main(count, userId);
}, 1000);
// main();
