console.log('script is started');

const elements = {
  doc: document.getElementsByTagName('body'), // An array of NodeList (not elements)
  doc: document.querySelector('body'), // Select body tag
};

{
  // CONTENT PROTECTION
  // Right click or context menu prevention
  // Event listener works only on elements and not a node list hence the iteration to target an element in the body
  //   You could also simply use querySelector since there is only one body tag so there will not be need to iterate
  /*

  for (const cur of Array.from(elements.doc)) {
    cur.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }

  */

  elements.doc.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });

  elements.doc.addEventListener('copy', (e) => {
    e.preventDefault();
  });

  elements.doc.addEventListener('paste', (e) => {
    e.preventDefault();
  });
}
