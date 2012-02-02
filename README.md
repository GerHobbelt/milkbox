# NOTICE

This is a clone of the original [http://www.reghellin.com](milkbox) and comes with a few minor augments. The original milkbox is created and maintained by Luca Reghellin, this clone is maintained by Ger Hobbelt.

The documentation below is an augmented copy of the original page as written by Luca Reghellin; feature changes and augments of this clone are described in this page.


# Milkbox v3.0.2 - Expanded lightbox for Mootools 1.4.x with XML, HTML/iframe and Flash/SWF support, auto-size and auto-play

By <a href="http://www.reghellin.com" target="_blank" title="Web designer e programmatore freelance HTML5, JavaScript / Ajax / ActionScript 3.0, Schio, Vicenza" style="color:#777">Luca Reghellin</a> - <a href="mailto:milkbox@reghellin.com" >milkbox@reghellin.com</a>


## Intro

When you find a bug you are kindly requested to file the bug at the [https://github.com/GerHobbelt/milkbox](github repository) in the 'Issues' section.

TODO: reference to Luca


## Quick links
	<p>
		<h4 style="margin-bottom:5px">Essentials:&nbsp;</h4>
		<p><a href="#demo">DEMO</a><span class="orange bold"> / </span><a href="#use">Basic usage</a><span class="orange bold"> / </span><a href="#customize">Customization</a>  <span class="orange bold"> / </span><a href="#download">DOWNLOAD</a><span class="orange bold"> / </span><a href="#tests">Notes</a><span class="orange bold"> / </span><a href="#software">Software/Plugins</a><span class="orange bold"> / </span><a href="#donate">Donate!</a></p>
	</p>
	
	<p class="last">
		<h4 style="margin-bottom:5px">Advanced:&nbsp;</h4>
		<p><a href="#events">Events</a><span class="orange bold"> / </span><a href="#autoplay">Autoplay</a><span class="orange bold"> / </span><a href="#jscall">Launch from JavaScript or Flash</a><span class="orange bold"> / </span><a href="#external">XML and  JSON galleries</a></p>
	</p>
</div>


<div class="info-block" id="what">
	<h2>What's <span class="cyan">Milkbox</span></h2>

	<p>
		Nothing special: just another lightbox clone, this time written for <strong><a href="http://mootools.net/" title="MooTools site" target="_blank">Mootools 1.4.x</a></strong>.
	</p>
	
	<p>
		Inspiration originally from <strong>THE VERY FIRST MAN ON THE MOON: Lokesh Dhakar</strong>, and his Lightbox: <a href="http://www.lokeshdhakar.com/projects/lightbox2/" title="Lightbox page" target="_blank">http://www.lokeshdhakar.com/projects/lightbox2/</a>.
	</p>
</div>

<div class="info-block" id="features">
	<h2>Main features</h2>
	<ul>
		<li><p><p><strong>Ready for HTML5</strong>. Milkbox is tested under html5 doctype and uses the new data- properties.</p></p></li>
	
		<li><p><p><strong>Swf support</strong>. You can visualize swf files with Milkbox.<br />Use the data-milkbox-size  attribute to tell width and height that Milkbox should be resized to when showing the swf file.</p></p></li>
		
		<li><p><p><strong>Html support</strong>. You can also visualize local or remote html pages   with Milkbox. They'll be loaded inside an iFrame, so you must use the data-milkbox-size  attribute to tell width and height that Milkbox should be resized to when showing the page.</p></p></li>
		
		<li><p><p><strong>Vars</strong>. You can pass variables to swf and html files by simply  appending them as regular query strings to the url of the files.</p></p></li>

		<li><p><p><strong>AutoSize and autoSizeMaxHeight</strong> options. AutoSize is enabled by default; if needed, it makes photos smaller, so they'll fit the browser window. If you want them not to be higher then a certain height, just set the autoSizeMaxHeight  option.</p></p></li>
	
		<li><p><p><strong>AutoPlay and autoPlayDelay</strong> options. You can set them globally or on a per-gallery basis, as well as in JavaScript calls.</p></p></li>
		
		<li><p><p><strong>Centered</strong> option. If you want, you can set Milkbox so it will stay centered on the screen.</p></p></li>
		
		<li><p><p><strong>XML galleries</strong>. Instead of writing HTML links and let Milkbox to automatically collect them, you can write one or more galleries via XML and load them with the <strong>addGalleries()</strong> method. You can then show any file of any gallery with a single JavaScript call.</p></p></li>

		<li><p><p><strong>JSON galleries</strong>. Instead of writing HTML links and let Milkbox to automatically collect them, you can make it build galleries from JSON objects via <strong>addGalleries()</strong>. You can then show any file of any gallery with a single JavaScript call.</p></p></li>
		
		<li><p><p><strong>Launch from JavaScript</strong>. You can use <strong>open()</strong> to launch any gallery item with custom autoplay options from JavaScript and therefore, even from Flash via ExternalInterface.<br />You can also use the <strong>openWithFile()</strong> method to visualize a single file on the fly without the need of building a gallery first.</p></p></li>
		
		<li><p><p>Milkbox <strong>hides select and textarea tags</strong> while playing; also, there's a option (<strong>removeTitle</strong>) that lets you decide if the browser will pop up or not his default tooltips when you hover the Milkbox links. Defaults to true.</p></p></li>

		<li><p><p><strong>ImageOfText</strong> option. If your lang is not english, and you do not want to see "1 of 15", just use this option. I'm italian, so I usually set it to 'di'. Defaults to 'of'.</p></p></li>

		
		<li><p><p><strong>Transitions are minimal (in fact, with v3 there's only 1 for every file)</strong>: I like fast navigation.  Anyway, you can use any of the MooTools's <a href="http://mootools.net/docs/Fx/Fx.Transitions" title="Fx.Transitions docs" target="_blank">Fx.Transitions</a> effects. Just set the resizeTransition option.</p></p></li>
		
		<li><p><strong>Next and prev buttons are in the bottom section</strong>, near the close button. This way I think I make it more usable by not hiding anything and keeping the <strong>navigation all in one place</strong>.<br />
		Also there's a <strong>loop</strong> in the next and prev buttons: if Milkbox is showing the last image in the gallery and you click the next button, it will let you see the first image; similarly if you're seeing the first one, the last one will be shown by clicking the prev button.</p></li>
		
		<li><p><strong>Keyboard navigation</strong>:<br />
			&bull; Next image: right arrow or space bar<br />
			&bull; Previous image: left arrow<br />

			&bull; Close milkbox: esc key
		</p></li>

		<li><p><p><strong>The close button is just a cross</strong>, no 'close' word: this way no language is involved.<br />In fact, there are 3 ways to close it: click the close button; click the overlay; press the esc key.</p></p></li>
		
		<li><p><p><strong>All the graphic interface is customizable</strong> via CSS or js options. You can even download the buttons graphics (.psd and .ai) and modify them!</p></p></li>							
	</ul>
</div><!-- /features -->

<div class="info-block" id="demo">
	<h2>Take a look</h2>

	<p>To correctly see the 'L.' flash animation, you need to install flash player v10 or higher.</p>

	<table id="gallery">
		<tr>
			<td><a href="img/01b.jpg" data-milkbox="milkbox:g1" title="Lorem ipsum..."><img src="img/01.jpg" alt="" width="100" height="100" /></a></td>
			
			<td><a href="img/croda-b.jpg" data-milkbox="milkbox:g1" title="There's an auto-sizing border-left in the nav section, that help to visually separate it from the caption. &lt;a href=#&gt;This is a link&lt;/a&gt;, use html entities and no quotes to write links in the title property. "><img src="img/croda.jpg" alt="" width="100" height="100" /></a></td>
			
			<td><a href="html-external/external.html" data-milkbox="milkbox:g1" data-milkbox-size="width:600,height:460" title="HTML page in iframe"><img src="img/html.png" alt="" width="100" height="100" /></a></td>
			
			<td style="width:100px"><a href="swf/logo.swf" data-milkbox="milkbox:g1" data-milkbox-size="width:600,height:200" title="This is an Swf file. You need Flash Player 10 to see it correctly"><img src="img/logo.jpg" alt="" width="100" height="100" /></a></td>
		</tr>
	</table>
	
	<p style="font-size:10px">First photo by <a href="http://www.flickr.com/photos/retinafunk/" target="_blank">Retinafunk</a></p>
	
	<!-- <p>Below you will find <a href="#" id="toExamples">some other examples.</a></p> -->

</div><!-- /demo -->


<div  class="info-block" id="use"><!-- USE -->
	<h2>How to use Milkbox (basic)</h2>
	
	<ol>
		<li>
			<p>Make sure that there is a <span class="orange">HTML5 DOCTYPE</span> declaration at the very top of the page, so the data- properties will validate. If validation is not a concern, use an xhtml doctype.</p>

					
<pre>
&lt;!DOCTYPE html&gt;
</pre>
				</li>
				
				<!--  -->

				<li>
					<p><span class="orange">Include the milkbox.css</span> file in your page. <strong>Make sure the referenced images are in the right location</strong>. I suggest to leave them in the milkbox css  folder.</p>

<pre>
&lt;link rel="stylesheet" href="css/milkbox/milkbox.css" media="screen" /&gt;
</pre>
				</li>
				
				<!--  -->				
				
				<li>
					<p><span class="orange">Include the <a href="http://mootools.net/download" target="_blank">mootools</a> js library</span>. milkbox.js needs the following libraries to work properly:</p>

					<ul id="components">
						<li><p>- The Mootools core library.</p></li>
						<li><p>- The Assets, Measure and QueryString Mootools More Components</p></li>
					</ul>
<pre>
&lt;script src="js/mootools-core.js"&gt;&lt;/script&gt;
&lt;script src="js/mootools-more.js"&gt;&lt;/script&gt;
</pre>
				</li>
				
				<!--  -->
				
				<li>
					<p><span class="orange">Include the milkbox.js or (maybe better) the milkbox-yc.js file.</span></p>
<pre>
&lt;script src="js/milkbox.js"&gt;&lt;/script&gt;
</pre>
				</li>

				
				<li>
					<p><span class="orange">Add a data-milkbox</span> attribute to any 'milkbox' link.<br />If the linked file is not part of a gallery, set the data-milkbox prop to 'single'; otherwise, just choose an arbitrary name for the gallery.<br />
					Optionally, you can <span class="orange">add a caption by setting the title property</span> of the link tag. <span>If you want to add tags inside the title</span> property (for example a link), please <span>use html entities and no quotes</span>, then eventually style them with css: the relevant id is #mbox-caption.</p>

<pre>
&lt;a href="img/01b.jpg" data-milkbox="single" title="Caption goes here..."&gt;image #1&lt;/a&gt;
&lt;a href="img/02b.jpg" data-milkbox="gall1" title="Caption goes here..."&gt;image #2&lt;/a&gt;
&lt;a href="img/03b.jpg" data-milkbox="gall1" title="Caption goes here..."&gt;image #3&lt;/a&gt;
</pre>
					
					<p>If a link points to an <strong>swf file</strong> or an <strong>html file</strong>, add a <span class="orange">data-milkbox-size</span> attribute with comma-separated width/height values:</p>

					
<pre>
&lt;a href="swf/banner.swf" data-milkbox="gall1" data-milkbox-size="width:600,height:200" 
title="Caption goes here..."&gt;image #1&lt;/a&gt;
</pre>

				</li>
			</ol>
			
</div><!-- /USE -->



<!-- CUSTOMIZATION ************************** -->

<div class="info-block" id="customize">
	<h2>How to customize Milkbox</h2>
	
	<div id="css-options" class="sub-block">
		<h3>// CSS Properies</h3>

		<p>You can customize the following css properties by simply modifying the milkbox.css file (see comments inside) or the DOM elements via setStyle/setStyles. The relevant DOM elements are written in brackets (only for js programmers):</p>

		<ul>
			<li><p><p><strong>Overlay color</strong> (milkbox.display.overlay)</p></p></li>
			<li><p><p><strong>The outer box background color</strong> (milkbox.display.mainbox)</p></p></li>
			<li><p><p><strong>The outer box background image</strong> (milkbox.display.mainbox) > I mean 'add' a background image</p></p></li>
			<li><p><p><strong>The outer box border color and width</strong> (milkbox.display.mainbox)</p></p></li>
			<li><p><p><strong>The outer box padding</strong> (milkbox.display.mainbox)</p></p></li>
			<li><p><p><strong>The inner box properties</strong> (milkbox.display.filebox)</p></p></li>
			<li><p><p><strong>All the images</strong> (be careful: if you change the buttons dimensions, you must be quite confident in using css)</p></p></li>
			<li><p><p><strong>All text properties</strong> (milkbox.display.caption and milkbox.display.count)</p></p></li>
			<li><p><p><strong>The border-left of the navigation controls</strong> (milkbox.display.controls)</p></p></li>
		</ul>

		<p>You can also add border/padding to the images (or swf files) via the global JavaScript options.<br />
		To set some css property via JavaScript you can do something like this:
		</p>

<pre>
window.addEvent('domready', function(){
milkbox.display.mainbox.setStyle('borderColor','#00ff00');
milkbox.display.mainbox.setStyle('backgroundColor','#aabbcc');
});
</pre>
</div>



<div id="js-options">
	<h3>// Global JavaScript options</h3>


	<p>Here's the list of the global options you can modify. Default values are written in brackets:</p>

	
	<ul>
		<li><p><p><strong>overlayOpacity</strong> (0.7)</p></p></li>
		<li><p><strong>marginTop</strong> (50): good for big images: changes the offset from the top of the window.</p></li>
		<li><p><strong>initialWidth</strong> (250)</p></li>

		<li><p><strong>initialHeight</strong> (250)</p></li>
		<li><p><strong>fileboxBorderWidth</strong> ("0px"): when your images have the same background color of the one you use for Milkbox, you want to add a border, and you don't want to do it with photoshop..</p></li>
		<li><p><strong>fileboxBorderColor</strong> ("#000000")</p></li>
		<li><p><strong>fileboxPadding</strong> ("0px")</p></li>

		<li><p><strong>resizeDuration</strong> (.5)</p></li>
		
		<li><p><strong>resizeTransition</strong> ('sine:in:out'): you can use a function (ex. Transitions.Sine.easeIn) or a string (ex. 'quint:out'). See the <a href="http://mootools.net/docs/core/Fx/Fx.Transitions" target="_blank" title="Mootools Fx.Transitions docs">mootools docs</a>.</p></li>
		
		<li><p><strong>autoPlay</strong> (false)</p></li>
		
		<li><p><strong>autoPlayDelay</strong> (7): set it in seconds, not milliseconds</p></li>

		<li><p><strong>removeTitle</strong> (false): If true, you won't see the titles contents popping up while hovering the Milkbox links (default behaviour of browsers like FireFox)</p></li>
		
		<li><p><strong>autoSize</strong> (true): reduces the images if they don't fit the browser window</p></li>
		
		<li><p><strong>autoSizeMaxHeight</strong> (0): set the max autosize height. Works only if > 0 and autoSize == true.</p></li>
		
		<li><p><strong>centered</strong> (false): if Milkbox will be centered on the window</p></li>
		
		<li><p><strong>imageOfText</strong> ('of'): set the word between count numbers.</p></li>

		<li><p><strong>onXmlGalleries (function(){})</strong>: to set an optional function to be used when an xml gallery is loaded</p></li>
		
		<li><p><strong>onClosed (function(){})</strong>: to set an optional function to be used immediately after Milkbox is closed</p></li>
		
		<li><p><strong>onFileReady (function(){})</strong>: to set an optional function to be used when the current file is loaded and ready to be showed</p></li>
	</ul>


	<p>By modifying the global options, you change the options for all galleries in your page.</p>
	
	<p>You can set them in 2 ways:</p>
	
	<p>
		<strong>1.</strong> In the .js file, at the top of the class.
		<br />
		<strong>2.</strong> In the .js file, at the bottom, where Milkbox is instantiated:
	</p>
<pre>
window.addEvent('domready', function(){
milkbox = new Milkbox({ resizeTransition:'back:out', topPosition:30, centered:true });
});
</pre>	

	<p><strong>3.</strong> In a js script, after the DOM is ready, by using the <strong>refreshDisplay(options:Object,keepBackup:Boolean = false)</strong> method:</p>

<pre>
window.addEvent('domready', function(){
milkbox.refreshDisplay({ 
fileboxBorderWidth:'5px',
fileboxBorderColor:'#ffcc00',
resizeTransition:'bounce:out',
resizeDuration:1
});
});
</pre>	
	<p>The <strong>refreshDisplay()</strong> takes the new options as the 1st argument, and a boolean value as the 2nd argument (pass true if you want to use the new options only once).</p>
	
	</div> <!-- jsOptions -->
	
</div>
<!-- /CUSTOMIZATION ************************** -->


<div class="info-block" id="advanced">
<h2>How to use Milkbox (advanced)</h2>


<!-- EVENTS ************************** -->
<div id="events" class="sub-block" ><!-- events -->
	<h3>// Custom Events</h3>

	<p>
	Milkbox has 3 custom events: <strong>onXmlGalleries</strong>,  <strong>onClosed</strong> and <strong>onFileReady</strong>.
	<br /><br />
	
	- Use <strong>onXmlGalleries</strong> when you want to know if an XML file is completely loaded. See the <a href="#xmlg">XML Galleries paragraph</a> for details.
	<br /><br />

	- Use <strong>onClosed</strong> when you want to do something immediately after Milkbox is closed.
	<br /><br />
	
	- Use <strong>onFileReady</strong> when you want to do something when the current file is loaded and ready to be showed. The current file is <span class="code">milkbox.currentFile</span>.
	</p>				
</div>
<!-- /EVENTS ************************** -->


<!-- AUTOPLAY ************************** -->
<div id="autoplay" class="sub-block" ><!-- autoplay -->
<h3>// AutoPlay</h3>			

<p>You can set it globally via the <strong>autoPlay and autoPlayDelay options</strong> like described in the <a href="#js-options">'Global JavaScript options' paragraph</a>.<br />

If you use an XML gallery, you can set different autoplay options for every gallery.<br />
Finally, you can override the options on a per-gallery basis by using <strong>setAutoPlay()</strong> (described below):</p>

<p>			
But what's autoPlay? Well, yes, it's that! ;)<br />
Milkbox will sequentially show all the files in a gallery, with a pre-defined <strong>delay</strong> between each.<br />

You will be able to stop it either by clicking the <strong>play/pause</strong> button or the next/prev buttons. You will then use the play/pause button to re-start it.
</p>


<p><a href="#" class="example" id="autoPlayExample">Click here for an autoPlay example</a> (delay: 7 seconds)</p>


<h4>Use of setAutoPlay(object or array of objects)</h4>

<p>
	You use <strong>setAutoPlay()</strong> if you want to permanently override the global autoplay options for one or more galleries.<br />

	You can pass it an <strong>object or an array of objects</strong>. Every object should have 3 properties: gallery (string), autoplay (boolean), delay (number).
</p>

<pre>
window.addEvent('domready', function(){
milkbox.setAutoPlay([
{ gallery:'gall1', autoplay:true, delay:10 },
{ gallery:'gall2', autoplay:false },
{ gallery:'gall3', autoplay:true, delay:7 }
]);
});
</pre>	
</div>
<!-- /AUTOPLAY ************************** -->


<!-- JAVASCRIPT CALL ************************** -->
<div id="jscall" class="sub-block">
<h3>// Launch Milkbox from JavaScript</h3>

<p>Instead of clicking a link, you can launch Milkbox directly from JavaScript (and therefore even from Flash, via ExternalInterface), usign the <strong>open()</strong> method for galleries, or <strong>openWithFile()</strong> method for single files without the need of build a gallery first.</p>


<h4>Use of open(gallery (string or instance of MilkboxGallery),index)</h4>

<p>
	You use <strong>open()</strong> if you want to launch Milkbox directly from JavaScript. You can <strong>launch any gallery, starting from any file</strong>.<br />
	You can pass open() the name of the gallery (so, a string), or, if you're an advanced programmer and are for some reason using an instance of MilkboxGallery, you can pass it directly.
</p>

<pre>
window.addEvent('domready', function(){
$('testbutton').addEvent('click', function(e){
e.preventDefault();
milkbox.open('mygallery',3);
});
});
</pre>

<p>
	If you want to lauch Milkbox from flash, simply use ExternalInterface:
</p>

<pre style="margin-bottom:30px">
import flash.external.ExternalInterface;

//if you need, load some xml:
ExternalInterface.call("milkbox.addGalleries",'galleries.xml');

//AS2: ////////////////////////////////////
sampleButton.onRelease = function(){
ExternalInterface.call("milkbox.open",['mygallery',3]);
}

//or AS3: /////////////////////////////////
function openMilkboxFromAS(e:MouseEvent){
ExternalInterface.call("milkbox.open",['mygallery',3]);
}

sampleButton.addEventListener(MouseEvent.CLICK,openMilkboxFromAS);
</pre>


<h4>Use of openWithFile({object with href, size and title props}, {milkbox options})</h4>

<p>
	You use <strong>openWithFile()</strong> if you want to open a single file with Milkbox directly from JavaScript without the need to build a single-item xml or json gallery first.
</p>

<pre>
window.addEvent('domready', function(){
$('testbutton').addEvent('click', function(e){
e.preventDefault();
milkbox.openWithFile({ href:'img/01b.jpg', title:'Test text'});
});
});
</pre>

<p>Or maybe with some more options?</p>

<pre>
window.addEvent('domready', function(){

$('testbutton').addEvent('click', function(e){
e.preventDefault();
milkbox.openWithFile(
{ 
	href:'swf/flash.swf', 
	title:'openWithFile() with some layout and transitions tweaks',
	size:'width:600,height:350'
}, 
{
	overlayOpacity:1, 
	resizeTransition:'bounce:out', 
	centered:true
}
);  //end openWithFile
});  //end click event

});  //end domready event
</pre>

<!-- <p><a href="http://blog.activeden.net/resources/tutorials/how-to-build-a-flash-gallery-with-actionscript-3-and-milkbox/" title="Tutorial for building a Flash gallery with Milkbox" target="_blank">Here</a> there's a <strong>really nice tutorial</strong> written by <a href="http://blog.radykal.de/" title="Link to the blog by Rafael Dery" target="_blank">Rafael Dery</a> explaining how to build a <strong>flash gallery with Milkbox.</strong></p> -->

</div>

<!-- /JAVASCRIPT CALL ************************** -->


<!-- EXTERNAL GALLERIES -->
<div id="external" class="sub-block">
<h3>// External galleries</h3>



<p>If you don't need to write HTML links, but still want to use Milkbox to show some gallery, you need to define them in some other way. Enter the <strong>External  galleries (XML and JSON galleries)</strong>. Both types are loaded into Milkbox using the addGalleries(string or object) method</p>


<h4>XML GALLERIES</h4>

<p>To use xml galleries, <strong>first of all</strong>, you need to <strong>write an xml file</strong>, for example:</p>

<pre>
&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;div id="galleries"&gt;
&lt;div class="gallery" name="xmlG1" autoplay="true" delay="7" &gt;
&lt;a href="swf/testswf1.swf" rev="width:550, height:400" title="Lorem ipsum..." /&gt;

&lt;a href="swf/testswf2.swf" rev="width:650, height:250" title="Lorem ipsum..." /&gt;
&lt;a href="img/01b.jpg" title="Lorem ipsum..." /&gt;
&lt;a href="img/03b.jpg" title="Lorem &lt;a href=#&gt;ipsum...&lt;/a&gt;" /&gt;
&lt;/div&gt;

&lt;div class="gallery" name="xmlG2" &gt;

&lt;a href="img/01b.jpg" title="Lorem ipsum..." /&gt;
&lt;a href="img/03b.jpg" title="Lorem &lt;a href=#&gt;ipsum...&lt;/a&gt;" /&gt;
&lt;a href="swf/testswf1.swf" rev="width:550, height:400" title="Lorem ipsum..." /&gt;
&lt;a href="swf/testswf2.swf" rev="width:650, height:250" title="Lorem ipsum..." /&gt;
&lt;/div&gt;

&lt;/div&gt;
</pre>

<p>
As you can see, for every gallery you must <strong>use div tags with class="gallery" and set the name property</strong>. Optionally, you can <strong>add custom autoplay options</strong> for every gallery.<br />
Please note that, since it's an xml document, tags are NOT real html tags, and <strong>the link tags must be empty tags</strong>, so you close them with a space followed by a slash ((an empty space)/&gt;), not with a close tag like this: &lt;/a&gt;

</p>

<p>Once you have your xml file, load it with the <strong>addGalleries()</strong> method:</p>

<pre>
milkbox.addGalleries('galleries.xml');
</pre>

<p>Now you can use all the Milkbox methods with the new galleries. I think you'll at least use open(), but before doing it, it's safer to be sure that the xml file is really loaded, so you should wrap it in the <strong>onXmlGalleries custom event</strong>:</p>


<pre>
milkbox.addEvent('xmlGalleries',function(){
$('testButton').addEvent('click', function(e){
e.preventDefault();
milkbox.open('xmlG2');
});
});

milkbox.addGalleries('galleries.xml');
</pre>


<h4  style="margin-top:30px" >JSON Galleries</h4>

<p>To use JSON galleries, you need to pass the JSON object to addGalleries(). The JSON object must have this form:</p>

<pre>
[
{ 
name:'gall1', autoplay:true, autoplay_delay:7, 
files:[
{href:'file1.jpg', size:'width:900,height:100', title:'text'},
{href:'file2.html', size:'w:800,h:200', title:'text'},
{...},
{...}
]
},
{ 
name:'gall2', 
files:[
{href:'file1b.swf', size:'width:500,height:200', title:'text'},
{href:'file3.html', size:'w:800,h:200', title:'text'},
]
}
]
</pre>

<p>You can for example save it in a variable and pass that variable to addGalleries(), or pass it directly:</p>

<pre>
var gallery = [
{ 
name:'obj-gall1', autoplay:true, autoplay_delay:4, 
files:[ 
{ href:'img/01b.jpg', title:'Test title' }, 
{ href:'swf/testswf1.swf?var1=yellow&var2=300' } 
]
}
]

milkbox.addGalleries(gallery);
</pre>

<p>Than you can use the usual milkbox methods like open().</p>
</div><!-- /external -->
<!-- /EXTERNAL GALLERIES -->



<div id="reload" class="sub-block" >
<h3>// Reload galleries</h3> 

<p>
Often, using Ajax, links and galleries change without fully refreshing the main page and therefore without updating the internal Milkbox galleries.<br /> 
To solve these kind of issues, you can simply use the <strong>reloadPageGalleries()</strong> method. For example, a generic Ajax application could do something like this:
</p>


<pre>
app.ajaxRequest.onSuccess(response){
addResponseToHtml(); 
milkbox.reloadPageGalleries();
}
</pre>

<p>
There's also an utility method to clean all the external galleries already loaded (xml and json), and optionally load some new one. The method is <strong>resetExternalGalleries(list: single string/object or array of objects)</strong>; you pass new galleries as the list parameter.
</p>


</div><!-- /reload -->
</div><!-- /advanced -->

<div class="info-block" id="tests">
	<h2>Notes</h2>

	<div class="sub-block">
		<h4>Tests (on Win and Mac Os X):</h4>
		<ul class="tests">
				<li><p><strong>IE 7/8/9</strong><br />Still using IE 7 or (!!!) 6? Well, I think it's time to upgrade, DON'T YOU??</p></li>

				<li><p><strong>Latest Firefox</strong></p></li>
				<li><p><strong>Latest Safari</strong></p></li>
				<li><p><strong>Latest Chrome</strong></p></li>
		</ul>
	</div>
	
	<div class="sub-block">
		<h4>If your page includes flash movies:</h4>
		<p>if you use Milkbox in a page that contains flash objects, <strong>you must set</strong> their <strong>wmode property to 'opaque' or 'transparent'</strong>.</p>
	</div>
	
	<div class="sub-block">
		<h4>Javascript compression:</h4>
		<p>
		If your site is running on an Apache server with an active deflate module (usually it's active by default, or you can ask your provider to switch it on for free) you could telling it to serve your js/css files gzipped. To do that, I usually write one of these lines in a .htaccess file (published in the root dir of the site):
<pre>
AddOutputFilterByType DEFLATE text/html text/css application/x-javascript
#or
AddOutputFilterByType DEFLATE text/html text/css application/javascript
</pre>

<p>After doing that, milkbox-yc.js will be only 5.5Kb in size.</p>

		</p>
	</div>
</div>


<div class="info-block" id="software">
	<h2>Software, plugins and people</h2>

	<p style="margin-bottom:30px">
		Milkbox is also used by other developers all around the world for various softwares and plugins.<br /> 
		Please tale a look to the followings:
	</p>
	
	<div class="sub-block">
		<h4 style="margin-bottom:15px">Feindura - Flat file cms</h4>
		<p>
		<a href="http://feindura.org" target="_blank">http://feindura.org</a><br />
		Feindura is a Open Source flat file based Content Management System for Web Designers and ideal for small and medium websites. There is no need of a database and it’s easy to integrate in your Websites.<br />
		(It uses milkbox for its image gallery.)
		</p>
	</div>
	
	<div class="sub-block">
		<h4 style="margin-bottom:15px">Mootools-FileManager</h4>
		<p>
		<a href="https://github.com/cpojer/mootools-filemanager" target="_blank">https://github.com/cpojer/mootools-filemanager</a><br />
		A filemanager for the web based on MooTools that allows you to view, upload and modify files and folders via your browser.
		</p>
	</div>
	
	<div class="sub-block">
		<h4 style="margin-bottom:15px">Gerrit E.G. Hobbelt</h4>
		<p>
		<a href="https://github.com/cpojer/mootools-filemanager" target="_blank">https://github.com/GerHobbelt</a><br />
		Ger Hobbelt uses Milkbox in some of his projects and helped me a lot in fine tuning v3.0.0.<br />
		He is a 20+ years of experience working as a software engineer, enjoying both systems architecture and hardcore development with a focus on security, stability and survivability of the product. Currently (as per 2011) the action is happening at a financial analysis and prognosis package with a strong focus on web technology and plenty of exiting math to drive the coding.
		</p>
	</div>


	<div class="sub-block">
		<h4 style="margin-bottom:15px">ScrollBox Pro - Plugin for Joomla</h4>
		<p>
		<a href="http://www.zonvu.spb.ru/demos/scrollbox-pro" target="_blank">http://www.zonvu.spb.ru/demos/scrollbox-pro</a><br />
		Milkbox is used by Nikita Zonov in his slideshow plugin for Joomla.
		</p>
	</div>
</div>



<div class="info-block" id="download"><!-- DOWNLOAD -->

<!-- <div id="donate" class="sub-block" > -->
	<h2 id="donate">Donate</h2>

	<p>If you use Milkbox, <strong>I'D REALLY LIKE YOU TO DONATE some little money with paypal</strong>:</p>
	
	<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
		<input type="hidden" name="cmd" value="_s-xclick">
		<input type="hidden" name="hosted_button_id" value="VXL2HSYG232TN">
		<input type="image" src="http://reghellin.com/milkbox/makedonation.gif" name="submit" alt="Donate with PayPal">
		<img alt="" src="https://www.paypalobjects.com/it_IT/i/scr/pixel.gif" width="1" height="1">
	</form>

	
	<p>Note: after donating, you will receive an automatic e-mail notification by PayPal. So if you donate as a company, you should be able to use that notification for tax records.</p>
<!-- </div> -->

<h2 style="margin-top:50px">Download Milkbox</h2>


<p>
<a href="http://www.reghellin.com/milkbox/milkbox-3.0.2.zip" title="Milkbox - Lightbox for mootools 1.4.x">&gt; Here's the Milkbox files with all assets and demo, and yui-compressed version too</a>
<br /><br />
<a href="http://www.reghellin.com/milkbox/milkbox-buttons.zip" title="Milkbox buttons">&gt; And here's the buttons graphics [5 Mb (.psd and .ai)]</a>
<br />
<!-- 
<br /><br />
<a href="http://www.reghellin.com/milkbox/examples.zip" title="Milkbox examples">&gt; And finally, here's some other examples using xml, html image maps, and flash (AS3/CS4).</a><br />
-->

<span class="orange">Did I kindly ask you to DONATE some little money??? ;)</span>
</p>

