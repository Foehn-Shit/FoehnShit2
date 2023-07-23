// 哪个大佬会的稍微优化一下⑧ 
    // 精英0
    // 稍稍初始化一下
    sumOfCost = 0;
    sumOfExp = 0;
    sumOfCostFin = 0;
    sumOfExpFin = 0;
    resultExp1Box = "";
    resultExp2Box = "";
    resultExp3Box = "";
    resultExp4Box = "";
    // 输入框
    elite0Level = document.getElementById("input1");
    elite0LevelFin = document.getElementById("input2");
    // 结果
    resultCost = document.getElementById("resultCost");
    resultEx4 = document.getElementById("resultEx4");
    resultEx3 = document.getElementById("resultEx3");
    resultEx2 = document.getElementById("resultEx2");
    resultEx1 = document.getElementById("resultEx1");
    // 计算
    cclt = document.getElementById("button1");
    elite0Level.innerHTML = "<input type=\"text\" id=\"level_input\" maxlength=2>";
    elite0LevelFin.innerHTML = "<input type=\"text\" id=\"level_inputFin\" maxlength=2>";
    arrOfCost = [30, 36, 43, 50, 57, 65, 73, 81, 90, 99, 108, 118, 128, 138, 149, 160, 182, 206, 231, 258, 286, 315, 346, 378, 411, 446, 482, 520, 557, 595, 635, 677, 720, 764, 809, 856, 904, 952, 992, 1042, 1086, 1131, 1178, 1229, 1294, 1353, 1413, 1474, 1572];
    arrOfExp = [100, 117, 134, 151, 168, 185, 202, 219, 236, 253, 270, 287, 304, 321, 338, 355, 372, 389, 406, 423, 440, 457, 474, 491, 508, 525, 542, 559, 574, 589, 605, 621, 637, 653, 669, 685, 701, 716, 724, 739, 749, 759, 770, 783, 804, 820, 836, 852, 888];
    cclt.innerHTML = "<button id=\"btn1\" style=\"border:none; border-radius: 5px;  box-shadow:2px 1px 3px grey;  width:50px;  background-color: rgb(224, 75, 224);  background-image: linear-gradient(to top right, rgb(255, 198, 255), rgb(255, 70, 255)); color:rgb(153, 0, 167);\">计算</button>";
    // 按钮
    btn1 = document.getElementById("btn1");
    level_input = document.getElementById("level_input");
    level_inputFin = document.getElementById("level_inputFin");
    btn1.onclick = function () {
      // 当前等级
      for (i = 0; i < level_input.value - 1; i++) {
        sumOfCost += arrOfCost[i];
        sumOfExp += arrOfExp[i];
      }
      //最终等级
      for (j = 0; j < level_inputFin.value - 1; j++) {
        sumOfCostFin += arrOfCost[j];
        sumOfExpFin += arrOfExp[j];
      }
      resultCost.innerHTML = "*" + (sumOfCostFin - sumOfCost);
      // resultExp.innerHTML = expNum(sumOfExp);
      //  螺 旋 地 狱 开始
      // 高级作战记录/个	
      var expLevel_4 = Math.trunc((sumOfExpFin - sumOfExp) / 2000);
      // 中级作战记录/个
      var expLevel_3 = Math.trunc(((sumOfExpFin - sumOfExp) % 2000) / 1000);
      // 初级作战记录/个
      var expLevel_2 = Math.trunc(((sumOfExpFin - sumOfExp) % 2000 % 1000) / 400);
      // 基础作战记录/个
      var expLevel_1 = Math.ceil(((sumOfExpFin - sumOfExp) % 2000 % 1000 % 400) / 200);

      if ((sumOfExpFin - sumOfExp) > 2000) {
        // 从高级作战记录开始
        resultExp4Box = "*" + expLevel_4;
        if ((sumOfExpFin - sumOfExp) % 2000 >= 1000) {
          resultExp3Box = "*" + expLevel_3;
          if ((sumOfExpFin - sumOfExp) % 2000 % 1000 >= 400) {
            resultExp2Box = "*" + expLevel_2;
            if ((sumOfExpFin - sumOfExp) % 2000 % 1000 % 400 != 0) {
              resultExp1Box = "*" + expLevel_1;
            }
          } else if ((sumOfExpFin - sumOfExp) % 2000 % 1000 < 400) {
            if ((sumOfExpFin - sumOfExp) % 2000 % 1000 % 400 != 0) {
              resultExp1Box = "*" + expLevel_1;
            }
          }
        } else if ((sumOfExpFin - sumOfExp) % 2000 < 1000) {
          if ((sumOfExpFin - sumOfExp) % 2000 % 1000 >= 400) {
            resultExp2Box = "*" + expLevel_2;
            if ((sumOfExpFin - sumOfExp) % 2000 % 1000 % 400 != 0) {
              resultExp1Box = "*" + expLevel_1;
            }
          } else if ((sumOfExpFin - sumOfExp) % 2000 % 1000 < 400) {
            if ((sumOfExpFin - sumOfExp) % 2000 % 1000 % 400 != 0) {
              resultExp1Box = "*" + expLevel_1;
            }
          }
        }
        //从中级作战记录开始
      } else if ((sumOfExpFin - sumOfExp) < 2000) {
        if ((sumOfExpFin - sumOfExp) % 2000 >= 1000) {
          resultExp3Box = "*" + expLevel_3;
          if ((sumOfExpFin - sumOfExp) % 2000 % 1000 >= 400) {
            resultExp2Box = "*" + expLevel_2;
            if ((sumOfExpFin - sumOfExp) % 2000 % 1000 % 400 != 0) {
              resultExp1Box = "*" + expLevel_1;
            }
          } else if ((sumOfExpFin - sumOfExp) % 2000 % 1000 < 400) {
            if ((sumOfExpFin - sumOfExp) % 2000 % 1000 % 400 != 0) {
              resultExp1Box = "*" + expLevel_1;
            }
          }
        } else if ((sumOfExpFin - sumOfExp) % 2000 < 1000) {
          if ((sumOfExpFin - sumOfExp) % 2000 % 1000 >= 400) {
            resultExp2Box = "*" + expLevel_2;
            if ((sumOfExpFin - sumOfExp) % 2000 % 1000 % 400 != 0) {
              resultExp1Box = "*" + expLevel_1;
            }
          } else if ((sumOfExpFin - sumOfExp) % 2000 % 1000 < 400) {
            if ((sumOfExpFin - sumOfExp) % 2000 % 1000 % 400 != 0) {
              resultExp1Box = "*" + expLevel_1;
            }
          }
        }
        //从初级作战记录开始
      } else if ((sumOfExpFin - sumOfExp) < 1000) {
        if ((sumOfExpFin - sumOfExp) % 2000 % 1000 >= 400) {
          resultExp2Box = "*" + expLevel_2;
          if ((sumOfExpFin - sumOfExp) % 2000 % 1000 % 400 != 0) {
            resultExp1Box = "*" + expLevel_1;
          }
        } else if ((sumOfExpFin - sumOfExp) % 2000 % 1000 < 400) {
          if ((sumOfExpFin - sumOfExp) % 2000 % 1000 % 400 != 0) {
            resultExp1Box = "*" + expLevel_1;
          }
        }
      }
      resultExp1.innerHTML = resultExp1Box;
      resultExp2.innerHTML = resultExp2Box;
      resultExp3.innerHTML = resultExp3Box;
      resultExp4.innerHTML = resultExp4Box;
      //螺 旋 地 狱 结束
      //归零
      resultExp1Box = "";
      resultExp2Box = "";
      resultExp3Box = "";
      resultExp4Box = "";
      sumOfCostFin = 0;
      sumOfExpFin = 0;
      sumOfCost = 0;
      sumOfExp = 0;
    };
    // 精0结束

    // 精英1
    // 稍稍初始化一下
    sumOfCost_elite1 = 0;
    sumOfExp_elite1 = 0;
    sumOfCostFin_elite1 = 0;
    sumOfExpFin_elite1 = 0;
    resultExp1Box_elite1 = "";
    resultExp2Box_elite1 = "";
    resultExp3Box_elite1 = "";
    resultExp4Box_elite1 = "";
    // 输入框
    elite1Level = document.getElementById("input1_elite1");
    elite1LevelFin = document.getElementById("input2_elite1");
    // 结果
    resultCost_elite1 = document.getElementById("resultCost_elite1");
    resultEx4_elite1 = document.getElementById("resultEx4_elite1");
    resultEx3_elite1 = document.getElementById("resultEx3_elite1");
    resultEx2_elite1 = document.getElementById("resultEx2_elite1");
    resultEx1_elite1 = document.getElementById("resultEx1_elite1");
    // 计算
    cclt_elite1 = document.getElementById("button2");
    elite1Level.innerHTML = "<input type=\"text\" id=\"level_input_elite1\" maxlength=2>";
    elite1LevelFin.innerHTML = "<input type=\"text\" id=\"level_inputFin_elite1\" maxlength=2>";
    arrOfCost_elite1 = [48, 71, 95, 120, 146, 173, 201, 231, 262, 293, 326, 361, 396, 432, 470, 508, 548, 589, 631, 675, 719, 765, 811, 859, 908, 958, 1010, 1062, 1116, 1171, 1245, 1322, 1400, 1480, 1562, 1645, 1731, 1817, 1906, 1996, 2171, 2349, 2531, 2717, 2907, 3100, 3298, 3499, 3705, 3914, 4127, 4344, 4565, 4807, 5294, 6049, 6413, 6681, 7098, 7753, 8116, 8378, 8752, 9132, 9518, 9909, 10306, 10709, 11027, 11533, 12224, 12926, 13639, 14363, 15097, 15843, 16599, 17367, 18303];
    arrOfExp_elite1 = [120, 172, 224, 276, 328, 380, 432, 484, 536, 588, 640, 692, 744, 796, 848, 900, 952, 1004, 1056, 1108, 1160, 1212, 1264, 1316, 1368, 1420, 1472, 1524, 1576, 1628, 1706, 1784, 1862, 1940, 2018, 2096, 2174, 2252, 2330, 2408, 2584, 2760, 2936, 3112, 3288, 3464, 3640, 3816, 3992, 4168, 4344, 4520, 4696, 4890, 5326, 6019, 6312, 6505, 6838, 7391, 7657, 7823, 8089, 8355, 8621, 8887, 9153, 9419, 9605, 9951, 10448, 10945, 11442, 11939, 12436, 12933, 13430, 13927, 14549];
    cclt_elite1.innerHTML = "<button id=\"btn2\" style=\"border:none;border-radius: 5px; box-shadow:2px 1px 3px grey; width:50px; background-color: rgb(255, 243, 71); background-image: linear-gradient(to top right, rgb(255, 250, 184), rgb(255, 243, 71));color:rgb(196, 177, 71);\">计算</button>";
    // 按钮
    btn2 = document.getElementById("btn2");
    level_input_elite1 = document.getElementById("level_input_elite1");
    level_inputFin_elite1 = document.getElementById("level_inputFin_elite1");
    btn2.onclick = function () {
      // 当前等级
      for (m = 0; m < level_input_elite1.value - 1; m++) {
        sumOfCost_elite1 += arrOfCost_elite1[m];
        sumOfExp_elite1 += arrOfExp_elite1[m];
      }
      //最终等级
      for (n = 0; n < level_inputFin_elite1.value - 1; n++) {
        sumOfCostFin_elite1 += arrOfCost_elite1[n];
        sumOfExpFin_elite1 += arrOfExp_elite1[n];
      }
      resultCost_elite1.innerHTML = "*" + (sumOfCostFin_elite1 - sumOfCost_elite1);
      //  螺 旋 地 狱 开始
      // 高级作战记录/个	
      var expLevel_4_elite1 = Math.trunc((sumOfExpFin_elite1 - sumOfExp_elite1) / 2000);
      // 中级作战记录/个
      var expLevel_3_elite1 = Math.trunc(((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000) / 1000);
      // 初级作战记录/个
      var expLevel_2_elite1 = Math.trunc(((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000) / 400);
      // 基础作战记录/个
      var expLevel_1_elite1 = Math.ceil(((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 % 400) / 200);

      // 从高级作战记录开始
      resultExp4Box_elite1 = "*" + expLevel_4_elite1;
      if ((sumOfExpFin_elite1 - sumOfExp_elite1) > 2000) {
        // 从高级作战记录开始
        resultExp4Box_elite1 = "*" + expLevel_4_elite1;
        if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 >= 1000) {
          resultExp3Box_elite1 = "*" + expLevel_3_elite1;
          if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 >= 400) {
            resultExp2Box_elite1 = "*" + expLevel_2_elite1;
            if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 % 400 != 0) {
              resultExp1Box_elite1 = "*" + expLevel_1_elite1;
            }
          } else if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 < 400) {
            if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 % 400 != 0) {
              resultExp1Box_elite1 = "*" + expLevel_1_elite1;
            }
          }
        } else if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 < 1000) {
          if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 >= 400) {
            resultExp2Box_elite1 = "*" + expLevel_2_elite1;
            if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 % 400 != 0) {
              resultExp1Box_elite1 = "*" + expLevel_1_elite1;
            }
          } else if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 < 400) {
            if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 % 400 != 0) {
              resultExp1Box_elite1 = "*" + expLevel_1_elite1;
            }
          }
        }
        //从中级作战记录开始
      } else if ((sumOfExpFin_elite1 - sumOfExp_elite1) < 2000) {
        if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 >= 1000) {
          resultExp3Box_elite1 = "*" + expLevel_3_elite1;
          if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 >= 400) {
            resultExp2Box_elite1 = "*" + expLevel_2_elite1;
            if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 % 400 != 0) {
              resultExp1Box_elite1 = "*" + expLevel_1_elite1;
            }
          } else if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 < 400) {
            if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 % 400 != 0) {
              resultExp1Box_elite1 = "*" + expLevel_1_elite1;
            }
          }
        } else if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 < 1000) {
          if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 >= 400) {
            resultExp2Box_elite1 = "*" + expLevel_2_elite1;
            if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 % 400 != 0) {
              resultExp1Box_elite1 = "*" + expLevel_1_elite1;
            }
          } else if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 < 400) {
            if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 % 400 != 0) {
              resultExp1Box_elite1 = "*" + expLevel_1_elite1;
            }
          }
        }
        //从初级作战记录开始
      } else if ((sumOfExpFin_elite1 - sumOfExp_elite1) < 1000) {
        if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 >= 400) {
          resultExp2Box_elite1 = "*" + expLevel_2_elite1;
          if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 % 400 != 0) {
            resultExp1Box_elite1 = "*" + expLevel_1_elite1;
          }
        } else if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 < 400) {
          if ((sumOfExpFin_elite1 - sumOfExp_elite1) % 2000 % 1000 % 400 != 0) {
            resultExp1Box_elite1 = "*" + expLevel_1_elite1;
          }
        }
      }
      resultExp1_elite1.innerHTML = resultExp1Box_elite1;
      resultExp2_elite1.innerHTML = resultExp2Box_elite1;
      resultExp3_elite1.innerHTML = resultExp3Box_elite1;
      resultExp4_elite1.innerHTML = resultExp4Box_elite1;
      //螺 旋 地 狱 结束
      //归零二度
      sumOfCost_elite1 = 0;
      sumOfExp_elite1 = 0;
      sumOfCostFin_elite1 = 0;
      sumOfExpFin_elite1 = 0;
      resultExp1Box_elite1 = "";
      resultExp2Box_elite1 = "";
      resultExp3Box_elite1 = "";
      resultExp4Box_elite1 = "";
    }
    // 精英1结束

    // 精英2
    // 三回啊三回
    sumOfCost_elite2 = 0;
    sumOfExp_elite2 = 0;
    sumOfCostFin_elite2 = 0;
    sumOfExpFin_elite2 = 0;
    resultExp1Box_elite2 = "";
    resultExp2Box_elite2 = "";
    resultExp3Box_elite2 = "";
    resultExp4Box_elite2 = "";
    // 输入框
    elite2Level = document.getElementById("input1_elite2");
    elite2LevelFin = document.getElementById("input2_elite2");
    // 结果
    resultCost_elite2 = document.getElementById("resultCost_elite2");
    resultEx4_elite2 = document.getElementById("resultEx4_elite2");
    resultEx3_elite2 = document.getElementById("resultEx3_elite2");
    resultEx2_elite2 = document.getElementById("resultEx2_elite2");
    resultEx1_elite2 = document.getElementById("resultEx1_elite2");
    // 计算
    cclt_elite2 = document.getElementById("button3");
    elite2Level.innerHTML = "<input type=\"text\" id=\"level_input_elite2\" maxlength=2>";
    elite2LevelFin.innerHTML = "<input type=\"text\" id=\"level_inputFin_elite2\" maxlength=2>";
    arrOfCost_elite2 = [76, 124, 173, 225, 279, 334, 392, 451, 513, 577, 642, 710, 780, 851, 925, 1001, 1079, 1159, 1240, 1324, 1410, 1498, 1588, 1680, 1773, 1869, 1967, 2067, 2169, 2273, 2413, 2556, 2702, 2851, 3003, 3158, 3316, 3477, 3640, 3807, 3976, 4149, 4324, 4502, 4684, 4868, 5055, 5245, 5438, 5634, 5867, 6103, 6343, 6587, 6835, 7086, 7340, 7599, 7861, 8127, 8613, 9108, 9610, 10120, 10637, 11163, 11696, 12238, 12882, 13343, 14159, 14988, 15828, 16681, 17545, 18422, 19311, 20213, 21126, 22092, 23722, 25380, 27065, 28778, 30519, 32287, 34083, 35906, 37745];
    arrOfExp_elite2 = [191, 303, 415, 527, 639, 751, 863, 975, 1087, 1199, 1311, 1423, 1535, 1647, 1759, 1871, 1983, 2095, 2207, 2319, 2431, 2543, 2655, 2767, 2879, 2991, 3103, 3215, 3327, 3439, 3602, 3765, 3928, 4091, 4254, 4417, 4580, 4743, 4906, 5069, 5232, 5395, 5558, 5721, 5884, 6047, 6210, 6373, 6536, 6699, 6902, 7105, 7308, 7511, 7714, 7917, 8120, 8323, 8526, 8729, 9163, 9597, 10031, 10465, 10899, 11333, 11767, 12201, 12729, 13069, 13747, 14425, 15103, 15781, 16459, 17137, 17815, 18493, 19171, 19849, 21105, 22361, 23617, 24873, 26129, 27385, 28641, 29897, 31143];
    cclt_elite2.innerHTML = "<button id=\"btn3\" style=\"border:none;border-radius: 5px; box-shadow:2px 1px 3px grey; width:50px; background-color: rgb(255, 145, 71); background-image: linear-gradient(to bottom right, rgb(255, 81, 0), rgb(255, 255, 0),rgb(187, 255, 0));color:rgb(180, 0, 0);\">计算</button>";
    // 按钮
    btn3 = document.getElementById("btn3");
    level_input_elite2 = document.getElementById("level_input_elite2");
    level_inputFin_elite2 = document.getElementById("level_inputFin_elite2");
    btn3.onclick = function () {
      // 当前等级
      for (x = 0; x < level_input_elite2.value - 1; x++) {
        sumOfCost_elite2 += arrOfCost_elite2[x];
        sumOfExp_elite2 += arrOfExp_elite2[x];
      }
      //最终等级
      for (y = 0; y < level_inputFin_elite2.value - 1; y++) {
        sumOfCostFin_elite2 += arrOfCost_elite2[y];
        sumOfExpFin_elite2 += arrOfExp_elite2[y];
      }
      resultCost_elite2.innerHTML = "*" + (sumOfCostFin_elite2 - sumOfCost_elite2);
      //  螺 旋 地 狱 开始
      // 高级作战记录/个	
      var expLevel_4_elite2 = Math.trunc((sumOfExpFin_elite2 - sumOfExp_elite2) / 2000);
      // 中级作战记录/个
      var expLevel_3_elite2 = Math.trunc(((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000) / 1000);
      // 初级作战记录/个
      var expLevel_2_elite2 = Math.trunc(((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000) / 400);
      // 基础作战记录/个
      var expLevel_1_elite2 = Math.ceil(((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 % 400) / 200);

      // 从高级作战记录开始
      resultExp4Box_elite2 = "*" + expLevel_4_elite2;
      if ((sumOfExpFin_elite2 - sumOfExp_elite2) > 2000) {
        // 从高级作战记录开始
        resultExp4Box_elite2 = "*" + expLevel_4_elite2;
        if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 >= 1000) {
          resultExp3Box_elite2 = "*" + expLevel_3_elite2;
          if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 >= 400) {
            resultExp2Box_elite2 = "*" + expLevel_2_elite2;
            if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 % 400 != 0) {
              resultExp1Box_elite2 = "*" + expLevel_1_elite2;
            }
          } else if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 < 400) {
            if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 % 400 != 0) {
              resultExp1Box_elite2 = "*" + expLevel_1_elite2;
            }
          }
        } else if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 < 1000) {
          if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 >= 400) {
            resultExp2Box_elite2 = "*" + expLevel_2_elite2;
            if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 % 400 != 0) {
              resultExp1Box_elite2 = "*" + expLevel_1_elite2;
            }
          } else if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 < 400) {
            if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 % 400 != 0) {
              resultExp1Box_elite2 = "*" + expLevel_1_elite2;
            }
          }
        }
        //从中级作战记录开始
      } else if ((sumOfExpFin_elite2 - sumOfExp_elite2) < 2000) {
        if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 >= 1000) {
          resultExp3Box_elite2 = "*" + expLevel_3_elite2;
          if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 >= 400) {
            resultExp2Box_elite2 = "*" + expLevel_2_elite2;
            if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 % 400 != 0) {
              resultExp1Box_elite2 = "*" + expLevel_1_elite2;
            }
          } else if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 < 400) {
            if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 % 400 != 0) {
              resultExp1Box_elite2 = "*" + expLevel_1_elite2;
            }
          }
        } else if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 < 1000) {
          if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 >= 400) {
            resultExp2Box_elite2 = "*" + expLevel_2_elite2;
            if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 % 400 != 0) {
              resultExp1Box_elite2 = "*" + expLevel_1_elite2;
            }
          } else if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 < 400) {
            if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 % 400 != 0) {
              resultExp1Box_elite2 = "*" + expLevel_1_elite2;
            }
          }
        }
        //从初级作战记录开始
      } else if ((sumOfExpFin_elite2 - sumOfExp_elite2) < 1000) {
        if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 >= 400) {
          resultExp2Box_elite2 = "*" + expLevel_2_elite2;
          if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 % 400 != 0) {
            resultExp1Box_elite2 = "*" + expLevel_1_elite2;
          }
        } else if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 < 400) {
          if ((sumOfExpFin_elite2 - sumOfExp_elite2) % 2000 % 1000 % 400 != 0) {
            resultExp1Box_elite2 = "*" + expLevel_1_elite2;
          }
        }
      }
      resultExp1_elite2.innerHTML = resultExp1Box_elite2;
      resultExp2_elite2.innerHTML = resultExp2Box_elite2;
      resultExp3_elite2.innerHTML = resultExp3Box_elite2;
      resultExp4_elite2.innerHTML = resultExp4Box_elite2;
      //螺 旋 地 狱 结束
      //归零
      sumOfCost_elite2 = 0;
      sumOfExp_elite2 = 0;
      sumOfCostFin_elite2 = 0;
      sumOfExpFin_elite2 = 0;
      resultExp1Box_elite2 = "";
      resultExp2Box_elite2 = "";
      resultExp3Box_elite2 = "";
      resultExp4Box_elite2 = "";
    }
    // 结束啦艹
