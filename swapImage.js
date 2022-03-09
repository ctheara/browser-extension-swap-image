//swap all image
var imgURL = chrome.extension.getURL("images/kfp2.jpg");


$('img').each(function() {
    $('img').attr('src',imgURL);
});
