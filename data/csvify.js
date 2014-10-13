//Define here what to do,if we click on any page

(function  csvify(){
  document.addEventListener("click", function(evt){
   //If this is an csv file , trigger recline's stuff , 
   if(evt.target.href.match(/\.csv$/)){
      self.postMessage( 
       {command:"showCsv", 
        url: evt.target.href
       }
      )
      evt.preventDefault();
      evt.stopPropagation();
   }
  
 })
})()

