import Pusher from "pusher-js";

export function Push() {
  Pusher.logToConsole = true;

  var pusher = new Pusher('b31399efa1d95a086e20', {
    app_id: '1515866',
    key: 'b31399efa1d95a086e20',
    secret: 'dceb1c4e558a9075a8a1',
    cluster: 'ap1'
  });

  var channel = pusher.subscribe('test');
  channel.bind('test-event', function (data) {
    console.log(data)
  });

  return (

    <>

    </>
  );
}