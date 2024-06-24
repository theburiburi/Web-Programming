function name_empty_check(obj) {
    /* (1) 이름 입력란에서 포커스가 이동되는 이벤트가 발생하면 공백 여부를 확인하고 공백일 경우 경고 창을 팝업하는 함수 완성 (3점) */
    let myName = obj.value;
    if (myName === "") {
        alert("이름을 먼저 입력하세요!!!");
    }
}

function changeImage() {
    /* (2) 강좌 목록에서 클릭 이벤트가 발생하면 선택 강좌 이미지를 왼쪽 이미지에 표시하는 함수 완성 (단, 단일 선택만 고려) (4점) */
    let lecObj = document.getElementById("leclist");
    let selectedImag = lecObj.options[lecObj.selectedIndex];
    if(selectedImag){
        let imageObj = document.getElementById("lecimg");
        imageObj.src = selectedImag.value;
    }
}

total=0, lecture="", cnt=0;
function selection_details() {

    /* (3) 강좌 목록에서 클릭 이벤트가 발생하면 선택한 강좌에 따른 신청 내역과 총합계 출력, 막대바 영역에 반영하는 함수 완성 (12점) 
            1) 강좌는 다중 선택이 가능하며, 강좌를 선택할 때마다 선택된 강좌명과 수강금액을 누적하는 연산 처리 (5점)
            2) 입력한 이름, 선택한 강좌 목록, 선택 강좌 수, 결제 금액은 텍스트 영역에 표시 (4점)
            3) 수강금액을 누적한 총합계 표시, 총합계 금액에 따라 막대바 영역에 반영되어 표시 (3점) */ 

            let lecObj = document.getElementById("leclist");
            let lecString = Array.from(lecObj.selectedOptions)[0];
        
            let lecArray = lecString.innerHTML.split(' ');

            let lecName = lecArray[0];
            
            let lecPrice = lecArray.slice(-1)[0];
            let price = parseInt(lecPrice.replace('원', '').replace(',', ''), 10);
            
            lecture += lecName + " ";
            total += price;
            cnt++;

            document.getElementById("result").value = "이름: " + document.getElementById("name1").value + "\n" + "선택한 강좌 목록:\n" 
                + lecture + "\n총 선택 강좌 수: " + cnt + "\n" +"결제 금액: " + total + "원";        
            
            document.getElementById("total").value = total + "원";
            
            let meterObj = document.getElementById("mt");
            meterObj.value = total;


}

function payment() {
    /* (4) 결제 버튼에 클릭 이벤트가 발생하면 입력한 이름과 함께 결제 여부를 확인하는 창이 팝업되는 함수 완성 (3점) */
    let nameObj = document.getElementById("name1");
    let myName = nameObj.value.trim();

    if (myName === "") {
        alert("이름을 먼저 입력하세요!!!");
        return; 
    }

    if (confirm("이름: " + myName + "\n 결제하겠습니까?")) {
        alert("결제가 완료됐습니다!!");
    } else {
        alert("결제가 취소됐습니다.!!");
    }
}     
       
function Timer() {
    /* (5) 웹 페이지에 로드 이벤트가 발생하면 현재 시간을 매 초마다 출력하는 함수 완성 (5점) */
    let timeObj = document.getElementById("time");
    function reloadTime() {
        let nowTime = new Date();
        let hours = nowTime.getHours();
        let min = nowTime.getMinutes();
        let sec = nowTime.getSeconds();

        hours = (hours < 10) ? "0" + hours : hours;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;

        let standardTime = hours + ":" + min + ":" + sec;
        timeObj.value = standardTime;
    }
    setInterval(reloadTime, 1000);
}