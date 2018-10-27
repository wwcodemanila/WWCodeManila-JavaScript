## Overview

Now that you know what HTML, CSS, and JavaScript are used for in a website. Let's do a quick recap of how to code in these languages before jumping into JavaScript.

By the way, Women Who Code also has [HTML & CSS Study Groups](https://wwcodemanila.github.io/WWCodeManila-HTML.CSS/#/)!

## HTML

The main purpose of HTML or Hypertext Markup Language is to give structure to your content as mentioned in [HTML, CSS, JavaScript: How They Work Together](contents/html_css_js.md). HTML is *markup language* (not a programming language) meaning it gives information about the structure of the text or instructions for how it is to be displayed.

When writing in HTML, you **define elements** in the form of **tags**. Some examples of these tags are `<head>, <body>, <title>, <link>, <meta>, <nav>, <section>, <div>, <p>, <span>, <h1>, <a>, <form>, <table>, <script>, <ul>, <li>`. These tags are case-insensitive which means the tag `<div>` is the same with the tags `<DIV>`, `<Div>`, and its other variations. However, it is common to use the lowercase version.

Also, these tags usually come in pairs. There's the **opening tag** (`<p>`) and the **closing tag** (`</p>`). There are cases, however, when an element is **self-closing** like `<br/>` or `<img/>`.

HTML elements can have **attributes** declared on the opening tag. Attributes help us know more about the properties of an element and are composed of a name and a value.

The typical HTML syntax is shown below: 

![](../_media/html-syntax.png "HTML Syntax")

In this example, we are defining that the content "This is cool!" is a **paragraph** by enclosing it in the **p** tag. The entire `<p class="awesome">This is cool!</p>` is an **element** composed of **p opening and closing tags** with the text "This is cool!". 

`class="awesome"` is an **attribute** of the paragraph element that tells us that the paragraph element has an attribute name of `class` with a value of `awesome`.

If we want to define another class (say `main-paragraph`) for the element, we include it inside the quotation marks and just separate the values using a space as in `<p class="awesome main-paragraph">This is cool!</p>`. To add another class, we continue to add it like `<p class="awesome main-paragraph align-right">This is cool!</p>`.

If we want to add a different attribute, we just include a space after the first attribute and declare our next attribute like this: `<p class="awesome" id="cool-paragraph">This is cool!</p>`. Here, we declared two attributes `class` and `id` where `class` has a value of `awesome` and `id` has a value of `cool-paragraph`.

It's important to know that the attribute **id** should be unique in a web page. If you've used the id `cool-paragraph` for one element, you can't declare another element with the same id. The attribute **class** on the other hand is reusable and doesn't have to be unique. You can declare several elements with the same class. This is particularly useful if you want several elements to have the same styles applied to them so they're easy to select later on using CSS.

Other HTML elements follow the same basic syntax. For a comprehensive list of HTML elements to use, you can check out [htmlreference.io](https://htmlreference.io/) and [W3Schools HTML Element Reference](https://www.w3schools.com/tags/). For a list of HTML attributes, you can check out [MDN HTML Attribute Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) and [W3Schools HTML Attribute Reference](https://www.w3schools.com/tags/ref_attributes.asp).


