
const box = document.querySelector('.box')

    box.addEventListener('click', () => {
        if(box.style.backgroundColor == 'blue' ){
            box.style =`
            transition: 1s;
            background: red;
            border-radius: 50%;
            `

        }else{
            box.style =`
            transition: 1s;
            background: blue;
            border-radius: 0%;
            `
        }
    })
