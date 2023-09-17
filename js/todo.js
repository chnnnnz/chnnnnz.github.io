const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];
// const 가 아닌 let 인 이유 : 업데이트 가능하게 !

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
    // localstorage 는 단순 텍스트로 저장되기 때문에 배열 형태로 바꿔 저장하기 (a,b,c -> [a,b,c]) 하지만 이것도 문자.
    // JSON.stringify = 어떤 javascript 코드든 문자로 바꿔줌
}

function deleteToDo(event) { 
    const li = event.target.parentElement;
    // 이벤트 타겟의 부모 엘리먼트
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    // li 의 id 값이 숫자 이므로 문자로 바꿔줘야함 !
    // filter () 안의 조건을 충족한 나머지 배열을 모아 새로운 배열을 만들어준다.
    // toDo 라는 argument 이름은 아무렇게나 지어도 상관이 없다.
    saveToDos();
    // 새로운 배열을 한번 더 저장해줘야함 !!!!!! 
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; // 배열(오브젝트)을 받았으니 그것을 텍스트로 바꿔야함 !
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    // append 맨 뒤에
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    // 인풋 입력값 저장하기
    toDoInput.value = "";
    // 인풋 값 비우기
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
        // Date.now() : 밀리초를 보여주는 함수
    }
    // 투두 리스트에 각각의 아이디 부여하기
    toDos.push(newToDoObj);
    // toDos 라는 배열에 newToDo push !     
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) { 
    const parsedToDos = JSON.parse(savedToDos);
    // JSON.parse() = 문자를 배열로 바꿔주기 ! 
    // parsedToDos.forEach((item) => console.log("this is turn of ", item));
    // forEach 각각의 ! 즉 parsedToDos 가 가진 each item 에 대해 () 안의 함수를 실행 ! 
    // item 역시 event 처럼 함수가 공짜로 주는 argument 중의 하나
    // (item) => console.log("this is turn of ", item) --> 함수를 더 짧게 작성하는 방법 => 는 화살표 함수 라고 한다
    toDos = parsedToDos;
    // 이전의 todos 저장
    parsedToDos.forEach(paintToDo);
}