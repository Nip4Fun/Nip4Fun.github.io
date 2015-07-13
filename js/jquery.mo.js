/*
 * Плагин jQuery MO v 1.1
 * Copyright 2015, Nip4Fun
 * Бесплатная лицензия (opensource).
 * http://www.opensource.org/licenses/mit-license.php
*/


(function($) {

/*---------------------------
 Стандартные настройки модального окна
----------------------------*/
	 
/*---------------------------
 Обработчик для data-mo-id атрибута
----------------------------*/

	$('a[data-mo-id]').on('click', function(e) {
		e.preventDefault();
		var modalLocation = $(this).attr('data-mo-id');
		$('#'+modalLocation).mo($(this).data());
	});

/*---------------------------
 Настройки
----------------------------*/

    $.fn.mo = function(options) {
        
        
        var defaults = {  
	    	animation: 'none', //выбор стандартной анимации fade, fadeAndPop, none
		    animationspeed: 300, //Насколько быстрая анимация в ms
		    closeonbackgroundclick: true, //Закрывать ли окно по нажатию в не окна?
		    dismissmodalclass: 'close-mo' //Класс кнопки или элемента, который будет закрывать открытое окно
    	}; 
    	
        //// Расширение наших параметры по умолчанию с тем, при условии
        var options = $.extend({}, defaults, options); 
	
        return this.each(function() {
        
/*---------------------------
 Глобальные переменные
----------------------------*/
        	var modal = $(this),
        		topMeasure  = parseInt(modal.css('top')),
				topOffset = modal.height() + topMeasure,
          		locked = false,
				modalBG = $('.mo-bg');

/*---------------------------
 Создание MO-BG
----------------------------*/
			if(modalBG.length == 0) {
				modalBG = $('<div class="mo-bg" />').insertAfter(modal);
			}		    
     
/*---------------------------
 Анимация закрытия и открытия
----------------------------*/
			//Открытие анимации
			modal.bind('mo:open', function () {
			  modalBG.unbind('click.modalEvent');
				$('.' + options.dismissmodalclass).unbind('click.modalEvent');
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modal.css({'top': $(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"top": $(document).scrollTop()+topMeasure + 'px',
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					}
					if(options.animation == "fade") {
						modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': $(document).scrollTop()+topMeasure});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					} 
					if(options.animation == "none") {
						modal.css({'visibility' : 'visible', 'top':$(document).scrollTop()+topMeasure});
						modalBG.css({"display":"block"});	
						unlockModal()				
					}
				}
				modal.unbind('mo:open');
			}); 	

			//Закрытие анимации
			modal.bind('mo:close', function () {
			  if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"top":  $(document).scrollTop()-topOffset + 'px',
							"opacity" : 0
						}, options.animationspeed/2, function() {
							modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
							unlockModal();
						});					
					}  	
					if(options.animation == "fade") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"opacity" : 0
						}, options.animationspeed, function() {
							modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
							unlockModal();
						});					
					}  	
					if(options.animation == "none") {
						modal.css({'visibility' : 'hidden', 'top' : topMeasure});
						modalBG.css({'display' : 'none'});	
					}		
				}
				modal.unbind('mo:close');
			});     
   	
/*---------------------------
 Открытие и добавление обработчика закрытия
----------------------------*/
        	//Открыть сразу
    	modal.trigger('mo:open')
			
			//Обработчик закрытия
			var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
			  modal.trigger('mo:close')
			});
			
			if(options.closeonbackgroundclick) {
				modalBG.css({"cursor":"pointer"})
				modalBG.bind('click.modalEvent', function () {
				  modal.trigger('mo:close')
				});
			}
			$('body').keyup(function(e) {
        		if(e.which===27){ modal.trigger('mo:close'); } // 27 Это клавиша Esc
			});
			
			
/*---------------------------
 Блокировщик анимации
----------------------------*/
			function unlockModal() { 
				locked = false;
			}
			function lockModal() {
				locked = true;
			}	
			
        });//Каждый вызов
    }//Конец настройки
})(jQuery);
        
