$.ajax({
    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  }).then(response => {
      
  })