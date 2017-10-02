var count = 0
setInterval(function() {
  count = count === 1000000 ? 0 : count + 1
  $('.counterfloatalt').html(count)
}, 10)