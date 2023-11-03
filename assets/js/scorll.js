let _headers = document.querySelectorAll('main > header')
let _swi = document.querySelectorAll('main > div')
let _section = document.querySelectorAll('main  > section')
let _tarhFig = document.querySelectorAll('main > section:nth-of-type(2) > div > figure')

_tarhFig.forEach((i)=>{

  
                
})
headerH = 0
_headers.forEach((i)=>{
    headerH += i.clientHeight;
    console.log(headerH);
})
_swi.forEach((i)=>{
    headerH += i.clientHeight
    console.log(headerH);
})
_section.forEach((i)=>{
    headerH += i.clientHeight
    console.log(headerH);
    i.setAttribute('data-h', headerH)
    console.log('im data-h: '+i.getAttribute('data-h'));
})




    stO = 0
document.getElementsByTagName('body')[0].addEventListener('scroll',(e)=>{
    let stN = e.target.scrollTop
    // console.log(st);
    if(stO < stN){
        if( stN >= _section[0].getAttribute('data-h') && stN <= _section[1].getAttribute('data-h')){
            _tarhFig.forEach((i)=>{
                i.style.bottom='0'
            })
        }
        if( stN >= _section[2].getAttribute('data-h') &&  stN <= _section[3].getAttribute('data-h')){
            document.getElementById('mobFig').style.transform='translateX(0)'
            document.getElementById('accardion').style.transform='translateX(0)'
            document.getElementById('purdiv').style.transform='translateX(0)'
            document.getElementById('purfig').style.transform='translateX(0)'
            document.getElementById('purpule').style.transform='scale(1)'
            console.log('uilooooo');
        }
            
       
    }
    stO = stN
   
})

