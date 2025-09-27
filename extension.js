

const vscode = require("vscode");
const copyAndPast = require("./main/copyAndPast");
const quicklyConsole = require("./main/quicklyConsole")

  /**
   * 激活插件时调用
   * @param {vscode.ExtensionContext} context
   */
function activate(context) {
  console.log('===== VS Quick Operation 扩展已启动 =====');
  console.log('扩展名称:', 'vs-quick-operation');
  console.log('版本:', '0.0.1');
  console.log('启动时间:', new Date().toLocaleString());
  console.log('=========================================');
    // 注册命令 copyAndPast
    let disposable = vscode.commands.registerCommand(
      /**注册了一个名为extension.duplicateLine的命令 
       *  这个命令对应 package.json 中的 "extension.duplicateLine"
      */
      "extension.duplicateLine",
      copyAndPast
    );

    // 注册命令 quicklyConsole
    let disposableQuicklyConsole = vscode.commands.registerCommand(
      /**注册了一个名为extension.quicklyConsoleLine的命令 
       *  这个命令对应 package.json 中的 "extension.quicklyConsoleLine"
      */
      "extension.quicklyConsoleLine",
      quicklyConsole
    );

    /** 将 disposable 添加到上下文订阅中，确保插件在停止时被正确卸载 */
    context.subscriptions.push(disposable, disposableQuicklyConsole);
  }

  /**
   * 插件停用时调用
   */
  function deactivate() {}

  // 导出
  module.exports = {
    activate,
    deactivate,
  };
