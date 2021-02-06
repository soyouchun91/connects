var getParam = function(key){
    var _parammap = {};
    document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
        function decode(s) {
            return decodeURIComponent(s.split("+").join(" "));
        }
        _parammap[decode(arguments[1])] = decode(arguments[2]);
    });
    return _parammap[key];
};
const param = getParam("param");
const param2 = param.split("_")
const fileName = param2[0]
const text = param2[1]

const h2 = document.querySelector("h2")
const div = document.querySelector(".img")
const downBtn = document.getElementById('btndownload')
const canvas = document.getElementById('capture')

function textPlusImage() {
    h2.innerHTML = text
    div.style = "background-image: url('"+fileName+"');"    
}

function init() {
    textPlusImage()
    console.log("canvas:", canvas)
    downBtn.onclick = function(){
        download();
    }    
}

function download() {
    console.log(canvas)
    canvas.toBlob(function(blob) {
        var a = document.createElement("a")
        document.body.appendChild(a)
        a.style = "display: none"
        blob.type = "octet-stream"
                  
        var url = URL.createObjectURL(blob)
        a.href = url
        a.download = "1.png"
        a.click()
        window.URL.revokeObjectURL(url)
    })
}

init()