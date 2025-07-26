const vscode = require("vscode");
/** 复制和快速黏贴 */
const copyAndPast = () => {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }

  const document = editor.document;
  const selection = editor.selection;

  // 获取选中的文本
  const selectedText = document.getText(selection);
  console.log("selectedText:测试复制的文本", selectedText);

  if (selectedText) {
    // 如果有选中的文本，复制到下一行
    const endPosition = selection.end;
    const insertPosition = new vscode.Position(endPosition.line + 1, 0);

    editor.edit((editBuilder) => {
      editBuilder.insert(insertPosition, selectedText + "\n");
    });
  } else {
    // 如果没有选中文本，复制当前行到下一行
    const currentLine = selection.active.line;
    const lineText = document.lineAt(currentLine).text;
    const insertPosition = new vscode.Position(currentLine + 1, 0);

    editor.edit((editBuilder) => {
      editBuilder.insert(insertPosition, lineText + "\n");
    });
  }
};

export default copyAndPast;
