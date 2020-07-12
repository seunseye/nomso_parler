var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);



var num = window.prompt();
var str = num.toString();
var result = [str[0]];

for (var x = 1; x < str.length; x++) {
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push('-', str[x]);
  } else {
    result.push(str[x]);
  }
}
console.log(result.join(''));



var array=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var aa = 1;
var b = 0;
var data;
for (var i=0; i<array.length; i++)
{
        for (var c=i; c<array.length; c++)
        {
                if (array[i] == array[c])
                 b++;
                if (aa<b)
                {
                  aa=b; 
                  data = array[i];
                }
        }
        b=0;
}
console.log(data+" ( " +aa +" times ) ") ;

