
(()=>{
    function $(s){
        return document.querySelector(s);
    }

    function $$(s){
        return document.querySelectorAll(s);
    }

    const doms = {
        items:$$('.options .items'),
        uls:$('.lists'),
    }

    
    for(let i=1;i<doms.items.length;i++){
        console.log(doms.items[i]);
        const select = doms.items[i].querySelector('.select');
        console.log(select);
        select.addEventListener('click',function(){
            console.log(this);
            const expands = $$('.items.expand');
            for (const exp of expands){
                if(exp !==doms.items[i]){
                    exp.classList.remove('expand');
                }
            }
            // expands && expands.classList.remove('expand');
            doms.items[i].classList.toggle('expand');
        })
    }

})()