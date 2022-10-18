const quizData = [
    {
        question: "Pri koľkých stupňoch mrzne voda?",
        a: "20°C",
        b: "36°C",
        c: "0°C",
        d: "100°C",
        correct: "c",
    },
    {
        question: "Pri koľkých stupňoch sa voda varí?",
        a: "100°C",
        b: "0°C",
        c: "-10°C",
        d: "15°C",
        correct: "a",
    },
    {
        question: "Ktoré je hlavné mesto Česka?",
        a: "Tokyo",
        b: "Rím",
        c: "Berlín",
        d: "Praha",
        correct: "d",
    },
    {
        question: "Ktoré zviera je vták?",
        a: "sliepka",
        b: "anakonda",
        c: "krokodíl",
        d: "mačka",
        correct: "a",
    },
    {
      question: "Vyber, čo je hviezda:",
      a: "Zem",
      b: "Mesiac",
      c: "Venuša",
      d: "Slnko",
      correct: "d",
  },{
    question: "Čo je opakom juhu?",
    a: "severovýchod",
    b: "východ",
    c: "sever",
    d: "západ",
    correct: "c",
  },{
    question: "Kto je dcéra dcéry?",
    a: "teta",
    b: "vnučka",
    c: "babička",
    d: "mníška",
    correct: "b",
  },{
    question: "Ktorá hra sa hrá s loptou?",
    a: "hokej",
    b: "šach",
    c: "dáma",
    d: "futbal",
    correct: "d",
  },{
    question: "Kde je Schönbrunn?",
    a: "vo Viedni",
    b: "v Mníchove",
    c: "V Berlíne",
    d: "v Gdaňsku",
    correct: "a",
  },{
    question: "Koľko je (2+5).10=",
    a: "40",
    b: "50",
    c: "70",
    d: "60",
    correct: "c",
  },{
    question: "Vyber českého panovníka:",
    a: "Napoleon",
    b: "Žolík",
    c: "Bořivoj",
    d: "Božena Němcová",
    correct: "c",
  },{
    question: "S kým susedí Česko?",
    a: "s Anglickom",
    b: "s Maďarskom",
    c: "s Nemeckom",
    d: "s Írskom",
    correct: "c",
  },{
    question: "Ktorý obchod sú potraviny?",
    a: "Lidl",
    b: "OBI",
    c: "Alza",
    d: "Decatlon",
    correct: "a",
  },{
    question: "Ako sa volá hlavné mesto Nórska?",
    a: "Stockholm",
    b: "Oslo",
    c: "Kodaň",
    d: "Budapešť",
    correct: "b",
  },{
    question: "Kde sa rodia deti?",
    a: "v lese",
    b: "v cirkuse",
    c: "v nemocnici",
    d: "na ihrisku",
    correct: "c",
  },{
    question: "Čo hrozí, keď si neumývame zuby?",
    a: "zlomenina ruky",
    b: "zubný kaz",
    c: "omrzlina",
    d: "chrípka",
    correct: "b",
  },{
    question: "Kam sa chodí zbierať hríby?",
    a: "do lesa",
    b: "k moru",
    c: "na plaváreň",
    d: "do knižnice",
    correct: "a",
  },{
    question: "3.3.3 =",
    a: "25",
    b: "27",
    c: "29",
    d: "31",
    correct: "b",
  },{
    question: "Akú chorobu prenášajú niektoré kliešte?",
    a: "nádchu",
    b: "chrípku",
    c: "boreliózu",
    d: "mononukleózu",
    correct: "c",
  },{
    question: "Ktoré zviera lieta?",
    a: "blcha",
    b: "netopier",
    c: "žaba",
    d: "dážďovka",
    correct: "b",
  },
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="c" class="answer">
                    <label for="c" id="c_text">${question.c}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="d" class="answer">
                    <label for="d" id="d_text">${question.d}</label>
                  </li>
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })