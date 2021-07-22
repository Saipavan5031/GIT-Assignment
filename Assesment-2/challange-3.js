var word='madam';
var reverse='';
 function palindrome(word)
 {
     for(let i=word.length-1;i>=0;i--)
     {
         reverse+=word[i];
     }
     if(word==reverse)
     console.log("palindrome");
     else
     console.log("not a palindrome");
 }
 palindrome(word);