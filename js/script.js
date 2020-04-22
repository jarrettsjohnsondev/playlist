console.log("Test");

songs = []

function addSong(name_param, artist_param, duration_param)
{
    var newSong = {
        name: name_param,
        artist: artist_param,
        duration: duration_param,
    };
    songs.push(newSong)
    console.log("Number of songs: " + songs.length);
}

function listSongs(songs)
{
    /*songs.forEach(element => {
        console.log("Name: " + element.name);
        console.log("Artist: " + element.artist);
        console.log("Duration: " + element.duration);
    });*/
    songs.forEach(element => {
        $(".songs").append("Name: " + element.name);
        $(".songs").append("<br>");
        $(".songs").append("Artist: " + element.artist);
        $(".songs").append("<br>");
        $(".songs").append("Duration: " + element.duration);
        $(".songs").append("<br>");
        $(".songs").append("<br>");
    });
}

$( document ).ready(function() {
    $("#submit").click(function( event ) {
        var name = $("#songname").val();
        var artist = $("#artist").val();
        var duration = $("#duration").val();
        addSong(name, artist, duration);
    });
    $("#refresh").click(function( event ) {
        listSongs(songs);
    });
});