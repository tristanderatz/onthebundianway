var count = 0
setInterval(function() {
  count = count === 100 ? 0 : count + 1
  $('.counter').html(count)
}, 250)