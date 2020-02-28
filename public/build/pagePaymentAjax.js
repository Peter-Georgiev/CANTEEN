(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagePaymentAjax"],{

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

/***/ "./assets/js/custom-page/page-paymentAjax.js":
/*!***************************************************!*\
  !*** ./assets/js/custom-page/page-paymentAjax.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _applyDataTable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./applyDataTable.js */ "./assets/js/custom-page/applyDataTable.js");
/* harmony import */ var _button_row_table_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button-row-table.js */ "./assets/js/custom-page/button-row-table.js");
/* harmony import */ var _languageDataTable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./languageDataTable.js */ "./assets/js/custom-page/languageDataTable.js");









var path = '/payment';
$(document).ready(function () {
  $.ajax({
    url: path,
    type: 'POST',
    dataType: 'json',
    async: true,
    success: function success(data, status) {
      // Add footer
      _applyDataTable_js__WEBPACK_IMPORTED_MODULE_6__["table"].append('<tfoot><tr><th colspan="12" style="text-align:right"></th><th></th></tr></tfoot>');
      _applyDataTable_js__WEBPACK_IMPORTED_MODULE_6__["table"].dataTable({
        data: data['payments'],
        rowId: 'id',
        //pagingType: 'full_numbers', // "simple" option for 'Previous' and 'Next' buttons only
        fixedHeader: {
          header: true,
          footer: true
        },
        columns: [{
          data: "class",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Клас'
        }, {
          data: "student",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Име на ученик'
        }, {
          data: "teacher",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Курсов ръководител'
        }, {
          data: "payment",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Заявена сума'
        }, {
          data: "forMonth",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Такса за месец'
        }, {
          data: "price",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Платено'
        }, {
          data: "datePurchases",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Платено на дата'
        }, {
          data: "user",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Касиер'
        }, {
          data: function data(row, type, val, meta) {
            var lastEdit = row.lastEdit;
            var datePurchases = row.datePurchases;

            if (lastEdit !== datePurchases) {
              return lastEdit + ', от ' + row.lastEditUser;
            } else if (lastEdit === datePurchases) {
              return 'Няма';
            }

            return "<i></i>";
          },
          title: 'Редакция'
        }, {
          data: 'namePayer',
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Вносител'
        }, {
          title: 'Печат'
        }, {
          title: 'Плащане'
        }, {
          title: 'Редактиране'
        }],
        columnDefs: [{
          targets: -3,
          data: function data(row, type, val, meta) {
            return "<button id='printBtn' class='btn-info'>Принтиране</button>";
          }
        }, {
          targets: -2,
          data: function data(row, type, val, meta) {
            //console.log(row.userRole);
            if (row.isMontEnded) {
              return "<button id='editBtn' class='btn-default' disabled>Затворено</button>";
            } else if (row.isPaid) {
              return "<button id='editBtn' class='btn-danger'>Редакция!</button>";
            }

            return "<button id='editBtn' class='btn-warning'>Редакция!</button>";
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
        order: [[4, 'des'], [0, 'asc'], [1, 'asc'], [6, 'des']],
        language: _languageDataTable_js__WEBPACK_IMPORTED_MODULE_8__["bg"].language,
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
            Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_7__["rowTextDangerOnOff"])();
          });
        },
        fnDrawCallback: function fnDrawCallback(oSettings) {
          $('#loadingBox').hide();
          $(".table-responsive").show();
          Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_7__["rowTextDangerOnOff"])();
          _applyDataTable_js__WEBPACK_IMPORTED_MODULE_6__["table"].on('click', 'button', function () {
            var rowTable = $(this).parent().parent();
            rowTable.addClass("text-danger");
            var rowText = rowTable.children().map(function () {
              return $.trim($(this).text());
            }).get();
            var id = rowTable.attr('id');

            if (this.id === 'deleteBtn') {
              var studentFullName = rowText[0];
              var className = rowText[1];
              var price = rowText[5];
              var forMonth = rowText[4];
              var paymentDay = rowText[6];
              var message = "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u0442\u0435 \u043F\u043B\u0430\u0449\u0430\u043D\u0435 \u043D\u0430 \"".concat(studentFullName, "\" \u043E\u0442 \"").concat(className, "\" \u043A\u043B\u0430\u0441\n") + "\u0437\u0430 \u043C\u0435\u0441\u0435\u0446 \"".concat(forMonth, "\", \u0441\u0443\u043C\u0430 ").concat(price, " \u043B\u0432., \u043F\u043B\u0430\u0442\u0435\u043D\u043E \u043D\u0430 \u0434\u0430\u0442\u0430 ").concat(paymentDay, ".!!!");
              Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_7__["deleteButton"])("".concat(path, "/delete/").concat(id), rowTable, message);
            } else if (this.id === 'editBtn') {
              Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_7__["editButton"])("".concat(path, "/edit/").concat(id));
            } else if (this.id === 'printBtn') {
              Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_7__["printPdfButton"])("".concat(path, "/pdf/").concat(id));
            }
          });
        },
        footerCallback: function footerCallback(row, data, start, end, display) {
          var columNumver = 5;
          var api = this.api(),
              data; // Remove the formatting to get integer data for summation

          var intVal = function intVal(i) {
            return typeof i === 'string' ? i.replace(/[\лв].+/g, '') * 1 : typeof i === 'number' ? i : 0;
          }; // Total over all pages


          var total = api.column(columNumver).data().reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0); // Total over this page

          var pageTotal = api.column(columNumver, {
            page: 'current'
          }).data().reduce(function (a, b) {
            return intVal(a) + intVal(b);
          }, 0); // Update footer

          /*
          $(api.column(columNumver).footer() ).html(
              'Сума на текущата страница: ' + pageTotal.toFixed(2) + ' лв.' +
              ' ( Сума от всички страници: ' + total.toFixed(2) + ' лв. )'
          );
          */
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
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/array-reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-reduce.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


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

/***/ "./node_modules/core-js/modules/es.array.reduce.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $reduce = __webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").left;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: sloppyArrayMethod('reduce') }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ })

},[["./assets/js/custom-page/page-paymentAjax.js","runtime","vendors~app~pageByMonthClass~pageClassTable~pageClosingMonth~pageEndedMonth~pagePaymentAjax~pagePaym~d355a1e8","vendors~pageByMonthClass~pageClassTable~pageClosingMonth~pageEndedMonth~pagePaymentAjax~pagePaymentC~b4a9e623","vendors~pageClassTable~pagePaymentAjax~pagePaymentCreateAjax~pagePaymentEditAjax~pagePricePerDayAjax~c15c64ac","vendors~pageClassTable~pagePaymentAjax~pagePaymentEditAjax~pagePricePerDayAjax~pageProductAjax~pageP~40fc3f6f","vendors~pageClassTable~pagePaymentAjax~pagePricePerDayAjax~pageProductAjax~pageStudent"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tLXBhZ2UvYXBwbHlEYXRhVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2J1dHRvbi1yb3ctdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2xhbmd1YWdlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20tcGFnZS9wYWdlLXBheW1lbnRBamF4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2xvcHB5LWFycmF5LW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnJlZHVjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5yZXBsYWNlLmpzIl0sIm5hbWVzIjpbInRhYmxlIiwiJCIsInJvd1RleHREYW5nZXJPbk9mZiIsImlzT24iLCJ0b2tlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ0cmltIiwic3BsaXQiLCJpZCIsIk51bWJlciIsImxlbmd0aCIsInRyVG9rZW4iLCJlYWNoIiwiYXR0ciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJkZWxldGVCdXR0b24iLCJyb3dUYWJsZSIsIm1lc3NhZ2VzIiwibXNnIiwiY29uZmlybURpYWxvZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYWRkIiwiZWRpdCIsImFkZE9uQnRuIiwiY3NzIiwiaGlkZSIsInNob3ciLCJjb25maXJtZWQiLCJjb25maXJtIiwiaHJlZiIsImVzY2FwZSIsImFsZXJ0IiwidGhlbiIsImVyciIsImVkaXRCdXR0b24iLCJhZGRPbkJ1dHRvbiIsInBhaWRPbkJ1dHRvbiIsInByaW50UGRmQnV0dG9uIiwiYmciLCJwYXRoIiwiZG9jdW1lbnQiLCJyZWFkeSIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YVR5cGUiLCJhc3luYyIsInN1Y2Nlc3MiLCJkYXRhIiwic3RhdHVzIiwiYXBwZW5kIiwiZGF0YVRhYmxlIiwicm93SWQiLCJmaXhlZEhlYWRlciIsImhlYWRlciIsImZvb3RlciIsImNvbHVtbnMiLCJkZWZhdWx0Q29udGVudCIsInRpdGxlIiwicm93IiwidmFsIiwibWV0YSIsImxhc3RFZGl0IiwiZGF0ZVB1cmNoYXNlcyIsImxhc3RFZGl0VXNlciIsImNvbHVtbkRlZnMiLCJ0YXJnZXRzIiwiaXNNb250RW5kZWQiLCJpc1BhaWQiLCJvcmRlciIsImxhbmd1YWdlIiwiZG9tIiwiYnV0dG9ucyIsImV4dGVuZCIsIm9yaWVudGF0aW9uIiwicGFnZVNpemUiLCJkcmF3Q2FsbGJhY2siLCJhcGkiLCJjb250YWluZXIiLCJvbiIsImZuRHJhd0NhbGxiYWNrIiwib1NldHRpbmdzIiwicGFyZW50Iiwicm93VGV4dCIsImNoaWxkcmVuIiwibWFwIiwidGV4dCIsImdldCIsInN0dWRlbnRGdWxsTmFtZSIsImNsYXNzTmFtZSIsInByaWNlIiwiZm9yTW9udGgiLCJwYXltZW50RGF5IiwibWVzc2FnZSIsImZvb3RlckNhbGxiYWNrIiwic3RhcnQiLCJlbmQiLCJkaXNwbGF5IiwiY29sdW1OdW12ZXIiLCJpbnRWYWwiLCJpIiwicmVwbGFjZSIsInRvdGFsIiwiY29sdW1uIiwicmVkdWNlIiwiYSIsImIiLCJwYWdlVG90YWwiLCJwYWdlIiwiZXJyb3IiLCJ4aHIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iXSwibWFwcGlu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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUMiLCJmaWxlIjoicGFnZVBheW1lbnRBamF4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHRhYmxlID0gJCgnI2RhdGFUYWJsZScpO1xyXG5cclxuZXhwb3J0IHt0YWJsZX07IiwiZnVuY3Rpb24gcm93VGV4dERhbmdlck9uT2ZmKGlzT24gPSB0cnVlKSB7XHJcbiAgICBsZXQgdG9rZW4gPSAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxyXG4gICAgICAgIC50cmltKClcclxuICAgICAgICAuc3BsaXQoJy8nKTtcclxuXHJcbiAgICBsZXQgaWQgPSBOdW1iZXIodG9rZW5bdG9rZW4ubGVuZ3RoIC0gMV0pO1xyXG4gICAgaWYgKGlkIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgdHJUb2tlbiA9ICQoJyNkYXRhVGFibGUgdGJvZHkgdHInKTtcclxuXHJcbiAgICAkKHRyVG9rZW4pLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoTnVtYmVyKCQodGhpcykuYXR0cignaWQnKSkgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChpc09uKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd0ZXh0LWRhbmdlcicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndGV4dC1kYW5nZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGRlbGV0ZUJ1dHRvbihwYXRobmFtZSwgcm93VGFibGUsIG1lc3NhZ2VzKSB7XHJcbiAgICBsZXQgbXNnID0gYCEhISDQktCd0JjQnNCQ0J3QmNCVICEhIVxcbmAgKyBtZXNzYWdlcztcclxuICAgIGZ1bmN0aW9uIGNvbmZpcm1EaWFsb2cobXNnKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgbGV0IGFkZCA9ICQoJ2RpdiAjYWRkJyk7XHJcbiAgICAgICAgICAgIGxldCBlZGl0ID0gJCgnZGl2ICNlZGl0Jyk7XHJcbiAgICAgICAgICAgIGxldCBhZGRPbkJ0biA9ICQoJyNhZGRPbkJ0bicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFkZC5jc3MoJ2Rpc3BsYXknKSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICBhZGQuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgYWRkT25CdG4uc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZWRpdC5jc3MoJ2Rpc3BsYXknKSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICBlZGl0LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGFkZE9uQnRuLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKG1zZyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlybWVkID8gcmVzb2x2ZSh0cnVlKSA6IHJlamVjdChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaHJlZihwYXRobmFtZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXNjYXBlKCkge1xyXG4gICAgICAgIGFsZXJ0KCfQntC/0LXRgNCw0YbQuNGP0YLQsCDQvtGC0LrQsNC30LDQvdCwIScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpcm1EaWFsb2cobXNnKVxyXG4gICAgICAgIC50aGVuKCgpID0+ICBocmVmKHBhdGhuYW1lKSApXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBlc2NhcGUoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRCdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbiAgICAvL2ZldGNoKGAvc3R1ZGVudC9lZGl0LyR7ZGF0YS5zdHVkZW50SWR9YCwge1xyXG4gICAgLy8gIG1ldGhvZDogJ1BPU1QnXHJcbiAgICAvL30pLnRoZW4ocmVzID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE9uQnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYWlkT25CdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50UGRmQnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG59XHJcblxyXG5leHBvcnQge2VkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbiwgYWRkT25CdXR0b24sIHJvd1RleHREYW5nZXJPbk9mZiwgcGFpZE9uQnV0dG9uLCBwcmludFBkZkJ1dHRvbn07IiwibGV0IGJnID0ge1xyXG4gICAgXCJsYW5ndWFnZVwiOiB7XHJcbiAgICAgICAgXCJsZW5ndGhNZW51XCI6IFwi0J/QvtC60LDQt9Cy0LDQvdC1INC90LAgX01FTlVfINC30LDQv9C40YHQuCDQvdCwINGB0YLRgNCw0L3QuNGG0LBcIixcclxuICAgICAgICBcInplcm9SZWNvcmRzXCI6IFwi0J3QuNGJ0L4g0L3QtSDQtSDQvdCw0LzQtdGA0LXQvdC+IC0g0YHRitC20LDQu9GP0LLQsNC8XCIsXHJcbiAgICAgICAgXCJpbmZvXCI6IFwi0J/QvtC60LDQt9Cy0LDQvdC1INC90LAg0YHRgtGA0LDQvdC40YbQsCBfUEFHRV8g0L7RgiBfUEFHRVNfXCIsXHJcbiAgICAgICAgXCJpbmZvRW1wdHlcIjogXCLQndGP0LzQsCDQvdCw0LvQuNGH0L3QuCDQt9Cw0L/QuNGB0LhcIixcclxuICAgICAgICBcImluZm9GaWx0ZXJlZFwiOiBcIijRhNC40LvRgtGA0LjRgNCw0L3QsCDQvtGCIF9NQVhfINC+0LHRidC+INC30LDQv9C40YHQuClcIixcclxuICAgICAgICBcImluZm9Qb3N0Rml4XCI6IFwiXCIsXHJcbiAgICAgICAgXCJ0aG91c2FuZHNcIjogXCIsXCIsXHJcbiAgICAgICAgXCJsb2FkaW5nUmVjb3Jkc1wiOiBcItCX0LDRgNC10LbQtNCwLi4uXCIsXHJcbiAgICAgICAgXCJwcm9jZXNzaW5nXCI6IFwi0J7QsdGA0LDQsdC+0YLQutCwLi4uXCIsXHJcbiAgICAgICAgXCJzZWFyY2hcIjogXCLQotGK0YDRgdC10L3QtSDQsiDRgtCw0LHQu9C40YbQsNGC0LAg0L/Qvi3QtNC+0LvRgzpcIixcclxuICAgICAgICBcInBhZ2luYXRlXCI6IHtcclxuICAgICAgICAgICAgXCJmaXJzdFwiOiBcItCf0YrRgNCy0LBcIixcclxuICAgICAgICAgICAgXCJsYXN0XCI6IFwi0J/QvtGB0LvQtdC00L3QsFwiLFxyXG4gICAgICAgICAgICBcIm5leHRcIjogXCLQodC70LXQtNCy0LDRidCwXCIsXHJcbiAgICAgICAgICAgIFwicHJldmlvdXNcIjogXCLQn9GA0LXQtNC40YjQvdCwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYXJpYVwiOiB7XHJcbiAgICAgICAgICAgIFwic29ydEFzY2VuZGluZ1wiOiBcIjog0KHQvtGA0YLQuNGA0LDQvdC1INC90LAg0LrQvtC70L7QvdCwINCy0YrQt9GF0L7QtNGP0YnQvlwiLFxyXG4gICAgICAgICAgICBcInNvcnREZXNjZW5kaW5nXCI6IFwiOiDQodC+0YDRgtC40YDQsNC90LUg0L3QsCDQutC+0LvQvtC90LAg0L3QuNC30YXQvtC00Y/RidC+XCJcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwibnVsbFwiOiBcItC90Y/QvNCwINC00LDQvdC90LhcIixcclxuICAgIFwiY2hlY2tCb3hcIjogXCLQn9GA0Lgg0LjQt9Cx0L7RgCDQvdCwINC+0L/RhtC40Y/RgtCwOiBcIixcclxuICAgIFwiZW1wdHlNZXNzYWdlXCI6IFtcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjEuINCSINC/0L7Qu9C1ICfQotGK0YDRgdC10L3QtScg0LzQvtC20LXRiCDQtNCwINGC0YrRgNGB0LjRiCDQv9C+OiBpZCwg0L/QvtGC0YDQtdCx0LjRgtC10LssINC40LzQtSwg0YTQsNC80LjQu9C40Y8sINC40LzQtSDQuCDRhNCw0LzQuNC70LjRjywg0LjQvNC10LnQuyDQuNC70Lgg0LzQvtC00YPQuy5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCIyLiDQn9GA0LggJ9Ci0YrRgNGB0LXQvdC1JyDQv9C+IGlkINGC0YDRj9Cx0LLQsCDQtNCwINCy0YrQstC10LTQtdGC0LUgaWQ6INC4INC90L7QvNC10YDQsC4g0J3QsNC/0YDQuNC80LXRgCBpZDoxMjM0LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjMuINCf0YDQuCAn0KLRitGA0YHQtdC90LUnINC/0L4g0LjQvNC1LCDRhNCw0LzQuNC70LjRjywg0LjQvNC1INC4INGE0LDQvNC40LvQuNGPIC0g0L/RgNC10L7QsdGA0LDQt9GD0LLQsCDQu9Cw0YLQuNC90LjRhtCwINCyINC60LjRgNC40LvQuNGG0LAg0Lgg0L7QsdGA0LDRgtC90L4uXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiNC4g0J/RgNC4ICfQotGK0YDRgdC10L3QtScg0L/QviDQvNC+0LTRg9C7INGC0YDRj9Cx0LLQsCDQtNCwINCy0YrQstC10LTQtdGC0LUg0LjQvNC10YLQviDQvdCwINC80L7QtNGD0LvQsC4gKNCd0LDQv9GA0LjQvNC10YA6IEExLjEpXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiNS4gJ9CY0LfQs9C70LXQtNCw0L3QuCDQv9GA0L7RhtC10L3RgtC4INC+0YIg0LzQvtC00YPQu9CwJyDRgtC4INC00LDQstCw0YIg0YHQv9GA0LDQstC60LAg0LrQsNC60LLQsCDRh9Cw0YHRgiDQvtGCINCy0LjQtNC10LDRgtCwINC60YPRgNGB0LjRgdGC0YrRgiDQtSDQuNC30LPQu9C10LTQsNC7INC90LDQv9GK0LvQvdC+LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjYuICfQodCw0LzQviDRgNC10LPQuNGB0YLRgNC40YDQsNC9JyAtINGC0YPQuiDQuNC30LvQuNC30LDRgiDQstGB0LjRh9C60Lgg0YDQtdCz0LjRgdGC0YDQuNGA0LDQvdC4INC/0L7RgtGA0LXQsdC40YLQtdC70LgsINC60L7QuNGC0L4g0YHQsCDQs9C70LXQtNCw0LvQuCDQsdC10LfQv9C70LDRgtC90Lgg0LLQuNC00LXQsC5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI3LiAn0KEg0LTQvtGB0YLRitC/INC00L4g0LzQvtC00YPQuycgLSDRgtGD0Log0LjQt9C70LjQt9Cw0YIg0YHQsNC80L4g0LrRg9GA0YHQuNGB0YLQuNGC0LUsINC60L7QuNGC0L4g0LjQvNCw0YIg0LTQsNC00LXQvSDQtNC+0YHRgtGK0L8g0LTQviDQvtC/0YDQtdC00LXQu9C10L0g0LzQvtC00YPQuy5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogYDguICfQotGK0YDRgdC10L3QtSDQsiDRgtCw0LHQu9C40YbQsNGC0LAg0L/Qvi3QtNC+0LvRgzonIC0g0YLRitGA0YHQuCDQv9C+INC00L7Qv9GK0LvQvdC40YLQtdC70LXQvSDQutGA0LjRgtC10YDQuNC5INCyINC40LfQs9C+0YLQstC10L3QsNGC0LAg0LLQtdGH0LUg0YHQv9GA0LDQstC60LAuYH1cclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQge2JnfTsiLCJpbXBvcnQge3RhYmxlfSBmcm9tICcuL2FwcGx5RGF0YVRhYmxlLmpzJ1xyXG5pbXBvcnQge2VkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbiwgcm93VGV4dERhbmdlck9uT2ZmLHByaW50UGRmQnV0dG9ufSBmcm9tICcuL2J1dHRvbi1yb3ctdGFibGUuanMnO1xyXG5pbXBvcnQge2JnfSBmcm9tICcuL2xhbmd1YWdlRGF0YVRhYmxlLmpzJztcclxuY29uc3QgcGF0aCA9ICcvcGF5bWVudCc7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogICAgICAgIHBhdGgsXHJcbiAgICAgICAgdHlwZTogICAgICAgJ1BPU1QnLFxyXG4gICAgICAgIGRhdGFUeXBlOiAgICdqc29uJyxcclxuICAgICAgICBhc3luYzogICAgICB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cykge1xyXG4gICAgICAgICAgICAvLyBBZGQgZm9vdGVyXHJcbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCgnPHRmb290Pjx0cj48dGggY29sc3Bhbj1cIjEyXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0XCI+PC90aD48dGg+PC90aD48L3RyPjwvdGZvb3Q+Jyk7XHJcblxyXG4gICAgICAgICAgICB0YWJsZS5kYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVsncGF5bWVudHMnXSxcclxuICAgICAgICAgICAgICAgIHJvd0lkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgLy9wYWdpbmdUeXBlOiAnZnVsbF9udW1iZXJzJywgLy8gXCJzaW1wbGVcIiBvcHRpb24gZm9yICdQcmV2aW91cycgYW5kICdOZXh0JyBidXR0b25zIG9ubHlcclxuICAgICAgICAgICAgICAgIGZpeGVkSGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFwiY2xhc3NcIiwgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0JrQu9Cw0YEnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcInN0dWRlbnRcIiwgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0JjQvNC1INC90LAg0YPRh9C10L3QuNC6J1xyXG4gICAgICAgICAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcInRlYWNoZXJcIiwgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0JrRg9GA0YHQvtCyINGA0YrQutC+0LLQvtC00LjRgtC10LsnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcInBheW1lbnRcIiwgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0JfQsNGP0LLQtdC90LAg0YHRg9C80LAnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcImZvck1vbnRoXCIsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Ci0LDQutGB0LAg0LfQsCDQvNC10YHQtdGGJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogXCJwcmljZVwiLCAvLyBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IGA8aT48L2k+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQn9C70LDRgtC10L3QvidcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFwiZGF0ZVB1cmNoYXNlc1wiLCAvLyBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IGA8aT48L2k+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQn9C70LDRgtC10L3QviDQvdCwINC00LDRgtCwJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogXCJ1c2VyXCIsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Ca0LDRgdC40LXRgCdcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uIChyb3csIHR5cGUsIHZhbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RFZGl0ID0gcm93Lmxhc3RFZGl0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGVQdXJjaGFzZXMgPSByb3cuZGF0ZVB1cmNoYXNlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0RWRpdCAhPT0gZGF0ZVB1cmNoYXNlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsYXN0RWRpdCArICcsINC+0YIgJyArIHJvdy5sYXN0RWRpdFVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxhc3RFZGl0ID09PSBkYXRlUHVyY2hhc2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICfQndGP0LzQsCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGk+PC9pPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KDQtdC00LDQutGG0LjRjydcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICduYW1lUGF5ZXInLCAvLyBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IGA8aT48L2k+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQktC90L7RgdC40YLQtdC7J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQn9C10YfQsNGCJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQn9C70LDRidCw0L3QtSdcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KDQtdC00LDQutGC0LjRgNCw0L3QtSdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGNvbHVtbkRlZnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogLTMsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHJvdywgdHlwZSwgdmFsLCBtZXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGlkPSdwcmludEJ0bicgY2xhc3M9J2J0bi1pbmZvJz7Qn9GA0LjQvdGC0LjRgNCw0L3QtTwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogLTIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHJvdywgdHlwZSwgdmFsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocm93LnVzZXJSb2xlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdy5pc01vbnRFbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiPGJ1dHRvbiBpZD0nZWRpdEJ0bicgY2xhc3M9J2J0bi1kZWZhdWx0JyBkaXNhYmxlZD7Ql9Cw0YLQstC+0YDQtdC90L48L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb3cuaXNQYWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGlkPSdlZGl0QnRuJyBjbGFzcz0nYnRuLWRhbmdlcic+0KDQtdC00LDQutGG0LjRjyE8L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGlkPSdlZGl0QnRuJyBjbGFzcz0nYnRuLXdhcm5pbmcnPtCg0LXQtNCw0LrRhtC40Y8hPC9idXR0b24+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiAtMSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAocm93LCB0eXBlLCB2YWwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdy5pc1BhaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxidXR0b24gaWQ9J2RlbGV0ZUJ0bicgY2xhc3M9J2J0bi1kZWZhdWx0JyBkaXNhYmxlZD7QmNC30YLRgNC40LLQsNC90LUhPC9idXR0b24+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiPGJ1dHRvbiBpZD0nZGVsZXRlQnRuJyBjbGFzcz0nYnRuLWRhbmdlcic+0JjQt9GC0YDQuNCy0LDQvdC1ITwvYnV0dG9uPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6IFtcclxuICAgICAgICAgICAgICAgICAgICBbNCwgJ2RlcyddLCBbMCwgJ2FzYyddLCBbMSwgJ2FzYyddLCBbNiwgJ2RlcyddXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IGJnLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgZG9tOiAnbGZCU3J0aXAnLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtleHRlbmQ6ICdjb3B5J30sXHJcbiAgICAgICAgICAgICAgICAgICAgLy97ZXh0ZW5kOiAnY3N2J30sXHJcbiAgICAgICAgICAgICAgICAgICAge2V4dGVuZDogJ2V4Y2VsJ30sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2V4dGVuZDogJ3BkZkh0bWw1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5kOiAncGRmJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246ICdsYW5kc2NhcGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogJ0xFR0FMJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge2V4dGVuZDogJ3ByaW50J30sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5kYXRhVGFibGVzX3BhZ2luYXRlIGEucGFnaW5hdGVfYnV0dG9uOm5vdCguZGlzYWJsZWQpJywgdGhpcy5hcGkoKS50YWJsZSgpLmNvbnRhaW5lcigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1RleHREYW5nZXJPbk9mZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmbkRyYXdDYWxsYmFjazogZnVuY3Rpb24oIG9TZXR0aW5ncyApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjbG9hZGluZ0JveCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLnRhYmxlLXJlc3BvbnNpdmVcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd1RleHREYW5nZXJPbk9mZigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5vbignY2xpY2snLCAnYnV0dG9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93VGFibGUgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dUYWJsZS5hZGRDbGFzcyhcInRleHQtZGFuZ2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93VGV4dCA9IHJvd1RhYmxlLmNoaWxkcmVuKCkubWFwKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC50cmltKCQodGhpcykudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuZ2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSByb3dUYWJsZS5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaWQgPT09ICdkZWxldGVCdG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3R1ZGVudEZ1bGxOYW1lID0gcm93VGV4dFswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSByb3dUZXh0WzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaWNlID0gcm93VGV4dFs1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JNb250aCA9IHJvd1RleHRbNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF5bWVudERheSA9IHJvd1RleHRbNl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGDQmNC30YLRgNC40LLQsNGC0LUg0L/Qu9Cw0YnQsNC90LUg0L3QsCBcXFwiJHtzdHVkZW50RnVsbE5hbWV9XFxcIiDQvtGCIFxcXCIke2NsYXNzTmFtZX1cXFwiINC60LvQsNGBXFxuYCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYNC30LAg0LzQtdGB0LXRhiBcXFwiJHtmb3JNb250aH1cXFwiLCDRgdGD0LzQsCAke3ByaWNlfSDQu9CyLiwg0L/Qu9Cw0YLQtdC90L4g0L3QsCDQtNCw0YLQsCAke3BheW1lbnREYXl9LiEhIWA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uKGAke3BhdGh9L2RlbGV0ZS8ke2lkfWAsIHJvd1RhYmxlLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlkID09PSAnZWRpdEJ0bicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRCdXR0b24oYCR7cGF0aH0vZWRpdC8ke2lkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWQgPT09ICdwcmludEJ0bicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50UGRmQnV0dG9uKGAke3BhdGh9L3BkZi8ke2lkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9vdGVyQ2FsbGJhY2s6IGZ1bmN0aW9uICggcm93LCBkYXRhLCBzdGFydCwgZW5kLCBkaXNwbGF5ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bU51bXZlciA9IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFwaSA9IHRoaXMuYXBpKCksIGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZm9ybWF0dGluZyB0byBnZXQgaW50ZWdlciBkYXRhIGZvciBzdW1tYXRpb25cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW50VmFsID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBpID09PSAnc3RyaW5nJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnJlcGxhY2UoL1tcXNC70LJdLisvZywgJycpKjEgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGkgPT09ICdudW1iZXInID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBUb3RhbCBvdmVyIGFsbCBwYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IGFwaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29sdW1uKGNvbHVtTnVtdmVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVG90YWwgb3ZlciB0aGlzIHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZVRvdGFsID0gYXBpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb2x1bW4oY29sdW1OdW12ZXIsIHsgcGFnZTogJ2N1cnJlbnQnfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSggZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnRWYWwoYSkgKyBpbnRWYWwoYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIGZvb3RlclxyXG4gICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgJChhcGkuY29sdW1uKGNvbHVtTnVtdmVyKS5mb290ZXIoKSApLmh0bWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICfQodGD0LzQsCDQvdCwINGC0LXQutGD0YnQsNGC0LAg0YHRgtGA0LDQvdC40YbQsDogJyArIHBhZ2VUb3RhbC50b0ZpeGVkKDIpICsgJyDQu9CyLicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnICgg0KHRg9C80LAg0L7RgiDQstGB0LjRh9C60Lgg0YHRgtGA0LDQvdC40YbQuDogJyArIHRvdGFsLnRvRml4ZWQoMikgKyAnINC70LIuICknXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yIDogZnVuY3Rpb24oeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAkKCcjbG9hZGluZ0JveCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnLnRhYmxlLXJlc3BvbnNpdmUnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNlcnJvckJveCBzcGFuJykudGV4dCgn0JPRgNC10YjQutCwINCyINC00LDQvdC90LjRgtC1INC+0YIg0YHRitGA0LLRitGA0LAhJyk7XHJcbiAgICAgICAgICAgICQoJyNlcnJvckJveCcpLnNob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0pOyIsInZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IHJlZHVjZSwgcmVkdWNlUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19SSUdIVCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c0xlbmd0aCwgbWVtbykge1xuICAgIGFGdW5jdGlvbihjYWxsYmFja2ZuKTtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoYXQpO1xuICAgIHZhciBzZWxmID0gSW5kZXhlZE9iamVjdChPKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IElTX1JJR0hUID8gbGVuZ3RoIC0gMSA6IDA7XG4gICAgdmFyIGkgPSBJU19SSUdIVCA/IC0xIDogMTtcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoIDwgMikgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChpbmRleCBpbiBzZWxmKSB7XG4gICAgICAgIG1lbW8gPSBzZWxmW2luZGV4XTtcbiAgICAgICAgaW5kZXggKz0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpbmRleCArPSBpO1xuICAgICAgaWYgKElTX1JJR0hUID8gaW5kZXggPCAwIDogbGVuZ3RoIDw9IGluZGV4KSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKDtJU19SSUdIVCA/IGluZGV4ID49IDAgOiBsZW5ndGggPiBpbmRleDsgaW5kZXggKz0gaSkgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgIG1lbW8gPSBjYWxsYmFja2ZuKG1lbW8sIHNlbGZbaW5kZXhdLCBpbmRleCwgTyk7XG4gICAgfVxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnJlZHVjZVxuICBsZWZ0OiBjcmVhdGVNZXRob2QoZmFsc2UpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZVJpZ2h0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnJlZHVjZXJpZ2h0XG4gIHJpZ2h0OiBjcmVhdGVNZXRob2QodHJ1ZSlcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5S2V5ID0gdG9QcmltaXRpdmUoa2V5KTtcbiAgaWYgKHByb3BlcnR5S2V5IGluIG9iamVjdCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIHByb3BlcnR5S2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbcHJvcGVydHlLZXldID0gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gIW1ldGhvZCB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwsbm8tdGhyb3ctbGl0ZXJhbFxuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgdGhyb3cgMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjtcbnZhciBNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJztcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbnZhciBpc0NvbmNhdFNwcmVhZGFibGUgPSBmdW5jdGlvbiAoTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gIHJldHVybiBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KE8pO1xufTtcblxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFTUEVDSUVTX1NVUFBPUlQ7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gdG9MZW5ndGgoRS5sZW5ndGgpO1xuICAgICAgICBpZiAobiArIGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobiA+PSBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRyZWR1Y2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktcmVkdWNlJykubGVmdDtcbnZhciBzbG9wcHlBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zbG9wcHktYXJyYXktbWV0aG9kJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IHNsb3BweUFycmF5TWV0aG9kKCdyZWR1Y2UnKSB9LCB7XG4gIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTID0gL1xcJChbJCYnYF18XFxkXFxkP3w8W14+XSo+KS9nO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEID0gL1xcJChbJCYnYF18XFxkXFxkPykvZztcblxudmFyIG1heWJlVG9TdHJpbmcgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyBpdCA6IFN0cmluZyhpdCk7XG59O1xuXG4vLyBAQHJlcGxhY2UgbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKFJFUExBQ0UsIG5hdGl2ZVJlcGxhY2UsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICAgIGZ1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHJlcGxhY2VyID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgICByZXR1cm4gcmVwbGFjZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHJlcGxhY2VyLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgOiBuYXRpdmVSZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEByZXBsYWNlXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVJlcGxhY2UsIHJlZ2V4cCwgdGhpcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuXG4gICAgICB2YXIgZnVuY3Rpb25hbFJlcGxhY2UgPSB0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgICAgaWYgKCFmdW5jdGlvbmFsUmVwbGFjZSkgcmVwbGFjZVZhbHVlID0gU3RyaW5nKHJlcGxhY2VWYWx1ZSk7XG5cbiAgICAgIHZhciBnbG9iYWwgPSByeC5nbG9iYWw7XG4gICAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSBicmVhaztcblxuICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgaWYgKCFnbG9iYWwpIGJyZWFrO1xuXG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWNjdW11bGF0ZWRSZXN1bHQgPSAnJztcbiAgICAgIHZhciBuZXh0U291cmNlUG9zaXRpb24gPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbaV07XG5cbiAgICAgICAgdmFyIG1hdGNoZWQgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gbWF4KG1pbih0b0ludGVnZXIocmVzdWx0LmluZGV4KSwgUy5sZW5ndGgpLCAwKTtcbiAgICAgICAgdmFyIGNhcHR1cmVzID0gW107XG4gICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgZXF1aXZhbGVudCB0b1xuICAgICAgICAvLyAgIGNhcHR1cmVzID0gcmVzdWx0LnNsaWNlKDEpLm1hcChtYXliZVRvU3RyaW5nKVxuICAgICAgICAvLyBidXQgZm9yIHNvbWUgcmVhc29uIGBuYXRpdmVTbGljZS5jYWxsKHJlc3VsdCwgMSwgcmVzdWx0Lmxlbmd0aClgIChjYWxsZWQgaW5cbiAgICAgICAgLy8gdGhlIHNsaWNlIHBvbHlmaWxsIHdoZW4gc2xpY2luZyBuYXRpdmUgYXJyYXlzKSBcImRvZXNuJ3Qgd29ya1wiIGluIHNhZmFyaSA5IGFuZFxuICAgICAgICAvLyBjYXVzZXMgYSBjcmFzaCAoaHR0cHM6Ly9wYXN0ZWJpbi5jb20vTjIxUXplUUEpIHdoZW4gdHJ5aW5nIHRvIGRlYnVnIGl0LlxuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHJlc3VsdC5sZW5ndGg7IGorKykgY2FwdHVyZXMucHVzaChtYXliZVRvU3RyaW5nKHJlc3VsdFtqXSkpO1xuICAgICAgICB2YXIgbmFtZWRDYXB0dXJlcyA9IHJlc3VsdC5ncm91cHM7XG4gICAgICAgIGlmIChmdW5jdGlvbmFsUmVwbGFjZSkge1xuICAgICAgICAgIHZhciByZXBsYWNlckFyZ3MgPSBbbWF0Y2hlZF0uY29uY2F0KGNhcHR1cmVzLCBwb3NpdGlvbiwgUyk7XG4gICAgICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkgcmVwbGFjZXJBcmdzLnB1c2gobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VWYWx1ZS5hcHBseSh1bmRlZmluZWQsIHJlcGxhY2VyQXJncykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIFMsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPj0gbmV4dFNvdXJjZVBvc2l0aW9uKSB7XG4gICAgICAgICAgYWNjdW11bGF0ZWRSZXN1bHQgKz0gUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24sIHBvc2l0aW9uKSArIHJlcGxhY2VtZW50O1xuICAgICAgICAgIG5leHRTb3VyY2VQb3NpdGlvbiA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1bXVsYXRlZFJlc3VsdCArIFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uKTtcbiAgICB9XG4gIF07XG5cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0c3Vic3RpdHV0aW9uXG4gIGZ1bmN0aW9uIGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBzdHIsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZW1lbnQpIHtcbiAgICB2YXIgdGFpbFBvcyA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgdmFyIG0gPSBjYXB0dXJlcy5sZW5ndGg7XG4gICAgdmFyIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRDtcbiAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuYW1lZENhcHR1cmVzID0gdG9PYmplY3QobmFtZWRDYXB0dXJlcyk7XG4gICAgICBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFM7XG4gICAgfVxuICAgIHJldHVybiBuYXRpdmVSZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICAgIHZhciBjYXB0dXJlO1xuICAgICAgc3dpdGNoIChjaC5jaGFyQXQoMCkpIHtcbiAgICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICAgIGNhc2UgJyYnOiByZXR1cm4gbWF0Y2hlZDtcbiAgICAgICAgY2FzZSAnYCc6IHJldHVybiBzdHIuc2xpY2UoMCwgcG9zaXRpb24pO1xuICAgICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICBjYXB0dXJlID0gbmFtZWRDYXB0dXJlc1tjaC5zbGljZSgxLCAtMSldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiAvLyBcXGRcXGQ/XG4gICAgICAgICAgdmFyIG4gPSArY2g7XG4gICAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICBpZiAobiA+IG0pIHtcbiAgICAgICAgICAgIHZhciBmID0gZmxvb3IobiAvIDEwKTtcbiAgICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICBpZiAoZiA8PSBtKSByZXR1cm4gY2FwdHVyZXNbZiAtIDFdID09PSB1bmRlZmluZWQgPyBjaC5jaGFyQXQoMSkgOiBjYXB0dXJlc1tmIC0gMV0gKyBjaC5jaGFyQXQoMSk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhcHR1cmUgPSBjYXB0dXJlc1tuIC0gMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICAgIH0pO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=