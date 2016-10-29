var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    cssClass: ['tingle-btn-modal', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    }
});

// set content
modal.setContent('<h2 id="theme-custom">Заказать звонок</h2><form name="modalBell" id="modalBell" action="#"><label>Имя</label> <input type="text" name="name" id="name" required plecholder="Введите свое имя"> \n <br /> <label>Телефон</label> <input required type="number" id="tel" name="tel" plecholder="Введите свои телефон"><span class="error-modal">Заполните пожалуйста поля</span></form>');

// add a button
modal.addFooterBtn('Заказать', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    var form = document.getElementById('modalBell'),
        name = document.getElementById('name'),
        tel = document.getElementById('tel'),
        error = document.getElementsByClassName('error-modal')[0];
        console.log(name.value);

        if(name.value && tel.value) {
            form.submit();
            modal.close();
            error.style.display = 'none';
        } else {
            name.style.border = '2px solid red';
            tel.style.border = '2px solid red';
            error.style.display = 'block';
        }
    
    // 

});

// add another button
modal.addFooterBtn('Отмена', 'tingle-btn tingle-btn--danger', function() {
    // here goes some logic
    modal.close();
});

var modalClick = function() {
    var btn = document.getElementsByClassName('tingle-btn-custom'),
        i;
        
    for(i = 0; i < btn.length; i++) {
        btn[i].onclick = function (){
            modal.open();
        }
    }
    
};

modalClick();
