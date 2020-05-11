function dispName ()
{   
    var name="Rajesh Patil";
    
    //document.write(name);
    document.getElementById("name").innerHTML=name;
    console.log(name);
    alert(name);
}

function uName5()
{
    var uname= document.getElementById("uName").value;
    document.getElementById("h1").innerHTML=uname;
    document.getElementById("h2").innerHTML=uname;
    document.getElementById("h3").innerHTML=uname;
    document.getElementById("h4").innerHTML=uname;
    document.getElementById("h5").innerHTML=uname;

}

function highestNum()
{
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var number3 = document.getElementById("num3").value;

    if(number1 > number2 && number1 > number3)
    {
        document.getElementById("bigNum").innerHTML=number1;
    }
    else if(number2 > number1 && number2 > number3)
    {
        document.getElementById("bigNum").innerHTML=number2;
    }else if(number3 > number1 && number3 > number2)
    {
        document.getElementById("bigNum").innerHTML=number3;
    }
}

