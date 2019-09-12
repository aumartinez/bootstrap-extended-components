# bs-extended
BootStrap extended JS and animation components

## A BootStrap extension application

Added new features to BootStrap components for further site developments. 

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

To the heading or block element, just add the attribute <code>data-animate="scroll"</code>, and the class "ani-fade-top" to the class list. Once the element is revealed in the screen while scrolling it will fire the CSS keyframes animation. 

```html
<h2 class="sec-title text-center color-secondary">
  <span data-animate="scroll" class="ani-fade-top">Our Services</span>
</h2>
```

#### Fade in headings or blocks

A variation on the previous animation would be to use the class "ani-fade-in" instead, which will only apply a "fade in" effect to the element, without the transition from bottom to top.

```html
<h2 class="sec-title text-center color-secondary">
  <span data-animate="scroll" class="ani-fade-in">Our Services</span>
</h2>
```

### Counting numbers

To apply a counting animation to a number that requires the user attention/focus just add the attribute <code>data-animate="counter"</code> to the element, and the class "ani-counter" to the class list. The animation will be triggered on the "scroll" event.

```html
<div class="col-sm-3">
  <div class="awards-item">
    <h3>
      <span data-animate="counter" class="ani-counter">75</span>
   </h3>
   <p>
     Clients Worldwide
   </p>
 </div>
</div>
```

### Typing a heading title

To apply a typing animation effect to a section title, just add the attribute <code>data-animate="type"</code> to the element. The animation will be triggered on the "scroll" event.

```html
<h2 class="sub-title color-secondary" data-animate="type">
  A new subtitle with a meaningful content
</h2>
```

### Active states toggling

From time to time, there is a requirment to add different states to elements when these are clicked or hovered, the only option available for clickable elements in BS is the "collapse" component, but tweaking the collapse classes and animation may cause a headache

Then whenever there is a need to add an "active/inactive" state to an HTML element and then manipulate the element with this new state, just add the attribute <code>data-toggle="active"</code> to the element.

A "click" event JS listener will add a class "active" to the element class list and it will make it available to further manipulation.

```html
<div class="flip-card" data-toggle="active">
  <div class="flip-card-inner">
   <div class="flip-card-front bg-tertiary">
     <div class="card-front-head">
       <!-- more content -->
```

With the active state toggling you can also target an ID or a group of classes just by adding to the same element the attribute <code>data-target="#our-team"</code> or <code>data-target=".myclass"</code>. This will add an "active" class to the targeted elements.

### Active states on hover event

In iOS browsers (Safari), to apply a :hover selector styling it is required to implement this to an anchor element <code>&lt;a&gt;</code>, a workaround can be implemented with JS, forcing to add an "active" class to the hovered element and then manipulating the element with this active state.

To apply a hover active state, just add the attribute <code>data-animate="hover"</code> to the element.

```html
<div class="col-sm-4">
  <div class="card bg-card-03" data-animate="hover">
    <div class="card-cont">
      <h3 class="color-tertiary">
        A heading title
      </h3>
      <!-- more content -->
```
The CSS to apply a transition to the hovering element would be as below:
```CSS
.card.active .card-cont,
.card:focus .card-cont,
.card:hover .card-cont {
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  background-color: #61035D;
}
```
Notice the "active" class selector.

## Preview sample with examples implemented

A live sample can be reviewed at: https://accedo-gps.000webhostapp.com/demo/bs-extended/index.html
