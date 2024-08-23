let activeBox = null;

  function toggleBox(boxId) {
    const box = document.getElementById(boxId);
    const boxContent = box.querySelector('.box-content');
    const ellipse = box.querySelector('.ellipse');
    
    if (box === activeBox) {
      boxContent.style.display = 'none';
      boxContent.style.height = '0';
      ellipse.classList.remove('active');
      activeBox = null;
    } else {
      if (activeBox) {
        const activeBoxContent = activeBox.querySelector('.box-content');
        const activeEllipse = activeBox.querySelector('.ellipse');
        activeBoxContent.style.display = 'none';
        activeBoxContent.style.height = '0';
        activeEllipse.classList.remove('active');
      }
      
      boxContent.style.display = 'block';
      boxContent.style.height = 'auto';
      ellipse.classList.add('active');
      activeBox = box;
    }
  }
