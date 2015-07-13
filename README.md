<h1>Приветствую!</h1>
На <a href="http://Nip4Fun.github.io">этом</a> сайте все примеры моих работ.


<h3> <a href="http://github.com/Nip4Fun/jquery/tree/jquery.mo">jquery.mo v 1.1</a></h3>
Модальное окно

Все примеры описаны в <a href="http://nip4fun.github.io/jquery.mo_demo.html">jquery.mo_demo.html</a><br>
На данный момент работают 3 разных эфекта вывода.

<div>
	Что бы обвязать комплекс картинок\текста в модальное окно, нужно:</div>
<ol>
	<li>
		Завязать их на общий id и data-mo-id.</li>
	<li>
		Выбрать анимацию в data-animation одну из (fadeAndPop/fade/none), если не указывать data-animation, то по умолчанию будет none.</li>
</ol>


Пример:


<blockquote>
<div>
&lt;a href=&quot;#&quot; data-mo-id=&quot;1&quot; data-animation=&quot;fadeAndPop&quot;&gt;</div>
<div>
&emsp;&emsp;Появление и скачек(fade pop)</div>
<div>
&lt;/a&gt;</div>
<div>
&lt;div id=&quot;1&quot; class=&quot;mo&quot;&gt;</div>
<div>
&emsp;&lt;a class=&quot;close-mo&quot;&gt;&amp;#215;&lt;/a&gt;</div>
<div>
&emsp;&emsp;&lt;h1&gt;Заглавный текст&lt;/h1&gt;</div>
<div>
&emsp;&emsp;&lt;p&gt;просто текст для проверки модального окна(fadeAndPop)&lt;/p&gt;</div>
<div>
&lt;/div&gt;</div>
</blockquote>
