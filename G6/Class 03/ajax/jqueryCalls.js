$(document).ready(function(){
   $("#getStudentsBtn").click(function(){
       $.ajax({
        url: "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json",
        success: function(response){
            debugger
            console.log(response);
            //we don't have explicit content type (it is text/plain, not application/json)
            //the content we get is json, so we need to parse it ourselves
             //response JSON -> js object
            let parsedObject = JSON.parse(response);
            console.log(parsedObject);
            for (let student of parsedObject.students) {
                $("#students").append(`<li>${student}</li>`)
            }
        },
        error: function(response){
            console.log("The request failed");
            console.log(response);
        }
       })
   });
   
   
   $("#getAstrosBtn").click(function(){
    $.ajax({
        url: "http://api.open-notify.org/astros.json",
        success: function(response){
            debugger
            //we have explicit content type -> application/json (DevTools->Network tab-> Response Headers -> content type)
            //the response is already parsed (jquery automaticaly recognized the json format and parsed the response)
           console.log(response);
           for (let person of response.people) {
            $("#astros").append(`<li>${person.name}</li>`)
        }
        },
        error: function(error){
            console.log("An error occured");
            console.log(error)
        }
    })
   });
})