fetch({
    url: 'https://randomuser.me/api/10',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });
