// Iteration 1: Names and Input
hacker1=`Estefania`;
hacker2=`Yanina`;
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
result=''
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length)
{
    result=`The driver has the longest name, it has ${hacker1.length} characters.`;

}
else if(hacker1.length<hacker2.length)
{
    result=`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`;

}
else
{
    result=`Wow, you both have equally long names, ${hacker2.length} characters!.`;
}
console.log(result);
// Iteration 3: Loops
let driversName="Estefania";
driversNameSpace="";
driversNameLength=driversName.length;
for(i=0;i<=driversNameLength-1;i++) driversNameSpace+=driversName[i]+" ";
console.log(driversNameSpace);


let navigatorName="cocacola";
navigatorNameSpace="";
navigatorNameLength=navigatorName.length;
for(i=navigatorNameLength-1;i>=0;i--) navigatorNameSpace+=navigatorName[i]+" ";
console.log(navigatorNameSpace);

function LexiOrder(name1,name2){
    length1=name1.length;
    length2=name2.length;
    if(length1<length2)
      {nameLength=length1;
       lexiresult= 1;
      }
    else
      {nameLength=length2;
       lexiresult= 2;
        }
    for(i=0;i<=nameLength-1;i++)
    {
      if(name1[i]<name2[i]){
        return 2;
      }
      else if(name1[i]>name2[i]){
        return 1;
      }
    }
    return  lexiresult;
   }
  
  if (LexiOrder(driversName,navigatorName)===1)
      console.log(`The driver's name goes first.`);
  else if(LexiOrder(driversName,navigatorName)===2)
    console.log(`Yo, the navigator goes first definitely.`);
  else
    console.log(`What?! You both have the same name?`);
