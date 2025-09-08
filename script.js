// Вопросы и ответы
const quizData = [
  {
    question: "Как часто ты пьешь Pepsi?",
    answers: ["Почти каждый день", "Несколько раз в неделю", "Редко"]
  },
  {
    question: "Где ты чаще всего пьешь Pepsi?",
    answers: ["Дома", "В кафе / Ресторане", "В пути"]
  },
  {
    question: "В каком формате ты предпочитаешь пить Pepsi?",
    answers: ["Банка", "Пластиковая бутылка", "Стеклянная бутылка"]
  },
  {
    question: "Почему ты выбираешь Pepsi?",
    answers: ["Идеально подходит к еде", "Любимый бренд", "Лучше, чем конкуренты"]
  }
];

let currentStep = 0;

const questionText = document.getElementById('question-text');
const step = document.querySelectorAll('.step');
const steps = document.querySelector('.steps');
const intro = document.querySelector('.intro');
const answersContainer = document.querySelector('.answers'); 

function updateQuestion() {
  const current = quizData[currentStep];

  questionText.textContent = current.question;

  answersContainer.innerHTML = '';

  current.answers.forEach(answer => {
    const button = document.createElement('button');
    button.classList.add('answer-btn');
    button.textContent = answer;
    button.addEventListener('click', () => {
      if (currentStep < quizData.length - 1) {
        currentStep++;
        updateQuestion();
      } else {
  // Скрываем старые блоки
  intro.style.display = 'none';
  steps.style.display = 'none';
  answersContainer.innerHTML = '';

  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    document.body.style.backgroundImage = "url('font/img/background_thankyou.svg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center center";
  }

  // Добавляем класс, чтобы изменить поведение
  document.body.classList.add('final');

  // Показываем сообщение
  questionText.innerHTML = `
    <div class="thank-you-message">
      <h1 class="message-heading">Спасибо за <span class="message-span">ответы!</span></h1>
      <p class="message-text">
        Мы ценим ваше мнение и благодарим за уделенное время.<br>
        Ваши ответы помогают нам становиться лучше.
      </p>
    </div>
  `;
}
    });
    answersContainer.appendChild(button);
  });

  step.forEach((step, index) => {
    step.classList.toggle('active', index === currentStep);
  });
}


updateQuestion();