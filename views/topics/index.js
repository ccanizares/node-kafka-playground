exports = module.exports = function(req, res) {
    //connect kafka client and get a list of topics;
    var kafka = require('kafka-node'),
        client = new kafka.Client(),
        _ = require('lodash');


    client.once('connect', function() {
        client.loadMetadataForTopics([], function(error, results) {
            if (error) {
                return console.error(error);
            }
            var r = ('%j', _.get(results, '1.metadata'));
            // console.log(client);
            res.render('topics/index', {
                results: r
            });
        });
    });
}