exports = module.exports = function(req, res) {
    //connect kafka topic, send messages and render view showing the result of the producer action. 
    var kafka = require('kafka-node'),
        HighLevelProducer = kafka.HighLevelProducer,
        client = new kafka.Client(),
        producer = new HighLevelProducer(client),
        message = 'message produced by node app at ' + Date.now(),
        topic = req.params.topic,
        messages = [];

    producer.on('ready', function() {
        console.log(message);
        messages.push(message);
        producer.send([{ topic: topic, messages: messages }], function(err, data) {
            res.render('produce/index', {
                message: message,
            });
        });
    });
}