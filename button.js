let msg = ''
let imgFile = ''

function downloadBtnClicked(type){
    msg = prompt('今日の一言は?')
    alert('こんにちは、今日の一言は　「' + msg + '」　ですね！')
    alert('設定完了！次の画面で左下の保存ボタンをクリックしてください！その後、ご自身でZOOM背景に設定してくださいね！')
    download(type, msg)
}

// function printMoodToImg() {
//     // 이미지에 입력한 값을 덧붙인다.
//     console.log(msg)
// }

function makeImage() {
    const img = document.createElement("img");
    // 이미지에 텍스트 붙이기
    img.src = imgFile
}

function download(type, msg) {
    imgFile = type+".png"
    location.href="download.html?param="+imgFile+"_"+msg
}

