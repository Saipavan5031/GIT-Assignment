var sentance='She sells sea shells on the sea shore';
var count=0;

function noOfWords()
    {
        for(let i=0;i<sentance.length;i++)
        {
             if(sentance[i]==' ')
                count++;
        }
        wordcount=count+1;
    return wordcount;
    }       
    console.log('\n no.of words in a given sentance are '+noOfWords()+'\n');

    Lettercount=0;
function noOfLetters(sentance)
    {
        for(let i=0;i<sentance.length;i++)
        {
             if((sentance[i]!=' ' && !(sentance[i]>='0' && sentance[i]<='9')))
             {
                Lettercount++;
             }
        }
    return Lettercount;
    }       
    console.log('no.of letters in a given sentance are '+noOfLetters(sentance)+'\n');
