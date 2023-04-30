1. line 12 will print i, which is the lenght of the array of prices. it will print sicne i is a var and can be accessed from anywhere from the current function
2. line 13 will print the discounted price of the last price in the prices array(note: this price is a raw number, may has many digits after the decimal point). discountedPrice is a var and can be accessed from anywhere from the current function. 
3. line 14 will print the final price of the last price in the prices array and at most have 2 digits after the deicaml point, since it multiply the raw discounted price by 100, round it, and divided it by 100. finalPrice is a var and can be accessed from anywhere from the current function. 
4. this function will return an array of prices, which each matched to the prices in the prices array after discount. And the reutrn prices can at most have 2 digit after decimal point, as the function traverse throuh the given prices array, apply the discount, and round it by multiply the raw discounted price by 100, round it, and divided it by 100. 
5. line 12 will cause error since i is defined by let in the for loop block, thus at line 12(outside of for loop block) i is not defined. 
6. line 13 will cause error since discountedPrice is defined by let in the for loop block, thus at line 13(outside of for loop block) discountedPrice is not defined.
7. line 14 will print the final price of the last price in the prices array and at most have 2 digits after the deicaml point, since it multiply the raw discounted price by 100, round it, and divided it by 100. finalprice is defined in the same block as line 14, thus it can be accessed. 
8. this function will return an array of prices, which each matched to the prices in the prices array after discount. And the reutrn prices can at most have 2 digit after decimal point, as the function traverse throuh the given prices array, apply the discount, and round it by multiply the raw discounted price by 100, round it, and divided it by 100. (as i and discountedPrice are only used in the for loop, changing them form var to let won't affect the correctness of the function)
9. line 11 will cause error since i is defined by let in the for loop block, thus at line 12(outside of for loop block) i is not defined. 
10. line 12 will print the lenght of the prices array as the constant length is defined in the same block scope as line 12 and defined as prices.length;
11. this function will return an array of prices, which each matched to the prices in the prices array after discount. but the price will be raw price after applying the discount instead of having at most 2 digits after the deicaml point. 
12. 
    A. student.name \
    B. student['Grad Year']\
    C. student.greeting()\
    D. studnet['Facorite Teacher'].name\
    E. student.courseLoad[0]
13. 
    A. 32, since integers map to their exact string representation\
    B. 1, since string 3 is converted to number\
    C. 3, null is converted to 0\
    D. 3null, null is converted to string 'null'\
    E. 4, true convert to 1\
    F. 0, false convert to 0, null convert to 0\
    G. 3undefined, undefined become stirng 'undefined'\
    H. NaN, an error occur, undefined becomes NaN
14. A. true, string 2 converts to number 2\
    B. false, JavaScript uses lexicographical order, string 2 is bigger than string1\
    C. true, string 2 converts to number 2\
    D. false, === is strict equality operator and '2' and 2 are not same type;
    E. false, tin boolean values, true becomses 1 and does not equal to 2\
    D. true, Boolean() function turn 2 into true and it's a boolean type qual to true
15. == is the equality test, check equality between 2 things with automatic type converstion, === is strict equality operator,which cheks the equality without type conversion. 
16. see part2-question16.js
17. the result wil be line 13 returns an array [2, 4, 6]. The modifyArray function takes 2 parameters, an array and a function. The function we put in is doSomthing(num), which return 2 times the num. Thus in modifyArray function, it first creat a constant array for return , then traverse through the given array[1, 2, 3] and apply doSomthing funciton on the element, thus it will return array with 2 times the original value, which is [2, 4, 6]. 
18. see part2-question18.js
19. thecode will print number 1 4 3 in seperate lines, and after 1 second it will print 2. 