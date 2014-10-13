require("sdk/tabs").on("load", init);
var data = require("sdk/self").data;
tabs  = require("sdk/tabs")
 
function init(tab) {
  tab.attach({
     contentScriptFile: data.url("csvify.js"),
  onMessage: function(message) {
     if(message.command == "showCsv"){
       cb(message.url)
     }
  }});
}

//http://blog.mozilla.org/addons/2011/09/01/add-on-sdk-faq-content-script-access/
//https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts
function cb(theUrl){
var Request = require("sdk/request").Request;
var quijote = Request({
  url: theUrl,
  onComplete: function (response) {
    tabs.open(data.url("viewer.html"))
    tabs.on("ready",function(tab){
      tab.attach({
        contentScript: "document.defaultView.postMessage(self.options.message, '*');" ,
        contentScriptOptions: {"message" : response.text}
      });
    })
  }
  });
  quijote.get();
}
