const quizData = [
    {
        Question: 'What is the age of Florin Pop?',
        a: '12',
        b:'34',
        c:'45',
        d:'25',
        Correct:'d'

    },
    {
        Question: 'Which is the most popular programming language in 2020?',
        a: 'Java',
        b:'Python',
        c:'C',
        d:'JavaScript',
        Correct:'d'

    },
    {
        Question: 'Who is the president of US?',
        a: 'Alexander Sajzenistin',
        b:'Michel Jackson',
        c:'Donald Trump',
        d:'Joe Biden',
        Correct:'d'
    },
    {
    Question: 'What is the age of Florin Pop?',
        a: '12',
        b:'34',
        c:'45',
        d:'25',
        Correct:'d'
    },
    {
        Question: 'What does HTML stand for?',
        a: 'How To Manage Language',
        b:'Hyper Text Markup Language',
        c:'Hospital Test Manual Logo',
        d:'How To Master Language',
        Correct:'b'
    },
    {
        Question: 'When was JavaScipt launched?',
        a: '2012',
        b:'1995',
        c:'2002',
        d:'1989',
        Correct:'b'
    }
]

    const questionEl = document.getElementById('question');

    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitBtn = document.getElementById("submit");

    let currentQuiz = 0;
    let score = 0;
    loadQuiz();

    function  loadQuiz(){
        const currentQuizData = quizData[currentQuiz];
        
        questionEl.innerText = currentQuizData.Question;

        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
        
    }

    function getSelected(){
 
        const answerEls = document.querySelectorAll(".answer");
        let answer = undefined;
        answerEls.forEach((answerEl) => {
            if(answerEl.checked){
                 answer =  answerEl.Id;
            }
        });
        
        return answer;     
    }
    
    // console.log(answer);


    submitBtn.addEventListener("click", () => {
        //check to see the
        // const answer =  getSelected();
        
  
            // if(answer)
            // {
            //     if(answer === quizData[currentQuiz].Correct)
            //     {
            //      score++;
            //     }
                currentQuiz++;
                if(currentQuiz < quizData.length){
                    loadQuiz()
                }else
                {
                   alert("You finished! Get your sel an Orange lemonade.");
                }
               
                
               
            })
            
    // }

    
   
