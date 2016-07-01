define (
  'controller',
  ['model', 'view', 'jquery', 'template'],
  function(model, view) {
   function Controller(model, view) {

    var self = this;

    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', '.item-del', removeItem);

    function addItem() {
     var newItem = view.elements.input.val();
     model.addItem(newItem);
     view.renderList(model.data);
     view.elements.input.val('');
   };

    function removeItem() {
     var item = $(this).attr('data-value');

     model.removeItem(item);
     view.renderList(model.data);
   };

  $('.item-edit').click(function() {
    $('#content').attr('contenteditable', 'true');
    $('.item-edit').addClass('display');
    $('.item-save').removeClass('display');
});

  $('.item-save').click(function() {
    $('#content').removeAttr('contenteditable');
    $('.item-save').addClass('display');
    $('.item-edit').removeClass('display');
  });
  }

    return new Controller(model, view);
  }
);
