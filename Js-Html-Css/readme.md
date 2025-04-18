17/04/2025 Thursday
## Types of Website: 2 Types

1) Static Website: Website where where user cannot change it and only read purpose



2) Dynamic Website:- Website were user can make changes at runtime that's called Dynamic Website etc: whatsapp, instagram


when we use html, css, bootstrap only which is Static but if we use javascript for it so we can make it Dynamic Website.

Let's Learn javascript :-

# javascript :

-- it is use to add functionality into Web Application
-- it is loosely typed language
-- it interpreted language 
-- when we use variable in javascript we cannot tell what kind of data in it untill and unless we initilized it
-- 


* there are two ways to use javascript

1. Internal javascript : in Html File we write javascript in script 

2. External javascript : in this we create a seprate js file abd import it in html file by using script tag


* How to get or display output in javascript
1. document.write(): it will display output on browser
2. window.alert(): it will generare  popup window and display output in it #Global OR Main Object in javascript
3. console.log(): it will display output in browser console in terminal
4. innerHTML  (DOM): it is to insert data inside an element by using element id.

* in JavaScript there are three ways to create variable

var, let, const;

Q. why javascript is called as loosely typed?
--
Q.what is Hosting?
-- it is default javascript behavior which moves variable declaration at top. this we can use variable first and then declare it.

Q. what is Difference Between var, let and const?
-- ES(ECMA) script, 2009(ES5), 2015(ES6);

-- var: i) it create function  scope variable
        ii) it can reintialize variable

-- let: i) it create block scope variable
        ii) we not use variable before declaration of it
        iii) we can not redeclare variable 

-- const: i)its value never change at run time        
          ii) when we use declare it we have to initialized it.




* Function in javascript
-- it is block of code which is use to perform particular task/operation
-- function will execute only when we call it.
-- function 





*Object :
-- it is use to store multiple data with different data types.
-- in object data store in key and values pair format.
-- we can access object data  outside by writting object.keyname,.
-- object data represent {};

*Array of object

* String and its method
# String:
-- it is collection of Character.
-- in String every letter and space has index number
-- starting index start with zero 0
-- we can write in "..." or '...' (... means here write any words, sentance, with include numbers and Special Symbols)


* there three methods which will index of searching String
1. indexOf(searchingString, startIndex);
-- it will search string from left to right and return index of first occurences of searching string
-- it takes to two parameter  1.searchingString, 2. startIndex.
-- if searching string do not found then it will return -1 value.


2.lastIndexOf(searchingString, startIndex);
-- it will search string from right to left and return index of first occurences of searching string.
-- it takes to two parameter  1.searchingString, 2. startIndex.
-- if searching string do not found then it will return -1 value.


3.search(searchingString);
-- it will search string from left to right and return index of first occurences of searching string
-- it takes one parameter 1 searchingString.
-- if searching string do not found then it will return -1 value.

*there are 4 methods which will return part of string from large string4. 
4. slice(startIndex, endIndex);
-- it will return part of string.
-- it will return from left to right when we pass +positive index.
-- it will return from right to left when we pass -negative index.


5. subString(startIndex, endIndex);
-- it will return part of string.
-- it will search string from left to right it will accept only we pass +positive index.
-- it will accept only +positive value as parameter.


6. subStr(startIndex, total-numberr-of-character);
-- it will return part of string.
-- it will search string from left to right it will accept only we pass +positive index.
-- it will accept only +positive value as parameter.



*Date  and Time :
-- in javascript you want to get date and time for this we have to create object of date class.
-- date class object return data and time from browser.
-- syntax : how to create object of date class.
      let obj = new Date(); 



*What is call back function
-- passing a function name as an argument inside another function  is called callback function.
-- javascript is by default Asnychronised language - the process which take a less time to execute first even the started last.




*what is Asnychronised?
--  basic it is single thread language.
-- the process which take a less time to execute first even through it start last.


*setTimeOut();
*setInterval();

#* ES5 (ECMA5) - 2009
1. *use strict* : -- it is execute javascript code in strict mode.
                : -- it never allow to use variable before declaration of it.
                : -- it write at top of page.

2.trim() : 
          -- it is used to remove unwanted white space from the string.
          -- it is only use for string (String method only).

1.forEach(); : it call another method once for eacch array element. (Array Method ).      

2.map(); : -- it call another method once for each array element and it will return new array after performing manipulation with array data.


3.filter(); : -- it call another method once for each array element and its will return new array of those element who satisfy given.

 4.every(); : -- it call another method once for each array element and it will return true value if element satisfy given condition.

 5. some(); : -- it call another method once for each array element and it will return true value if some of array elements  satisfy given condition
 

 *form validation : 
                  --to check wether user entered data is correct or not.
                  -- there are two ways to  perform  form validation.
                  -- 1. after submitting form data(onsubmit event)
                  -- 2. 



