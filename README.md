# NOTICE

This is a clone of the original [http://www.reghellin.com](milkbox) and comes with a few minor augments. The original milkbox is created and maintained by Luca Reghellin, this clone is maintained by Ger Hobbelt.

The documentation below is an augmented copy of the original page as written by Luca Reghellin; feature changes and augments of this clone are described in this page.


# Milkbox v3.0.2 - Expanded lightbox for Mootools 1.4.x with XML, HTML/iframe and Flash/SWF support, auto-size and auto-play

By <a href="http://www.reghellin.com" target="_blank" title="Web designer e programmatore freelance HTML5, JavaScript / Ajax / ActionScript 3.0, Schio, Vicenza" style="color:#777">Luca Reghellin</a> - <a href="mailto:milkbox@reghellin.com" >milkbox@reghellin.com</a>


## Intro

When you find a bug you are kindly requested to file the bug at the [https://github.com/GerHobbelt/milkbox](github repository) in the 'Issues' section.

TODO: reference to Luca


## Quick links

#### Essentials:

- <a href="#demo">DEMO</a>
- <a href="#use">Basic usage</a>
- <a href="#customize">Customization</a>
- <a href="#download">DOWNLOAD</a>
- <a href="#tests">Notes</a>
- <a href="#software">Software/Plugins</a>
- <a href="#donate">Donate!</a>
	
#### Advanced:

- <a href="#events">Events</a>
- <a href="#autoplay">Autoplay</a>
- <a href="#jscall">Launch from JavaScript or Flash</a>
- <a href="#external">XML and  JSON galleries</a>

## What's Milkbox

Nothing special: just another lightbox clone, this time written for <a href="http://mootools.net/" title="MooTools site" target="_blank">Mootools 1.4.x</a>.

Inspiration originally from <strong>THE VERY FIRST MAN ON THE MOON: Lokesh Dhakar</strong>, and his Lightbox: 
<a href="http://www.lokeshdhakar.com/projects/lightbox2/" title="Lightbox page" target="_blank">http://www.lokeshdhakar.com/projects/lightbox2/</a>.

## Main features

- Ready for HTML5.
  Milkbox is tested under html5 doctype and uses the new data- properties.

- Flash/SWF support. You can visualize SWF files with Milkbox.
  Use the data-milkbox-size attribute to tell width and height that Milkbox should be resized to when showing the swf file.
		
- HTML support.
  You can also visualize local or remote html pages with Milkbox. They'll be loaded inside an iFrame, so you must use the data-milkbox-size attribute to tell width and height that Milkbox should be resized to when showing the page.

- Vars. 
  You can pass variables to swf and html files by simply appending them as regular query strings to the url of the files.
  
- AutoSize and autoSizeMaxHeight options.
  AutoSize is enabled by default; if needed, it makes photos smaller, so they'll fit the browser window. If you want them not to be higher then a certain height, just set the autoSizeMaxHeight option.
  
- AutoPlay and autoPlayDelay options.
  You can set them globally or on a per-gallery basis, as well as in JavaScript calls.
  
- Centered option.
  If you want, you can set Milkbox so it will stay centered on the screen.
  
- XML galleries. 
  Instead of writing HTML links and let Milkbox to automatically collect them, you can write one or more galleries via XML and load them with the addGalleries() method. You can then show any file of any gallery with a single JavaScript call.
  
- JSON galleries. 
  Instead of writing HTML links and let Milkbox to automatically collect them, you can make it build galleries from JSON objects via addGalleries(). You can then show any file of any gallery with a single JavaScript call.
  
- Launch from JavaScript. 
  You can use open() to launch any gallery item with custom autoplay options from JavaScript and therefore, even from Flash via ExternalInterface.
  
  You can also use the openWithFile() method to visualize a single file on the fly without the need of building a gallery first.

- Milkbox hides select and textarea tags while playing; also, there's a option (removeTitle) that lets you decide if the browser will pop up or not his default tooltips when you hover the Milkbox links. Defaults to true.

- ImageOfText option.
  If your lang is not english, and you do not want to see "1 of 15", just use this option. I'm italian, so I usually set it to 'di'. Defaults to 'of'.
  
- Transitions are minimal (in fact, with v3 there's only 1 for every file): I like fast navigation.
  Anyway, you can use any of the MooTools's <a href="http://mootools.net/docs/Fx/Fx.Transitions" title="Fx.Transitions docs" target="_blank">Fx.Transitions</a> effects. Just set the resizeTransition option.
  
- Next and prev buttons are in the bottom section, near the close button.
  This way I think I make it more usable by not hiding anything and keeping the navigation all in one place.
  Also there's a loop in the next and prev buttons: if Milkbox is showing the last image in the gallery and you click the next button, it will let you see the first image; similarly if you're seeing the first one, the last one will be shown by clicking the prev button.
  
- Keyboard navigation:
  - Next image: right arrow or space bar
  - Previous image: left arrow
  - Close milkbox: esc key

- The close button is just a cross, no 'close' word: this way no language is involved.
  In fact, there are 3 ways to close it: click the close button; click the overlay; press the esc key.
  
- All the graphic interface is customizable via CSS or js options. You can even download the buttons graphics (.psd and .ai) and modify them!



## Take a look

To correctly see the 'L.' flash animation, you need to install flash player v10 or higher.

<table id="gallery">
	<tr>
		<td><a href="img/01b.jpg" data-milkbox="milkbox:g1" title="Lorem ipsum..."><img src="img/01.jpg" alt="" width="100" height="100" /></a></td>
		
		<td><a href="img/croda-b.jpg" data-milkbox="milkbox:g1" title="There's an auto-sizing border-left in the nav section, that help to visually separate it from the caption. &lt;a href=#&gt;This is a link&lt;/a&gt;, use html entities and no quotes to write links in the title property. "><img src="img/croda.jpg" alt="" width="100" height="100" /></a></td>
		
		<td><a href="html-external/external.html" data-milkbox="milkbox:g1" data-milkbox-size="width:600,height:460" title="HTML page in iframe"><img src="img/html.png" alt="" width="100" height="100" /></a></td>
		
		<td style="width:100px"><a href="swf/logo.swf" data-milkbox="milkbox:g1" data-milkbox-size="width:600,height:200" title="This is an Swf file. You need Flash Player 10 to see it correctly"><img src="img/logo.jpg" alt="" width="100" height="100" /></a></td>
	</tr>
</table>

<p style="font-size:10px">First photo by <a href="http://www.flickr.com/photos/retinafunk/" target="_blank">Retinafunk</a></p>


## How to use Milkbox (basic)

1. Make sure that there is a HTML5 DOCTYPE declaration at the very top of the page, so the data- properties will validate. If validation is not a concern, use an xhtml doctype.

	<pre>
	&lt;!DOCTYPE html&gt;
	</pre>

2. Include the milkbox.css file in your page. Make sure the referenced images are in the right location. I suggest to leave them in the milkbox css folder.

	<pre>
	&lt;link rel="stylesheet" href="css/milkbox/milkbox.css" media="screen" /&gt;
	</pre>
				
3. Include the <a href="http://mootools.net/download" target="_blank">mootools</a> js library</span>. milkbox.js needs the following libraries to work properly:

  - [http://mootools.net/core/](The Mootools core library).
  - [http://mootools.net/more/](The Assets, Element.Measure, String.QueryString Mootools More Components).
  
	<pre>
	&lt;script src="js/mootools-core.js"&gt;&lt;/script&gt;
	&lt;script src="js/mootools-more.js"&gt;&lt;/script&gt;
	</pre>
				
4. Include the milkbox.js or (maybe better) the milkbox-yc.js file.

	<pre>
	&lt;script src="js/milkbox.js"&gt;&lt;/script&gt;
	</pre>
				
5. Add a data-milkbox attribute to any 'milkbox' link.
  If the linked file is not part of a gallery, set the data-milkbox prop to 'single'; otherwise, just choose an arbitrary name for the gallery.
  Optionally, you can add a caption by setting the title property of the link tag. 
  If you want to add tags inside the title property (for example a link), please use html entities and no quotes, then eventually style them with css: the relevant id is #mbox-caption.
  
	<pre>
	&lt;a href="img/01b.jpg" data-milkbox="single" title="Caption goes here..."&gt;image #1&lt;/a&gt;
	&lt;a href="img/02b.jpg" data-milkbox="gall1" title="Caption goes here..."&gt;image #2&lt;/a&gt;
	&lt;a href="img/03b.jpg" data-milkbox="gall1" title="Caption goes here..."&gt;image #3&lt;/a&gt;
	</pre>
					
  If a link points to an swf file or an html file, add a data-milkbox-size attribute with comma-separated width/height values:

	<pre>
	&lt;a href="swf/banner.swf" data-milkbox="gall1" data-milkbox-size="width:600,height:200" 
	title="Caption goes here..."&gt;image #1&lt;/a&gt;
	</pre>



## How to customize Milkbox
	
### CSS Properies

You can customize the following css properties by simply modifying the milkbox.css file (see comments inside) or the DOM elements via setStyle/setStyles. 
The relevant DOM elements are written in brackets (only for js programmers):

- Overlay color (milkbox.display.overlay)
- The outer box background color (milkbox.display.mainbox)
- The outer box background image (milkbox.display.mainbox): I mean 'add' a background image
- The outer box border color and width (milkbox.display.mainbox)
- The outer box padding (milkbox.display.mainbox)
- The inner box properties (milkbox.display.filebox)
- All the images (be careful: if you change the buttons dimensions, you must be quite confident in using css)
- All text properties (milkbox.display.caption and milkbox.display.count)
- The border-left of the navigation controls (milkbox.display.controls)

You can also add border/padding to the images (or swf files) via the global JavaScript options.

To set some css property via JavaScript you can do something like this:

	<pre>
	window.addEvent('domready', function(){
		milkbox.display.mainbox.setStyle('borderColor','#00ff00');
		milkbox.display.mainbox.setStyle('backgroundColor','#aabbcc');
	});
	</pre>



### Global JavaScript options

Here's the list of the global options you can modify. Default values are written in brackets:

- overlayOpacity (0.7) 
- marginTop (50): good for big images: changes the offset from the top of the window. 
- initialWidth (250) 
- initialHeight (250) 
- fileboxBorderWidth ("0px"): when your images have the same background color of the one you use for Milkbox, you want to add a border, and you don't want to do it with photoshop.
- fileboxBorderColor ("#000000") 
- fileboxPadding ("0px") 
- resizeDuration (.5) 
- resizeTransition ('sine:in:out'): you can use a function (ex. Transitions.Sine.easeIn) or a string (ex. 'quint:out'). 
  See the <a href="http://mootools.net/docs/core/Fx/Fx.Transitions" target="_blank" title="Mootools Fx.Transitions docs">mootools docs</a>. 
- autoPlay (false) 
- autoPlayDelay (7): set it in seconds, not milliseconds 
- removeTitle (false): If true, you won't see the titles contents popping up while hovering the Milkbox links (default behaviour of browsers like FireFox) 
- autoSize (true): reduces the images if they don't fit the browser window 
- autoSizeMaxHeight (0): set the max autosize height. Works only if > 0 and autoSize == true. 
- centered (false): if Milkbox will be centered on the window 
- imageOfText ('of'): set the word between count numbers. 
- onXmlGalleries (function(){}): to set an optional function to be used when an xml gallery is loaded 
- onClosed (function(){}): to set an optional function to be used immediately after Milkbox is closed 
- onFileReady (function(){}): to set an optional function to be used when the current file is loaded and ready to be showed 

By modifying the global options, you change the options for all galleries in your page.
	
You can set them in 2 ways:
	
1. In the .js file, at the top of the class.
2. In the .js file, at the bottom, where Milkbox is instantiated:

	<pre>
	window.addEvent('domready', function(){
		milkbox = new Milkbox({ resizeTransition:'back:out', topPosition:30, centered:true });
	});
	</pre>	

3. In a js script, after the DOM is ready, by using the refreshDisplay(options:Object,keepBackup:Boolean = false) method:

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

The refreshDisplay() takes the new options as the 1st argument, and a boolean value as the 2nd argument (pass true if you want to use the new options only once).
	

	
	
## How to use Milkbox (advanced)

### Custom Events

Milkbox has 3 custom events: onXmlGalleries, onClosed and onFileReady.
	
- Use onXmlGalleries when you want to know if an XML file is completely loaded. See the <a href="#xmlg">XML Galleries paragraph</a> for details.

- Use onClosed when you want to do something immediately after Milkbox is closed.
	
- Use onFileReady when you want to do something when the current file is loaded and ready to be showed. The current file is milkbox.currentFile.



### AutoPlay

You can set it globally via the autoPlay and autoPlayDelay options like described in the <a href="#js-options">'Global JavaScript options' paragraph</a>.

If you use an XML gallery, you can set different autoplay options for every gallery.

Finally, you can override the options on a per-gallery basis by using setAutoPlay() (described below):

But what's autoPlay? Well, yes, it's that! ;)
Milkbox will sequentially show all the files in a gallery, with a pre-defined delay between each.

You will be able to stop it either by clicking the play/pause button or the next/prev buttons. You will then use the play/pause button to re-start it.

<a href="#" class="example" id="autoPlayExample">Click here for an autoPlay example</a> (delay: 7 seconds)



#### Use of setAutoPlay(object or array of objects)

You use setAutoPlay() if you want to permanently override the global autoplay options for one or more galleries.

You can pass it an object or an array of objects. Every object should have 3 properties: gallery (string), autoplay (boolean), delay (number).

	<pre>
	window.addEvent('domready', function(){
		milkbox.setAutoPlay([
			{ gallery:'gall1', autoplay:true, delay:10 },
			{ gallery:'gall2', autoplay:false },
			{ gallery:'gall3', autoplay:true, delay:7 }
		]);
	});
	</pre>	



### Launch Milkbox from JavaScript

Instead of clicking a link, you can launch Milkbox directly from JavaScript (and therefore even from Flash, via ExternalInterface), usign the open() method for galleries, or openWithFile() method for single files without the need of build a gallery first.



#### Use of open(gallery (string or instance of MilkboxGallery),index)

You use open() if you want to launch Milkbox directly from JavaScript. You can launch any gallery, starting from any file.

You can pass open() the name of the gallery (so, a string), or, if you're an advanced programmer and are for some reason using an instance of MilkboxGallery, you can pass it directly.

	<pre>
	window.addEvent('domready', function(){
		$('testbutton').addEvent('click', function(e){
			e.preventDefault();
			milkbox.open('mygallery',3);
		});
	});
	</pre>

If you want to lauch Milkbox from flash, simply use ExternalInterface:

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



	
#### Use of openWithFile({object with href, size and title props}, {milkbox options})

You use openWithFile() if you want to open a single file with Milkbox directly from JavaScript without the need to build a single-item xml or json gallery first.

	<pre>
	window.addEvent('domready', function(){
		$('testbutton').addEvent('click', function(e){
			e.preventDefault();
			milkbox.openWithFile({ href:'img/01b.jpg', title:'Test text'});
		});
	});
	</pre>

Or maybe with some more options?

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


	

### External galleries

If you don't need to write HTML links, but still want to use Milkbox to show some gallery, you need to define them in some other way. Enter the External galleries (XML and JSON galleries). Both types are loaded into Milkbox using the addGalleries(string or object) method.



#### XML GALLERIES

To use xml galleries, <strong>first of all</strong>, you need to <strong>write an xml file</strong>, for example:

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

As you can see, for every gallery you must <strong>use div tags with class="gallery" and set the name property</strong>. Optionally, you can <strong>add custom autoplay options</strong> for every gallery.

Please note that, since it's an xml document, tags are NOT real html tags, and <strong>the link tags must be empty tags</strong>, so you close them with a space followed by a slash ((an empty space)/&gt;), not with a close tag like this: &lt;/a&gt;

Once you have your xml file, load it with the <strong>addGalleries()</strong> method:

	<pre>
	milkbox.addGalleries('galleries.xml');
	</pre>

Now you can use all the Milkbox methods with the new galleries. I think you'll at least use open(), but before doing it, it's safer to be sure that the xml file is really loaded, so you should wrap it in the <strong>onXmlGalleries custom event</strong>:

	<pre>
	milkbox.addEvent('xmlGalleries',function(){
		$('testButton').addEvent('click', function(e){
			e.preventDefault();
			milkbox.open('xmlG2');
		});
	});

	milkbox.addGalleries('galleries.xml');
	</pre>



#### JSON Galleries

To use JSON galleries, you need to pass the JSON object to addGalleries(). The JSON object must have this form:

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

You can for example save it in a variable and pass that variable to addGalleries(), or pass it directly:

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

Than you can use the usual milkbox methods like open().



### Reload galleries

Often, using Ajax, links and galleries change without fully refreshing the main page and therefore without updating the internal Milkbox galleries.

To solve these kind of issues, you can simply use the <strong>reloadPageGalleries()</strong> method. For example, a generic Ajax application could do something like this:

	<pre>
	app.ajaxRequest.onSuccess(response){
		addResponseToHtml(); 
		milkbox.reloadPageGalleries();
	}
	</pre>

There's also an utility method to clean all the external galleries already loaded (xml and json), and optionally load some new one. The method is <strong>resetExternalGalleries(list: single string/object or array of objects)</strong>; you pass new galleries as the list parameter.



## Notes

#### Milkbox has been tested to work on (MS Windows and Mac OS X):

- IE 7/8/9
  Still using IE 7 or (!!!) 6? Well, I think it's time to upgrade, DON'T YOU?? 

- Latest Firefox
- Latest Safari
- Latest Chrome



#### If your page includes flash movies:

If you use Milkbox in a page that contains flash objects, you must set their wmode property to 'opaque' or 'transparent'.
	


#### Javascript compression:

If your site is running on an Apache server with an active deflate module (usually it's active by default, or you can ask your provider to switch it on for free) you could telling it to serve your js/css files gzipped. To do that, I usually write one of these lines in a .htaccess file (published in the root dir of the site):

	<pre>
	AddOutputFilterByType DEFLATE text/html text/css application/x-javascript
	#or
	AddOutputFilterByType DEFLATE text/html text/css application/javascript
	</pre>

After doing that, milkbox-yc.js will be only 5.5Kb in size.



## Software, plugins and people

Milkbox is also used by other developers all around the world for various softwares and plugins.

Please tale a look to the followings:
	
	
#### Feindura - Flat file CMS

<a href="http://feindura.org" target="_blank">http://feindura.org</a>

Feindura is a Open Source flat file based Content Management System for Web Designers and ideal for small and medium websites. There is no need of a database and it’s easy to integrate in your Websites. 
(It uses milkbox for its image gallery.)
	
	
#### Mootools-FileManager

<a href="https://github.com/cpojer/mootools-filemanager" target="_blank">https://github.com/cpojer/mootools-filemanager</a>

A filemanager for the web based on MooTools that allows you to view, upload and modify files and folders via your browser.
	

#### Gerrit E.G. Hobbelt

<a href="https://github.com/cpojer/mootools-filemanager" target="_blank">https://github.com/GerHobbelt</a>

Ger Hobbelt uses Milkbox in some of his projects and helped me a lot in fine tuning v3.0.0.

He is a 20+ years of experience working as a software engineer, enjoying both systems architecture and hardcore development with a focus on security, stability and survivability of the product. Currently (as per 2011) the action is happening at a financial analysis and prognosis package with a strong focus on web technology and plenty of exiting math to drive the coding.


#### ScrollBox Pro - Plugin for Joomla

<a href="http://www.zonvu.spb.ru/demos/scrollbox-pro" target="_blank">http://www.zonvu.spb.ru/demos/scrollbox-pro</a>

Milkbox is used by Nikita Zonov in his slideshow plugin for Joomla.



## Donate

If you use Milkbox, I'D REALLY LIKE YOU TO DONATE some little money with paypal:
	
<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
	<input type="hidden" name="cmd" value="_s-xclick">
	<input type="hidden" name="hosted_button_id" value="VXL2HSYG232TN">
	<input type="image" src="http://reghellin.com/milkbox/makedonation.gif" name="submit" alt="Donate with PayPal">
	<img alt="" src="https://www.paypalobjects.com/it_IT/i/scr/pixel.gif" width="1" height="1">
</form>

Note: after donating, you will receive an automatic e-mail notification by PayPal. So if you donate as a company, you should be able to use that notification for tax records.



## Download Milkbox

Milkbox - Lightbox for mootools 1.4.x -- Here's the Milkbox files with all assets and demo, and yui-compressed version too

<a href="http://www.reghellin.com/milkbox/milkbox-buttons.zip" title="Milkbox buttons">&gt; And here's the buttons graphics [5 Mb (.psd and .ai)]</a>

Did I kindly ask you to DONATE some little money??? ;)
