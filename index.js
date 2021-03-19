 //popup

   const button = document.querySelector(".btn-trivia");
        const popup = document.querySelector('#popupWrapper');
        const close = document.querySelector('#popupClose');

        button.addEventListener('click', () => {
            popup.style.display = "block";
        });

        close.addEventListener('click', () => {
            popup.style.display = "none"
        });

        popup.addEventListener('click', (e) => {
            popup.style.close = "none"
        });
 
 
 //Quiz:

        const startButton = document.getElementById('start-btns')
        const nextButton = document.getElementById('next-btns')
        const yourScore = document.getElementById('score')
        const questionContainerElement = document.getElementById('question-container')
        const questionElement = document.getElementById('question')
        const answerButtonsElement = document.getElementById('answer-buttons')

        let shuffledQuestion, currentQuestionIndex

        let sumScore = 0;

        startButton.addEventListener('click', startGame)
        nextButton.addEventListener('click', () => {
            currentQuestionIndex++
            setNextQuestion()
        });

        function startGame() {
            // console.log('Started')
            startButton.classList.add('hide')
            shuffledQuestion = questions.sort(() => Math.random() - 4)
            currentQuestionIndex = 0
            questionContainerElement.classList.remove('hide')
            setNextQuestion()
        };

        function setNextQuestion() {
            resetState()
            showQuestion(shuffledQuestion[currentQuestionIndex])
        };



        function showQuestion(question) {
            questionElement.innerText = question.question
            question.answers.forEach(answer => {
                const button = document.createElement('button')
                button.innerText = answer.text
                button.classList.add('btns')
                if (answer.correct) {
                    button.dataset.correct = answer.correct
                    button.addEventListener('click', selectTrueAnswer)
                } else {
                    button.addEventListener('click', selectFalseAnswer)

                }
                answerButtonsElement.appendChild(button)
            })
        }

        function resetState() {
            clearStatusClass(document.body)
            nextButton.classList.add('hide')
            while (answerButtonsElement.firstChild) {
                answerButtonsElement.removeChild(answerButtonsElement.firstChild)
            }
        }

        function selectFalseAnswer(e) {
            const selectedButton = e.target
            const correct = selectedButton.dataset.correct
            setStatusClass(document.body, correct)
            Array.from(answerButtonsElement.children).forEach(button => {
                setStatusClass(button, button.dataset.correct)
            })
            if (shuffledQuestion.length > currentQuestionIndex + 1) {
                nextButton.classList.remove('hide')
            } else {
                startButton.classList.remove('none')
            }
        }

        function selectTrueAnswer(e) {
            sumScore += 10

            const selectedButton = e.target
            const correct = selectedButton.dataset.correct
            setStatusClass(document.body, correct)
            Array.from(answerButtonsElement.children).forEach(button => {
                setStatusClass(button, button.dataset.correct)
            })
            if (shuffledQuestion.length > currentQuestionIndex + 1) {
                nextButton.classList.remove('hide')
            } else {
                startButton.classList.remove('none')
            }
            yourScore.innerText = `your score is: ${sumScore}`;
        }

        function setStatusClass(element, correct) {
            clearStatusClass(element)
            if (correct) {
                element.classList.add('correct')
            } else {
                element.classList.add('wrong')
            }
        };

        function clearStatusClass(element) {
            element.classList.remove('correct')
            element.classList.remove('wrong')
        };


        const questions = [{
                question: 'What colors symbolize Mardi Gras?',
                answers: [{
                        text: 'yellow, red and blue',
                        correct: false,
                    },
                    {
                        text: 'purple, yellow and green',
                        correct: true,
                    },
                    {
                        text: 'purple, green and orange',
                        correct: false,
                    },
                    {
                        text: 'red, pink and purple',
                        correct: false,
                    }
                ]
            },
            {
                question: 'Where was the first known carnival celebration?',
                answers: [{
                        text: 'New Orleans',
                        correct: false,
                    },
                    {
                        text: 'New York',
                        correct: false,
                    },
                    {
                        text: "Nice, France",
                        correct: true,
                    },
                    {
                        text: "Rome, Italy",
                        correct: false,
                    }
                ]
            },
            {
                question: 'What is the signature Mardi Gras dessert?',
                answers: [{
                        text: 'Cheese cake',
                        correct: false,
                    },
                    {
                        text: 'Pizza',
                        correct: false,
                    },
                    {
                        text: 'Hamburger',
                        correct: false,
                    },
                    {
                        text: 'King cake',
                        correct: true,
                    }
                ]
            },
            {
                question: 'What does gold signify during Mardi Gras?',
                answers: [{
                        text: 'Happiness',
                        correct: false,
                    },
                    {
                        text: 'Power',
                        correct: true,
                    },
                    {
                        text: 'Fights',
                        correct: false,
                    },
                    {
                        text: 'Love',
                        correct: false,
                    }
                ]
            },
            {
                question: 'Mardi Gras beads used to be made of what material?',
                answers: [{
                        text: 'Plastic',
                        correct: false,
                    },
                    {
                        text: 'Clay',
                        correct: false,
                    },
                    {
                        text: 'Glass',
                        correct: true,
                    },
                    {
                        text: 'Plasticine',
                        correct: false,
                    }
                ]
            }
        ];