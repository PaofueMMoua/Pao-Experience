$('#send').on('click', function(e) {
    e.preventDefault();
    subject = $('#subject').val();
    body = $('#body').val();
    window.location = "mailto:paofuemmoua@gmail.com?subject=" + subject + "&body=" + body;
  });