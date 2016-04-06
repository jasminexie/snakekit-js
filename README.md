# About SnakeKit-js

A jQuery plugin kit for dealing with simple HTML and JavaScript effects.

An on-and-off part-time project by [Big Green Snake](http://www.github.com/jasminexie). This project started because I was trying to neet the needs of a very demanding boss (\*laughs\*).

It's not that good, and it's not perfect, it's just me learning JS and trying to write some interesting stuff. Issues and feedback are welcome.

__Todo__

* Write a build script and uglify/minify the JS.
* Develop more plugins!

__Disclaimer__

The project name is called SnakeKit... becuase it was developed by Big Green Snake (me!). It does **NOT** have anything to do with snakes. 

# Using SnakeKit

Include jQuery.   
Include the javascript files you need to use.

# Now Includes

### Ellipsis Helper

````
ellipsisBtn(options);
````

A very simple jQuery plugin that manages your button's "..." effect. 
Geez, I don't know how to describe this.    
Supports only *input* and *button* types.

__Starting the effect__

````
$('#my-button').ellipsisBtn({ellipsis_text: "Loading"});
````

__Ending__

````
$('#my-button').ellipsisBtn({type: "stop"});
````

__Options__

Option	| Type | Default value	|	Description
-------|------|-------|--------------
type	|	String | "stop" | Starts or stops the effect. If type != "stop", the effect will be activated.
ellipsis_text | String | "正在跳转" | The text that the button will show when the effect is activated.
ellipsis_icon | String | "."	| The ellipsis icon that will be appended to the button text
ellipsis_number | integer | 3 | The maximum number of ellipses displayed
ellipsis_interval | integer | 500 | Time interval between appending an ellipsis icon
original_text	| String 	| The original html or value of the button or input | The text that the button will display after the effect has been stopped

__Todo__

* Disabled button style cusomizable by defining class and/or style attribute
* original_text can be dynamically generated onStop
* supports callback functions

### Equal Heights

````
equalHeights();
````

A very simple jQuery plugin that dynamically aligns the height of your DOMs. Useful for static pages, probably breaks down in JS frameworks. *I tried to use this in Backbone.js... fail.*

__Starting the effect__

````
$('#sidebar1 #sidebar2 #content').equalHeights();
````

__Todo__

* Add options: minHeight, maxHeight, start, stop, etc.
* Try to tweak this to work in the Backbone.js project that I'm working on. o.O