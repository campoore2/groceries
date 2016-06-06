// //=========Backend===========
var gitems = [];
var ids = ['gitem0', 'gitem1', 'gitem2', 'gitem3', 'gitem4', 'gitem5'];
var sortList = function(items) {
  gitems.push(items);
  gitems.sort();
};



//=========Frontend==========
$(function() {
  $('.grocery').submit(function(event) {
    event.preventDefault();

    var idxs = [0, 1, 2, 3, 4, 5];

    ids.forEach(function(id) {
      var val = $('input#' + id).val();
      sortList(val.toUpperCase());
      // console.log(val.toUpperCase());
    });

    idxs.forEach(function(idx) {
      $('.gitem' + idx.toString()).text(gitems[idx]);
    });

    $("#glist").show();
    $(".grocery").hide();

  });
});



// $(function(){
//   var ids = ['gitem', 'gitem1', 'gitem2', 'gitem3', 'gitem4', 'gitem5']
//   arrayId = ['gitem', 'gitem1', 'gitem2', 'gitem3', 'gitem4', 'gitem5']
//   var gitems;
//   arrayItems = [Id]
//   var sortList = function(items) {
//     gitems.push(items);
//     gitems.sort();
//   };
//
//   gitems.forEach(function(id){
//
//   })
//
//
//
//   event.preventDefault();
// })
