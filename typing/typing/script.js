function typing(el, duration=200){
    let element = el instanceof HTMLElement ? el : document.querySelector(el);
    let text = element.textContent;
    let span = document.createElement('span');
    span.classList.add('span');
    let height = window.getComputedStyle(element).getPropertyValue('font-size');
    span.style.height = height;
    let index = 0;
    let interval;
    element.innerHTML = '';
    element.append(span);
    function type(){
        if(index < text.length){
            let item = document.createElement('span');
            item.classList.add('anime-text');
            if(text[index] !== ' ') item.innerHTML = text[index];
            else item.innerHTML = '&nbsp;';
            item.style = `animation-duration: ${duration}ms`;
            span.insertAdjacentElement('beforebegin', item);
            index++;
            interval = setTimeout(type, duration/2);
        }else clearTimeout(interval);
    }
    type();
}
typing('.text', 300);