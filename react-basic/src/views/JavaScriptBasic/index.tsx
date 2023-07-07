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
    result = number1 == number2; //true
    result = number1 === number2; //false
    
    result = number1 != number2; // false
    result = number1 !== number2; // true

    // 조건문
    // 조건문의 조건 무조건 true, false 형태의 boolean 값이 오지 않아도 됨
    // false :  0, 0.0, '', undefinded, null //!false로 받음
    const string = '';
    if(string) { 

    }

    // 반복문 
    // for, while 모두 사용 가능
    const exampleArray = ['apple', 'banana', 'carot'];
    // foreach 함수 : 배열.foreach(반환 값이 없는 함수);
    // for(String item:exampleArray){

    // }       
    exampleArray.forEach(function(item) {
        console.log(item);
    });

    // map 함수 : 배열.map(반환 값이 있는 함수);
    //            배열을 반복하면서 함수 작업의 반환 값으로 새로운 배열을 생성하여 반환
    const numbers = [1,2,3,4,5];
    let resultList = numbers.map(function (item) {
        const result = item * item;
        return result;
    }); // [1,4,9,16,25] resultList의 리턴값
    
    // filter 함수 : 배열.filter(조건문을 가진 함수);
    //               배열을 반복하면서 함수 작성된 조건문에 부합하는 요소만 반환
    resultList = numbers.filter(function(item){
        return item %2 === 0;
    }); // [2,4] 리턴 값

    // 객체 생성 
    // 1. JSON 형식을 이용하여 생성 (바로 생성)
    // JSON : { 'key' : 'value', 'key' : 'value', ... }
    let object1 = {
        name: "홍길동",  //! '' = "" 동일하게 사용 가능 
        age: 20,
        address: "부산광역시"
    };

    // 2. class를 이용하여 생성
    class CHuman { 
        name: string;
        age:number;
        address:string;

        constructor(name:string , age:number, address:string) { //! 오버로드 개념이 없음
            this.name = name;
            this.age = age;
            this.address = address;
        }
    }
    object1 = new CHuman('김철수', 30, '서울특별시');

    // 3. interface를 이용하여 생성
    interface IHuman {  //! JAVA랑 개념은 동일, 변수만 지정할 수 있음
        name: string;
        age:number;
        address: string;
    }
    let object2: IHuman = {
        name:'고길동',
        age:50,
        address:'인천광역시'
    }

    object1.age;  //!접근제어자, 캡슐화 없음

    // 구조 분해 할당
    // let name = object1.name;
    // let age = object1.age;

    let {name, age} = object1;  //{ name: '홍길동', age:30, address:'부산광역시' }
    console.log(name);
    console.log(age);
    
    let {address, ...other} = object1;
    // address : '부산광역시', other: { name: '홍길동', age:30 }  //! 객체 분해해서 생성

    let object3 = { telNumber:'010-0000-0000', email:'1@email.com'}
    let subObject = {...object2, ...object3};
    // { name:'고길동' age:50, address:'인천광역시', telNumber:'010-0000-0000', email:'1@email.com' }  //! 객체를 합쳐서 생성
    
    // 함수

    // 함수 선언 방법 
    // - function 함수명 (매개변수:타입, ... ): 반환타입 {  //! typescript의 경우 타입 지정을 해주어야함 
    // ...
    // return 결과값;
    // } 

    // - 화살표 함수
    // 함수를 변수처럼 사용하는 것
    // 선언 방법
    // const 함수명 = (매개변수, ... ) => { ... return 결과값 };

    return(<></>);

}

export default JavaScriptBasic;