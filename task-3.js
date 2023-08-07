function validateForm(){
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value; 

    if (title=="") {
        alert("Please enter a title.");
        return false;
    }

    if (content =="") {
        alert("Please enter some content.");
        return false;
    }
    return true;
    }

    function previewTask() {
        var titla = document.getElementById("title").value; 
        var content = document.getElementById("content").value; 

        var preview = document.getElementById("preview");
        preview.innerHTML +="";

        preview.innerHTML += "<br><br>Title: " + title;
        preview.innerHTML += "<br>Content: " + content; 
        }

        document.getElementById("form").addEventListener("submit", validateForm);
        document.getElementById("preview").addEventListener("click", previewTask);
    }
}