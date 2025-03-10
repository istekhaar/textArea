// Maximum character limit
const maxCharacters = 100;

// Get DOM elements
const textarea = document.getElementById('textarea');
const charCount = document.getElementById('charCount');
const maxLimit = document.getElementById('maxLimit');

//set max limit display
maxLimit.textContent=maxCharacters

//event listenr for live character count
textarea.addEventListener('input', ()=>{
    const currentLength=textarea.value.length;
    charCount.textContent=currentLength

    //prevent input beyond the charcter limit
    if(currentLength>maxCharacters){
        textarea.value=textarea.value.substring(0, maxCharacters);
        charCount.textContent=maxCharacters
    }

    //add color if ,=lumit is exceeded
    charCount.classList.toggle('limit-exceeded', currentLength>=maxCharacters)
})