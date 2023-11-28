function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("category-content");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}


$('.navi li').mouseenter(function () {
    let changeImage = $(this).attr('data-img')
    $('.photo').css({
      'background-image': 'url(' + changeImage + ')'
    })
  })
  $('.navi li').mouseleave(function () {
    $('.photo').css({
      'background-image': ''
    })
  })
