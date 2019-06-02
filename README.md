# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

the **Restaurant Reviews** project, is a mobile-ready web application. This design is responsive on different sized displays and accessible for screen reader use. Also, a service worker is used to create a seamless offline experience for users.

### Specification

The application offers a seamless experience on the desktop browser and mobile.
It also takes into consideration accessibility issues. And that allows the screen reader to provide a helpful and easy experience.  

### CSS
The stylesheet manages different styles of the application based on the screen size. A grid to column layout is used when reducing screen sizes.
Font sizes, margins and paddings are also being altered.

###Service worker
A service worker is being registered and created to provide an offline experience.
Service worker is being installed, activated then the fetch event is used to fetch data.
Also, for compatibility reasons, the service worker code is being written inside an if statement that checks whether the browser supports the service worker.

##  Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). 
### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.
