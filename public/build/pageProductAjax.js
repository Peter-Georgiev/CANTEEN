(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pageProductAjax"],{

/***/ "./assets/js/custom-page/applyDataTable.js":
/*!*************************************************!*\
  !*** ./assets/js/custom-page/applyDataTable.js ***!
  \*************************************************/
/*! exports provided: table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "table", function() { return table; });
var table = $('#dataTable');

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/custom-page/button-row-table.js":
/*!***************************************************!*\
  !*** ./assets/js/custom-page/button-row-table.js ***!
  \***************************************************/
/*! exports provided: editButton, deleteButton, addOnButton, rowTextDangerOnOff, paidOnButton, printPdfButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editButton", function() { return editButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteButton", function() { return deleteButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOnButton", function() { return addOnButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rowTextDangerOnOff", function() { return rowTextDangerOnOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paidOnButton", function() { return paidOnButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printPdfButton", function() { return printPdfButton; });
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5__);







function rowTextDangerOnOff() {
  var isOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var token = window.location.pathname.trim().split('/');
  var id = Number(token[token.length - 1]);

  if (id <= 0) {
    return false;
  }

  var trToken = $('#dataTable tbody tr');
  $(trToken).each(function () {
    if (Number($(this).attr('id')) === id) {
      if (isOn) {
        $(this).addClass('text-danger');
      } else {
        $(this).removeClass('text-danger');
      }
    }
  });
}

function deleteButton(pathname, rowTable, messages) {
  var msg = "!!! \u0412\u041D\u0418\u041C\u0410\u041D\u0418\u0415 !!!\n" + messages;

  function confirmDialog(msg) {
    return new Promise(function (resolve, reject) {
      var add = $('div #add');
      var edit = $('div #edit');
      var addOnBtn = $('#addOnBtn');

      if (add.css('display') !== 'none') {
        add.hide();
        addOnBtn.show();
      }

      if (edit.css('display') !== 'none') {
        edit.hide();
        addOnBtn.show();
      }

      var confirmed = window.confirm(msg);
      return confirmed ? resolve(true) : reject(false);
    });
  }

  function href(pathname) {
    window.location.href = pathname;
  }

  function escape() {
    alert('Операцията отказана!');
  }

  confirmDialog(msg).then(function () {
    return href(pathname);
  })["catch"](function (err) {
    return escape();
  });
  /*
      let promise = new Promise(function(resolve, reject) {
          rowTextDangerOnOff(false);
  
          let add = $('div #add');
          let edit = $('div #edit');
          let addOnBtn = $('#addOnBtn');
  
          if (add.css('display') !== 'none') {
              add.hide();
              addOnBtn.show();
          }
  
          if (edit.css('display') !== 'none') {
              edit.hide();
              addOnBtn.show();
          }
  
          setTimeout(function() { resolve([
  
              ]);
          }, 30);
      });
  
      promise.then(function(value) {
          if (confirm(`!!! ВНИМАНИЕ !!!\n` + messages + ' patch:' + pathname)) {
              window.location.href = pathname;
          }
          return false;
      })
   */
}

function editButton(pathname) {
  window.location.href = pathname; //fetch(`/student/edit/${data.studentId}`, {
  //  method: 'POST'
  //}).then(res => window.location.reload());
}

function addOnButton(pathname) {
  window.location.href = pathname;
}

function paidOnButton(pathname) {
  window.location.href = pathname;
}

function printPdfButton(pathname) {
  window.location.href = pathname;
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/custom-page/languageDataTable.js":
/*!****************************************************!*\
  !*** ./assets/js/custom-page/languageDataTable.js ***!
  \****************************************************/
/*! exports provided: bg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bg", function() { return bg; });
var bg = {
  "language": {
    "lengthMenu": "Показване на _MENU_ записи на страница",
    "zeroRecords": "Нищо не е намерено - съжалявам",
    "info": "Показване на страница _PAGE_ от _PAGES_",
    "infoEmpty": "Няма налични записи",
    "infoFiltered": "(филтрирана от _MAX_ общо записи)",
    "infoPostFix": "",
    "thousands": ",",
    "loadingRecords": "Зарежда...",
    "processing": "Обработка...",
    "search": "Търсене в таблицата по-долу:",
    "paginate": {
      "first": "Първа",
      "last": "Последна",
      "next": "Следваща",
      "previous": "Предишна"
    },
    "aria": {
      "sortAscending": ": Сортиране на колона възходящо",
      "sortDescending": ": Сортиране на колона низходящо"
    }
  },
  "null": "няма данни",
  "checkBox": "При избор на опцията: ",
  "emptyMessage": [{
    'message': "1. В поле 'Търсене' можеш да търсиш по: id, потребител, име, фамилия, име и фамилия, имейл или модул."
  }, {
    'message': "2. При 'Търсене' по id трябва да въведете id: и номера. Например id:1234."
  }, {
    'message': "3. При 'Търсене' по име, фамилия, име и фамилия - преобразува латиница в кирилица и обратно."
  }, {
    'message': "4. При 'Търсене' по модул трябва да въведете името на модула. (Например: A1.1)"
  }, {
    'message': "5. 'Изгледани проценти от модула' ти дават справка каква част от видеата курсистът е изгледал напълно."
  }, {
    'message': "6. 'Само регистриран' - тук излизат всички регистрирани потребители, които са гледали безплатни видеа."
  }, {
    'message': "7. 'С достъп до модул' - тук излизат само курсистите, които имат даден достъп до определен модул."
  }, {
    'message': "8. '\u0422\u044A\u0440\u0441\u0435\u043D\u0435 \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u0430\u0442\u0430 \u043F\u043E-\u0434\u043E\u043B\u0443:' - \u0442\u044A\u0440\u0441\u0438 \u043F\u043E \u0434\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043D \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0439 \u0432 \u0438\u0437\u0433\u043E\u0442\u0432\u0435\u043D\u0430\u0442\u0430 \u0432\u0435\u0447\u0435 \u0441\u043F\u0440\u0430\u0432\u043A\u0430."
  }]
};


/***/ }),

/***/ "./assets/js/custom-page/page-productAjax.js":
/*!***************************************************!*\
  !*** ./assets/js/custom-page/page-productAjax.js ***!
  \***************************************************/
/*! exports provided: path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "path", function() { return path; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _applyDataTable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./applyDataTable.js */ "./assets/js/custom-page/applyDataTable.js");
/* harmony import */ var _button_row_table_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./button-row-table.js */ "./assets/js/custom-page/button-row-table.js");
/* harmony import */ var _languageDataTable_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./languageDataTable.js */ "./assets/js/custom-page/languageDataTable.js");











var currentPathname = window.location.pathname;
var path = '/product';
$(document).ready(function () {
  $.ajax({
    url: path,
    type: 'POST',
    dataType: 'json',
    async: true,
    success: function success(data, status) {
      console.log(data);
      _applyDataTable_js__WEBPACK_IMPORTED_MODULE_8__["table"].dataTable({
        data: data['products'],
        rowId: 'id',
        //pagingType: 'full_numbers', // "simple" option for 'Previous' and 'Next' buttons only
        columns: [{
          data: "class",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Клас'
        }, {
          data: "student",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Ученик'
        }, {
          data: 'price',
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Цена'
        }, {
          data: function data(row, type, val, meta) {
            if (row.isPaid) {
              return 'Платено';
            } else if (!row.isPaid) {
              return 'Неплатено';
            }

            return "<i></i>";
          },
          title: 'Статус'
        }, {
          data: function data(row, type, val, meta) {
            var number = Number(row.feeInDays);

            if (number === 1) {
              return number + ' ден';
            } else if (number === 0 || number > 1) {
              return number + ' дни';
            }

            return "<i></i>";
          },
          title: 'Такси в дни'
        }, {
          data: 'forMonth',
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Такса за месец'
        }, {
          data: "dateCreate",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Дата на създаване'
        }, {
          data: function data(row, type, val, meta) {
            var lastEdit = row.lastEdit;
            var dateCreate = row.dateCreate;

            if (lastEdit !== dateCreate) {
              return lastEdit;
            } else if (lastEdit === dateCreate) {
              return 'Няма';
            }

            return "<i></i>";
          },
          title: 'Редакция'
        },
        /*{
         title: 'Плащане'
        }, */
        {
          title: 'Редактиране'
        }, {
          title: 'Изтриване'
        }],
        columnDefs: [
        /*{
        targets: -3,
        data: function (row, type, val, meta) {
        if (row.isPaid) {
        return "<button id='paidBtn' class='btn-info' disabled>Платено!</button>";
        }
        return  "<button id='paidBtn' class='btn-success'>Плащане!</button>";
        },
        }, */
        {
          targets: -2,
          data: function data(row, type, val, meta) {
            if (row.isPaid) {
              return "<button id='editBtn' class='btn-default' disabled>Редактиране!</button>";
            }

            return "<button id='editBtn' class='btn-warning'>Редактиране!</button>";
          }
        }, {
          targets: -1,
          data: function data(row, type, val, meta) {
            if (row.isPaid) {
              return "<button id='deleteBtn' class='btn-default' disabled>Изтриване!</button>";
            }

            return "<button id='deleteBtn' class='btn-danger'>Изтриване!</button>";
          }
        }],
        order: [[0, 'asc'], [1, 'asc'], [3, 'des']],
        language: _languageDataTable_js__WEBPACK_IMPORTED_MODULE_10__["bg"].language,
        dom: 'lfBSrtip',
        buttons: [{
          extend: 'copy'
        }, //{extend: 'csv'},
        {
          extend: 'excel'
        }, {
          //extend: 'pdfHtml5',
          extend: 'pdf',
          orientation: 'landscape',
          pageSize: 'LEGAL'
        }, {
          extend: 'print'
        }],
        drawCallback: function drawCallback() {
          $('.dataTables_paginate a.paginate_button:not(.disabled)', this.api().table().container()).on('click', function () {
            Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_9__["rowTextDangerOnOff"])();
          });
        },
        fnDrawCallback: function fnDrawCallback(oSettings) {
          $('#loadingBox').hide();
          $('.table-responsive').show();
          Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_9__["rowTextDangerOnOff"])();
          productCreate(data);
          productEditId(data);
          _applyDataTable_js__WEBPACK_IMPORTED_MODULE_8__["table"].on('click', 'button', function () {
            var rowTable = $(this).parent().parent();
            rowTable.addClass("text-danger");
            var rowText = rowTable.children().map(function () {
              return $.trim($(this).text());
            }).get();
            var id = rowTable.attr('id');

            if (this.id === 'deleteBtn') {
              var studentFullName = rowText[0];
              var className = rowText[1];
              var forMonth = rowText[5];
              var price = rowText[3];
              var message = "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u0442\u0435 \u043F\u043B\u0430\u0449\u0430\u043D\u0435 \u043D\u0430 \"".concat(studentFullName, "\" \u043E\u0442 \"").concat(className, "\"\n") + "\u0437\u0430 \u043C\u0435\u0441\u0435\u0446 \"".concat(forMonth, "\", \u0441\u0443\u043C\u0430 ").concat(price, " \u043B\u0432.!!!");
              Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_9__["deleteButton"])("".concat(path, "/delete/").concat(id), rowTable, message);
            } else if (this.id === 'editBtn') {
              Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_9__["editButton"])("".concat(path, "/edit/").concat(id));
            } else if (this.id === 'paidBtn') {//paidOnButton(`/payment/create/by/${id}`);
            }
          });
          $('#addOnBtn button').on('click', function () {
            Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_9__["addOnButton"])("".concat(path, "/create"));
          });
        }
      });
    },
    error: function error(xhr, textStatus, errorThrown) {
      $('#loadingBox').hide();
      $('.table-responsive').hide();
      $('#errorBox span').text('Грешка в данните от сървъра!');
      $('#errorBox').show();
    }
  });

  function productCreate(data) {
    if (currentPathname === "".concat(path, "/create")) {
      hiddenProductForMonthDay();
      selectedOption(data);
      $('#class #class_id').on('change', function (event) {
        selectedOption(data, 0, Number(event.target.value));
      });
    }
  }

  function productEditId(data) {
    hiddenProductForMonthDay();
    var res = currentPathname.split('/');
    var count = 0;

    for (var i = 0; i < res.length; i++) {
      if (res[i] === 'product' || res[i] === 'edit') {
        count++;
      }
    }

    if (count !== 2) {
      return false;
    }

    var id = Number(res[res.length - 1]);
    $('#dataTable tbody #' + id).addClass("text-danger");
    selectedOption(data, id);
    $('#class #class_id').on('change', function (event) {
      selectedOption(data, 0, Number(event.target.value));
    });
  }

  function selectedOption(data) {
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var classId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var i = 0;
    var tempFirstOption = '';
    var outputClass = [];
    var outputStudent = [];
    $.each(data['products'], function (key, value) {
      if (id === Number(value.id)) {
        classId = value.classId;
        return false;
      }
    });
    $.each(data['classes'], function (key, value) {
      if (classId > 0 && i === 0) {
        outputClass.push('');
      }

      if (value.id !== classId) {
        outputClass.push('<option value="' + value.id + '">' + value.name + '</option>');
      } else {
        tempFirstOption = '<option value="' + value.id + '">' + value.name + '</option>';
      }

      if (classId > 0) {
        if (value.id === classId) {
          $.each(value.students, function (key, value) {
            outputStudent.push('<option value="' + value.studentId + '">' + value.student + '</option>');
          });
        }
      } else {
        $.each(value.students, function (key, value) {
          outputStudent.push('<option value="' + value.studentId + '">' + value.student + '</option>');
        });
      }

      i++;
    });

    if (classId > 0) {
      outputClass[0] = tempFirstOption;
    }

    $('#class #class_id').html(outputClass.join(''));
    $('#student #student_id').html(outputStudent.join(''));
  }

  function hiddenProductForMonthDay() {
    var productForMonthDay = $('#product_forMonth_day');

    if (productForMonthDay) {
      productForMonthDay.hide();
    }
  }
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/sloppy-array-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/sloppy-array-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ "./node_modules/core-js/internals/v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var SLOPPY_METHOD = sloppyArrayMethod('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || SLOPPY_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ })

},[["./assets/js/custom-page/page-productAjax.js","runtime","vendors~app~pageClassTable~pageEndedMonth~pageEndedMonthInfo~pagePaymentAjax~pagePaymentCreateAjax~p~58355e07","vendors~pageClassTable~pagePaymentAjax~pagePaymentCreateAjax~pagePaymentEditAjax~pagePricePerDayAjax~c15c64ac","vendors~pageClassTable~pagePaymentAjax~pagePaymentEditAjax~pagePricePerDayAjax~pageProductAjax~pageP~40fc3f6f","vendors~pageClassTable~pagePaymentAjax~pagePricePerDayAjax~pageProductAjax~pageStudent"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tLXBhZ2UvYXBwbHlEYXRhVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2J1dHRvbi1yb3ctdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2xhbmd1YWdlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20tcGFnZS9wYWdlLXByb2R1Y3RBamF4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3Nsb3BweS1hcnJheS1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qcyJdLCJuYW1lcyI6WyJ0YWJsZSIsIiQiLCJyb3dUZXh0RGFuZ2VyT25PZmYiLCJpc09uIiwidG9rZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidHJpbSIsInNwbGl0IiwiaWQiLCJOdW1iZXIiLCJsZW5ndGgiLCJ0clRva2VuIiwiZWFjaCIsImF0dHIiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZGVsZXRlQnV0dG9uIiwicm93VGFibGUiLCJtZXNzYWdlcyIsIm1zZyIsImNvbmZpcm1EaWFsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFkZCIsImVkaXQiLCJhZGRPbkJ0biIsImNzcyIsImhpZGUiLCJzaG93IiwiY29uZmlybWVkIiwiY29uZmlybSIsImhyZWYiLCJlc2NhcGUiLCJhbGVydCIsInRoZW4iLCJlcnIiLCJlZGl0QnV0dG9uIiwiYWRkT25CdXR0b24iLCJwYWlkT25CdXR0b24iLCJwcmludFBkZkJ1dHRvbiIsImJnIiwiY3VycmVudFBhdGhuYW1lIiwicGF0aCIsImRvY3VtZW50IiwicmVhZHkiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGFUeXBlIiwiYXN5bmMiLCJzdWNjZXNzIiwiZGF0YSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhVGFibGUiLCJyb3dJZCIsImNvbHVtbnMiLCJkZWZhdWx0Q29udGVudCIsInRpdGxlIiwicm93IiwidmFsIiwibWV0YSIsImlzUGFpZCIsIm51bWJlciIsImZlZUluRGF5cyIsImxhc3RFZGl0IiwiZGF0ZUNyZWF0ZSIsImNvbHVtbkRlZnMiLCJ0YXJnZXRzIiwib3JkZXIiLCJsYW5ndWFnZSIsImRvbSIsImJ1dHRvbnMiLCJleHRlbmQiLCJvcmllbnRhdGlvbiIsInBhZ2VTaXplIiwiZHJhd0NhbGxiYWNrIiwiYXBpIiwiY29udGFpbmVyIiwib24iLCJmbkRyYXdDYWxsYmFjayIsIm9TZXR0aW5ncyIsInByb2R1Y3RDcmVhdGUiLCJwcm9kdWN0RWRpdElkIiwicGFyZW50Iiwicm93VGV4dCIsImNoaWxkcmVuIiwibWFwIiwidGV4dCIsImdldCIsInN0dWRlbnRGdWxsTmFtZSIsImNsYXNzTmFtZSIsImZvck1vbnRoIiwicHJpY2UiLCJtZXNzYWdlIiwiZXJyb3IiLCJ4aHIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJoaWRkZW5Qcm9kdWN0Rm9yTW9udGhEYXkiLCJzZWxlY3RlZE9wdGlvbiIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJyZXMiLCJjb3VudCIsImkiLCJjbGFzc0lkIiwidGVtcEZpcnN0T3B0aW9uIiwib3V0cHV0Q2xhc3MiLCJvdXRwdXRTdHVkZW50Iiwia2V5IiwicHVzaCIsIm5hbWUiLCJzdHVkZW50cyIsInN0dWRlbnRJZCIsInN0dWRlbnQiLCJodG1s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QUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDM0RZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDekQsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELHdCQUF3QixtQkFBTyxDQUFDLGlHQUFrQzs7QUFFbEU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxxRUFBcUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDakJELGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCxxQkFBcUIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6InBhZ2VQcm9kdWN0QWpheC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCB0YWJsZSA9ICQoJyNkYXRhVGFibGUnKTtcclxuXHJcbmV4cG9ydCB7dGFibGV9OyIsImZ1bmN0aW9uIHJvd1RleHREYW5nZXJPbk9mZihpc09uID0gdHJ1ZSkge1xyXG4gICAgbGV0IHRva2VuID0gKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcclxuICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgLnNwbGl0KCcvJyk7XHJcblxyXG4gICAgbGV0IGlkID0gTnVtYmVyKHRva2VuW3Rva2VuLmxlbmd0aCAtIDFdKTtcclxuICAgIGlmIChpZCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IHRyVG9rZW4gPSAkKCcjZGF0YVRhYmxlIHRib2R5IHRyJyk7XHJcblxyXG4gICAgJCh0clRva2VuKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKE51bWJlcigkKHRoaXMpLmF0dHIoJ2lkJykpID09PSBpZCkge1xyXG4gICAgICAgICAgICBpZiAoaXNPbikge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygndGV4dC1kYW5nZXInKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3RleHQtZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBkZWxldGVCdXR0b24ocGF0aG5hbWUsIHJvd1RhYmxlLCBtZXNzYWdlcykge1xyXG4gICAgbGV0IG1zZyA9IGAhISEg0JLQndCY0JzQkNCd0JjQlSAhISFcXG5gICsgbWVzc2FnZXM7XHJcbiAgICBmdW5jdGlvbiBjb25maXJtRGlhbG9nKG1zZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGxldCBhZGQgPSAkKCdkaXYgI2FkZCcpO1xyXG4gICAgICAgICAgICBsZXQgZWRpdCA9ICQoJ2RpdiAjZWRpdCcpO1xyXG4gICAgICAgICAgICBsZXQgYWRkT25CdG4gPSAkKCcjYWRkT25CdG4nKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhZGQuY3NzKCdkaXNwbGF5JykgIT09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgYWRkLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGFkZE9uQnRuLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGVkaXQuY3NzKCdkaXNwbGF5JykgIT09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgZWRpdC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBhZGRPbkJ0bi5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBjb25maXJtZWQgPSB3aW5kb3cuY29uZmlybShtc2cpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpcm1lZCA/IHJlc29sdmUodHJ1ZSkgOiByZWplY3QoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhyZWYocGF0aG5hbWUpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVzY2FwZSgpIHtcclxuICAgICAgICBhbGVydCgn0J7Qv9C10YDQsNGG0LjRj9GC0LAg0L7RgtC60LDQt9Cw0L3QsCEnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maXJtRGlhbG9nKG1zZylcclxuICAgICAgICAudGhlbigoKSA9PiAgaHJlZihwYXRobmFtZSkgKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gZXNjYXBlKCkpO1xyXG4vKlxyXG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICByb3dUZXh0RGFuZ2VyT25PZmYoZmFsc2UpO1xyXG5cclxuICAgICAgICBsZXQgYWRkID0gJCgnZGl2ICNhZGQnKTtcclxuICAgICAgICBsZXQgZWRpdCA9ICQoJ2RpdiAjZWRpdCcpO1xyXG4gICAgICAgIGxldCBhZGRPbkJ0biA9ICQoJyNhZGRPbkJ0bicpO1xyXG5cclxuICAgICAgICBpZiAoYWRkLmNzcygnZGlzcGxheScpICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgYWRkLmhpZGUoKTtcclxuICAgICAgICAgICAgYWRkT25CdG4uc2hvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVkaXQuY3NzKCdkaXNwbGF5JykgIT09ICdub25lJykge1xyXG4gICAgICAgICAgICBlZGl0LmhpZGUoKTtcclxuICAgICAgICAgICAgYWRkT25CdG4uc2hvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgcmVzb2x2ZShbXHJcblxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9LCAzMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICBpZiAoY29uZmlybShgISEhINCS0J3QmNCc0JDQndCY0JUgISEhXFxuYCArIG1lc3NhZ2VzICsgJyBwYXRjaDonICsgcGF0aG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pXHJcbiAqL1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0QnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG4gICAgLy9mZXRjaChgL3N0dWRlbnQvZWRpdC8ke2RhdGEuc3R1ZGVudElkfWAsIHtcclxuICAgIC8vICBtZXRob2Q6ICdQT1NUJ1xyXG4gICAgLy99KS50aGVuKHJlcyA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRPbkJ1dHRvbihwYXRobmFtZSkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRobmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFpZE9uQnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludFBkZkJ1dHRvbihwYXRobmFtZSkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRobmFtZTtcclxufVxyXG5cclxuZXhwb3J0IHtlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24sIGFkZE9uQnV0dG9uLCByb3dUZXh0RGFuZ2VyT25PZmYsIHBhaWRPbkJ1dHRvbiwgcHJpbnRQZGZCdXR0b259OyIsImxldCBiZyA9IHtcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwibGVuZ3RoTWVudVwiOiBcItCf0L7QutCw0LfQstCw0L3QtSDQvdCwIF9NRU5VXyDQt9Cw0L/QuNGB0Lgg0L3QsCDRgdGC0YDQsNC90LjRhtCwXCIsXHJcbiAgICAgICAgXCJ6ZXJvUmVjb3Jkc1wiOiBcItCd0LjRidC+INC90LUg0LUg0L3QsNC80LXRgNC10L3QviAtINGB0YrQttCw0LvRj9Cy0LDQvFwiLFxyXG4gICAgICAgIFwiaW5mb1wiOiBcItCf0L7QutCw0LfQstCw0L3QtSDQvdCwINGB0YLRgNCw0L3QuNGG0LAgX1BBR0VfINC+0YIgX1BBR0VTX1wiLFxyXG4gICAgICAgIFwiaW5mb0VtcHR5XCI6IFwi0J3Rj9C80LAg0L3QsNC70LjRh9C90Lgg0LfQsNC/0LjRgdC4XCIsXHJcbiAgICAgICAgXCJpbmZvRmlsdGVyZWRcIjogXCIo0YTQuNC70YLRgNC40YDQsNC90LAg0L7RgiBfTUFYXyDQvtCx0YnQviDQt9Cw0L/QuNGB0LgpXCIsXHJcbiAgICAgICAgXCJpbmZvUG9zdEZpeFwiOiBcIlwiLFxyXG4gICAgICAgIFwidGhvdXNhbmRzXCI6IFwiLFwiLFxyXG4gICAgICAgIFwibG9hZGluZ1JlY29yZHNcIjogXCLQl9Cw0YDQtdC20LTQsC4uLlwiLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiBcItCe0LHRgNCw0LHQvtGC0LrQsC4uLlwiLFxyXG4gICAgICAgIFwic2VhcmNoXCI6IFwi0KLRitGA0YHQtdC90LUg0LIg0YLQsNCx0LvQuNGG0LDRgtCwINC/0L4t0LTQvtC70YM6XCIsXHJcbiAgICAgICAgXCJwYWdpbmF0ZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZmlyc3RcIjogXCLQn9GK0YDQstCwXCIsXHJcbiAgICAgICAgICAgIFwibGFzdFwiOiBcItCf0L7RgdC70LXQtNC90LBcIixcclxuICAgICAgICAgICAgXCJuZXh0XCI6IFwi0KHQu9C10LTQstCw0YnQsFwiLFxyXG4gICAgICAgICAgICBcInByZXZpb3VzXCI6IFwi0J/RgNC10LTQuNGI0L3QsFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFyaWFcIjoge1xyXG4gICAgICAgICAgICBcInNvcnRBc2NlbmRpbmdcIjogXCI6INCh0L7RgNGC0LjRgNCw0L3QtSDQvdCwINC60L7Qu9C+0L3QsCDQstGK0LfRhdC+0LTRj9GJ0L5cIixcclxuICAgICAgICAgICAgXCJzb3J0RGVzY2VuZGluZ1wiOiBcIjog0KHQvtGA0YLQuNGA0LDQvdC1INC90LAg0LrQvtC70L7QvdCwINC90LjQt9GF0L7QtNGP0YnQvlwiXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIm51bGxcIjogXCLQvdGP0LzQsCDQtNCw0L3QvdC4XCIsXHJcbiAgICBcImNoZWNrQm94XCI6IFwi0J/RgNC4INC40LfQsdC+0YAg0L3QsCDQvtC/0YbQuNGP0YLQsDogXCIsXHJcbiAgICBcImVtcHR5TWVzc2FnZVwiOiBbXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCIxLiDQkiDQv9C+0LvQtSAn0KLRitGA0YHQtdC90LUnINC80L7QttC10Ygg0LTQsCDRgtGK0YDRgdC40Ygg0L/QvjogaWQsINC/0L7RgtGA0LXQsdC40YLQtdC7LCDQuNC80LUsINGE0LDQvNC40LvQuNGPLCDQuNC80LUg0Lgg0YTQsNC80LjQu9C40Y8sINC40LzQtdC50Lsg0LjQu9C4INC80L7QtNGD0LsuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiMi4g0J/RgNC4ICfQotGK0YDRgdC10L3QtScg0L/QviBpZCDRgtGA0Y/QsdCy0LAg0LTQsCDQstGK0LLQtdC00LXRgtC1IGlkOiDQuCDQvdC+0LzQtdGA0LAuINCd0LDQv9GA0LjQvNC10YAgaWQ6MTIzNC5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCIzLiDQn9GA0LggJ9Ci0YrRgNGB0LXQvdC1JyDQv9C+INC40LzQtSwg0YTQsNC80LjQu9C40Y8sINC40LzQtSDQuCDRhNCw0LzQuNC70LjRjyAtINC/0YDQtdC+0LHRgNCw0LfRg9Cy0LAg0LvQsNGC0LjQvdC40YbQsCDQsiDQutC40YDQuNC70LjRhtCwINC4INC+0LHRgNCw0YLQvdC+LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjQuINCf0YDQuCAn0KLRitGA0YHQtdC90LUnINC/0L4g0LzQvtC00YPQuyDRgtGA0Y/QsdCy0LAg0LTQsCDQstGK0LLQtdC00LXRgtC1INC40LzQtdGC0L4g0L3QsCDQvNC+0LTRg9C70LAuICjQndCw0L/RgNC40LzQtdGAOiBBMS4xKVwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjUuICfQmNC30LPQu9C10LTQsNC90Lgg0L/RgNC+0YbQtdC90YLQuCDQvtGCINC80L7QtNGD0LvQsCcg0YLQuCDQtNCw0LLQsNGCINGB0L/RgNCw0LLQutCwINC60LDQutCy0LAg0YfQsNGB0YIg0L7RgiDQstC40LTQtdCw0YLQsCDQutGD0YDRgdC40YHRgtGK0YIg0LUg0LjQt9Cz0LvQtdC00LDQuyDQvdCw0L/RitC70L3Qvi5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI2LiAn0KHQsNC80L4g0YDQtdCz0LjRgdGC0YDQuNGA0LDQvScgLSDRgtGD0Log0LjQt9C70LjQt9Cw0YIg0LLRgdC40YfQutC4INGA0LXQs9C40YHRgtGA0LjRgNCw0L3QuCDQv9C+0YLRgNC10LHQuNGC0LXQu9C4LCDQutC+0LjRgtC+INGB0LAg0LPQu9C10LTQsNC70Lgg0LHQtdC30L/Qu9Cw0YLQvdC4INCy0LjQtNC10LAuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiNy4gJ9ChINC00L7RgdGC0YrQvyDQtNC+INC80L7QtNGD0LsnIC0g0YLRg9C6INC40LfQu9C40LfQsNGCINGB0LDQvNC+INC60YPRgNGB0LjRgdGC0LjRgtC1LCDQutC+0LjRgtC+INC40LzQsNGCINC00LDQtNC10L0g0LTQvtGB0YLRitC/INC00L4g0L7Qv9GA0LXQtNC10LvQtdC9INC80L7QtNGD0LsuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IGA4LiAn0KLRitGA0YHQtdC90LUg0LIg0YLQsNCx0LvQuNGG0LDRgtCwINC/0L4t0LTQvtC70YM6JyAtINGC0YrRgNGB0Lgg0L/QviDQtNC+0L/RitC70L3QuNGC0LXQu9C10L0g0LrRgNC40YLQtdGA0LjQuSDQsiDQuNC30LPQvtGC0LLQtdC90LDRgtCwINCy0LXRh9C1INGB0L/RgNCw0LLQutCwLmB9XHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IHtiZ307IiwiaW1wb3J0IHt0YWJsZX0gZnJvbSAnLi9hcHBseURhdGFUYWJsZS5qcydcclxuaW1wb3J0IHtlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24sIGFkZE9uQnV0dG9uLCByb3dUZXh0RGFuZ2VyT25PZmZ9IGZyb20gJy4vYnV0dG9uLXJvdy10YWJsZS5qcyc7XHJcbmltcG9ydCB7Ymd9IGZyb20gJy4vbGFuZ3VhZ2VEYXRhVGFibGUuanMnO1xyXG5jb25zdCBjdXJyZW50UGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbmNvbnN0IHBhdGggPSAnL3Byb2R1Y3QnO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICAgICAgICBwYXRoLFxyXG4gICAgICAgIHR5cGU6ICAgICAgICdQT1NUJyxcclxuICAgICAgICBkYXRhVHlwZTogICAnanNvbicsXHJcbiAgICAgICAgYXN5bmM6ICAgICAgdHJ1ZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBzdGF0dXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgdGFibGUuZGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFbJ3Byb2R1Y3RzJ10sXHJcbiAgICAgICAgICAgICAgICByb3dJZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIC8vcGFnaW5nVHlwZTogJ2Z1bGxfbnVtYmVycycsIC8vIFwic2ltcGxlXCIgb3B0aW9uIGZvciAnUHJldmlvdXMnIGFuZCAnTmV4dCcgYnV0dG9ucyBvbmx5XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcImNsYXNzXCIsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Ca0LvQsNGBJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogXCJzdHVkZW50XCIsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Cj0YfQtdC90LjQuidcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICdwcmljZScsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Cm0LXQvdCwJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHJvdywgdHlwZSwgdmFsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93LmlzUGFpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAn0J/Qu9Cw0YLQtdC90L4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghcm93LmlzUGFpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAn0J3QtdC/0LvQsNGC0LXQvdC+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGk+PC9pPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KHRgtCw0YLRg9GBJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHJvdywgdHlwZSwgdmFsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbnVtYmVyID0gTnVtYmVyKHJvdy5mZWVJbkRheXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyAnINC00LXQvSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAwIHx8IG51bWJlciA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJyDQtNC90LgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxpPjwvaT5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Ci0LDQutGB0Lgg0LIg0LTQvdC4J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ2Zvck1vbnRoJywgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KLQsNC60YHQsCDQt9CwINC80LXRgdC10YYnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcImRhdGVDcmVhdGVcIiwgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0JTQsNGC0LAg0L3QsCDRgdGK0LfQtNCw0LLQsNC90LUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAocm93LCB0eXBlLCB2YWwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXN0RWRpdCA9IHJvdy5sYXN0RWRpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRlQ3JlYXRlID0gcm93LmRhdGVDcmVhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEVkaXQgIT09IGRhdGVDcmVhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGFzdEVkaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxhc3RFZGl0ID09PSBkYXRlQ3JlYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICfQndGP0LzQsCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxpPjwvaT5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Cg0LXQtNCw0LrRhtC40Y8nXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgLyp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0J/Qu9Cw0YnQsNC90LUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKi97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KDQtdC00LDQutGC0LjRgNCw0L3QtSdcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0JjQt9GC0YDQuNCy0LDQvdC1J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uRGVmczogWy8qe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IC0zLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uIChyb3csIHR5cGUsIHZhbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93LmlzUGFpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiPGJ1dHRvbiBpZD0ncGFpZEJ0bicgY2xhc3M9J2J0bi1pbmZvJyBkaXNhYmxlZD7Qn9C70LDRgtC10L3QviE8L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIFwiPGJ1dHRvbiBpZD0ncGFpZEJ0bicgY2xhc3M9J2J0bi1zdWNjZXNzJz7Qn9C70LDRidCw0L3QtSE8L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSwgKi97XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogLTIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHJvdywgdHlwZSwgdmFsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cuaXNQYWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGlkPSdlZGl0QnRuJyBjbGFzcz0nYnRuLWRlZmF1bHQnIGRpc2FibGVkPtCg0LXQtNCw0LrRgtC40YDQsNC90LUhPC9idXR0b24+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiPGJ1dHRvbiBpZD0nZWRpdEJ0bicgY2xhc3M9J2J0bi13YXJuaW5nJz7QoNC10LTQsNC60YLQuNGA0LDQvdC1ITwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHJvdywgdHlwZSwgdmFsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cuaXNQYWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGlkPSdkZWxldGVCdG4nIGNsYXNzPSdidG4tZGVmYXVsdCcgZGlzYWJsZWQ+0JjQt9GC0YDQuNCy0LDQvdC1ITwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxidXR0b24gaWQ9J2RlbGV0ZUJ0bicgY2xhc3M9J2J0bi1kYW5nZXInPtCY0LfRgtGA0LjQstCw0L3QtSE8L2J1dHRvbj5cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgIG9yZGVyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgWzAsICdhc2MnXSwgWzEsICdhc2MnXSwgWzMsICdkZXMnXVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBiZy5sYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgIGRvbTogJ2xmQlNydGlwJyxcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7ZXh0ZW5kOiAnY29weSd9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8ve2V4dGVuZDogJ2Nzdid9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtleHRlbmQ6ICdleGNlbCd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9leHRlbmQ6ICdwZGZIdG1sNScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuZDogJ3BkZicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiAnbGFuZHNjYXBlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6ICdMRUdBTCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtleHRlbmQ6ICdwcmludCd9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuZGF0YVRhYmxlc19wYWdpbmF0ZSBhLnBhZ2luYXRlX2J1dHRvbjpub3QoLmRpc2FibGVkKScsIHRoaXMuYXBpKCkudGFibGUoKS5jb250YWluZXIoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dUZXh0RGFuZ2VyT25PZmYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm5EcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKCBvU2V0dGluZ3MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2xvYWRpbmdCb3gnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRhYmxlLXJlc3BvbnNpdmUnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93VGV4dERhbmdlck9uT2ZmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdENyZWF0ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RWRpdElkKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5vbignY2xpY2snLCAnYnV0dG9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93VGFibGUgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dUYWJsZS5hZGRDbGFzcyhcInRleHQtZGFuZ2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93VGV4dCA9IHJvd1RhYmxlLmNoaWxkcmVuKCkubWFwKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC50cmltKCQodGhpcykudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuZ2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSByb3dUYWJsZS5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaWQgPT09ICdkZWxldGVCdG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3R1ZGVudEZ1bGxOYW1lID0gcm93VGV4dFswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSByb3dUZXh0WzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvck1vbnRoID0gcm93VGV4dFs1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmljZSA9IHJvd1RleHRbM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGDQmNC30YLRgNC40LLQsNGC0LUg0L/Qu9Cw0YnQsNC90LUg0L3QsCBcXFwiJHtzdHVkZW50RnVsbE5hbWV9XFxcIiDQvtGCIFxcXCIke2NsYXNzTmFtZX1cXFwiXFxuYCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYNC30LAg0LzQtdGB0LXRhiBcXFwiJHtmb3JNb250aH1cXFwiLCDRgdGD0LzQsCAke3ByaWNlfSDQu9CyLiEhIWA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uKGAke3BhdGh9L2RlbGV0ZS8ke2lkfWAsIHJvd1RhYmxlLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlkID09PSAnZWRpdEJ0bicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRCdXR0b24oYCR7cGF0aH0vZWRpdC8ke2lkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWQgPT09ICdwYWlkQnRuJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wYWlkT25CdXR0b24oYC9wYXltZW50L2NyZWF0ZS9ieS8ke2lkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNhZGRPbkJ0biBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZE9uQnV0dG9uKGAke3BhdGh9L2NyZWF0ZWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yIDogZnVuY3Rpb24oeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAkKCcjbG9hZGluZ0JveCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnLnRhYmxlLXJlc3BvbnNpdmUnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNlcnJvckJveCBzcGFuJykudGV4dCgn0JPRgNC10YjQutCwINCyINC00LDQvdC90LjRgtC1INC+0YIg0YHRitGA0LLRitGA0LAhJyk7XHJcbiAgICAgICAgICAgICQoJyNlcnJvckJveCcpLnNob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvZHVjdENyZWF0ZShkYXRhKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYXRobmFtZSA9PT0gYCR7cGF0aH0vY3JlYXRlYCkge1xyXG4gICAgICAgICAgICBoaWRkZW5Qcm9kdWN0Rm9yTW9udGhEYXkoKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24oZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAkKCcjY2xhc3MgI2NsYXNzX2lkJykub24oJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24oZGF0YSwgMCwgTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvZHVjdEVkaXRJZChkYXRhKSB7XHJcbiAgICAgICAgaGlkZGVuUHJvZHVjdEZvck1vbnRoRGF5KCk7XHJcbiAgICAgICAgbGV0IHJlcyA9IGN1cnJlbnRQYXRobmFtZS5zcGxpdCgnLycpO1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocmVzW2ldID09PSAncHJvZHVjdCcgfHwgcmVzW2ldID09PSAnZWRpdCcpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvdW50ICE9PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpZCA9ICBOdW1iZXIocmVzW3Jlcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgJCgnI2RhdGFUYWJsZSB0Ym9keSAjJyArIGlkKS5hZGRDbGFzcyhcInRleHQtZGFuZ2VyXCIpO1xyXG5cclxuICAgICAgICBzZWxlY3RlZE9wdGlvbihkYXRhLCBpZCk7XHJcbiAgICAgICAgJCgnI2NsYXNzICNjbGFzc19pZCcpLm9uKCdjaGFuZ2UnLChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbihkYXRhLCAwLCBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0ZWRPcHRpb24oZGF0YSwgaWQgPSAwLCBjbGFzc0lkID0gMCkge1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBsZXQgdGVtcEZpcnN0T3B0aW9uID0gJyc7XHJcbiAgICAgICAgbGV0IG91dHB1dENsYXNzID0gW107XHJcbiAgICAgICAgbGV0IG91dHB1dFN0dWRlbnQgPSBbXTtcclxuXHJcbiAgICAgICAgJC5lYWNoKGRhdGFbJ3Byb2R1Y3RzJ10sIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PT0gTnVtYmVyKHZhbHVlLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NJZCA9IHZhbHVlLmNsYXNzSWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJC5lYWNoKGRhdGFbJ2NsYXNzZXMnXSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoY2xhc3NJZCA+IDAgJiYgaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0Q2xhc3MucHVzaCgnJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5pZCAhPT0gY2xhc3NJZCkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0Q2xhc3MucHVzaCgnPG9wdGlvbiB2YWx1ZT1cIicgKyB2YWx1ZS5pZCArICdcIj4nICsgdmFsdWUubmFtZSArICc8L29wdGlvbj4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRlbXBGaXJzdE9wdGlvbiA9ICc8b3B0aW9uIHZhbHVlPVwiJyArIHZhbHVlLmlkICsgJ1wiPicgKyB2YWx1ZS5uYW1lICsgJzwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjbGFzc0lkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmlkID09PSBjbGFzc0lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKHZhbHVlLnN0dWRlbnRzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRTdHVkZW50LnB1c2goJzxvcHRpb24gdmFsdWU9XCInICsgdmFsdWUuc3R1ZGVudElkICsgJ1wiPicgKyB2YWx1ZS5zdHVkZW50ICsgJzwvb3B0aW9uPicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJC5lYWNoKHZhbHVlLnN0dWRlbnRzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFN0dWRlbnQucHVzaCgnPG9wdGlvbiB2YWx1ZT1cIicgKyB2YWx1ZS5zdHVkZW50SWQgKyAnXCI+JyArIHZhbHVlLnN0dWRlbnQgKyAnPC9vcHRpb24+Jyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChjbGFzc0lkID4gMCkge1xyXG4gICAgICAgICAgICBvdXRwdXRDbGFzc1swXSA9IHRlbXBGaXJzdE9wdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJyNjbGFzcyAjY2xhc3NfaWQnKS5odG1sKG91dHB1dENsYXNzLmpvaW4oJycpKTtcclxuICAgICAgICAkKCcjc3R1ZGVudCAjc3R1ZGVudF9pZCcpLmh0bWwob3V0cHV0U3R1ZGVudC5qb2luKCcnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZGVuUHJvZHVjdEZvck1vbnRoRGF5KCkge1xyXG4gICAgICAgIGxldCBwcm9kdWN0Rm9yTW9udGhEYXkgPSAkKCcjcHJvZHVjdF9mb3JNb250aF9kYXknKTtcclxuICAgICAgICBpZiAocHJvZHVjdEZvck1vbnRoRGF5KSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RGb3JNb250aERheS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0IHtwYXRofTsiLCIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5S2V5ID0gdG9QcmltaXRpdmUoa2V5KTtcbiAgaWYgKHByb3BlcnR5S2V5IGluIG9iamVjdCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIHByb3BlcnR5S2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbcHJvcGVydHlLZXldID0gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gIW1ldGhvZCB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwsbm8tdGhyb3ctbGl0ZXJhbFxuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgdGhyb3cgMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjtcbnZhciBNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJztcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbnZhciBpc0NvbmNhdFNwcmVhZGFibGUgPSBmdW5jdGlvbiAoTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gIHJldHVybiBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KE8pO1xufTtcblxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFTUEVDSUVTX1NVUFBPUlQ7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gdG9MZW5ndGgoRS5sZW5ndGgpO1xuICAgICAgICBpZiAobiArIGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobiA+PSBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBzbG9wcHlBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zbG9wcHktYXJyYXktbWV0aG9kJyk7XG5cbnZhciBuYXRpdmVKb2luID0gW10uam9pbjtcblxudmFyIEVTM19TVFJJTkdTID0gSW5kZXhlZE9iamVjdCAhPSBPYmplY3Q7XG52YXIgU0xPUFBZX01FVEhPRCA9IHNsb3BweUFycmF5TWV0aG9kKCdqb2luJywgJywnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5qb2luYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5qb2luXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBFUzNfU1RSSU5HUyB8fCBTTE9QUFlfTUVUSE9EIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbi5jYWxsKHRvSW5kZXhlZE9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZyA9IEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhKE5BTUUgaW4gRnVuY3Rpb25Qcm90b3R5cGUpKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcuY2FsbCh0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9