$(document).ready(function () {
    // Load stats
    $.ajax({
        type: 'GET',
        url: 'https://api.conholdate.app/getstatistics',     
        contentType: "application/json",
        success: function (stats) {
            $("#documents").html(stats["documents"]);
            $("#viewer").html(stats["viewer"]);
            $("#conversion").html(stats["conversion"]);
            $("#editor").html(stats["editor"]);
        },
        error: function (xhr) {
            var err = eval("(" + xhr.responseText + ")");
            console.log(err ? err : 'Error occurred while loading');
        }
    });
});