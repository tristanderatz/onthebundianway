var count = 0
setInterval(function() {
  count = count === 0 ? 1000000 : count - 1
  $('.blackcounter').html(count)
}, 10)