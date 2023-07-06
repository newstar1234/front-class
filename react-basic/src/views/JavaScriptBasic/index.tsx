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

    // 4. ts 변수 선언
    let tsVariable1 = 10; // !선언과 동시에 초기화시 초기화된 타입으로 지정
    // tsVariable1 = "안녕하세요.";
    
    let tsVariable2: string;
    // tsVariable2 = 1;
    tsVariable2 = "안녕하세요";

    let tsVariable3: string = "안녕하세요";

    // 데이터 타입
    // number : 숫자 타입 (정수, 실수, 10진수, 16진수, ...)
    let numberVariable : number = 10;
    numberVariable = 10.1;
    numberVariable = 0xff;
    
    // boolean : 논리 타입
    let booleanVariable:boolean = true;
    booleanVariable = false;

    // string : 문자열 타입
    let stringVariable1 :string = "문자열";
    let stringVariable2 :String = "문자열";
    // stringVariable1 = stringVariable2;

    // array : 배열 타입
    let numberArray:number[] = [1,2,3];
    // numberArray = [true, false];

    // object : 객체 타입
    let object:any = {
        name: "홍길동",
        age: 20
    }

    object = {
        name: "홍길동",
        age1: 20    
    }

    // null : 값이 지정되지 않은 타입
    object = null;
    let nullVariable:null = null;

    let stringVariable3: string | null | number = null; //변수 선언시 여러개의 타입 선언이 가능
    stringVariable3 = "문자열";
    stringVariable3 = 10;
    
    // undefinded : 정의되지 않은 타입 
    let undefindedVariable:undefined = object.address;

    // any : 모든 타입을 받을 수 있는 타입
    let anyVariable:any = 10;
    anyVariable = "문자열";

    // 연산자
    let result:any = 10 / 3;  //3.33333333..... 
    
    let number1:any = 10;
    let number2:any = "10";

    // result = 10 == "10";
    result = number1 == number2;

    return(<></>);

}

export default JavaScriptBasic;