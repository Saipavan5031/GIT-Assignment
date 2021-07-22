var fullname='Saipavan Narra';
var firstName='';
var lastName='';
for (let i= 0; i<fullname.length; i++)
    {
        if( fullname[i]== ' ')
        {
            for(let j=i;j<fullname.length;j++)
            {
                lastName+=fullname[j];
            }
            break;
        }
        firstName+=fullname[i];
    }
    console.log(lastName+' '+firstName);