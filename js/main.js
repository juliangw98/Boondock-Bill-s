$(".accordion").click(function()
  {
// $(this).find('.panel').toggleClass('active')
$(this).parent().find('.panel').toggleClass('active')

  }

);
