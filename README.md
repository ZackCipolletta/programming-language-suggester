# programming-language-suggester
An application to help users decide which programming language to learn.

#### By Zachary Cipolletta


## Technologies used

* JavaScript
* HTML
* CSS

## Description
A basic website to help people interested in programming to decide which language they should learn first.
Users answer each of the questions and click the submit button to be presented with a suggestion of which programming language they should learn along with some basic information about that language.
Users can also enter their name into the site to be presented with a more personalized message once they submit the form.

## Setup/Installation Requirements

* Clone repository to your desktop
* Navigate to the top level of the directory
* open index.html in your browser.

## Known Bugs
 * Upon hitting the submit button the result generated from resultsFunc() has a string containing "undefined" concatenated onto the end of it.  I have thus far been unable to determine the source of the issue.  My work around was to slice off the last 9 characters of the result before concatenating the result into the message presented to the user.
 

## License
MIT

Copyright (c) 1/12/2023 Zachary Cipolletta
