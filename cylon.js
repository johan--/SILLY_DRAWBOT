var Cylon = require('cylon');

Cylon
  .robot()
  .connection('edison', { adaptor: 'intel-iot' })
  .device('touch', { driver: 'button', pin: 4, connection: 'edison' })
  //.device('buzzer', { driver: 'button', pin: 4, connection: 'edison' })

  .on('ready', function(my) {
    my.touch.on('push', function() {
      console.log('detected press');
    });

    my.touch.on('release', function() {
	   console.log('touch released');
    });
  });

Cylon.start();