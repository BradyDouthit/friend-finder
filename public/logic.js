$("#submit").on("click", function (event) {
    event.preventDefault();
    var nameVal = $("#name").val();
    var photoVal = $("#photo").val();
    var scores = [
        parseInt($(".question1 option:selected").val()),
        $(".question2 option:selected").val(),
        $(".question3 option:selected").val(),
        $(".question4 option:selected").val(),
        $(".question5 option:selected").val(),
        $(".question6 option:selected").val(),
        $(".question7 option:selected").val(),
        $(".question8 option:selected").val(),
        $(".question9 option:selected").val(),
        $(".question10 option:selected").val(),
    ];
    console.log(scores);
    console.log(parseInt($(".question1 option:selected").val()));
    console.log(typeof parseInt($(".question1 option:selected").val()));

    
    var friends = {
            "name": $("#name").val().trim(),
            "scores": scores,
            "photo": $("#photo").val().trim()
        };
    if (nameVal === "") {
        alert("You must enter your name");
    }
    if (photoVal === "") {
        alert("You must link to a photo");
    }
    else {
        $(".modal-body").empty();
        console.log("posting");
        $(".my-modal").show();
        $.post("/api/friends", friends, function (data) {
            $("#name").val("");
            $("#photo").val("");
            console.log(data)
            var newDiv = $("<div>");
            var newImg = $("<img style='width: 250px;'>");
            $('.modal-title').text('Your match is: ' + data.name)
            newImg.attr("src", data.photo);
            newDiv.html(data.name)
            $(".modal-body").prepend(newDiv);
            $(".modal-body").prepend(newImg);
        });
    }
});