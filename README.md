<h1>jquery.mo v 1.1</h1>

<h3>By Nip4Fun</h3>
 Модальное окно

Все примеры описаны в demo.html

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
<blockquote>
	<div>
		&lt;a href=&quot;#&quot; data-mo-id=&quot;1&quot; data-animation=&quot;fadeAndPop&quot;&gt;</div>
	<div>
		Появление и скачек(fade pop)</div>
	<div>
		&lt;/a&gt;</div>
	<div>
		&lt;div id=&quot;1&quot; class=&quot;mo&quot;&gt;</div>
	<div>
		&lt;a class=&quot;close-mo&quot;&gt;&amp;#215;&lt;/a&gt;</div>
	<div>
		&lt;h1&gt;Заглавный текст&lt;/h1&gt;</div>
	<div>
		&lt;p&gt;просто текст для проверки модального окна(fadeAndPop)&lt;/p&gt;</div>
	<div>
		&lt;/div&gt;</div>
</blockquote>

</blockquote>
