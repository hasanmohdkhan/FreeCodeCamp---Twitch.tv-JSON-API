$(document).ready(function(){
  var following=[];
  //CALLING API URL
  //checking free code camp is online or not ?
  var url="https://api.twitch.tv/kraken/streams/freecodecamp?client_id=3y4wyq8y0urhuzv4yk19yglf6pvyw6";
  $.getJSON(url,function(data1){
  //console.log(data1.stream);
   if(data1.stream===null){
     $("#fccStatus").html("Free Code Camp is OFFLINE");
       }
 else{
         $("#fccStatus").html("Free Code Camp is ONLINE"); }
  });
  var follower="https://api.twitch.tv/kraken/users/freecodecamp/follows/channels?client_id=3y4wyq8y0urhuzv4yk19yglf6pvyw6"
  $.getJSON(follower,function(data2){
    for(var i=0;i<data2.follows.length;i++){
      var displayName=data2.follows[i].channel.display_name;
      following.push(displayName);
       }
       following.push("ESL_SC2");
       following.push("comster404");
       following.push("brunofin");
    //console.log(following);
    for(var i=0;i<following.length; i++){
     var ii=i;
     //console.log(ii);
     var userD=following[ii];
     var url='https://api.twitch.tv/kraken/streams/'+following[i] +'?client_id=3y4wyq8y0urhuzv4yk19yglf6pvyw6';

  $.getJSON(url,function(data1){

    //console.log(offurl);
  if(data1.stream===null){

    var channel=data1._links.channel;
    var key='?client_id=3y4wyq8y0urhuzv4yk19yglf6pvyw6';
    var offurl=channel+key;
     $.getJSON(offurl,function(offUser){
         var logo=offUser.logo;
         var name=offUser.display_name;
         var status=offUser.status;
       //Set logo if null
       if(logo===null){
         logo="https://www.iconfinder.com/data/icons/simple-icons/256/twitch-256-black.png";
       }
       if(status===null){
         status="No Status";

       }

        $("#followerInfo").prepend("<div class='w3-container'>"   +"<div class='w3-card-4'  id='info' >" +
  "<div class='w3-row'>" +

      "<div class='w3-col m4'>" +"<img src='"+logo +"' height='150px' >"  +"</div>" +
      "<div class='w3-col m4'>" + name +"</div> " +
      "<div class='w3-col m4'>"+ status +"</div>"


  + "</div>" +
 "</div>"
  + "</div>"                                    );


    });

       }
 else{
   console.log("ONLINE USER ");
   console.log(data1.stream.channel.display_name);

 }
  });






   }

   for(var i=0;i<following.length;i++){
   var followUrl='https://api.twitch.tv/kraken/streams/'+ following[i] +  '?client_id=3y4wyq8y0urhuzv4yk19yglf6pvyw6';
    //console.log(followUrl);
   $.getJSON(followUrl,function(data3){
      //console.log(data3.stream.channel.status);
      var logo=data3.stream.channel.logo;
      var status=data3.stream.stream_type;
      var name=data3.stream.channel.name;
    if(data3.stream=!null){
         $("#followerInfo").prepend("<div class='w3-container'>"   +"<div class='w3-card-4' id='info'>" +
   "<div class='w3-row'>" +

     "<div class='w3-col m4'>" +"<img src='"+logo +"' height='150px' >"  +"</div>" +
     "<div class='w3-col m4'>" + name +"</div> " +
     "<div class='w3-col m4'>"+ status +"</div>"
   + "</div>" +
   "</div>"
   + "</div>"                                    ); }
   });
   }











  });


});
