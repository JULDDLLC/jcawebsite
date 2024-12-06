export const initializeCursor = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (isDesktop) {
      const cursor = document.createElement('div');
      cursor.classList.add('custom-cursor');

      const cursorOuter = document.createElement('div');
      cursorOuter.classList.add('custom-cursor-outer');

      const cursorInner = document.createElement('div');
      cursorInner.classList.add('custom-cursor-inner');

      cursorOuter.appendChild(cursorInner);
      cursor.appendChild(cursorOuter);
      document.body.appendChild(cursor);

      cursor.style.display = 'block';

      let cursorX = 0;
      let cursorY = 0;
      let pageX = 0;
      let pageY = 0;

      function updateCursorPosition() {
        cursorX += (pageX - cursorX) * 0.1;
        cursorY += (pageY - cursorY) * 0.1;
        cursor.style.left = `${cursorX - 30}px`;
        cursor.style.top = `${cursorY - 30}px`;
        requestAnimationFrame(updateCursorPosition);
      }

      updateCursorPosition();

      document.addEventListener('mousemove', (e) => {
        pageX = e.clientX;
        pageY = e.clientY;
      });

      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseover', () => {
          cursor.classList.add('hover');
          cursor.style.transform = 'scale(1.2)';
          cursor.style.opacity = '0.2';
        });
        
        el.addEventListener('mouseout', () => {
          cursor.classList.remove('hover');
          cursor.style.transform = 'scale(1)';
          cursor.style.opacity = '1';
        });
      });

      document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.9)';
      });

      document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
      });
    }
  });
};
