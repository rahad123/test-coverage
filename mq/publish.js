const amqp = require('amqplib/callback_api');
 
amqp.connect('amqp://localhost/5672', (connError, connection) => {
    if(connError) throw connError;

    connection.createChannel((channelError, channel) => {
        if(channelError) throw channelError;

        const queue = "coding test";
        channel.assertQueue(queue, {
            durable: false
          });
        channel.sendToQueue(queue, Buffer.from('hello, this is rahad')); 
        console.log(`message send ${queue}`);
    })
})