define (
  'controller',
  ['model', 'view', 'jquery', 'template'],
  function(model, view) {
   function Controller(model, view) {

    var self = this;

    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', '.item-del', removeItem);
    view.elements.listContainer.on('click','.item-edit', editItem);

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

   function editItem() {
       var item = $(this).attr('data-value');
       var textEdit = $('<input type="text" class="item-change">');
       var buttonSave = $('<span class="item-save">Save</span>');
       var element = model.editItem(item);

       textEdit.val(element[0]);
       model.removeItem(item);
       $(this).parent().empty().append(textEdit).append(buttonSave);
       buttonSave.on('click', function() {
           if($('input:text')[0].value) {
               model.saveItem($('input:text')[0].value,element[1]);
               view.renderList(model.data);}
       })
   }

  }

    return new Controller(model, view);
  }
);
