# programming-language-suggester
An application to help users decide which programming language to learn.

#### By Zachary Cipolletta


## Technologies used

* JavaScript
* HTML
* CSS

## Description
This is the experimental version of the site.  This is used to try out new code and new features without causing issues for the main version fo the site.

The added 'chaos' buttons will assign random RGB values to the backgrounad and font color. The reset buttons will reset the page back to baseline.  I am also experimenting with ways to display or hide the buttons on the page.


## Setup/Installation Requirements

* Clone repository to your desktop
* Navigate to the top level of the directory
* open Portfolio-webpage/index.html in your browser.

## Known Bugs
 * Upon hitting the submit button the result generated from resultsFunc() has a string containing "undefined" concatenated onto the end of it.  I have thus far been unable to determine the source of the issue.  My work around was to slice off the last 9 characters of the result before concatenating the result into the message presented to the user.
 

## License
MIT

Copyright (c) 1/12/2023 Zachary Cipolletta
