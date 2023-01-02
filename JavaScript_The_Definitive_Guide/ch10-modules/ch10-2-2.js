// Node的匯入

/**
 * 若要匯入Node內建的模組或透過套件管理器(package manager)安裝的模組，
 * 使用該模組未經資格修飾的名稱(unqualified name)，
 * 不使用會把它變成一個檔案系統路徑的任何 / 字元。
 */
// 這些模組內建於Node
const fs = require("fs"); // 內建的檔案系統模組∏
const http = require("http"); // 內建的HTTP模組

// express http 伺服器框架是一個第三方模組，需安裝
const express = require("express");


/**
 * 當要匯入自己程式碼的模組，需使用含有程式碼的檔案路徑
 * 可省略.js副檔名
 */
const stats = require('./stats.js.js');
const BitSet = require('./utils/bitset.js.js')


/**
 * 當模組只會出單一個函式或類別，所要做的就是 require 它
 * 當一個模組會出具有多個特性的一個物件，可匯入整個物件或只匯入特定的特性
 */
// 匯入整個stats物件
const stats = require('./stats.js.js');
let average = stats.mean(data);

// 使用解構指定直接把需要的函式匯入至區域命名空間
const { stddev } = require('./stats.js.js');
let sd = stddev(data);