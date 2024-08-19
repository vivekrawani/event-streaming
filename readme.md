
# Kafka
What is Kafka?
Apache Kafka is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications. [source](https://kafka.apache.org/)
### Event streaming
If you want to build a system where one process produces events that can be consumed by multiple consumers 



## Run Locally

Clone the project

```bash
  git clone https://github.com/vivekrawani/event-streaming.git
```

run kafka container in docker
```
  docker run -p 9092:9092 --name container-name apache/kafka
```

```
  docker ps
  docker exec -it container_id /bin/bash
  cd /opt/kafka/bin
```
Create topic
```
./kafka-topics.sh --create --topic [topic name] --bootstrap-server localhost:9092
```



Go to the project directory

```bash
  cd project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Tech Stack


**Server:** Node, kafka 

Partitions in kafka
```bash
        ./kafka-topics.sh --create --topic payment-done --partitions 3 --bootstrap-server localhost:9092
```

create 1 produce process and 3 consumer processes 
and then reduce the number of consumer and see the rebalancing