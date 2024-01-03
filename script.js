const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');

    accordian.addEventListener('click', () => {
       
       if (icon.classList.contains('active')) {
         icon.classList.remove('active');
          answer.classList.remove('active');
         // answer.style.maxHieght = null;
         //  console.log();
       } else {
        icon.classList.add('active');
      //   answer.style.maxHieght = answer.scrollHeight + 'px';
         answer.classList.add('active');
        //  console.log(answer.scrollHeight + 'px');
     }  
    });
})