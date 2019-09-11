# bs-extended
BootStrap extended JS and animation components

## A BootStrap extension application

Added new features to BS components for further site developments

## How to implement

To implement the new added features you need to:
* Copy the corresponding files (animations.css and components.js) to the folders CSS and JS
* Add the call to the files in the HTML code as depicted in the index.html

### Smooth scrolling

To implement smooth scrolling there are 2 options:
1. Smooth scrolling from the navigation tabs
2. Smooth scrollling from a content link

#### Smooth scrolling from the navigation tabs

To the ul list element add the attribute <code>data-animate="navbar-scroll"</code> and the job is done. Enjoy it.

```html
<ul class="nav navbar-nav navbar-right" data-animate="navbar-scroll">  
  <li><a href="/">Home</a></li>
  <li><a href="#our-services">Our Services</a></li>
  <li><a href="#our-team">Our Team</a></li>
  <li><a href="#news">News</a></li>                  
  <li><a href="https://www.google.com" class="btn bg-tertiary">Contact Us</a></li>
 </ul>
```

## Preview sample

A live sample can be reviewed at: https://accedo-gps.000webhostapp.com/demo/bs-extended/index.html
