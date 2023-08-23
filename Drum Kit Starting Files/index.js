

for(var i=0; i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var ch=document.getElementById(".drum")[i].innerHTML;
        switch(ch)
        sound();
    })
}

function sound(){
    var snd = new Audio('sounds/crash.mp3')
    snd.play()
}