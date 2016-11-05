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


// add a button
var     form,
        namePerson,
        tel,
        error,
        buttonsCustom
        

modal.addFooterBtn('Заказать', 'tingle-btn tingle-btn--primary', function() {        

        if(namePerson.value && tel.value) {
            // form.submit();
            vote();
            error.style.display = 'none';
        } else {
            namePerson.style.border = '2px solid red';
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
            modal.setContent('<div id="theme-custom"><h2>Заказать звонок</h2><form name="modalBell" id="modalBell" action="#"><label>Имя</label> <input type="text" name="name" id="name-person" required plecholder="Введите свое имя"> \n <br /> <label>Телефон</label> <input required type="number" id="tel" name="tel" maxlength="11" plecholder="Введите свои телефон"><span class="error-modal">Заполните пожалуйста поля</span><span id="vote_status"><span></form><h3>8 778 123 76 37, 8 705 659 28 83, 47 85 66</h3></div>');

            form = document.getElementById('modalBell'),
            namePerson = document.getElementById('name-person'),
            tel = document.getElementById('tel'),
            error = document.getElementsByClassName('error-modal')[0],
            buttonsCustom = document.getElementsByClassName('tingle-modal-box__footer')[0];
            buttonsCustom.style.display = 'block';
        }
    }
    
};

modalClick();

function getXmlHttp(){
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}

// javascript-код голосования из примера
function vote() {
	// (1) создать объект для запроса к серверу
	var req = getXmlHttp();  
       
        // (2)
	// span рядом с кнопкой
	// в нем будем отображать ход выполнения
	var statusElem = document.getElementById('vote_status'); 
	
	req.onreadystatechange = function() {  
        // onreadystatechange активируется при получении ответа сервера

		if (req.readyState == 4) { 
            // если запрос закончил выполняться

			statusElem.innerHTML = req.statusText // показать статус (Not Found, ОК..)

			if(req.status == 200) { 
                 // если статус 200 (ОК) - выдать ответ пользователю
				console.log("Ответ сервера: "+req.responseText);
                modal.setContent('<div id="theme-custom"><h2>Спасибо за заказ! Наш оператор свяжется с вами в ближайщее время!</h2><div>');
                buttonsCustom.style.display = 'none';

                setTimeout(function () {
                    modal.close();
                }, 2000);
                
			}
			// тут можно добавить else с обработкой ошибок запроса
		}

	}

       // (3) задать адрес подключения
	req.open('GET', 'send.php?name='+ namePerson.value + ' Телефон: ' + tel.value, true);  

	// объект запроса подготовлен: указан адрес и создана функция onreadystatechange
	// для обработки ответа сервера
	 
        // (4)
	req.send(null);  // отослать запрос
  
        // (5)
	statusElem.innerHTML = 'Отправка данных...';
}

// var links = document.getElementsByTagName('a');

// for(i = 0; i < links.length; i++) {
//         links[i].onclick = function (e){
//             e.preventDefault();
//         }
// }
