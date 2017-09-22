var count = 0
setInterval(function() {
  count = count === 150 ? 0 : count + 1
  $('.counter').html(count)
}, 100)
