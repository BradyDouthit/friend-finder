$("#submit").on("click", function (event) {
    event.preventDefault();
    var nameVal = $("#name").val();
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
            "scores": scores
        };
    if (nameVal === "") {
        alert("You must enter your name");
    }
    else {
        console.log("posting");

        $.post("/api/friends", friends, function (data) {
            $("#name").val("");
            console.log(data)
        });
    }
});