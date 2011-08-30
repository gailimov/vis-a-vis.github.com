$(function() {
    /** Get twtter status */
    $.getJSON("http://api.twitter.com/1/statuses/user_timeline.json?screen_name=gailimov&exclude_replies=true&callback=?", function(data) {
        $('#status').html(data[0].text);
        $('#twitter').show();
    });
}); // DOM ready
