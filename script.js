  var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
//  console.log(navMenuAnchorTags.length);
   for(var i=0 ; i< navMenuAnchorTags.length;i++)
   {
    navMenuAnchorTags[i].addEventListener('click' , function(event)
    {
        event.preventDefault();
        var targetSectionId=this.textContent.trim().toLowerCase();
        console.log(targetSectionId);
        var targetSection = document.getElementById(targetSectionId);
        let count=0;
       console.log(targetSection);
        var interval=setInterval(function()
        {
            var targerSectionCordinates=targetSection.getBoundingClientRect();
           // console.log(targerSectionCordinates);
           count++;
           console.log(count); 
            if(targerSectionCordinates.top<=0 || count==40)
            {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
            
        }, 20);
       
        
       
    })
   }

//  S K I L L S     B A R      F O R    A N I M A T I O N

var progressbar=document.querySelectorAll('.skill-progress > div');
//console.log(progressbar);
var skillContainer=document.getElementById("skills-container");

 window.addEventListener('scroll' ,checkScroll);
 console.log(progressbar);

 var animationDone=false;
 function initialiseBar()
 {
     for(let bar of progressbar)
     {
         console.log(bar.style.width);
         bar.style.width=0 +"%";
         
     }
 }
 function fillBar()
 {
     for(let bar of progressbar)
     {
         let targetWidth=bar.getAttribute('data-bar-width');
         var currentwidth=0;
         let interval=setInterval(function()
         {
             if(currentwidth  > targetWidth)
             {
                 clearInterval(interval);
                 return;
             }
             currentwidth++;
             bar.style.width= currentwidth + '%';
         },40);
     }
 }

 initialiseBar();
 function checkScroll()
 {
    // console.log(window.innerHeight);
    //console.log("Hello i am here");

     var cordinates=skillContainer.getBoundingClientRect();
    // console.log(cordinates.top);
     if(!animationDone && cordinates.top  <= window.innerHeight -20)
     {
         animationDone=true;
         fillBar();
        console.log("Hello i am here11");
        return;

     }
     else if(cordinates.top  > window.innerHeight  )
     {
         animationDone=false;
         initialiseBar();
     }

 }


