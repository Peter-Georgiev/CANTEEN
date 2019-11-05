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
/*! exports provided: editButton, deleteButton, addOnButton, rowTextDangerOnOff, paidOnButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editButton", function() { return editButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteButton", function() { return deleteButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOnButton", function() { return addOnButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rowTextDangerOnOff", function() { return rowTextDangerOnOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paidOnButton", function() { return paidOnButton; });
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
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__);








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
  var promise = new Promise(function (resolve, reject) {
    rowTextDangerOnOff(false);
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

    setTimeout(function () {
      resolve(["".concat(add.css('display')), "".concat(rowTable.removeClass("text-danger"))]);
    }, 300);
  });
  promise.then(function (value) {
    if (confirm("!!! \u0412\u041D\u0418\u041C\u0410\u041D\u0418\u0415 !!!\n" + messages)) {
      window.location.href = pathname;
    }

    return false;
  });
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

/***/ "./assets/js/custom-page/page-product-ajax.js":
/*!****************************************************!*\
  !*** ./assets/js/custom-page/page-product-ajax.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
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
      _applyDataTable_js__WEBPACK_IMPORTED_MODULE_8__["table"].dataTable({
        data: data['products'],
        rowId: 'id',
        //pagingType: 'full_numbers', // "simple" option for 'Previous' and 'Next' buttons only
        columns: [{
          data: "student",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Ученик'
        }, {
          data: "class",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Клас'
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
        }, {
          title: 'Плащане'
        }, {
          title: 'Редактиране'
        }, {
          title: 'Изтриване'
        }],
        columnDefs: [{
          targets: -3,
          data: function data(row, type, val, meta) {
            if (row.isPaid) {
              return "<button id='paidBtn' class='btn-default' disabled>Плащане!</button>";
            }

            return "<button id='paidBtn' class='btn-success'>Плащане!</button>";
          }
        }, {
          targets: -2,
          data: function data(row, type, val, meta) {
            if (row.isPaid) {
              return "<button id='editBtn' class='btn-danger'>Редактиране!</button>";
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
        order: [[1, 'asc'], [0, 'asc'], [3, 'des']],
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
            } else if (this.id === 'paidBtn') {
              Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_9__["paidOnButton"])("".concat(path, "/product/").concat(id));
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

},[["./assets/js/custom-page/page-product-ajax.js","runtime","vendors~app~pageClassTable~pagePaymentAjax~pagePricePerDayAjax~pageProductAjax~pageStudent~pageTeacher","vendors~pageClassTable~pagePaymentAjax~pagePricePerDayAjax~pageProductAjax~pageStudent~pageTeacher"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tLXBhZ2UvYXBwbHlEYXRhVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2J1dHRvbi1yb3ctdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2xhbmd1YWdlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20tcGFnZS9wYWdlLXByb2R1Y3QtYWpheC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zbG9wcHktYXJyYXktbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuam9pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanMiXSwibmFtZXMiOlsidGFibGUiLCIkIiwicm93VGV4dERhbmdlck9uT2ZmIiwiaXNPbiIsInRva2VuIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInRyaW0iLCJzcGxpdCIsImlkIiwiTnVtYmVyIiwibGVuZ3RoIiwidHJUb2tlbiIsImVhY2giLCJhdHRyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImRlbGV0ZUJ1dHRvbiIsInJvd1RhYmxlIiwibWVzc2FnZXMiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhZGQiLCJlZGl0IiwiYWRkT25CdG4iLCJjc3MiLCJoaWRlIiwic2hvdyIsInNldFRpbWVvdXQiLCJ0aGVuIiwidmFsdWUiLCJjb25maXJtIiwiaHJlZiIsImVkaXRCdXR0b24iLCJhZGRPbkJ1dHRvbiIsInBhaWRPbkJ1dHRvbiIsImJnIiwiY3VycmVudFBhdGhuYW1lIiwicGF0aCIsImRvY3VtZW50IiwicmVhZHkiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGFUeXBlIiwiYXN5bmMiLCJzdWNjZXNzIiwiZGF0YSIsInN0YXR1cyIsImRhdGFUYWJsZSIsInJvd0lkIiwiY29sdW1ucyIsImRlZmF1bHRDb250ZW50IiwidGl0bGUiLCJyb3ciLCJ2YWwiLCJtZXRhIiwiaXNQYWlkIiwibnVtYmVyIiwiZmVlSW5EYXlzIiwibGFzdEVkaXQiLCJkYXRlQ3JlYXRlIiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJvcmRlciIsImxhbmd1YWdlIiwiZG9tIiwiYnV0dG9ucyIsImV4dGVuZCIsIm9yaWVudGF0aW9uIiwicGFnZVNpemUiLCJkcmF3Q2FsbGJhY2siLCJhcGkiLCJjb250YWluZXIiLCJvbiIsImZuRHJhd0NhbGxiYWNrIiwib1NldHRpbmdzIiwicHJvZHVjdENyZWF0ZSIsInByb2R1Y3RFZGl0SWQiLCJwYXJlbnQiLCJyb3dUZXh0IiwiY2hpbGRyZW4iLCJtYXAiLCJ0ZXh0IiwiZ2V0Iiwic3R1ZGVudEZ1bGxOYW1lIiwiY2xhc3NOYW1lIiwiZm9yTW9udGgiLCJwcmljZSIsIm1lc3NhZ2UiLCJlcnJvciIsInhociIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImhpZGRlblByb2R1Y3RGb3JNb250aERheSIsInNlbGVjdGVkT3B0aW9uIiwiZXZlbnQiLCJ0YXJnZXQiLCJyZXMiLCJjb3VudCIsImkiLCJjbGFzc0lkIiwidGVtcEZpcnN0T3B0aW9uIiwib3V0cHV0Q2xhc3MiLCJvdXRwdXRTdHVkZW50Iiwia2V5IiwicHVzaCIsIm5hbWUiLCJzdHVkZW50cyIsInN0dWRlbnRJZCIsInN0dWRlbnQiLCJodG1sIiwiam9pbiIsInByb2R1Y3RGb3JNb250aERheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFB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QVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3pELHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCx3QkFBd0IsbUJBQU8sQ0FBQyxpR0FBa0M7O0FBRWxFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcscUVBQXFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2pCRCxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQscUJBQXFCLG1CQUFPLENBQUMsdUdBQXFDOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJwYWdlUHJvZHVjdEFqYXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdGFibGUgPSAkKCcjZGF0YVRhYmxlJyk7XHJcblxyXG5leHBvcnQge3RhYmxlfTsiLCJmdW5jdGlvbiByb3dUZXh0RGFuZ2VyT25PZmYoaXNPbiA9IHRydWUpIHtcclxuICAgIGxldCB0b2tlbiA9ICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXHJcbiAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgIC5zcGxpdCgnLycpO1xyXG5cclxuICAgIGxldCBpZCA9IE51bWJlcih0b2tlblt0b2tlbi5sZW5ndGggLSAxXSk7XHJcbiAgICBpZiAoaWQgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCB0clRva2VuID0gJCgnI2RhdGFUYWJsZSB0Ym9keSB0cicpO1xyXG5cclxuICAgICQodHJUb2tlbikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChOdW1iZXIoJCh0aGlzKS5hdHRyKCdpZCcpKSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgaWYgKGlzT24pIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3RleHQtZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd0ZXh0LWRhbmdlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlQnV0dG9uKHBhdGhuYW1lLCByb3dUYWJsZSwgbWVzc2FnZXMpIHtcclxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgcm93VGV4dERhbmdlck9uT2ZmKGZhbHNlKTtcclxuXHJcbiAgICAgICAgbGV0IGFkZCA9ICQoJ2RpdiAjYWRkJyk7XHJcbiAgICAgICAgbGV0IGVkaXQgPSAkKCdkaXYgI2VkaXQnKTtcclxuICAgICAgICBsZXQgYWRkT25CdG4gPSAkKCcjYWRkT25CdG4nKTtcclxuXHJcbiAgICAgICAgaWYgKGFkZC5jc3MoJ2Rpc3BsYXknKSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIGFkZC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGFkZE9uQnRuLnNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlZGl0LmNzcygnZGlzcGxheScpICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgZWRpdC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGFkZE9uQnRuLnNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHJlc29sdmUoW1xyXG4gICAgICAgICAgICAgICAgYCR7YWRkLmNzcygnZGlzcGxheScpfWAsXHJcbiAgICAgICAgICAgICAgICBgJHtyb3dUYWJsZS5yZW1vdmVDbGFzcyhcInRleHQtZGFuZ2VyXCIpfWBcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIGlmIChjb25maXJtKGAhISEg0JLQndCY0JzQkNCd0JjQlSAhISFcXG5gICsgbWVzc2FnZXMpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRCdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbiAgICAvL2ZldGNoKGAvc3R1ZGVudC9lZGl0LyR7ZGF0YS5zdHVkZW50SWR9YCwge1xyXG4gICAgLy8gIG1ldGhvZDogJ1BPU1QnXHJcbiAgICAvL30pLnRoZW4ocmVzID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE9uQnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYWlkT25CdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uLCBhZGRPbkJ1dHRvbiwgcm93VGV4dERhbmdlck9uT2ZmLCBwYWlkT25CdXR0b259OyIsImxldCBiZyA9IHtcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwibGVuZ3RoTWVudVwiOiBcItCf0L7QutCw0LfQstCw0L3QtSDQvdCwIF9NRU5VXyDQt9Cw0L/QuNGB0Lgg0L3QsCDRgdGC0YDQsNC90LjRhtCwXCIsXHJcbiAgICAgICAgXCJ6ZXJvUmVjb3Jkc1wiOiBcItCd0LjRidC+INC90LUg0LUg0L3QsNC80LXRgNC10L3QviAtINGB0YrQttCw0LvRj9Cy0LDQvFwiLFxyXG4gICAgICAgIFwiaW5mb1wiOiBcItCf0L7QutCw0LfQstCw0L3QtSDQvdCwINGB0YLRgNCw0L3QuNGG0LAgX1BBR0VfINC+0YIgX1BBR0VTX1wiLFxyXG4gICAgICAgIFwiaW5mb0VtcHR5XCI6IFwi0J3Rj9C80LAg0L3QsNC70LjRh9C90Lgg0LfQsNC/0LjRgdC4XCIsXHJcbiAgICAgICAgXCJpbmZvRmlsdGVyZWRcIjogXCIo0YTQuNC70YLRgNC40YDQsNC90LAg0L7RgiBfTUFYXyDQvtCx0YnQviDQt9Cw0L/QuNGB0LgpXCIsXHJcbiAgICAgICAgXCJpbmZvUG9zdEZpeFwiOiBcIlwiLFxyXG4gICAgICAgIFwidGhvdXNhbmRzXCI6IFwiLFwiLFxyXG4gICAgICAgIFwibG9hZGluZ1JlY29yZHNcIjogXCLQl9Cw0YDQtdC20LTQsC4uLlwiLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiBcItCe0LHRgNCw0LHQvtGC0LrQsC4uLlwiLFxyXG4gICAgICAgIFwic2VhcmNoXCI6IFwi0KLRitGA0YHQtdC90LUg0LIg0YLQsNCx0LvQuNGG0LDRgtCwINC/0L4t0LTQvtC70YM6XCIsXHJcbiAgICAgICAgXCJwYWdpbmF0ZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZmlyc3RcIjogXCLQn9GK0YDQstCwXCIsXHJcbiAgICAgICAgICAgIFwibGFzdFwiOiBcItCf0L7RgdC70LXQtNC90LBcIixcclxuICAgICAgICAgICAgXCJuZXh0XCI6IFwi0KHQu9C10LTQstCw0YnQsFwiLFxyXG4gICAgICAgICAgICBcInByZXZpb3VzXCI6IFwi0J/RgNC10LTQuNGI0L3QsFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFyaWFcIjoge1xyXG4gICAgICAgICAgICBcInNvcnRBc2NlbmRpbmdcIjogXCI6INCh0L7RgNGC0LjRgNCw0L3QtSDQvdCwINC60L7Qu9C+0L3QsCDQstGK0LfRhdC+0LTRj9GJ0L5cIixcclxuICAgICAgICAgICAgXCJzb3J0RGVzY2VuZGluZ1wiOiBcIjog0KHQvtGA0YLQuNGA0LDQvdC1INC90LAg0LrQvtC70L7QvdCwINC90LjQt9GF0L7QtNGP0YnQvlwiXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIm51bGxcIjogXCLQvdGP0LzQsCDQtNCw0L3QvdC4XCIsXHJcbiAgICBcImNoZWNrQm94XCI6IFwi0J/RgNC4INC40LfQsdC+0YAg0L3QsCDQvtC/0YbQuNGP0YLQsDogXCIsXHJcbiAgICBcImVtcHR5TWVzc2FnZVwiOiBbXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCIxLiDQkiDQv9C+0LvQtSAn0KLRitGA0YHQtdC90LUnINC80L7QttC10Ygg0LTQsCDRgtGK0YDRgdC40Ygg0L/QvjogaWQsINC/0L7RgtGA0LXQsdC40YLQtdC7LCDQuNC80LUsINGE0LDQvNC40LvQuNGPLCDQuNC80LUg0Lgg0YTQsNC80LjQu9C40Y8sINC40LzQtdC50Lsg0LjQu9C4INC80L7QtNGD0LsuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiMi4g0J/RgNC4ICfQotGK0YDRgdC10L3QtScg0L/QviBpZCDRgtGA0Y/QsdCy0LAg0LTQsCDQstGK0LLQtdC00LXRgtC1IGlkOiDQuCDQvdC+0LzQtdGA0LAuINCd0LDQv9GA0LjQvNC10YAgaWQ6MTIzNC5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCIzLiDQn9GA0LggJ9Ci0YrRgNGB0LXQvdC1JyDQv9C+INC40LzQtSwg0YTQsNC80LjQu9C40Y8sINC40LzQtSDQuCDRhNCw0LzQuNC70LjRjyAtINC/0YDQtdC+0LHRgNCw0LfRg9Cy0LAg0LvQsNGC0LjQvdC40YbQsCDQsiDQutC40YDQuNC70LjRhtCwINC4INC+0LHRgNCw0YLQvdC+LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjQuINCf0YDQuCAn0KLRitGA0YHQtdC90LUnINC/0L4g0LzQvtC00YPQuyDRgtGA0Y/QsdCy0LAg0LTQsCDQstGK0LLQtdC00LXRgtC1INC40LzQtdGC0L4g0L3QsCDQvNC+0LTRg9C70LAuICjQndCw0L/RgNC40LzQtdGAOiBBMS4xKVwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjUuICfQmNC30LPQu9C10LTQsNC90Lgg0L/RgNC+0YbQtdC90YLQuCDQvtGCINC80L7QtNGD0LvQsCcg0YLQuCDQtNCw0LLQsNGCINGB0L/RgNCw0LLQutCwINC60LDQutCy0LAg0YfQsNGB0YIg0L7RgiDQstC40LTQtdCw0YLQsCDQutGD0YDRgdC40YHRgtGK0YIg0LUg0LjQt9Cz0LvQtdC00LDQuyDQvdCw0L/RitC70L3Qvi5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI2LiAn0KHQsNC80L4g0YDQtdCz0LjRgdGC0YDQuNGA0LDQvScgLSDRgtGD0Log0LjQt9C70LjQt9Cw0YIg0LLRgdC40YfQutC4INGA0LXQs9C40YHRgtGA0LjRgNCw0L3QuCDQv9C+0YLRgNC10LHQuNGC0LXQu9C4LCDQutC+0LjRgtC+INGB0LAg0LPQu9C10LTQsNC70Lgg0LHQtdC30L/Qu9Cw0YLQvdC4INCy0LjQtNC10LAuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiNy4gJ9ChINC00L7RgdGC0YrQvyDQtNC+INC80L7QtNGD0LsnIC0g0YLRg9C6INC40LfQu9C40LfQsNGCINGB0LDQvNC+INC60YPRgNGB0LjRgdGC0LjRgtC1LCDQutC+0LjRgtC+INC40LzQsNGCINC00LDQtNC10L0g0LTQvtGB0YLRitC/INC00L4g0L7Qv9GA0LXQtNC10LvQtdC9INC80L7QtNGD0LsuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IGA4LiAn0KLRitGA0YHQtdC90LUg0LIg0YLQsNCx0LvQuNGG0LDRgtCwINC/0L4t0LTQvtC70YM6JyAtINGC0YrRgNGB0Lgg0L/QviDQtNC+0L/RitC70L3QuNGC0LXQu9C10L0g0LrRgNC40YLQtdGA0LjQuSDQsiDQuNC30LPQvtGC0LLQtdC90LDRgtCwINCy0LXRh9C1INGB0L/RgNCw0LLQutCwLmB9XHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IHtiZ307IiwiaW1wb3J0IHt0YWJsZX0gZnJvbSAnLi9hcHBseURhdGFUYWJsZS5qcydcclxuaW1wb3J0IHtlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24sIGFkZE9uQnV0dG9uLCBwYWlkT25CdXR0b24sIHJvd1RleHREYW5nZXJPbk9mZn0gZnJvbSAnLi9idXR0b24tcm93LXRhYmxlLmpzJztcclxuaW1wb3J0IHtiZ30gZnJvbSAnLi9sYW5ndWFnZURhdGFUYWJsZS5qcyc7XHJcbmNvbnN0IGN1cnJlbnRQYXRobmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuY29uc3QgcGF0aCA9ICcvcHJvZHVjdCc7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogICAgICAgIHBhdGgsXHJcbiAgICAgICAgdHlwZTogICAgICAgJ1BPU1QnLFxyXG4gICAgICAgIGRhdGFUeXBlOiAgICdqc29uJyxcclxuICAgICAgICBhc3luYzogICAgICB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cykge1xyXG4gICAgICAgICAgICB0YWJsZS5kYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVsncHJvZHVjdHMnXSxcclxuICAgICAgICAgICAgICAgIHJvd0lkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgLy9wYWdpbmdUeXBlOiAnZnVsbF9udW1iZXJzJywgLy8gXCJzaW1wbGVcIiBvcHRpb24gZm9yICdQcmV2aW91cycgYW5kICdOZXh0JyBidXR0b25zIG9ubHlcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFwic3R1ZGVudFwiLCAvLyBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IGA8aT48L2k+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQo9GH0LXQvdC40LonXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcImNsYXNzXCIsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Ca0LvQsNGBJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ3ByaWNlJywgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KbQtdC90LAnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAocm93LCB0eXBlLCB2YWwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cuaXNQYWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICfQn9C70LDRgtC10L3Qvic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFyb3cuaXNQYWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICfQndC10L/Qu9Cw0YLQtdC90L4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aT48L2k+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQodGC0LDRgtGD0YEnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAocm93LCB0eXBlLCB2YWwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBudW1iZXIgPSBOdW1iZXIocm93LmZlZUluRGF5cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICcg0LTQtdC9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDAgfHwgbnVtYmVyID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyAnINC00L3QuCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGk+PC9pPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KLQsNC60YHQuCDQsiDQtNC90LgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAnZm9yTW9udGgnLCAvLyBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IGA8aT48L2k+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQotCw0LrRgdCwINC30LAg0LzQtdGB0LXRhidcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFwiZGF0ZUNyZWF0ZVwiLCAvLyBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IGA8aT48L2k+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQlNCw0YLQsCDQvdCwINGB0YrQt9C00LDQstCw0L3QtSdcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uIChyb3csIHR5cGUsIHZhbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RFZGl0ID0gcm93Lmxhc3RFZGl0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGVDcmVhdGUgPSByb3cuZGF0ZUNyZWF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0RWRpdCAhPT0gZGF0ZUNyZWF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsYXN0RWRpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGFzdEVkaXQgPT09IGRhdGVDcmVhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ9Cd0Y/QvNCwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGk+PC9pPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KDQtdC00LDQutGG0LjRjydcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0J/Qu9Cw0YnQsNC90LUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Cg0LXQtNCw0LrRgtC40YDQsNC90LUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9CY0LfRgtGA0LjQstCw0L3QtSdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGNvbHVtbkRlZnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogLTMsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHJvdywgdHlwZSwgdmFsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cuaXNQYWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGlkPSdwYWlkQnRuJyBjbGFzcz0nYnRuLWRlZmF1bHQnIGRpc2FibGVkPtCf0LvQsNGJ0LDQvdC1ITwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAgXCI8YnV0dG9uIGlkPSdwYWlkQnRuJyBjbGFzcz0nYnRuLXN1Y2Nlc3MnPtCf0LvQsNGJ0LDQvdC1ITwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogLTIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHJvdywgdHlwZSwgdmFsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cuaXNQYWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGlkPSdlZGl0QnRuJyBjbGFzcz0nYnRuLWRhbmdlcic+0KDQtdC00LDQutGC0LjRgNCw0L3QtSE8L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGlkPSdlZGl0QnRuJyBjbGFzcz0nYnRuLXdhcm5pbmcnPtCg0LXQtNCw0LrRgtC40YDQsNC90LUhPC9idXR0b24+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiAtMSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAocm93LCB0eXBlLCB2YWwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdy5pc1BhaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxidXR0b24gaWQ9J2RlbGV0ZUJ0bicgY2xhc3M9J2J0bi1kZWZhdWx0JyBkaXNhYmxlZD7QmNC30YLRgNC40LLQsNC90LUhPC9idXR0b24+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiPGJ1dHRvbiBpZD0nZGVsZXRlQnRuJyBjbGFzcz0nYnRuLWRhbmdlcic+0JjQt9GC0YDQuNCy0LDQvdC1ITwvYnV0dG9uPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6IFtcclxuICAgICAgICAgICAgICAgICAgICBbMSwgJ2FzYyddLCBbMCwgJ2FzYyddLCBbMywgJ2RlcyddXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IGJnLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgZG9tOiAnbGZCU3J0aXAnLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtleHRlbmQ6ICdjb3B5J30sXHJcbiAgICAgICAgICAgICAgICAgICAgLy97ZXh0ZW5kOiAnY3N2J30sXHJcbiAgICAgICAgICAgICAgICAgICAge2V4dGVuZDogJ2V4Y2VsJ30sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2V4dGVuZDogJ3BkZkh0bWw1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5kOiAncGRmJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246ICdsYW5kc2NhcGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogJ0xFR0FMJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge2V4dGVuZDogJ3ByaW50J30sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5kYXRhVGFibGVzX3BhZ2luYXRlIGEucGFnaW5hdGVfYnV0dG9uOm5vdCguZGlzYWJsZWQpJywgdGhpcy5hcGkoKS50YWJsZSgpLmNvbnRhaW5lcigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1RleHREYW5nZXJPbk9mZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmbkRyYXdDYWxsYmFjazogZnVuY3Rpb24oIG9TZXR0aW5ncyApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjbG9hZGluZ0JveCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGFibGUtcmVzcG9uc2l2ZScpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICByb3dUZXh0RGFuZ2VyT25PZmYoKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q3JlYXRlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RFZGl0SWQoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLm9uKCdjbGljaycsICdidXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByb3dUYWJsZSA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1RhYmxlLmFkZENsYXNzKFwidGV4dC1kYW5nZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByb3dUZXh0ID0gcm93VGFibGUuY2hpbGRyZW4oKS5tYXAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkLnRyaW0oJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5nZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IHJvd1RhYmxlLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pZCA9PT0gJ2RlbGV0ZUJ0bicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdHVkZW50RnVsbE5hbWUgPSByb3dUZXh0WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHJvd1RleHRbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9yTW9udGggPSByb3dUZXh0WzVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaWNlID0gcm93VGV4dFszXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gYNCY0LfRgtGA0LjQstCw0YLQtSDQv9C70LDRidCw0L3QtSDQvdCwIFxcXCIke3N0dWRlbnRGdWxsTmFtZX1cXFwiINC+0YIgXFxcIiR7Y2xhc3NOYW1lfVxcXCJcXG5gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBg0LfQsCDQvNC10YHQtdGGIFxcXCIke2Zvck1vbnRofVxcXCIsINGB0YPQvNCwICR7cHJpY2V9INC70LIuISEhYDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24oYCR7cGF0aH0vZGVsZXRlLyR7aWR9YCwgcm93VGFibGUsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWQgPT09ICdlZGl0QnRuJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEJ1dHRvbihgJHtwYXRofS9lZGl0LyR7aWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZCA9PT0gJ3BhaWRCdG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWlkT25CdXR0b24oYCR7cGF0aH0vcHJvZHVjdC8ke2lkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNhZGRPbkJ0biBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZE9uQnV0dG9uKGAke3BhdGh9L2NyZWF0ZWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yIDogZnVuY3Rpb24oeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAkKCcjbG9hZGluZ0JveCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnLnRhYmxlLXJlc3BvbnNpdmUnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNlcnJvckJveCBzcGFuJykudGV4dCgn0JPRgNC10YjQutCwINCyINC00LDQvdC90LjRgtC1INC+0YIg0YHRitGA0LLRitGA0LAhJyk7XHJcbiAgICAgICAgICAgICQoJyNlcnJvckJveCcpLnNob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvZHVjdENyZWF0ZShkYXRhKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYXRobmFtZSA9PT0gYCR7cGF0aH0vY3JlYXRlYCkge1xyXG4gICAgICAgICAgICBoaWRkZW5Qcm9kdWN0Rm9yTW9udGhEYXkoKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24oZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAkKCcjY2xhc3MgI2NsYXNzX2lkJykub24oJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24oZGF0YSwgMCwgTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvZHVjdEVkaXRJZChkYXRhKSB7XHJcbiAgICAgICAgaGlkZGVuUHJvZHVjdEZvck1vbnRoRGF5KCk7XHJcbiAgICAgICAgbGV0IHJlcyA9IGN1cnJlbnRQYXRobmFtZS5zcGxpdCgnLycpO1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocmVzW2ldID09PSAncHJvZHVjdCcgfHwgcmVzW2ldID09PSAnZWRpdCcpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvdW50ICE9PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpZCA9ICBOdW1iZXIocmVzW3Jlcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgJCgnI2RhdGFUYWJsZSB0Ym9keSAjJyArIGlkKS5hZGRDbGFzcyhcInRleHQtZGFuZ2VyXCIpO1xyXG5cclxuICAgICAgICBzZWxlY3RlZE9wdGlvbihkYXRhLCBpZCk7XHJcbiAgICAgICAgJCgnI2NsYXNzICNjbGFzc19pZCcpLm9uKCdjaGFuZ2UnLChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbihkYXRhLCAwLCBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0ZWRPcHRpb24oZGF0YSwgaWQgPSAwLCBjbGFzc0lkID0gMCkge1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBsZXQgdGVtcEZpcnN0T3B0aW9uID0gJyc7XHJcbiAgICAgICAgbGV0IG91dHB1dENsYXNzID0gW107XHJcbiAgICAgICAgbGV0IG91dHB1dFN0dWRlbnQgPSBbXTtcclxuXHJcbiAgICAgICAgJC5lYWNoKGRhdGFbJ3Byb2R1Y3RzJ10sIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PT0gTnVtYmVyKHZhbHVlLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NJZCA9IHZhbHVlLmNsYXNzSWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJC5lYWNoKGRhdGFbJ2NsYXNzZXMnXSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoY2xhc3NJZCA+IDAgJiYgaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0Q2xhc3MucHVzaCgnJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5pZCAhPT0gY2xhc3NJZCkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0Q2xhc3MucHVzaCgnPG9wdGlvbiB2YWx1ZT1cIicgKyB2YWx1ZS5pZCArICdcIj4nICsgdmFsdWUubmFtZSArICc8L29wdGlvbj4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRlbXBGaXJzdE9wdGlvbiA9ICc8b3B0aW9uIHZhbHVlPVwiJyArIHZhbHVlLmlkICsgJ1wiPicgKyB2YWx1ZS5uYW1lICsgJzwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjbGFzc0lkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmlkID09PSBjbGFzc0lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKHZhbHVlLnN0dWRlbnRzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRTdHVkZW50LnB1c2goJzxvcHRpb24gdmFsdWU9XCInICsgdmFsdWUuc3R1ZGVudElkICsgJ1wiPicgKyB2YWx1ZS5zdHVkZW50ICsgJzwvb3B0aW9uPicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJC5lYWNoKHZhbHVlLnN0dWRlbnRzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFN0dWRlbnQucHVzaCgnPG9wdGlvbiB2YWx1ZT1cIicgKyB2YWx1ZS5zdHVkZW50SWQgKyAnXCI+JyArIHZhbHVlLnN0dWRlbnQgKyAnPC9vcHRpb24+Jyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChjbGFzc0lkID4gMCkge1xyXG4gICAgICAgICAgICBvdXRwdXRDbGFzc1swXSA9IHRlbXBGaXJzdE9wdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJyNjbGFzcyAjY2xhc3NfaWQnKS5odG1sKG91dHB1dENsYXNzLmpvaW4oJycpKTtcclxuICAgICAgICAkKCcjc3R1ZGVudCAjc3R1ZGVudF9pZCcpLmh0bWwob3V0cHV0U3R1ZGVudC5qb2luKCcnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZGVuUHJvZHVjdEZvck1vbnRoRGF5KCkge1xyXG4gICAgICAgIGxldCBwcm9kdWN0Rm9yTW9udGhEYXkgPSAkKCcjcHJvZHVjdF9mb3JNb250aF9kYXknKTtcclxuICAgICAgICBpZiAocHJvZHVjdEZvck1vbnRoRGF5KSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RGb3JNb250aERheS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTsiLCIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5S2V5ID0gdG9QcmltaXRpdmUoa2V5KTtcbiAgaWYgKHByb3BlcnR5S2V5IGluIG9iamVjdCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIHByb3BlcnR5S2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbcHJvcGVydHlLZXldID0gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gIW1ldGhvZCB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwsbm8tdGhyb3ctbGl0ZXJhbFxuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgdGhyb3cgMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjtcbnZhciBNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJztcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbnZhciBpc0NvbmNhdFNwcmVhZGFibGUgPSBmdW5jdGlvbiAoTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gIHJldHVybiBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KE8pO1xufTtcblxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFTUEVDSUVTX1NVUFBPUlQ7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gdG9MZW5ndGgoRS5sZW5ndGgpO1xuICAgICAgICBpZiAobiArIGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobiA+PSBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBzbG9wcHlBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zbG9wcHktYXJyYXktbWV0aG9kJyk7XG5cbnZhciBuYXRpdmVKb2luID0gW10uam9pbjtcblxudmFyIEVTM19TVFJJTkdTID0gSW5kZXhlZE9iamVjdCAhPSBPYmplY3Q7XG52YXIgU0xPUFBZX01FVEhPRCA9IHNsb3BweUFycmF5TWV0aG9kKCdqb2luJywgJywnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5qb2luYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5qb2luXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBFUzNfU1RSSU5HUyB8fCBTTE9QUFlfTUVUSE9EIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbi5jYWxsKHRvSW5kZXhlZE9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZyA9IEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhKE5BTUUgaW4gRnVuY3Rpb25Qcm90b3R5cGUpKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcuY2FsbCh0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9