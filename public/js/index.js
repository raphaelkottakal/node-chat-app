var socket = io();
socket.on('connect', function() {
  console.log('Connected to server');
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  var li = $('<li></li>');
  li.text(message.from + ': ' + message.text);
  $('#messages').append(li);
  console.log('New message', message);
});

socket.on('newLocationMessage', function(message) {
  var li = $('<li></li>');
  var a = $('<a target="_blank">My current location</a>');
  li.text(message.from + ': ');
  a.attr('href', message.url);
  li.append(a);
  $('#messages').append(li);
  console.log('New location message', message);
});

$('#message-form').on('submit', function(e) {
  e.preventDefault();
  console.log(e);
  socket.emit('createMessage', {
    from: 'User',
    text: $('[name=message]').val()
  }, function(res) {
    console.log('Got it:', res);
  })
});

var locationButton = $('#send-location');

locationButton.on('click', function(e) {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser');
  }
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position);
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, function(error) {
    alert('Unable to fetch location');
  });
});