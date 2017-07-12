# Kafka node pocs

Simple poc for playing with kafka events from a javascript node application. 

You need a kafka instance somewhere running.. You can use docker to set up easily once running this command: 

docker run -p 2181:2181 -p 9092:9092 --env ADVERTISED_HOST=`docker-machine ip \`docker-machine active\`` --env ADVERTISED_PORT=9092 spotify/kafka

