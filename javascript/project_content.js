$(function () {


  let $list, $addItemForm, $addItem;
  let item = '';
  $list = $('ul');
  $addItemForm = $('#addItemForm');
  $addItem = $('#addItem');

  $('li').hide().each(function (index) {
    $(this).delay(400 * index).fadeIn(2000);
  });




  // Number of items
  function updateCount() {
    let items = $('li[class!=complete]').length;
    $('#counter').text(items);
  }
  updateCount();


  // New list
  $addItemForm.on('submit', function (e) {
    e.preventDefault();
    let text = $('input:text').val();
    $list.append('<li>' + text + '</li>');
    $('input:text').val('');
    updateCount();
  });


  // New items
  $addItem.show();
  $addItemForm.hide();
  $('#showMe').on('click', function () {
    $addItem.hide();
    $addItemForm.show();
  });




  // Click handling 
  $list.on('click', 'li', function () {
    let $this = $(this);
    let complete = $this.hasClass('complete');

    if (complete === true) {
      $this.animate({
        opacity: 0.0,
        paddingLeft: '+=90'
      }, 650, 'swing', function () {
        $this.remove();
      });
    } else {
      item = $this.text();
      $this.remove();
      $list
        .append('<li class=\"complete\">' + item + '</li>')
        .hide().fadeIn(550);
      updateCount();
    }
  });

});


window.onscroll = function () { myFunction() };

var navbar = document.getElementsByClassName("foot");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  }
}
