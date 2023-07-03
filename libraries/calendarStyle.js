function randomColor() {
    const hexNum = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * hexNum.length);
      color += hexNum[index];
    }
    
    return color;
  }

export {randomColor}