/**
 * 
 */
 
 document.addEventListener("DOMContentLoaded", function () {
    // 클릭 이벤트를 감지하여 파일 다운로드 함수 호출
    document.getElementById("downloadFile").addEventListener("click", function () {
        downloadDocxFile("Early-registration application form.docx", "파일의 내용을 여기에 입력하세요.");
    });

    // .docx 파일 다운로드 함수 정의
    function downloadDocxFile(filename, content) {
        var blob = new Blob(
            [content],
            { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" }
        );

        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    }
});