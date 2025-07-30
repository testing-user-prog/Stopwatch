let secs=0,mins=0,hrs=0,msecs=0;
let timer=null;
function start()
{
    if(timer==null)
    {
        timer=setInterval(inc,10);
    }
}
function inc()
{
    msecs++;
    if(msecs==100)
    {
        msecs=0;
        secs++;
    }
    if(secs==60)
    {
        secs=0;
        mins++;
    }
    if(mins==60)
    {
        mins=0;
        hrs++;
    }
    updatetime();

}
function updatetime()
{
    let x=hrs.toString().padStart(2,0)+":"+mins.toString().padStart(2,0)+":"+secs.toString().padStart(2,0)+":"+msecs.toString().padStart(2,0);
    document.getElementById("stopwatch").textContent=x;


}
function stop()
{
    clearInterval(timer);
    timer=null;

}
function reset()
{
    stop();
    secs=0,mins=0,hrs=0,msecs=0;
    updatetime();
}


