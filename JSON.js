function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
 
ajax_get('https://api.nasa.gov/planetary/apod?api_key=S7ZhEadvwIIs7djWHEDUk9Ke4upcdIJSpI79fYO1', function(data) {
    
    console.log(data);
    document.getElementById('date').innerHTML = '<strong>'+data.date+'</strong>';
    var title = "<strong>" + data.title + "<strong>";
    document.getElementById("title").innerHTML = title;
    document.getElementById('caption').innerHTML = title + '<strong>'+' | Copyright: '+data.copyright+'</strong>';
    document.getElementById('image').innerHTML = '<img src="'+data.hdurl+'" alt="'+data.title+'" width="70%">';
    document.getElementById("explanation").innerHTML = data.explanation;
    
    
    // html += "<h3>" + data["description"] + "</h3>";
    // html += "<ul>";
    //    for (var i=0; i < data["articles"].length; i++) {
    //        html += '<li><a href="' + data["articles"][i]["url"] + '">' + data["articles"][i]["title"] + "</a></li>";
    //    }
    // html += "</ul>";
    // document.getElementById("text").innerHTML = html;
});
 
 