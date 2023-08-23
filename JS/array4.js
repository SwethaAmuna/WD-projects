// slice and filter in this
let nos = [4,2,13,4,25,6,17,8];
m=6;
nos.map(
    function(n)
    {
        if(m<n)
        {
            m=n
        }
    }
)
console.log("The largest no is",m);