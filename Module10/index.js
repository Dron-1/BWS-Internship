$(document).ready(function(){
    const URI = "https://akabab.github.io/starwars-api/api/id/";
    const $apiData = $(".API-data")
    $(".cross").click(function(){
        $apiData.html("");
        $(".form-container").slideDown();
        $(this).hide();
    })
    $("#submit").on("click",function(event){
        event.preventDefault();
        let inputId = $(".charId").val();
        $(".cross").show();
        if(inputId !== "")
        {
            $(".form-container").slideUp();
            console.log(inputId)
            $(".charId").val("")
            $.get(`${URI}/${inputId}.json`,function(data, status){
                console.log(status)
                if(status === "success")
                {
                    $apiData.append(
                        $('<img></img>')
                        .addClass('image')
                        .attr("src",data.image)
                    )
                    $apiData.append(
                        $(`<h1>${data.name}</h1>`)
                        .css({
                            textAlign: "center",
                            borderBottom: "2px solid gray" 
                        })
                    )
                    $apiData.append(
                        $(`<h3>Species : ${data.species}</h3>`)
                    )
                    $apiData.append(
                        $(`<h3>Masters :</h3>`)
                    )
                    if(data.masters)
                    {
                        $.each(data.masters,function(index,item){
                            console.log(item);
                            $apiData.append(
                                $(`<p>${index+1} : ${item}</p>`)
                                .css("text-align","left")
                            )        
                        })   
                    }else{
                        $apiData.append(
                            $(`<p>---No Masters---</p>`)
                        )  
                    }
                    $apiData.append(
                        $(`<h3>Apprentices :</h3>`)
                    )
                    if(data.apprentices)
                    {
                        $.each(data.apprentices,function(index,item){
                            console.log(item);
                            $apiData.append(
                                $(`<p>${index+1} : ${item}</p>`)
                                .css("text-align","left")
                            )        
                        })   
                    }else{
                        $apiData.append(
                            $(`<p>---No Apprentices---</p>`)
                        )  
                    }
                }
            })
        }
    })
})
$(document).on({
    ajaxStart: function(){
        $(".API-data").addClass("loading"); 
        console.log("loading.......")
    },
    ajaxStop: function(){ 
        // $("body").removeClass("loading");
        $(".API-data").removeClass("loading"); 
        console.log("completed");
    }    
});