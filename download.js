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
}

init()