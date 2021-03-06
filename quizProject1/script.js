const quizData = [
{
    question: 'The country which has the greatest population density is',
    a: 'China',
    b: 'India',
    c: 'Monaco',
    d: 'Indonesia',
    correct: 'c'
},

    // {
       

    //     question: 'The plan of Sir Stafford Cripps envisaged that after the Second World War',
    //     a: 'India should be granted complete independence(b) India should be partitioned into two before granting independence',
    //     b:'India should be made a republic with the condition that she will join the Commonwealth',
    //     c:'3 only',
    //     d:'India should be given Dominion status',
    //     correct:'d'

    // },
    {
        question: 'Which one of the following movements has contributed to a split in the Indian National Congress resulting in the emergence of "moderates" and "extremists"?',
        a: 'Swadeshi Movement',
        b:'Quit India Movement',
        c:'Non-Cooperation Movement',
        d:'Civil Disobedience Movement',
        correct:'a'

    },
    {
        question: 'What was the main reason for the split in the Indian National Congress at Surat in 1907?',
        a: 'Introduction of communalism into Indian politics by Lord Minto',
        b:'"Extremists" lack of faith in the capacity of the moderates to negotiate with the British Government',
        c:'Foundation of Muslim League',
        d:'"Aurobindo Ghosh"s inability to be elected as the President of the Indian National Congress',
        correct:'d'
    },
    {
    question: 'With reference to Rowlatt Satyagraha, which of the following statements is/ are correct? -1.The Rowlatt Act was based on the recommendations of the "Sedition Committee"  -2. In Rowlatt Satyagraha, Gandhiji tried to utilize the Home Rule League.-3. Demonstrations against the arrival of Simon Commission coincided with Rowlatt Satyagraha.Select the correct answer using the code given below.',
        a: '1 only',
        b:'1 and 2 only',
        c:'2 and 3 only',
        d:'1, 2 and 3',
        correct:'b'
    },
    {
        question: 'Consider the following statements -1.The first woman President of the Indian National Congress was Sarojini Naidu. -2. The first Muslim President of the Indian National Congress was Badruddin Tyabji. Which of the statements given above is / are correct?',
        a: '1 only',
        b:'2 only',
        c:'Both 1 and 2',
        d:'Neither 1 nor 2',
        correct:'b'
    },
    {
        question: 'Who of the following was/were economic critic/ critics of colonialism in India?-1.Dadabhai Naoroji -2. G. Subramania Iyer -3. R. C. Dutt: Select the correct answer using the code given below.',
        a: '1 only  ',
        b:'1 and 2 only',
        c:'2 and 3 only',
        d:'1, 2 and 3',
        correct:'d'
    },
    {
        question: 'With reference to Congress Socialist Party, consider the following statements: -1It advocated the boycott of British goods and evasion of taxes. -2. It wanted to establish the dictatorship of proletariat.-3. I t advocated separate electorate for minorities and oppressed classes.Which of the statements given above is / are correct?',
        a: '1 and 2 only',
        b:'3 only',
        c:'1, 2 and 3',
        d:'None',
        correct:'d'
    },
    {
        question: 'The Government of India Act of 1919 clearly defined',
        a: ' the separation of power between the judiciary and the legislature',
        b:'the jurisdiction of the central and provincial governments',
        c:'the powers of the Secretary of State for India and the Viceroy',
        d:'None of the above',
        correct:'b'
    },
    {
        question: 'Who of the following organized a march on the Tanjore coast to break the Salt Law in April 1930?',
        a: 'V. O. Chidambaram Pillai',
        b:'C. Rajagopalachari',
        c:'K. Kamaraj',
        d:'Annie Besant',
        correct:'b'
    },
   
       
];
    const quiz = document.getElementById("quiz");
    const answerEls = document.querySelectorAll(".answer");
    const questionEl = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitBtn = document.getElementById("submit");

    let currentQuiz = 0;
    let score = 0;

    loadQuiz();

    function  loadQuiz() {
        deselectAnswers();

        const currentQuizData = quizData[currentQuiz];
        
        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
        
    }

    function getSelected(){      
        let answer = undefined;

        answerEls.forEach((answerEl) => {
            if(answerEl.checked){
                 answer =  answerEl.id;
            }
        });
        
        return answer;     
    }
    
     function deselectAnswers(){
         answerEls.forEach((answerEl) => {
             answerEl.checked = false;
         });
     }

    submitBtn.addEventListener("click", () => {
        //check to see the
         const answer =  getSelected();
      
        
  
             if(answer)
             {
                if(answer === quizData[currentQuiz].correct)
                {
                 score++;
                }
                currentQuiz++;
                if(currentQuiz < quizData.length){
                    loadQuiz();
                }else
                {
                  quiz.innerHTML = `
                  <h2>You answered correctly at ${score}/${quizData.length} questions</h2>
                  
                  <button onclick= "location.reload()">Reload</button>
                  `;
                   
                }
               
                
               
            }
            
     })