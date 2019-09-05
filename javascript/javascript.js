
   $(document).ready(function(){


    var limit = [];

   var random = Math.floor(Math.random() * 9) + 1;

   $("#random-button").on("click", function(){

     var random = Math.floor(Math.random() * 9) + 1;
     $("#random-number").append(random);
     
     limit.push(random)
     console.log(limit);


     var x = limit.length
     if (x%8===0){
       $("#random-number").append("" + "<br>");
     }
     });

   });
