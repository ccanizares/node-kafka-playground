# Kafka node pocs

Simple poc for playing with kafka events from a javascript node application. 

### Implemented pocs

1 - Getting a list of topics avaible in a cluster.

2 - Send a message into a topic.

3 - Subscribe a topic and log in console the body of a message each time it’s received.

### Instructions to set up the playground

1 - Clone this repo. (need git)

2 - Open docker-compose.yml on the root, set your ip in ADVERTISED_HOST env var.

3 - Run docker-compose up (need docker)

4 - Run node index.js (need node)

