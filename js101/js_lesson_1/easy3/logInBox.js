function logInBox(string) {
  const stringLength = string.length;

  function renderTopOrBottom() {
    let border = new Array(stringLength + 4);
    border[0] = "+";
    border[border.length - 1] = "+";

    for (let i = 0; i < border.length; i++) {
      if (border[i] === "+") {
        continue;
      } else {
        border[i] = "-";
      }
    }
    console.log(border.join(""));
  }

  function renderWordLine() {
    let line = new Array(stringLength + 4);

    for (let i = 0; i < line.length; i++) {
      if (i === 0 || i === line.length - 1) {
        line[i] = "|";
      } else if (i === 1 || i === line.length - 2) {
        line[i] = " ";
      } else {
        line[i] = string[i - 2];
      }
    }
    console.log(line.join(""));
  }

  function renderEmptyLine() {
    let line = new Array(stringLength + 4);
    line[0] = "|";
    line[line.length - 1] = "|";
    for (let i = 0; i < line.length; i++) {
      if (line[i] === "|") {
        continue;
      } else {
        line[i] = " ";
      }
    }
    console.log(line.join(""));
  }

  renderTopOrBottom();
  renderEmptyLine();
  renderWordLine();
  renderEmptyLine();
  renderTopOrBottom();
}
logInBox("To boldly go where no one has gone before.");

// Example solution:
/*
function logInBox(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}
*/
