var arr=[0,1,false,2,undefined,'',3,null,'sai',4];
var newArray=[];

function array(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]!=undefined && arr[i]!=null && arr[i]!='')
            newArray.push(arr[i]);
    }  
    console.log(newArray);
}   

array(arr);