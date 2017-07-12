exports = module.exports = function(req, res) {
    var kafka = require('kafka-node'),
        Consumer = kafka.Consumer,
        client = new kafka.Client(),
        messages = [],
        consumer = new Consumer(
            client, [
                { topic: req.params.topic, partition: 0 }
            ], {
                autoCommit: false
            }
        );

    consumer.on('message', function(message) {
        console.log(message);
    });

    res.render('subscribe/index', {
        messages: messages,
        consumer: consumer
    });
}