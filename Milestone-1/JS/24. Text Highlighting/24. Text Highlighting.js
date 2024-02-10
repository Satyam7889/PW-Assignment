document.addEventListener('click', function() {
    const paragraph = document.getElementById('paragraph');
  
    const words = paragraph.textContent.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
  
      if (word.length > 8) {
        const span = document.createElement('span');
  
        span.style.backgroundColor = 'yellow';
  
        span.textContent = word;
  
        words[i] = span.outerHTML;
      }
    }
    paragraph.innerHTML = words.join(' ');
  });
  