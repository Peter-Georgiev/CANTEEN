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
              Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_9__["paidOnButton"])("/payment/product/".concat(id));
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

},[["./assets/js/custom-page/page-product-ajax.js","runtime","vendors~app~pageClassTable~pagePaymentAjax~pageProductAjax~pageStudent~pageTeacher","vendors~pageClassTable~pagePaymentAjax~pageProductAjax~pageStudent~pageTeacher"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tLXBhZ2UvYXBwbHlEYXRhVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2J1dHRvbi1yb3ctdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2xhbmd1YWdlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20tcGFnZS9wYWdlLXByb2R1Y3QtYWpheC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zbG9wcHktYXJyYXktbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuam9pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanMiXSwibmFtZXMiOlsidGFibGUiLCIkIiwicm93VGV4dERhbmdlck9uT2ZmIiwiaXNPbiIsInRva2VuIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInRyaW0iLCJzcGxpdCIsImlkIiwiTnVtYmVyIiwibGVuZ3RoIiwidHJUb2tlbiIsImVhY2giLCJhdHRyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImRlbGV0ZUJ1dHRvbiIsInJvd1RhYmxlIiwibWVzc2FnZXMiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhZGQiLCJlZGl0IiwiYWRkT25CdG4iLCJjc3MiLCJoaWRlIiwic2hvdyIsInNldFRpbWVvdXQiLCJ0aGVuIiwidmFsdWUiLCJjb25maXJtIiwiaHJlZiIsImVkaXRCdXR0b24iLCJhZGRPbkJ1dHRvbiIsInBhaWRPbkJ1dHRvbiIsImJnIiwiY3VycmVudFBhdGhuYW1lIiwicGF0aCIsImRvY3VtZW50IiwicmVhZHkiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGFUeXBlIiwiYXN5bmMiLCJzdWNjZXNzIiwiZGF0YSIsInN0YXR1cyIsImRhdGFUYWJsZSIsInJvd0lkIiwiY29sdW1ucyIsImRlZmF1bHRDb250ZW50IiwidGl0bGUiLCJyb3ciLCJ2YWwiLCJtZXRhIiwiaXNQYWlkIiwibnVtYmVyIiwiZmVlSW5EYXlzIiwibGFzdEVkaXQiLCJkYXRlQ3JlYXRlIiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJvcmRlciIsImxhbmd1YWdlIiwiZG9tIiwiYnV0dG9ucyIsImV4dGVuZCIsIm9yaWVudGF0aW9uIiwicGFnZVNpemUiLCJkcmF3Q2FsbGJhY2siLCJhcGkiLCJjb250YWluZXIiLCJvbiIsImZuRHJhd0NhbGxiYWNrIiwib1NldHRpbmdzIiwicHJvZHVjdENyZWF0ZSIsInByb2R1Y3RFZGl0SWQiLCJwYXJlbnQiLCJyb3dUZXh0IiwiY2hpbGRyZW4iLCJtYXAiLCJ0ZXh0IiwiZ2V0Iiwic3R1ZGVudEZ1bGxOYW1lIiwiY2xhc3NOYW1lIiwiZm9yTW9udGgiLCJwcmljZSIsIm1lc3NhZ2UiLCJlcnJvciIsInhociIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImhpZGRlblByb2R1Y3RGb3JNb250aERheSIsInNlbGVjdGVkT3B0aW9uIiwiZXZlbnQiLCJ0YXJnZXQiLCJyZXMiLCJjb3VudCIsImkiLCJjbGFzc0lkIiwidGVtcEZpcnN0T3B0aW9uIiwib3V0cHV0Q2xhc3MiLCJvdXRwdXRTdHVkZW50Iiwia2V5IiwicHVzaCIsIm5hbWUiLCJzdHVkZW50cyIsInN0dWRlbnRJZCIsInN0dWRlbnQiLCJodG1sIiwiam9pbiIsInByb2R1Y3RGb3JNb250aERheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFB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QUFPLENBQUMsdUVBQXFCO0FBQ3JDLG9CQUFvQixtQkFBTyxDQUFDLHVGQUE2QjtBQUN6RCxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsd0JBQXdCLG1CQUFPLENBQUMsaUdBQWtDOztBQUVsRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHFFQUFxRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNqQkQsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELHFCQUFxQixtQkFBTyxDQUFDLHVHQUFxQzs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoicGFnZVByb2R1Y3RBamF4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHRhYmxlID0gJCgnI2RhdGFUYWJsZScpO1xyXG5cclxuZXhwb3J0IHt0YWJsZX07IiwiZnVuY3Rpb24gcm93VGV4dERhbmdlck9uT2ZmKGlzT24gPSB0cnVlKSB7XHJcbiAgICBsZXQgdG9rZW4gPSAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxyXG4gICAgICAgIC50cmltKClcclxuICAgICAgICAuc3BsaXQoJy8nKTtcclxuXHJcbiAgICBsZXQgaWQgPSBOdW1iZXIodG9rZW5bdG9rZW4ubGVuZ3RoIC0gMV0pO1xyXG4gICAgaWYgKGlkIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgdHJUb2tlbiA9ICQoJyNkYXRhVGFibGUgdGJvZHkgdHInKTtcclxuXHJcbiAgICAkKHRyVG9rZW4pLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoTnVtYmVyKCQodGhpcykuYXR0cignaWQnKSkgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChpc09uKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd0ZXh0LWRhbmdlcicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndGV4dC1kYW5nZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGRlbGV0ZUJ1dHRvbihwYXRobmFtZSwgcm93VGFibGUsIG1lc3NhZ2VzKSB7XHJcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHJvd1RleHREYW5nZXJPbk9mZihmYWxzZSk7XHJcblxyXG4gICAgICAgIGxldCBhZGQgPSAkKCdkaXYgI2FkZCcpO1xyXG4gICAgICAgIGxldCBlZGl0ID0gJCgnZGl2ICNlZGl0Jyk7XHJcbiAgICAgICAgbGV0IGFkZE9uQnRuID0gJCgnI2FkZE9uQnRuJyk7XHJcblxyXG4gICAgICAgIGlmIChhZGQuY3NzKCdkaXNwbGF5JykgIT09ICdub25lJykge1xyXG4gICAgICAgICAgICBhZGQuaGlkZSgpO1xyXG4gICAgICAgICAgICBhZGRPbkJ0bi5zaG93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWRpdC5jc3MoJ2Rpc3BsYXknKSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIGVkaXQuaGlkZSgpO1xyXG4gICAgICAgICAgICBhZGRPbkJ0bi5zaG93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyByZXNvbHZlKFtcclxuICAgICAgICAgICAgICAgIGAke2FkZC5jc3MoJ2Rpc3BsYXknKX1gLFxyXG4gICAgICAgICAgICAgICAgYCR7cm93VGFibGUucmVtb3ZlQ2xhc3MoXCJ0ZXh0LWRhbmdlclwiKX1gXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICBpZiAoY29uZmlybShgISEhINCS0J3QmNCc0JDQndCY0JUgISEhXFxuYCArIG1lc3NhZ2VzKSkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0QnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG4gICAgLy9mZXRjaChgL3N0dWRlbnQvZWRpdC8ke2RhdGEuc3R1ZGVudElkfWAsIHtcclxuICAgIC8vICBtZXRob2Q6ICdQT1NUJ1xyXG4gICAgLy99KS50aGVuKHJlcyA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRPbkJ1dHRvbihwYXRobmFtZSkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRobmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFpZE9uQnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG59XHJcblxyXG5leHBvcnQge2VkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbiwgYWRkT25CdXR0b24sIHJvd1RleHREYW5nZXJPbk9mZiwgcGFpZE9uQnV0dG9ufTsiLCJsZXQgYmcgPSB7XHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcImxlbmd0aE1lbnVcIjogXCLQn9C+0LrQsNC30LLQsNC90LUg0L3QsCBfTUVOVV8g0LfQsNC/0LjRgdC4INC90LAg0YHRgtGA0LDQvdC40YbQsFwiLFxyXG4gICAgICAgIFwiemVyb1JlY29yZHNcIjogXCLQndC40YnQviDQvdC1INC1INC90LDQvNC10YDQtdC90L4gLSDRgdGK0LbQsNC70Y/QstCw0LxcIixcclxuICAgICAgICBcImluZm9cIjogXCLQn9C+0LrQsNC30LLQsNC90LUg0L3QsCDRgdGC0YDQsNC90LjRhtCwIF9QQUdFXyDQvtGCIF9QQUdFU19cIixcclxuICAgICAgICBcImluZm9FbXB0eVwiOiBcItCd0Y/QvNCwINC90LDQu9C40YfQvdC4INC30LDQv9C40YHQuFwiLFxyXG4gICAgICAgIFwiaW5mb0ZpbHRlcmVkXCI6IFwiKNGE0LjQu9GC0YDQuNGA0LDQvdCwINC+0YIgX01BWF8g0L7QsdGJ0L4g0LfQsNC/0LjRgdC4KVwiLFxyXG4gICAgICAgIFwiaW5mb1Bvc3RGaXhcIjogXCJcIixcclxuICAgICAgICBcInRob3VzYW5kc1wiOiBcIixcIixcclxuICAgICAgICBcImxvYWRpbmdSZWNvcmRzXCI6IFwi0JfQsNGA0LXQttC00LAuLi5cIixcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogXCLQntCx0YDQsNCx0L7RgtC60LAuLi5cIixcclxuICAgICAgICBcInNlYXJjaFwiOiBcItCi0YrRgNGB0LXQvdC1INCyINGC0LDQsdC70LjRhtCw0YLQsCDQv9C+LdC00L7Qu9GDOlwiLFxyXG4gICAgICAgIFwicGFnaW5hdGVcIjoge1xyXG4gICAgICAgICAgICBcImZpcnN0XCI6IFwi0J/RitGA0LLQsFwiLFxyXG4gICAgICAgICAgICBcImxhc3RcIjogXCLQn9C+0YHQu9C10LTQvdCwXCIsXHJcbiAgICAgICAgICAgIFwibmV4dFwiOiBcItCh0LvQtdC00LLQsNGJ0LBcIixcclxuICAgICAgICAgICAgXCJwcmV2aW91c1wiOiBcItCf0YDQtdC00LjRiNC90LBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJhcmlhXCI6IHtcclxuICAgICAgICAgICAgXCJzb3J0QXNjZW5kaW5nXCI6IFwiOiDQodC+0YDRgtC40YDQsNC90LUg0L3QsCDQutC+0LvQvtC90LAg0LLRitC30YXQvtC00Y/RidC+XCIsXHJcbiAgICAgICAgICAgIFwic29ydERlc2NlbmRpbmdcIjogXCI6INCh0L7RgNGC0LjRgNCw0L3QtSDQvdCwINC60L7Qu9C+0L3QsCDQvdC40LfRhdC+0LTRj9GJ0L5cIlxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCJudWxsXCI6IFwi0L3Rj9C80LAg0LTQsNC90L3QuFwiLFxyXG4gICAgXCJjaGVja0JveFwiOiBcItCf0YDQuCDQuNC30LHQvtGAINC90LAg0L7Qv9GG0LjRj9GC0LA6IFwiLFxyXG4gICAgXCJlbXB0eU1lc3NhZ2VcIjogW1xyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiMS4g0JIg0L/QvtC70LUgJ9Ci0YrRgNGB0LXQvdC1JyDQvNC+0LbQtdGIINC00LAg0YLRitGA0YHQuNGIINC/0L46IGlkLCDQv9C+0YLRgNC10LHQuNGC0LXQuywg0LjQvNC1LCDRhNCw0LzQuNC70LjRjywg0LjQvNC1INC4INGE0LDQvNC40LvQuNGPLCDQuNC80LXQudC7INC40LvQuCDQvNC+0LTRg9C7LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjIuINCf0YDQuCAn0KLRitGA0YHQtdC90LUnINC/0L4gaWQg0YLRgNGP0LHQstCwINC00LAg0LLRitCy0LXQtNC10YLQtSBpZDog0Lgg0L3QvtC80LXRgNCwLiDQndCw0L/RgNC40LzQtdGAIGlkOjEyMzQuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiMy4g0J/RgNC4ICfQotGK0YDRgdC10L3QtScg0L/QviDQuNC80LUsINGE0LDQvNC40LvQuNGPLCDQuNC80LUg0Lgg0YTQsNC80LjQu9C40Y8gLSDQv9GA0LXQvtCx0YDQsNC30YPQstCwINC70LDRgtC40L3QuNGG0LAg0LIg0LrQuNGA0LjQu9C40YbQsCDQuCDQvtCx0YDQsNGC0L3Qvi5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI0LiDQn9GA0LggJ9Ci0YrRgNGB0LXQvdC1JyDQv9C+INC80L7QtNGD0Lsg0YLRgNGP0LHQstCwINC00LAg0LLRitCy0LXQtNC10YLQtSDQuNC80LXRgtC+INC90LAg0LzQvtC00YPQu9CwLiAo0J3QsNC/0YDQuNC80LXRgDogQTEuMSlcIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI1LiAn0JjQt9Cz0LvQtdC00LDQvdC4INC/0YDQvtGG0LXQvdGC0Lgg0L7RgiDQvNC+0LTRg9C70LAnINGC0Lgg0LTQsNCy0LDRgiDRgdC/0YDQsNCy0LrQsCDQutCw0LrQstCwINGH0LDRgdGCINC+0YIg0LLQuNC00LXQsNGC0LAg0LrRg9GA0YHQuNGB0YLRitGCINC1INC40LfQs9C70LXQtNCw0Lsg0L3QsNC/0YrQu9C90L4uXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiNi4gJ9Ch0LDQvNC+INGA0LXQs9C40YHRgtGA0LjRgNCw0L0nIC0g0YLRg9C6INC40LfQu9C40LfQsNGCINCy0YHQuNGH0LrQuCDRgNC10LPQuNGB0YLRgNC40YDQsNC90Lgg0L/QvtGC0YDQtdCx0LjRgtC10LvQuCwg0LrQvtC40YLQviDRgdCwINCz0LvQtdC00LDQu9C4INCx0LXQt9C/0LvQsNGC0L3QuCDQstC40LTQtdCwLlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjcuICfQoSDQtNC+0YHRgtGK0L8g0LTQviDQvNC+0LTRg9C7JyAtINGC0YPQuiDQuNC30LvQuNC30LDRgiDRgdCw0LzQviDQutGD0YDRgdC40YHRgtC40YLQtSwg0LrQvtC40YLQviDQuNC80LDRgiDQtNCw0LTQtdC9INC00L7RgdGC0YrQvyDQtNC+INC+0L/RgNC10LTQtdC70LXQvSDQvNC+0LTRg9C7LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBgOC4gJ9Ci0YrRgNGB0LXQvdC1INCyINGC0LDQsdC70LjRhtCw0YLQsCDQv9C+LdC00L7Qu9GDOicgLSDRgtGK0YDRgdC4INC/0L4g0LTQvtC/0YrQu9C90LjRgtC10LvQtdC9INC60YDQuNGC0LXRgNC40Lkg0LIg0LjQt9Cz0L7RgtCy0LXQvdCw0YLQsCDQstC10YfQtSDRgdC/0YDQsNCy0LrQsC5gfVxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7Ymd9OyIsImltcG9ydCB7dGFibGV9IGZyb20gJy4vYXBwbHlEYXRhVGFibGUuanMnXHJcbmltcG9ydCB7ZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uLCBhZGRPbkJ1dHRvbiwgcGFpZE9uQnV0dG9uLCByb3dUZXh0RGFuZ2VyT25PZmZ9IGZyb20gJy4vYnV0dG9uLXJvdy10YWJsZS5qcyc7XHJcbmltcG9ydCB7Ymd9IGZyb20gJy4vbGFuZ3VhZ2VEYXRhVGFibGUuanMnO1xyXG5jb25zdCBjdXJyZW50UGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbmNvbnN0IHBhdGggPSAnL3Byb2R1Y3QnO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICAgICAgICBwYXRoLFxyXG4gICAgICAgIHR5cGU6ICAgICAgICdQT1NUJyxcclxuICAgICAgICBkYXRhVHlwZTogICAnanNvbicsXHJcbiAgICAgICAgYXN5bmM6ICAgICAgdHJ1ZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBzdGF0dXMpIHtcclxuICAgICAgICAgICAgdGFibGUuZGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFbJ3Byb2R1Y3RzJ10sXHJcbiAgICAgICAgICAgICAgICByb3dJZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIC8vcGFnaW5nVHlwZTogJ2Z1bGxfbnVtYmVycycsIC8vIFwic2ltcGxlXCIgb3B0aW9uIGZvciAnUHJldmlvdXMnIGFuZCAnTmV4dCcgYnV0dG9ucyBvbmx5XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcInN0dWRlbnRcIiwgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KPRh9C10L3QuNC6J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcImNsYXNzXCIsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Ca0LvQsNGBJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAncHJpY2UnLCAvLyBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IGA8aT48L2k+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQptC10L3QsCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHJvdywgdHlwZSwgdmFsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93LmlzUGFpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAn0J/Qu9Cw0YLQtdC90L4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghcm93LmlzUGFpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAn0J3QtdC/0LvQsNGC0LXQvdC+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGk+PC9pPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KHRgtCw0YLRg9GBJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAocm93LCB0eXBlLCB2YWwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBudW1iZXIgPSBOdW1iZXIocm93LmZlZUluRGF5cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICcg0LTQtdC9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDAgfHwgbnVtYmVyID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyAnINC00L3QuCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGk+PC9pPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KLQsNC60YHQuCDQsiDQtNC90LgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICdmb3JNb250aCcsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Ci0LDQutGB0LAg0LfQsCDQvNC10YHQtdGGJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcImRhdGVDcmVhdGVcIiwgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0JTQsNGC0LAg0L3QsCDRgdGK0LfQtNCw0LLQsNC90LUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uIChyb3csIHR5cGUsIHZhbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RFZGl0ID0gcm93Lmxhc3RFZGl0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGVDcmVhdGUgPSByb3cuZGF0ZUNyZWF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0RWRpdCAhPT0gZGF0ZUNyZWF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsYXN0RWRpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGFzdEVkaXQgPT09IGRhdGVDcmVhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ9Cd0Y/QvNCwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGk+PC9pPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KDQtdC00LDQutGG0LjRjydcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQn9C70LDRidCw0L3QtSdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQoNC10LTQsNC60YLQuNGA0LDQvdC1J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9CY0LfRgtGA0LjQstCw0L3QtSdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGNvbHVtbkRlZnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogLTMsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHJvdywgdHlwZSwgdmFsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cuaXNQYWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGlkPSdwYWlkQnRuJyBjbGFzcz0nYnRuLWRlZmF1bHQnIGRpc2FibGVkPtCf0LvQsNGJ0LDQvdC1ITwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAgXCI8YnV0dG9uIGlkPSdwYWlkQnRuJyBjbGFzcz0nYnRuLXN1Y2Nlc3MnPtCf0LvQsNGJ0LDQvdC1ITwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogLTIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHJvdywgdHlwZSwgdmFsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cuaXNQYWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGlkPSdlZGl0QnRuJyBjbGFzcz0nYnRuLWRhbmdlcic+0KDQtdC00LDQutGC0LjRgNCw0L3QtSE8L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGlkPSdlZGl0QnRuJyBjbGFzcz0nYnRuLXdhcm5pbmcnPtCg0LXQtNCw0LrRgtC40YDQsNC90LUhPC9idXR0b24+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiAtMSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAocm93LCB0eXBlLCB2YWwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdy5pc1BhaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxidXR0b24gaWQ9J2RlbGV0ZUJ0bicgY2xhc3M9J2J0bi1kZWZhdWx0JyBkaXNhYmxlZD7QmNC30YLRgNC40LLQsNC90LUhPC9idXR0b24+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiPGJ1dHRvbiBpZD0nZGVsZXRlQnRuJyBjbGFzcz0nYnRuLWRhbmdlcic+0JjQt9GC0YDQuNCy0LDQvdC1ITwvYnV0dG9uPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6IFtcclxuICAgICAgICAgICAgICAgICAgICBbMSwgJ2FzYyddLCBbMCwgJ2FzYyddLCBbMywgJ2RlcyddXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IGJnLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgZG9tOiAnbGZCU3J0aXAnLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtleHRlbmQ6ICdjb3B5J30sXHJcbiAgICAgICAgICAgICAgICAgICAgLy97ZXh0ZW5kOiAnY3N2J30sXHJcbiAgICAgICAgICAgICAgICAgICAge2V4dGVuZDogJ2V4Y2VsJ30sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2V4dGVuZDogJ3BkZkh0bWw1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5kOiAncGRmJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246ICdsYW5kc2NhcGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogJ0xFR0FMJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge2V4dGVuZDogJ3ByaW50J30sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5kYXRhVGFibGVzX3BhZ2luYXRlIGEucGFnaW5hdGVfYnV0dG9uOm5vdCguZGlzYWJsZWQpJywgdGhpcy5hcGkoKS50YWJsZSgpLmNvbnRhaW5lcigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1RleHREYW5nZXJPbk9mZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmbkRyYXdDYWxsYmFjazogZnVuY3Rpb24oIG9TZXR0aW5ncyApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjbG9hZGluZ0JveCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGFibGUtcmVzcG9uc2l2ZScpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICByb3dUZXh0RGFuZ2VyT25PZmYoKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q3JlYXRlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RFZGl0SWQoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLm9uKCdjbGljaycsICdidXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByb3dUYWJsZSA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1RhYmxlLmFkZENsYXNzKFwidGV4dC1kYW5nZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByb3dUZXh0ID0gcm93VGFibGUuY2hpbGRyZW4oKS5tYXAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkLnRyaW0oJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5nZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IHJvd1RhYmxlLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pZCA9PT0gJ2RlbGV0ZUJ0bicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdHVkZW50RnVsbE5hbWUgPSByb3dUZXh0WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHJvd1RleHRbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9yTW9udGggPSByb3dUZXh0WzVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaWNlID0gcm93VGV4dFszXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gYNCY0LfRgtGA0LjQstCw0YLQtSDQv9C70LDRidCw0L3QtSDQvdCwIFxcXCIke3N0dWRlbnRGdWxsTmFtZX1cXFwiINC+0YIgXFxcIiR7Y2xhc3NOYW1lfVxcXCJcXG5gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBg0LfQsCDQvNC10YHQtdGGIFxcXCIke2Zvck1vbnRofVxcXCIsINGB0YPQvNCwICR7cHJpY2V9INC70LIuISEhYDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24oYCR7cGF0aH0vZGVsZXRlLyR7aWR9YCwgcm93VGFibGUsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWQgPT09ICdlZGl0QnRuJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEJ1dHRvbihgJHtwYXRofS9lZGl0LyR7aWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZCA9PT0gJ3BhaWRCdG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWlkT25CdXR0b24oYC9wYXltZW50L3Byb2R1Y3QvJHtpZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCcjYWRkT25CdG4gYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRPbkJ1dHRvbihgJHtwYXRofS9jcmVhdGVgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA6IGZ1bmN0aW9uKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgJCgnI2xvYWRpbmdCb3gnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJy50YWJsZS1yZXNwb25zaXZlJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjZXJyb3JCb3ggc3BhbicpLnRleHQoJ9CT0YDQtdGI0LrQsCDQsiDQtNCw0L3QvdC40YLQtSDQvtGCINGB0YrRgNCy0YrRgNCwIScpO1xyXG4gICAgICAgICAgICAkKCcjZXJyb3JCb3gnKS5zaG93KCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHByb2R1Y3RDcmVhdGUoZGF0YSkge1xyXG4gICAgICAgIGlmIChjdXJyZW50UGF0aG5hbWUgPT09IGAke3BhdGh9L2NyZWF0ZWApIHtcclxuICAgICAgICAgICAgaGlkZGVuUHJvZHVjdEZvck1vbnRoRGF5KCk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgJCgnI2NsYXNzICNjbGFzc19pZCcpLm9uKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uKGRhdGEsIDAsIE51bWJlcihldmVudC50YXJnZXQudmFsdWUpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHByb2R1Y3RFZGl0SWQoZGF0YSkge1xyXG4gICAgICAgIGhpZGRlblByb2R1Y3RGb3JNb250aERheSgpO1xyXG4gICAgICAgIGxldCByZXMgPSBjdXJyZW50UGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHJlc1tpXSA9PT0gJ3Byb2R1Y3QnIHx8IHJlc1tpXSA9PT0gJ2VkaXQnKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb3VudCAhPT0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaWQgPSAgTnVtYmVyKHJlc1tyZXMubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgICQoJyNkYXRhVGFibGUgdGJvZHkgIycgKyBpZCkuYWRkQ2xhc3MoXCJ0ZXh0LWRhbmdlclwiKTtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRPcHRpb24oZGF0YSwgaWQpO1xyXG4gICAgICAgICQoJyNjbGFzcyAjY2xhc3NfaWQnKS5vbignY2hhbmdlJywoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24oZGF0YSwgMCwgTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdGVkT3B0aW9uKGRhdGEsIGlkID0gMCwgY2xhc3NJZCA9IDApIHtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgbGV0IHRlbXBGaXJzdE9wdGlvbiA9ICcnO1xyXG4gICAgICAgIGxldCBvdXRwdXRDbGFzcyA9IFtdO1xyXG4gICAgICAgIGxldCBvdXRwdXRTdHVkZW50ID0gW107XHJcblxyXG4gICAgICAgICQuZWFjaChkYXRhWydwcm9kdWN0cyddLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoaWQgPT09IE51bWJlcih2YWx1ZS5pZCkpIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzSWQgPSB2YWx1ZS5jbGFzc0lkO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQuZWFjaChkYXRhWydjbGFzc2VzJ10sIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGNsYXNzSWQgPiAwICYmIGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dENsYXNzLnB1c2goJycpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUuaWQgIT09IGNsYXNzSWQpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dENsYXNzLnB1c2goJzxvcHRpb24gdmFsdWU9XCInICsgdmFsdWUuaWQgKyAnXCI+JyArIHZhbHVlLm5hbWUgKyAnPC9vcHRpb24+Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wRmlyc3RPcHRpb24gPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyB2YWx1ZS5pZCArICdcIj4nICsgdmFsdWUubmFtZSArICc8L29wdGlvbj4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2xhc3NJZCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pZCA9PT0gY2xhc3NJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaCh2YWx1ZS5zdHVkZW50cywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0U3R1ZGVudC5wdXNoKCc8b3B0aW9uIHZhbHVlPVwiJyArIHZhbHVlLnN0dWRlbnRJZCArICdcIj4nICsgdmFsdWUuc3R1ZGVudCArICc8L29wdGlvbj4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQuZWFjaCh2YWx1ZS5zdHVkZW50cywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRTdHVkZW50LnB1c2goJzxvcHRpb24gdmFsdWU9XCInICsgdmFsdWUuc3R1ZGVudElkICsgJ1wiPicgKyB2YWx1ZS5zdHVkZW50ICsgJzwvb3B0aW9uPicpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoY2xhc3NJZCA+IDApIHtcclxuICAgICAgICAgICAgb3V0cHV0Q2xhc3NbMF0gPSB0ZW1wRmlyc3RPcHRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcjY2xhc3MgI2NsYXNzX2lkJykuaHRtbChvdXRwdXRDbGFzcy5qb2luKCcnKSk7XHJcbiAgICAgICAgJCgnI3N0dWRlbnQgI3N0dWRlbnRfaWQnKS5odG1sKG91dHB1dFN0dWRlbnQuam9pbignJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGRlblByb2R1Y3RGb3JNb250aERheSgpIHtcclxuICAgICAgICBsZXQgcHJvZHVjdEZvck1vbnRoRGF5ID0gJCgnI3Byb2R1Y3RfZm9yTW9udGhfZGF5Jyk7XHJcbiAgICAgICAgaWYgKHByb2R1Y3RGb3JNb250aERheSkge1xyXG4gICAgICAgICAgICBwcm9kdWN0Rm9yTW9udGhEYXkuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJpbWl0aXZlKGtleSk7XG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICFtZXRob2QgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWxcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC12ZXJzaW9uJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7XG52YXIgTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEID0gJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCc7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIFNQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhU1BFQ0lFU19TVVBQT1JUO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IHRvTGVuZ3RoKEUubGVuZ3RoKTtcbiAgICAgICAgaWYgKG4gKyBsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG4gPj0gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgc2xvcHB5QXJyYXlNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2xvcHB5LWFycmF5LW1ldGhvZCcpO1xuXG52YXIgbmF0aXZlSm9pbiA9IFtdLmpvaW47XG5cbnZhciBFUzNfU1RSSU5HUyA9IEluZGV4ZWRPYmplY3QgIT0gT2JqZWN0O1xudmFyIFNMT1BQWV9NRVRIT0QgPSBzbG9wcHlBcnJheU1ldGhvZCgnam9pbicsICcsJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuam9pbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuam9pblxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRVMzX1NUUklOR1MgfHwgU0xPUFBZX01FVEhPRCB9LCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUpvaW4uY2FsbCh0b0luZGV4ZWRPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcgPSBGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZztcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIShOQU1FIGluIEZ1bmN0aW9uUHJvdG90eXBlKSkge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nLmNhbGwodGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==