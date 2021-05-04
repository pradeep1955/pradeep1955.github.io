const quizData = [
    {
        question: 'With reference to Indian freedom struggle, consider the following events:Mutiny in Royal Indian Navy Quit India Movement launched Second Round Table Conference What is the correct chronological sequence of the above events?',
    
    a: '1-2-3',
    
    b: '2-1-3',
    
    c: '3-2-1',
    
    d: '3-1-2',
    
    correct: 'c'
    },
    
    {
    question: 'The object of the Butler Committee of 1927 was to?',
    
    a: 'Define the jurisdiction of the Central and Provincial Governments.',
    
    b: 'Define the powers of the Secretary of State for India.',
    
    c: 'Impose censorship on national press.',
    
    d: 'Improve the relationship between the Government of India and the Indian States.',
    
    correct: 'd'
    },
    
    {
    
     question: 'Consider the following pairs:Radhakanta Deb — First President of the British Indian Association- Gazulu Lakshminarasu Chetty —Founder of the Madras Mahajana Sabha -Surendranath Banerjee — Founder of the Indian Association -Which of the above pairs is/are correctly matched?',
     a: '1 only',
     b: '1 and 3 only',
     c: '2 and 3 only',
     d: '1, 2 and 3',
     correct: 'b'
    },
    
    
    {
    
     question: 'Who among the following was/were associated with the introduction of Ryotwari Settlement in India during the British rule? Lord Cornwallis Alexander Read Thomas Munro Select the correct answer using the code given below:',
     a: '1 only',
     b: '1 and 3 only',
     c: '2 and 3 only',
     d: 'v',
     correct: 'c'
    },
    
    {
    
     question: 'The staple commodities of export by the English East India Company from Bengal in the middle of the 18th century were',
     a: 'Raw cotton, oil-seeds, and opium',
     b: 'Sugar, salt, zinc, and lead',
     c: 'Copper, silver, gold, spices, and tea',
     d: 'Cotton, silk, saltpeter, and opium',
     correct: 'd'
    },
    
    {
    
     question: 'Which one of the following is a very significant aspect of the Champaran Satyagraha?',
     a: 'Active all-India participation of lawyers, students and women in the National Movement',
     b: 'Active involvement of Dalit and Tribal communities of India in the National Movement',
     c: 'Joining of peasant unrest to India,s National Movement',
     d: 'Drastic decrease in the cultivation of plantation crops and commercial crops',
     correct: 'c'
    },
    
    {
    
     question: 'Who among the following were the founders of the "Hind Mazdoor Sabha" established in 1948 ?',
     a: 'B. Krishna Pillai, E.M.S. Namboodiripad and K.C. George',
     b: 'Jayaprakash Narayan, Deen Day al Upadhyay and M.N. Roy',
     c: 'C.P. Ramaswamy Iyer, K. Kamaraj and Veeresalingam Pantulu',
     d: 'Ashok Mehta, T.S. Ramanujam and G.G. Mehta',
     correct: 'd'
    },
    
    {
    
     question: 'Which one of the following statements does not apply to the system of Subsidiary Alliance introduced by Lord Wellesley?',
     a: 'To maintain a large standing army at other,s expense',
     b: 'To keep India safe from Napoleonic danger',
     c: 'To secure a fixed income for the Company',
     d: 'To establish British paramountcy over the Indian States',
     correct: 'b'
    },
    
    {
    question: 'He wrote biographies of Mazzini, Garibaldi, Shivaji and Shrikrishna; stayed in America for some time; and was also elected to the Central Assembly. He was',
     a: 'Aurobindo Ghosh',
     b: 'Bipin Chandra Pal',
     c: 'Lala Lajpat Rai',
     d: 'Motilal Nehru',
     correct: 'c'
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