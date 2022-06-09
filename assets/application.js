// Put your application javascript here
if (document.getElementById('sort_by') != null) {
  document.querySelector("#sort_by").addEventListener("change", function (e) {
    var url = new URL(window.location.href);
    url.searchParams.set("sort_by", e.currentTarget.value);
    window.location = url.href;
  });
}

// add to cart
$(document).on('click','.ad_to_cart',function(){
  var obj=$(this);
 
  $.ajax({
    type: 'POST',
    url: '/cart/add.js',
    data: {
      quantity: 1,
      id: $(this).attr("var_id")
    },
    dataType: 'json', 
    success: function (data) {  
          alert('Item added to cart');
    } 
  });
})
