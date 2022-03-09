// 공부하며 설명들을 코드입니다.
// 가독성을 위해 여기에 작성중!

/*
  동기는 하나의 작업이 끝나기까지 기다려야함.
  통신을 했는데 그걸 받기까지 나머지를 기다려야하면 
  웹페이지 하나를 실행할때 매우 오래걸림.

  그래서 통신이나 JS는 비동기이지만 
  사용시에는
  .then이나
  그것을 간편화한 async await을 사용하는것.
  이를 사용하지 않으면 데이터를 요청하고 받아오기까지 기다려주지않고
  비동기방식이기에 undefined를 출력함.

  그래서! 저들을 사용해 동기방식으로 만들어주는것.
*/

//비동기 동기 예시
//콜백함수: 비동기 방식에서 어떤수행의 완료이벤트가 발생했을때 수행해야할 함수.
//콜백함수로 비동기처리방식의 문제점을 해결한거임.
setTimeout(example, 3000);

function example() {
  console.log("3초후 example 실행 (여기서 example은 콜백함수)");
}

console.log("example은 3초뒤 실행되니 얘가 먼저 실행됨.");

// Promise, Async는 위의 콜백함수에서 콜백지옥을 해결하기 위해 사용됨.
// promise: 자바스크립트 비동기 처리에 사용되는 객체임.(객체가 뭔지모름)
/*
  document.querySelector('url 주소/블라블라', function(response) {
    //...
  });
  위 API가 실행되며 서버에다 데이터하나 보내달라는 요청을 보냄.
  그런데 여기서 데이터를 받아오기도 전에 마치 데이터를 다 받아온 것 마냥 화면에
  데이터를 표시하려고 하면 오류가 발생하거나 빈 화면이 뜸.
  이와 같은 문제점을 해결하기 위한 방법 중 하나가 프로미스임. 
*/

// 비동기 처리를 위해 콜백함수 사용 ( ajax 통신 ), 지정된 url에서 1번 상품 데이터를 받아오는 코드
function getData(callbackFunc) {
  document.querySelector.get("url 주소/prudeucts/1", function (response) {
    // 1. 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨주고
    callbackFunc(response);
  });
}
getData(function (tableData) {
  //2.  document.querySelector.get()의 resonse값이 tablseData에 전달됨.
  console.log(tableData);
});

// 위의 코드에 프로미스를 적용
function getData(callback) {
  // new Promise() 추가
  return new Promise(function (resolve, reject) {
    document.querySelector.get("url 주소/products/1", function (response) {
      // 데이터를 받으면 resolve() 호출
      resolve(response);
    });
  });
}
// getData()의 실행이 끝나면 호출되는 then()
getData().then(function (tableData) {
  // resolve()의 결과 값이 여기로 전달돼.
  // document.querySelector.get()의 response 값이 tableData에 전달됨
  console.log(tableData);
});

/*
정리

Javascript는 동기!
한줄한줄한줄 결과가 끝나야 그 다음줄이 실행이 되니까 동기임.
그래서 한줄이 끝나야 다음줄을 읽음.

근데 통신을 신호를 보낸다음에 그 함수가 원래 리스폰스가 올때까지 안끝날거란 말이야?
그럼 밑에꺼를 안 읽겠지 js는???
함수가 안 끝났잖아?!
그러니 계속 밑에를 안 읽는단 말임.
근데 만약에 통신이 오래 걸리면?? 5초 10초 걸리면?? 
서버 상황이 안좋아서 오래걸리수도 있잖아?
근데 그동안 밑에꺼를 안 읽으면 통신이 다 될때까지 페이지가 안띄워지고 있는거잖아?

그래서 이 통신이라는거를 따로 비동기화를 시키는거임.
리스폰스가 안와도 신호를 줘버리면 밑에 바로 읽고 있다가 
통신이(리스폰스가)오면 그건 그대로 하도록!! 
그래서 이걸 비동기화 시킨다고 하는거임!

근데 비동기화를 시켰어.
그럼 그 안에서는 또 동기화를 시켜야겠지??
통신이 끝나고 왔어 그럼 순차적으로 이뤄져야겠지?
그걸 then으로 그 안에서 동기화를 시키는거임.

즉 통신 자체는 비동기화!
그 안에서 then으로 동기화!!!! 
*/
