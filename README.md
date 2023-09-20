# STYGIAN: SWITCH TO DARK MODE FROM LIGHT MODE WITH EASE
#### Video Demo:  <https://youtu.be/3XDwAYTDYXc>
#### Description:
### Introduction
Stygian is a chrome extension that enables one to switch from a light theme to a dark theme and vice versa with ease. The extension was made with a combination of javascript, HTML and CSS. The extension works by inverting the colors of the webpage open (save for media elements), thereby equipping one with the ability to switch themes with the simple toggle of a button.
### Why I chose to make Stygian
I, akin to many fellow internet sleuths, am a dark mode zealot and I continually found myself having to spend minutes frisking through the settings sections of websites to locate the toggle, and sometimes to no avail. I am aware that there are countless antecedent tools that fix this problem, but why use them when you can make your own?
### manifest.json
Nothing too riveting here; Manifests are standard inclusions for developing chrome extensions, providing integral information regarding the project, including its name, a short description, the version used, the icons (which are from [flaticon](https://www.flaticon.com/premium-icon/night_2280678)) to be displayed and in addition, to link HTML and javascript files and set permissions.
### popup.htnl
The structural layer of the project, it sets out the cornerstone of the toggle button (which is later stylized in the CSS file and given functions in the javascript files) and by extension, the user interface. It also includes the heading of the popup, enclosed between a h1 tag. It also contains some code in between the head tags to make sure the popup looks good across all devices.
### style.css
The style file splices the div tags to make a toggle button and spices it up by adding an animation. I chose a pastel color palette for the toggle to contrast the caliginous blue of the title. Incipiently, I had intended to deploy a rather ostentatious toggle button, complete with several moving elements inside the button itself, analogous to this [design I found on dribble.](https://dribbble.com/shots/3220898-Day-Night-toggle-DailyUI-015)
### popup.js
I employed the queryselector function to assign variables to the classes initialized in the HTML file. Then I initialized a new variable called bon (short for button on) to false to harness later on. Furthermore, I used the addEventListner function to deploy the appropriate responses to the if and else statements. The if and else statement link to seperate javascript files (see appon.js and appoff.js) that ensconce the actual inversion of webpages. I did originally contemplate using "code: " and adding the contents of the appon/appoff files in there instead of "file:", but before long I decided against it as it would be rather slovenly between the quotation marks.
### appon.js
This javascript file lodges the code that transforms websites from a light theme to a dark theme by employing some css in the form of the ".style.filter" functions. Withal, I have also added another ".style.filter", exclusively for media elements, to convert them back to their original form, as to not mar them.
### appoff.js
This javascript file is virtually identical to the "appon.js" file except that "hue-rotate(180deg)" is replaced with "hue-rotate(0deg)" to transform websites from a dark theme to a light theme by employing some css in the form of the ".style.filter" functions. Withal, I have also added another ".style.filter", exclusively for media elements, to convert them back to their original form, as to not mar them.
