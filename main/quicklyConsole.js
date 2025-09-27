const vscode = require("vscode");
/** 复制和快速黏贴 */
const quicklyConsole = function () {
  /**
   * 获取当前活动编辑器
   * 获取当前焦点所在的文本编辑器
   * 如果没有打开的编辑器或着焦点不在编辑器上，则返回 undefined
   */
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }

  /**
   * 获取当前活动编辑器的文档
   */
  const document = editor.document;
  /**
   * 获取当前活动编辑器的选区
   */
  const selection = editor.selection;

  // 获取选中的文本
  const selectedText = document.getText(selection);

  if (selectedText) {
    // 输出console.log

    const consoleText = `console.log(${selectedText})`;

    /** 获取选择区域的结束位置对象，包含  line(行号) 和 character(列号) */
    const endPosition = selection.end;
    /**创建新的位置对象  endPosition.line + 1 表示在结束位置的下一行，0 表示在下一行的第0列 */
    const insertPosition = new vscode.Position(endPosition.line + 1, 0);

    /**开始一个编辑操作，所有的修改都在这个回调中进行 */
    editor.edit((editBuilder) => {
      /**在指定位置插入文本  
       * selectedText + "\n" 表示插入选中的文本并在末尾添加换行符
      */
      editBuilder.insert(insertPosition, consoleText + "\n");
    });
  }
}

module.exports = quicklyConsole;

