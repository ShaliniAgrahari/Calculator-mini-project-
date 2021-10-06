
    function cal(val)
    {
    document.getElementById("txt1").value+=val
    }
    function Delete()
    {
    var s=document.getElementById("txt1").value
    var st=s.substring(0,s.length-1);
    document.getElementById("txt1").value=st;
    }
    function clr()
    {
     document.getElementById("txt1").value="";
    }
    function equal()
    {
     var x=document.getElementById("txt1").value
     var y=eval(x);
     document.getElementById("txt1").value=y
    }
    function showTime()
    {
        var t,d,dt;
        d=document.getElementById("time");
        dt=new Date();
        t=dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
        d.innerText=t;
        window.setTimeout("showTime()",1000);
    }
    