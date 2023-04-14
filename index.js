// alert("Hello");
let Preview = document.querySelector('.preview');
let PopUpSmall = document.querySelectorAll('.pop');
let Preview2 = document.querySelector('.preview-2');
let PopUpLarge = document.querySelectorAll('.pop-lg');
let hero = document.querySelector('hero-section');

document.querySelectorAll('.button-1').forEach(button =>{
    button.onclick = () =>{
        Preview.style.display = 'flex'
        let name = button.getAttribute('data-name');
        
        PopUpSmall.forEach(pop =>{
        let target = pop.getAttribute('data-target');
        if(name == target){
            pop.classList.add('active');
            html.style.overflow = 'hidden';
        }
        });
    }
});

console.log(PopUpSmall);
PopUpSmall.forEach(babu=>{
    console.log(babu.querySelector('.fa-times'));
    babu.querySelector('.fa-times').onclick=()=>{
        babu.classList.remove('active');
        Preview.style.display = 'none'
    }
});


document.querySelectorAll('.clickable-img').forEach(img =>{
    img.onclick = () =>{
        Preview.style.display = 'flex'
        let name = img.getAttribute('data-name1');
        
        PopUpLarge.forEach(poplg =>{
        let target = poplg.getAttribute('data-target1');
        console.log(target);
        if(name == target){
            PopUpSmall.forEach(popsm =>{
                Preview2.style.display = 'flex';
                popsm.classList.remove('active');
            });
            poplg.classList.add('active');
        }
        });
    }
});

PopUpLarge.forEach(pop=>{
    pop.querySelector('.fa-times').onclick=()=>{
        pop.classList.remove('active');
        Preview2.style.display = 'none';
        Preview.style.display = 'none';
    }
});