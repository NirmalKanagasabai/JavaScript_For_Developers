# JavaScript_For_Beginners
This repository was built to experiment with fundamentals of JavaScript and understanding the nuances of the language. This work was inspired by [JavaBrains.io](https://www.youtube.com/watch?v=s6R0VEdoVt4&list=PLqq-6Pq4lTTYFJxC9NLJ7dSTI5Z1WWB6K)'s, 'JavaScript for Developers' course :) 

**JavaScript (JS)**

- Scripting language (Set of commands put up on a script file and is built for a run-time environment - Browser)
- Interpreted. Not compiled.
- Object-Oriented (Modelled around objects)
- First-Class Functions (Functional Prog.)
- Runs on Browser (Run-Time Environment)
- Lightweight (Low memory footprint, Easy to implement)
- Originally designed and named as ‘LiveScript’ for browsers. But, due to the popularity of Java, they named it, ‘JavaScript’
- Unlike Java (which was used only by professional developers), JavaScript was designed for facilitating the ease of use
- Also, JavaScript is a forgiving language. 
    - i.e., in case of Java, if there is a mistake, the compiler doesn’t even generate the byte code. 
    - Whereas, in JavaScript, the interpreter tries to assume what the developer would have written. The program doesn’t break. 
    - Certain assumptions that the interpreter makes can be surprising and confusing (to be discussed later)

**Static vs. Dynamic Web Pages:**

> HTML —> [Browser] —> Static DOM Tree 

Basically, the HTML is provided as an input ‘Document’ to the run-time environment (Browser).
This browser reads the document and once it comes across different tags like <html>, <body>, etc., it creates objects for each and everyone of them. 
So, a <div> tag and a <p> tag creates two different objects with the <div> object being the parent and <p> object being the child causing the end result is a tree of objects. Hence, called as “DOM” tree 

> HTML + JavaScript —> [Browser] —> Dynamic DOM Tree

JavaScript has the capability to modify the DOM tree based on the commands that were interpreted and executed on the run-time environment (browser)

**Applications:**

- Client-Side Development
    - Native JS
    - jQuery (Framework)
    - Angular, React, Ember (Advanced client-side development Frameworks)
- Server-Side Development (More recent advancement)
    - NodeJS
    - Express
- Browser Extensions (Add-Ons)
- Desktop Applications (Not restricted to browsers)
- Mobile Applications
- IoT (Not so mature)

**Development Environment:**

- No real need of an explicit IDE. The browser is pretty much what the developers need. Two ways to do it:
- Browser -> Developer Tools -> Toggle Control -> Console [OR]
    - Only one command is executed at a time
- Browser -> Developer Tools -> ScratchPad
    - Multiple commands (a bunch of code) is executed at a time
    
**Concepts Discussed:**

- Variable Declaration
- Primitive Data Types
    - Number
    - String
    - Boolean
- Loose Typing
