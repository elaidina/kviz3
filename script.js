const quizData = [
    {
        question: "Při kolika stupních mrzne voda?",
        a: "20°C",
        b: "36°C",
        c: "0°C",
        d: "100°C",
        correct: "c",
    },
    {
        question: "Při kolika stupních se voda vaří?",
        a: "100°C",
        b: "0°C",
        c: "-10°C",
        d: "15°C",
        correct: "a",
    },
    {
        question: "Které je hlavní město Česka?",
        a: "Tokyo",
        b: "Řím",
        c: "Berlín",
        d: "Praha",
        correct: "d",
    },
    {
        question: "Které zvíře je pták?",
        a: "slepice",
        b: "anakonda",
        c: "krokodýl",
        d: "kočka",
        correct: "a",
    },
    {
      question: "Vyber, co je hvězda:",
      a: "Zem",
      b: "Měsíc",
      c: "Venuše",
      d: "Slunko",
      correct: "d",
  },{
    question: "Co je opakem jihu?",
    a: "severovýchod",
    b: "východ",
    c: "sever",
    d: "západ",
    correct: "c",
  },{
    question: "Kdo je dcera dcery?",
    a: "teta",
    b: "vnučka",
    c: "babička",
    d: "jeptiška",
    correct: "b",
  },{
    question: "Která hra se hraje s míčem?",
    a: "hokej",
    b: "šach",
    c: "dáma",
    d: "futbal",
    correct: "d",
  },{
    question: "Kde je Schönbrunn?",
    a: "vo Vídni",
    b: "v Mníchově",
    c: "V Berlíne",
    d: "v Gdaňsku",
    correct: "a",
  },{
    question: "Kolik je (2+5).10=",
    a: "40",
    b: "50",
    c: "70",
    d: "60",
    correct: "c",
  },{
    question: "Vyber českého panovníka:",
    a: "Napoleon",
    b: "Žólík",
    c: "Bořivoj",
    d: "Božena Němcová",
    correct: "c",
  },{
    question: "S kým sousedí Česko?",
    a: "s Anglickem",
    b: "s Maďarskem",
    c: "s Německem",
    d: "s Írskem",
    correct: "c",
  },{
    question: "Který obchod jsou potraviny?",
    a: "Lidl",
    b: "OBI",
    c: "Alza",
    d: "Decathlon",
    correct: "a",
  },{
    question: "Jak se jmenuje hlavní město Nórska?",
    a: "Stockholm",
    b: "Oslo",
    c: "Kodaň",
    d: "Budapešť",
    correct: "b",
  },{
    question: "Kde se rodí děti?",
    a: "v lese",
    b: "v cirkuse",
    c: "v nemocnici",
    d: "na hřišti",
    correct: "c",
  },{
    question: "Co hrozí, když si nečistíme zuby?",
    a: "zlomenina ruky",
    b: "zubní kaz",
    c: "omrzlina",
    d: "chřipka",
    correct: "b",
  },{
    question: "Kam se chodí sbírat houby?",
    a: "do lesa",
    b: "k moři",
    c: "na bazen",
    d: "do knihovny",
    correct: "a",
  },{
    question: "3.3.3 =",
    a: "25",
    b: "27",
    c: "29",
    d: "31",
    correct: "b",
  },{
    question: "Jakou nemoc přenášejí některá klíšťata?",
    a: "rýmu",
    b: "chřipku",
    c: "boreliózu",
    d: "mononukleózu",
    correct: "c",
  },{
    question: "Které zvířea umí létat?",
    a: "blecha",
    b: "netopýr",
    c: "žába",
    d: "žížala",
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