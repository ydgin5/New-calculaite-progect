let a = "";
let b = "";
let sign = "";
let finish = false;

// определяем массивы с данными;
const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const action = ["+", "-", "/", "*"];

// Экран;
const number = document.querySelector(".calc__screen-number");

const acButton = document.querySelector(".btn_ac");

const container = document.querySelector(".__container");


// Необходимые фнкции;
// очистка экрана
function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  number.textContent = 0;
}

//   на кнопку "ac" вешаем обработчик событий
acButton.addEventListener("click", function () {
  clearAll();
});
function keyDownHandler(key) {
  // если нажата 0-9 или .
  if (digit.includes(key)) {
    if (b == "" && sign == "") {
      a += key;
      number.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      number.textContent = b;
    } else {
      b += key;
      number.textContent = b;
    }
    console.log(a, b, sign);
    return;
  }

  // если нажата + - / X % +/-
  if (action.includes(key)) {
    sign = key;
    number.textContent = a + sign;
    console.log(a, b, sign);
    return;
  }

  // если нажата =
  if (key === "=" || key === "Enter") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "*":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          number.textContent = "Ошибка";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
        break;
      case "%":
        a = b / 100;
        break;
      case "+/-":
        a = -a;
        break;
    }
    finish = true;
    number.textContent = a;
    console.log(a, b, sign);
  } else if (key === "%") {
    if (b == "") {
      a = a / 100;
      number.textContent = a;
    } else {
      b = (a * b) / 100;
      number.textContent = b;
    }
  }
}

container.addEventListener("click", function (evt) {
  // кнопка не нажата
  if (!evt.target.classList.contains("btn")) return;
  // нажата кнопка AC
  if (evt.target.classList.contains("btn_ac")) return;

  keyDownHandler(evt.target.textContent);
});

document.addEventListener("keydown", function (evt) {
  console.log(`code=${evt.key}`);
  if (evt.key === "Escape") {
    clearAll();
  }
  keyDownHandler(evt.key);
});
// План:

// 1. **Инициализация переменных:**
// - Создание переменных `a`, `b`, `sign` и `finish` и их инициализация пустыми строками и значением `false`.
// - Создание массивов `digit` и `action` для хранения цифр и арифметических операторов соответственно.
// - Получение ссылки на элемент экрана калькулятора (`number`).
// - Получение ссылки на кнопку "AC" (`acButton`).
// - Получение ссылки на контейнер для обработки событий (`container`).

// 2. **Определение функций:**
// - `clearAll()`: функция для очистки всех переменных и сброса экрана калькулятора до начального состояния.
// - Обработчик события на кнопку "AC": привязка функции `clearAll()` к событию нажатия на кнопку "AC".
// - `keyDownHandler(key)`: функция для обработки нажатий клавиш. В зависимости от типа клавиши (цифра, оператор, равно), происходит соответствующее действие:
//   - Добавление цифр на экран или формирование чисел `a` и `b`.
//   - Обработка арифметических операторов и выполнение соответствующих операций.
//   - Обновление экрана с результатом.

// 3. **Добавление обработчиков событий:**
// - Добавление обработчика события на контейнер, чтобы отслеживать нажатия на кнопки калькулятора.
// - Добавление обработчика события на глобальное событие `keydown`, чтобы реагировать на нажатия клавиш на клавиатуре.

// 4. **Логика программы:**
// - Программа реагирует на ввод пользователя (клики на кнопки или нажатия клавиш) и соответственно обновляет состояние переменных и экран калькулятора.
// - При нажатии кнопки "AC" происходит сброс всех переменных и экрана.
// - Результат вычислений выводится на экран калькулятора.

// Этот план предоставляет последовательное объяснение работы данного кода, начиная от инициализации переменных и функций до добавления обработчиков событий и обработки пользовательского ввода.
// --------------------------------------------------------------------------------------------
// 1. **Инициализация переменных:**
//    - Мы создаем специальные "коробки", которые называем переменными, чтобы помнить разные вещи. В этом случае мы создаем коробки с именами `a`, `b`, `sign` и `finish`. Они пока пустые.
//    - У нас есть два списка с числами и математическими знаками. Они помогут нам понять, какие символы вводит пользователь.

// 2. **Определение функций:**
//    - Функции - это наборы инструкций, которые мы можем использовать многократно. У нас есть функция `clearAll()`, которая убирает все числа с экрана и начинает заново.
//    - Когда мы нажимаем на кнопку "AC", она запускает функцию `clearAll()`.
//    - У нас также есть функция `keyDownHandler()`, которая обрабатывает действия, когда пользователь вводит что-то на клавиатуре или нажимает на кнопки калькулятора.

// 3. **Добавление обработчиков событий:**
//    - Мы "слушаем" события на калькуляторе. Когда кто-то нажимает на кнопку, мы хотим что-то сделать.
//    - Если мы нажимаем кнопку на калькуляторе, код должен что-то делать. Так что мы связываем кнопки с кодом, который отвечает за их работу.

// 4. **Логика программы:**
//    - Программа ведет себя так, как мы говорим ей. Когда мы нажимаем кнопки, она обрабатывает эти действия и показывает результат на экране.
//    - Если мы нажмем кнопку "AC", программа начнет все сначала, как если бы мы только что включили калькулятор.
//    - Результат вычислений показывается на экране.

// Теперь, надеюсь, это объяснение будет понятным для новичка! Если у вас есть еще вопросы, не стесняйтесь спрашивать.