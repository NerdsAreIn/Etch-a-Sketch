# Etch-a-Sketch

This is a project for The Odin Project's Foundations course.

I am hoping to create "light", "dark" and "pastel" themes for my page. The pastel theme will have various pastel shades saved in CSS variables and
hopefully a multicoloured title (created via <span> elements for each letter - each with its own class). I also want to create transitions for the
title letters, so that they appear one at a time, from left to right. This can hopefully be achieved via the opacity property, with a transition from
invisible to visible, in combination with the transition-duration property - with each letter having a slightly longer value and thus taking longer 
to appear. A class of ".visible", with "opacity: 1", can be added to each <span> upon the loading of the page, by putting the letter spans in an 
array and adding an event listener to each.

"Light" will have a white grid and a white title on a dark background, with black mouse strokes. "Dark" will have a black grid (white grid lines) and
a black title on a white background. 
