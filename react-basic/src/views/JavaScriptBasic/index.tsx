function JavaScriptBasic() {

    // 주석 //
    /**
     *
     * 여러줄 주석 */
    
    // 변수 : js의 경우 변수의 타입이 존재하지 않음
    // js / ts 에서 변수를 선언하는 방법
    // 1. var 키워드 사용 
    var variable1;
    variable1 = 10;
    variable1 = 1.1;
    variable1 = "안녕하세요";

    // localVariable = 10;
    // if(true) {
    //     var localVariable;
    // }
    // localVariable = 10;
    
    // 2. let 키워드 사용
    let variable2;
    variable2 = 10;
    variable2 = 2.2;
        
    // localVariable = 10;
    // if(true) {
    //     let localVariable;
    // }
    // localVariable = 10;

    // 3. const : 상수(Java와 다르게 선언시에 반드시 초기화 해야 함)
    const constantVariable = 10;

    return(<></>);

}

export default JavaScriptBasic;