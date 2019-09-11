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

To the ul navigation tab list element, add the attribute <code>data-animate="navbar-scroll"</code> and the job is done. Enjoy it.

```html
<ul class="nav navbar-nav navbar-right" data-animate="navbar-scroll">  
  <li><a href="/">Home</a></li>
  <li><a href="#our-services">Our Services</a></li>
  <li><a href="#our-team">Our Team</a></li>
  <li><a href="#news">News</a></li>                  
  <li><a href="https://www.google.com" class="btn bg-tertiary">Contact Us</a></li>
 </ul>
```

#### Smooth scrolling from a content link

To the link anchor element, add the attribute <code>data-animate="link-scroll"</code> and the job is donde. Enjoy it.

```html
<p>
  <a href="#copyright" class="color-primary" data-animate="link-scroll">Go to copyright 
  <i class="fa fa-arrow-down" aria-hidden="true"></i></a>
</p>

<!-- Lots of content -->

<div id="#copyright">
</div>

```

### Revealing/Animating elements on scrolling

To add animations or transitions to any HTML element and to fire/trigger the animation once the element is revealed in the window screen, just add the attribute <code>data-animate="scroll"</code>.

Any element with this attribute will fire a "scroll" event and a class "active" will be added to it. Then with the "active" class added we can manipulate it in the right timing.

#### Fade in from bottom to top headings or blocks

To the heading or block element, just add the attribute <code>data-animate="scroll"</code>, and the class "ani-fade-top" to the class list. Once the element is revealed in the screen while scrolling it will fire the CSS keyframes animation. A variation on this animation would be to use the class "ani-fade-in" instead, which will only apply a "fade in" effect to the element, without the transition from bottom to top.

```html
<h2 class="sec-title text-center color-secondary">
  <span data-animate="scroll" class="ani-fade-top">Our Services</span>
</h2>
```

## Preview sample

A live sample can be reviewed at: https://accedo-gps.000webhostapp.com/demo/bs-extended/index.html
