---
title: "CSS Grid Table"
date: "2020-01-18"
description: "How to build a Table using CSS Grid."
postimg: "../../assets/img/post-images/code.jpg"
---
![img](../../assets/img/post-images/code.jpg)

It is difficult to display HTML Tables on small screens. 

A quick Internet search will turn up many proposed solutions. But there is no silver bullet. There are too many factors when working with HTML Tables. 

First of which is to decided if you'll be using HTML ```<table>``` or ```<div>``` elements.

When choosing a solution for your project you must consider the browsers your clients will use. Even though Internet Explorer 11 is no longer supported by Microsoft. Many companies are still using it.

In today's example I'll be using CSS Grid to create a table. I will be using a media query to switch the table to ```display:block``` for mobile. 

This solution will work across all major browsers and even IE11. 


#### CSS Grid Table

![Grid Table](../../assets/img/post-images/css-grid-table.png)
&nbsp;

#### CSS
```css
	/* Reset */

	body {
		padding: 0;
		margin: 0;
		border: 0;
		box-sizing: border-box;
	}

	/* Table */

	.table {
	  margin: 50px 20px 0 20px;
	  display: grid;
	  grid-template-columns: repeat(5, 1fr);
	  background-color: #fff;
	  color: #444;
	  max-width: 920px;
	  border: 1px solid #bfbfbf;
	}

	.header {
		background-color: #bfbfbf;
		font-size: 14;
		font-weight: bold;
	}

	.row {
	  grid-column: 1 / -1;
	  display: grid;
	  grid-template-columns: repeat(5,  1fr);
	  border-bottom: 1px solid #bfbfbf;
	}

	.row:last-child{
		border: 0;
	}

	.cell {
	  color: #444444;
	  padding: 10px 0;
	  font-size: 12;
	  margin: 0 10px;
	}

	@media screen and (max-width: 430px){
		.table .row {
		  display: block;
		}

		.header{
			display: none !important;
		}
	}
```
&nbsp;

#### HTML
```html
<body>
	<div class="table">
	
		<div class="row header">
			<div class="cell title">Client Details</div>
			<div class="cell">Animals</div>
			<div class="cell">Date Registered</div>
			<div class="cell">Account Status</div>
			<div class="cell">&nbsp;</div>
		</div>

		<div class="row">
			<div class="cell">Rick Sanchez</div>
			<div class="cell">Snuffles (Dog)</div>
			<div class="cell">12/16/19</div>
			<div class="cell">Approved</div>
			<div class="cell"><button>Button</button></div>
		</div>

		<div class="row">
			<div class="cell">Bugs Bunny</div>
			<div class="cell">Daffy (Duck)</div>
			<div class="cell">12/17/19</div>
			<div class="cell">Pending</div>
			<div class="cell"><button>Button</button></div>
		</div>

		<div class="row">
			<div class="cell">James Brown</div>
			<div class="cell">Shadow (Dog)</div>
			<div class="cell">12/18/19</div>
			<div class="cell">Review</div>
			<div class="cell"><button>Button</button></div>
		</div>

	</div><!-- end table -->
</body>
```
&nbsp;

#### Resources
- [Getting Started with CSS Grid](https://css-tricks.com/getting-started-css-grid/)
- [Using CSS Grid the right way](https://vgpena.github.io/using-css-grid-the-right-way/)
- [Look Ma, No Media Queries! Responsive Layouts Using CSS Grid](https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/)
- [Intrinsically Responsive CSS Grid with minmax() and min()](https://evanminto.com/blog/intrinsically-responsive-css-grid-minmax-min/)
&nbsp;