let userName = prompt("What is your name");


userName ? console.log('Hello ' + userName) : console.log('Hello!');


let userQuestion = prompt("What is your quesion")
userQuestion ? console.log(userName + ' asked the question: ' + userQuestion) : console.log('Ask a question');


let randomNumber = Math.floor(Math.random() * 8);


let eightBall = ''


switch (randomNumber) {
 case 7:
   eightBall = 'It is certain';
   break;
 case 6:
   eightBall = 'It is decidedly so';
   break;
 case 5:
   eightBall = 'Reply hazy try again';
   break;
 case 4:
   eightBall = 'Cannot predict now';
   break;
 case 3:
   eightBall = 'Do not count on it';
   break;
 case 2:
   eightBall = 'My sources say no';
   break;
 case 1:
   eightBall = 'Outlook not so good';
   break;
 case 0:
   eightBall = 'Signs point to yes';
   break;
}


console.log(eightBall)
