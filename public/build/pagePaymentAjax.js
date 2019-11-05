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

/***/ "./assets/js/custom-page/page-payment-ajax.js":
/*!****************************************************!*\
  !*** ./assets/js/custom-page/page-payment-ajax.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _applyDataTable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./applyDataTable.js */ "./assets/js/custom-page/applyDataTable.js");
/* harmony import */ var _button_row_table_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button-row-table.js */ "./assets/js/custom-page/button-row-table.js");
/* harmony import */ var _languageDataTable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./languageDataTable.js */ "./assets/js/custom-page/languageDataTable.js");






var path = '/payment';
$(document).ready(function () {
  $.ajax({
    url: path,
    type: 'POST',
    dataType: 'json',
    async: true,
    success: function success(data, status) {
      _applyDataTable_js__WEBPACK_IMPORTED_MODULE_3__["table"].dataTable({
        data: data,
        rowId: 'id',
        //pagingType: 'full_numbers', // "simple" option for 'Previous' and 'Next' buttons only
        columns: [{
          data: "student",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Име на ученик'
        }, {
          data: "class",
          // can be null or undefined
          defaultContent: "<i></i>",
          title: 'Клас'
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
          title: 'Име на касиер'
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
          title: 'Име на платеца'
        }, {
          title: 'Плащане'
        }, {
          title: 'Редактиране'
        }],
        columnDefs: [{
          targets: -2,
          data: function data(row, type, val, meta) {
            //console.log(row.userRole);
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
        order: [[1, 'asc'], [0, 'asc'], [6, 'des']],
        language: _languageDataTable_js__WEBPACK_IMPORTED_MODULE_5__["bg"].language,
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
            Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["rowTextDangerOnOff"])();
          });
        },
        fnDrawCallback: function fnDrawCallback(oSettings) {
          $('#loadingBox').hide();
          $(".table-responsive").show();
          Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["rowTextDangerOnOff"])();
          _applyDataTable_js__WEBPACK_IMPORTED_MODULE_3__["table"].on('click', 'tr', function () {
            window.location.href = "".concat(path, "/pdf/").concat(this.getAttribute('id'));
          });
          _applyDataTable_js__WEBPACK_IMPORTED_MODULE_3__["table"].on('click', 'button', function () {
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
              var _status = rowText[3];
              var forMonth = rowText[4];
              var paymentDay = rowText[6];
              var message = "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u0442\u0435 \u043F\u043B\u0430\u0449\u0430\u043D\u0435 \u043D\u0430 \"".concat(studentFullName, "\" \u043E\u0442 \"").concat(className, "\" \u043A\u043B\u0430\u0441\n") + "\u0437\u0430 \u043C\u0435\u0441\u0435\u0446 \"".concat(forMonth, "\", \u0441\u0443\u043C\u0430 ").concat(price, " \u043B\u0432., \u043F\u043B\u0430\u0442\u0435\u043D\u043E \u043D\u0430 \u0434\u0430\u0442\u0430 ").concat(paymentDay, ".!!!");
              Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["deleteButton"])("".concat(path, "/delete/").concat(id), rowTable, message);
            } else if (this.id === 'editBtn') {
              Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["editButton"])("".concat(path, "/edit/").concat(id));
            }
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


/***/ })

},[["./assets/js/custom-page/page-payment-ajax.js","runtime","vendors~app~pageClassTable~pagePaymentAjax~pagePricePerDayAjax~pageProductAjax~pageStudent~pageTeacher","vendors~pageClassTable~pagePaymentAjax~pagePricePerDayAjax~pageProductAjax~pageStudent~pageTeacher"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tLXBhZ2UvYXBwbHlEYXRhVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2J1dHRvbi1yb3ctdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2xhbmd1YWdlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20tcGFnZS9wYWdlLXBheW1lbnQtYWpheC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIl0sIm5hbWVzIjpbInRhYmxlIiwiJCIsInJvd1RleHREYW5nZXJPbk9mZiIsImlzT24iLCJ0b2tlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ0cmltIiwic3BsaXQiLCJpZCIsIk51bWJlciIsImxlbmd0aCIsInRyVG9rZW4iLCJlYWNoIiwiYXR0ciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJkZWxldGVCdXR0b24iLCJyb3dUYWJsZSIsIm1lc3NhZ2VzIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYWRkIiwiZWRpdCIsImFkZE9uQnRuIiwiY3NzIiwiaGlkZSIsInNob3ciLCJzZXRUaW1lb3V0IiwidGhlbiIsInZhbHVlIiwiY29uZmlybSIsImhyZWYiLCJlZGl0QnV0dG9uIiwiYWRkT25CdXR0b24iLCJwYWlkT25CdXR0b24iLCJiZyIsInBhdGgiLCJkb2N1bWVudCIsInJlYWR5IiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhVHlwZSIsImFzeW5jIiwic3VjY2VzcyIsImRhdGEiLCJzdGF0dXMiLCJkYXRhVGFibGUiLCJyb3dJZCIsImNvbHVtbnMiLCJkZWZhdWx0Q29udGVudCIsInRpdGxlIiwicm93IiwidmFsIiwibWV0YSIsImxhc3RFZGl0IiwiZGF0ZVB1cmNoYXNlcyIsImxhc3RFZGl0VXNlciIsImNvbHVtbkRlZnMiLCJ0YXJnZXRzIiwiaXNQYWlkIiwib3JkZXIiLCJsYW5ndWFnZSIsImRvbSIsImJ1dHRvbnMiLCJleHRlbmQiLCJvcmllbnRhdGlvbiIsInBhZ2VTaXplIiwiZHJhd0NhbGxiYWNrIiwiYXBpIiwiY29udGFpbmVyIiwib24iLCJmbkRyYXdDYWxsYmFjayIsIm9TZXR0aW5ncyIsImdldEF0dHJpYnV0ZSIsInBhcmVudCIsInJvd1RleHQiLCJjaGlsZHJlbiIsIm1hcCIsInRleHQiLCJnZXQiLCJzdHVkZW50RnVsbE5hbWUiLCJjbGFzc05hbWUiLCJwcmljZSIsImZvck1vbnRoIiwicGF5bWVudERheSIsIm1lc3NhZ2UiLCJlcnJvciIsInhociIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxJQUFJQSxLQUFLLEdBQUdDLENBQUMsQ0FBQyxZQUFELENBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLFNBQVNDLGtCQUFULEdBQXlDO0FBQUEsTUFBYkMsSUFBYSx1RUFBTixJQUFNO0FBQ3JDLE1BQUlDLEtBQUssR0FBSUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFqQixDQUNQQyxJQURPLEdBRVBDLEtBRk8sQ0FFRCxHQUZDLENBQVo7QUFJQSxNQUFJQyxFQUFFLEdBQUdDLE1BQU0sQ0FBQ1AsS0FBSyxDQUFDQSxLQUFLLENBQUNRLE1BQU4sR0FBZSxDQUFoQixDQUFOLENBQWY7O0FBQ0EsTUFBSUYsRUFBRSxJQUFJLENBQVYsRUFBYTtBQUNULFdBQU8sS0FBUDtBQUNIOztBQUNELE1BQUlHLE9BQU8sR0FBR1osQ0FBQyxDQUFDLHFCQUFELENBQWY7QUFFQUEsR0FBQyxDQUFDWSxPQUFELENBQUQsQ0FBV0MsSUFBWCxDQUFnQixZQUFV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ZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MscUJBQXFCLG1CQUFPLENBQUMseUZBQThCO0FBQzNELHlCQUF5QixtQkFBTyxDQUFDLG1HQUFtQztBQUNwRSxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7QUFDMUYsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELGlCQUFpQixtQkFBTyxDQUFDLCtFQUF5Qjs7QUFFbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsK0NBQStDO0FBQ2xELGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxZQUFZO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJwYWdlUGF5bWVudEFqYXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdGFibGUgPSAkKCcjZGF0YVRhYmxlJyk7XHJcblxyXG5leHBvcnQge3RhYmxlfTsiLCJmdW5jdGlvbiByb3dUZXh0RGFuZ2VyT25PZmYoaXNPbiA9IHRydWUpIHtcclxuICAgIGxldCB0b2tlbiA9ICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXHJcbiAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgIC5zcGxpdCgnLycpO1xyXG5cclxuICAgIGxldCBpZCA9IE51bWJlcih0b2tlblt0b2tlbi5sZW5ndGggLSAxXSk7XHJcbiAgICBpZiAoaWQgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCB0clRva2VuID0gJCgnI2RhdGFUYWJsZSB0Ym9keSB0cicpO1xyXG5cclxuICAgICQodHJUb2tlbikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChOdW1iZXIoJCh0aGlzKS5hdHRyKCdpZCcpKSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgaWYgKGlzT24pIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3RleHQtZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd0ZXh0LWRhbmdlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlQnV0dG9uKHBhdGhuYW1lLCByb3dUYWJsZSwgbWVzc2FnZXMpIHtcclxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgcm93VGV4dERhbmdlck9uT2ZmKGZhbHNlKTtcclxuXHJcbiAgICAgICAgbGV0IGFkZCA9ICQoJ2RpdiAjYWRkJyk7XHJcbiAgICAgICAgbGV0IGVkaXQgPSAkKCdkaXYgI2VkaXQnKTtcclxuICAgICAgICBsZXQgYWRkT25CdG4gPSAkKCcjYWRkT25CdG4nKTtcclxuXHJcbiAgICAgICAgaWYgKGFkZC5jc3MoJ2Rpc3BsYXknKSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIGFkZC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGFkZE9uQnRuLnNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlZGl0LmNzcygnZGlzcGxheScpICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgZWRpdC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGFkZE9uQnRuLnNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHJlc29sdmUoW1xyXG4gICAgICAgICAgICAgICAgYCR7YWRkLmNzcygnZGlzcGxheScpfWAsXHJcbiAgICAgICAgICAgICAgICBgJHtyb3dUYWJsZS5yZW1vdmVDbGFzcyhcInRleHQtZGFuZ2VyXCIpfWBcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIGlmIChjb25maXJtKGAhISEg0JLQndCY0JzQkNCd0JjQlSAhISFcXG5gICsgbWVzc2FnZXMpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRCdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbiAgICAvL2ZldGNoKGAvc3R1ZGVudC9lZGl0LyR7ZGF0YS5zdHVkZW50SWR9YCwge1xyXG4gICAgLy8gIG1ldGhvZDogJ1BPU1QnXHJcbiAgICAvL30pLnRoZW4ocmVzID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE9uQnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYWlkT25CdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uLCBhZGRPbkJ1dHRvbiwgcm93VGV4dERhbmdlck9uT2ZmLCBwYWlkT25CdXR0b259OyIsImxldCBiZyA9IHtcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwibGVuZ3RoTWVudVwiOiBcItCf0L7QutCw0LfQstCw0L3QtSDQvdCwIF9NRU5VXyDQt9Cw0L/QuNGB0Lgg0L3QsCDRgdGC0YDQsNC90LjRhtCwXCIsXHJcbiAgICAgICAgXCJ6ZXJvUmVjb3Jkc1wiOiBcItCd0LjRidC+INC90LUg0LUg0L3QsNC80LXRgNC10L3QviAtINGB0YrQttCw0LvRj9Cy0LDQvFwiLFxyXG4gICAgICAgIFwiaW5mb1wiOiBcItCf0L7QutCw0LfQstCw0L3QtSDQvdCwINGB0YLRgNCw0L3QuNGG0LAgX1BBR0VfINC+0YIgX1BBR0VTX1wiLFxyXG4gICAgICAgIFwiaW5mb0VtcHR5XCI6IFwi0J3Rj9C80LAg0L3QsNC70LjRh9C90Lgg0LfQsNC/0LjRgdC4XCIsXHJcbiAgICAgICAgXCJpbmZvRmlsdGVyZWRcIjogXCIo0YTQuNC70YLRgNC40YDQsNC90LAg0L7RgiBfTUFYXyDQvtCx0YnQviDQt9Cw0L/QuNGB0LgpXCIsXHJcbiAgICAgICAgXCJpbmZvUG9zdEZpeFwiOiBcIlwiLFxyXG4gICAgICAgIFwidGhvdXNhbmRzXCI6IFwiLFwiLFxyXG4gICAgICAgIFwibG9hZGluZ1JlY29yZHNcIjogXCLQl9Cw0YDQtdC20LTQsC4uLlwiLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiBcItCe0LHRgNCw0LHQvtGC0LrQsC4uLlwiLFxyXG4gICAgICAgIFwic2VhcmNoXCI6IFwi0KLRitGA0YHQtdC90LUg0LIg0YLQsNCx0LvQuNGG0LDRgtCwINC/0L4t0LTQvtC70YM6XCIsXHJcbiAgICAgICAgXCJwYWdpbmF0ZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZmlyc3RcIjogXCLQn9GK0YDQstCwXCIsXHJcbiAgICAgICAgICAgIFwibGFzdFwiOiBcItCf0L7RgdC70LXQtNC90LBcIixcclxuICAgICAgICAgICAgXCJuZXh0XCI6IFwi0KHQu9C10LTQstCw0YnQsFwiLFxyXG4gICAgICAgICAgICBcInByZXZpb3VzXCI6IFwi0J/RgNC10LTQuNGI0L3QsFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFyaWFcIjoge1xyXG4gICAgICAgICAgICBcInNvcnRBc2NlbmRpbmdcIjogXCI6INCh0L7RgNGC0LjRgNCw0L3QtSDQvdCwINC60L7Qu9C+0L3QsCDQstGK0LfRhdC+0LTRj9GJ0L5cIixcclxuICAgICAgICAgICAgXCJzb3J0RGVzY2VuZGluZ1wiOiBcIjog0KHQvtGA0YLQuNGA0LDQvdC1INC90LAg0LrQvtC70L7QvdCwINC90LjQt9GF0L7QtNGP0YnQvlwiXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIm51bGxcIjogXCLQvdGP0LzQsCDQtNCw0L3QvdC4XCIsXHJcbiAgICBcImNoZWNrQm94XCI6IFwi0J/RgNC4INC40LfQsdC+0YAg0L3QsCDQvtC/0YbQuNGP0YLQsDogXCIsXHJcbiAgICBcImVtcHR5TWVzc2FnZVwiOiBbXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCIxLiDQkiDQv9C+0LvQtSAn0KLRitGA0YHQtdC90LUnINC80L7QttC10Ygg0LTQsCDRgtGK0YDRgdC40Ygg0L/QvjogaWQsINC/0L7RgtGA0LXQsdC40YLQtdC7LCDQuNC80LUsINGE0LDQvNC40LvQuNGPLCDQuNC80LUg0Lgg0YTQsNC80LjQu9C40Y8sINC40LzQtdC50Lsg0LjQu9C4INC80L7QtNGD0LsuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiMi4g0J/RgNC4ICfQotGK0YDRgdC10L3QtScg0L/QviBpZCDRgtGA0Y/QsdCy0LAg0LTQsCDQstGK0LLQtdC00LXRgtC1IGlkOiDQuCDQvdC+0LzQtdGA0LAuINCd0LDQv9GA0LjQvNC10YAgaWQ6MTIzNC5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCIzLiDQn9GA0LggJ9Ci0YrRgNGB0LXQvdC1JyDQv9C+INC40LzQtSwg0YTQsNC80LjQu9C40Y8sINC40LzQtSDQuCDRhNCw0LzQuNC70LjRjyAtINC/0YDQtdC+0LHRgNCw0LfRg9Cy0LAg0LvQsNGC0LjQvdC40YbQsCDQsiDQutC40YDQuNC70LjRhtCwINC4INC+0LHRgNCw0YLQvdC+LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjQuINCf0YDQuCAn0KLRitGA0YHQtdC90LUnINC/0L4g0LzQvtC00YPQuyDRgtGA0Y/QsdCy0LAg0LTQsCDQstGK0LLQtdC00LXRgtC1INC40LzQtdGC0L4g0L3QsCDQvNC+0LTRg9C70LAuICjQndCw0L/RgNC40LzQtdGAOiBBMS4xKVwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjUuICfQmNC30LPQu9C10LTQsNC90Lgg0L/RgNC+0YbQtdC90YLQuCDQvtGCINC80L7QtNGD0LvQsCcg0YLQuCDQtNCw0LLQsNGCINGB0L/RgNCw0LLQutCwINC60LDQutCy0LAg0YfQsNGB0YIg0L7RgiDQstC40LTQtdCw0YLQsCDQutGD0YDRgdC40YHRgtGK0YIg0LUg0LjQt9Cz0LvQtdC00LDQuyDQvdCw0L/RitC70L3Qvi5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI2LiAn0KHQsNC80L4g0YDQtdCz0LjRgdGC0YDQuNGA0LDQvScgLSDRgtGD0Log0LjQt9C70LjQt9Cw0YIg0LLRgdC40YfQutC4INGA0LXQs9C40YHRgtGA0LjRgNCw0L3QuCDQv9C+0YLRgNC10LHQuNGC0LXQu9C4LCDQutC+0LjRgtC+INGB0LAg0LPQu9C10LTQsNC70Lgg0LHQtdC30L/Qu9Cw0YLQvdC4INCy0LjQtNC10LAuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiNy4gJ9ChINC00L7RgdGC0YrQvyDQtNC+INC80L7QtNGD0LsnIC0g0YLRg9C6INC40LfQu9C40LfQsNGCINGB0LDQvNC+INC60YPRgNGB0LjRgdGC0LjRgtC1LCDQutC+0LjRgtC+INC40LzQsNGCINC00LDQtNC10L0g0LTQvtGB0YLRitC/INC00L4g0L7Qv9GA0LXQtNC10LvQtdC9INC80L7QtNGD0LsuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IGA4LiAn0KLRitGA0YHQtdC90LUg0LIg0YLQsNCx0LvQuNGG0LDRgtCwINC/0L4t0LTQvtC70YM6JyAtINGC0YrRgNGB0Lgg0L/QviDQtNC+0L/RitC70L3QuNGC0LXQu9C10L0g0LrRgNC40YLQtdGA0LjQuSDQsiDQuNC30LPQvtGC0LLQtdC90LDRgtCwINCy0LXRh9C1INGB0L/RgNCw0LLQutCwLmB9XHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IHtiZ307IiwiaW1wb3J0IHt0YWJsZX0gZnJvbSAnLi9hcHBseURhdGFUYWJsZS5qcydcclxuaW1wb3J0IHtlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24sIHJvd1RleHREYW5nZXJPbk9mZn0gZnJvbSAnLi9idXR0b24tcm93LXRhYmxlLmpzJztcclxuaW1wb3J0IHtiZ30gZnJvbSAnLi9sYW5ndWFnZURhdGFUYWJsZS5qcyc7XHJcbmNvbnN0IHBhdGggPSAnL3BheW1lbnQnO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICAgICAgICBwYXRoLFxyXG4gICAgICAgIHR5cGU6ICAgICAgICdQT1NUJyxcclxuICAgICAgICBkYXRhVHlwZTogICAnanNvbicsXHJcbiAgICAgICAgYXN5bmM6ICAgICAgdHJ1ZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBzdGF0dXMpIHtcclxuICAgICAgICAgICAgdGFibGUuZGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICByb3dJZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIC8vcGFnaW5nVHlwZTogJ2Z1bGxfbnVtYmVycycsIC8vIFwic2ltcGxlXCIgb3B0aW9uIGZvciAnUHJldmlvdXMnIGFuZCAnTmV4dCcgYnV0dG9ucyBvbmx5XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcInN0dWRlbnRcIiwgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0JjQvNC1INC90LAg0YPRh9C10L3QuNC6J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogXCJjbGFzc1wiLCAvLyBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IGA8aT48L2k+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQmtC70LDRgSdcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFwidGVhY2hlclwiLCAvLyBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IGA8aT48L2k+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQmtGD0YDRgdC+0LIg0YDRitC60L7QstC+0LTQuNGC0LXQuydcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFwicGF5bWVudFwiLCAvLyBjYW4gYmUgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IGA8aT48L2k+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQl9Cw0Y/QstC10L3QsCDRgdGD0LzQsCdcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFwiZm9yTW9udGhcIiwgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KLQsNC60YHQsCDQt9CwINC80LXRgdC10YYnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcInByaWNlXCIsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Cf0LvQsNGC0LXQvdC+J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogXCJkYXRlUHVyY2hhc2VzXCIsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Cf0LvQsNGC0LXQvdC+INC90LAg0LTQsNGC0LAnXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcInVzZXJcIiwgLy8gY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBgPGk+PC9pPmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0JjQvNC1INC90LAg0LrQsNGB0LjQtdGAJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHJvdywgdHlwZSwgdmFsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdEVkaXQgPSByb3cubGFzdEVkaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZVB1cmNoYXNlcyA9IHJvdy5kYXRlUHVyY2hhc2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RFZGl0ICE9PSBkYXRlUHVyY2hhc2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxhc3RFZGl0ICsgJywg0L7RgiAnICsgcm93Lmxhc3RFZGl0VXNlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGFzdEVkaXQgPT09IGRhdGVQdXJjaGFzZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ9Cd0Y/QvNCwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aT48L2k+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQoNC10LTQsNC60YbQuNGPJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ25hbWVQYXllcicsIC8vIGNhbiBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29udGVudDogYDxpPjwvaT5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9CY0LzQtSDQvdCwINC/0LvQsNGC0LXRhtCwJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQn9C70LDRidCw0L3QtSdcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KDQtdC00LDQutGC0LjRgNCw0L3QtSdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGNvbHVtbkRlZnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogLTIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHJvdywgdHlwZSwgdmFsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocm93LnVzZXJSb2xlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdy5pc1BhaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxidXR0b24gaWQ9J2VkaXRCdG4nIGNsYXNzPSdidG4tZGFuZ2VyJz7QoNC10LTQsNC60YLQuNGA0LDQvdC1ITwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxidXR0b24gaWQ9J2VkaXRCdG4nIGNsYXNzPSdidG4td2FybmluZyc+0KDQtdC00LDQutGC0LjRgNCw0L3QtSE8L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uIChyb3csIHR5cGUsIHZhbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93LmlzUGFpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiPGJ1dHRvbiBpZD0nZGVsZXRlQnRuJyBjbGFzcz0nYnRuLWRlZmF1bHQnIGRpc2FibGVkPtCY0LfRgtGA0LjQstCw0L3QtSE8L2J1dHRvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGlkPSdkZWxldGVCdG4nIGNsYXNzPSdidG4tZGFuZ2VyJz7QmNC30YLRgNC40LLQsNC90LUhPC9idXR0b24+XCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICBvcmRlcjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFsxLCAnYXNjJ10sIFswLCAnYXNjJ10sIFs2LCAnZGVzJ11cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogYmcubGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgICAgICBkb206ICdsZkJTcnRpcCcsXHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge2V4dGVuZDogJ2NvcHknfSxcclxuICAgICAgICAgICAgICAgICAgICAvL3tleHRlbmQ6ICdjc3YnfSxcclxuICAgICAgICAgICAgICAgICAgICB7ZXh0ZW5kOiAnZXhjZWwnfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZXh0ZW5kOiAncGRmSHRtbDUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbmQ6ICdwZGYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogJ2xhbmRzY2FwZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAnTEVHQUwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7ZXh0ZW5kOiAncHJpbnQnfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmRhdGFUYWJsZXNfcGFnaW5hdGUgYS5wYWdpbmF0ZV9idXR0b246bm90KC5kaXNhYmxlZCknLCB0aGlzLmFwaSgpLnRhYmxlKCkuY29udGFpbmVyKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93VGV4dERhbmdlck9uT2ZmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZuRHJhd0NhbGxiYWNrOiBmdW5jdGlvbiggb1NldHRpbmdzICkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNsb2FkaW5nQm94JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIudGFibGUtcmVzcG9uc2l2ZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93VGV4dERhbmdlck9uT2ZmKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLm9uKCdjbGljaycsICd0cicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtwYXRofS9wZGYvJHt0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5vbignY2xpY2snLCAnYnV0dG9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93VGFibGUgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dUYWJsZS5hZGRDbGFzcyhcInRleHQtZGFuZ2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93VGV4dCA9IHJvd1RhYmxlLmNoaWxkcmVuKCkubWFwKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC50cmltKCQodGhpcykudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuZ2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSByb3dUYWJsZS5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaWQgPT09ICdkZWxldGVCdG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3R1ZGVudEZ1bGxOYW1lID0gcm93VGV4dFswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSByb3dUZXh0WzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaWNlID0gcm93VGV4dFs1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXMgPSByb3dUZXh0WzNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvck1vbnRoID0gcm93VGV4dFs0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXltZW50RGF5ID0gcm93VGV4dFs2XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gYNCY0LfRgtGA0LjQstCw0YLQtSDQv9C70LDRidCw0L3QtSDQvdCwIFxcXCIke3N0dWRlbnRGdWxsTmFtZX1cXFwiINC+0YIgXFxcIiR7Y2xhc3NOYW1lfVxcXCIg0LrQu9Cw0YFcXG5gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBg0LfQsCDQvNC10YHQtdGGIFxcXCIke2Zvck1vbnRofVxcXCIsINGB0YPQvNCwICR7cHJpY2V9INC70LIuLCDQv9C70LDRgtC10L3QviDQvdCwINC00LDRgtCwICR7cGF5bWVudERheX0uISEhYDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24oYCR7cGF0aH0vZGVsZXRlLyR7aWR9YCwgcm93VGFibGUsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWQgPT09ICdlZGl0QnRuJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEJ1dHRvbihgJHtwYXRofS9lZGl0LyR7aWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA6IGZ1bmN0aW9uKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgJCgnI2xvYWRpbmdCb3gnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJy50YWJsZS1yZXNwb25zaXZlJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjZXJyb3JCb3ggc3BhbicpLnRleHQoJ9CT0YDQtdGI0LrQsCDQsiDQtNCw0L3QvdC40YLQtSDQvtGCINGB0YrRgNCy0YrRgNCwIScpO1xyXG4gICAgICAgICAgICAkKCcjZXJyb3JCb3gnKS5zaG93KCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KTsiLCIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5S2V5ID0gdG9QcmltaXRpdmUoa2V5KTtcbiAgaWYgKHByb3BlcnR5S2V5IGluIG9iamVjdCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIHByb3BlcnR5S2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbcHJvcGVydHlLZXldID0gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtdmVyc2lvbicpO1xuXG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEUgPSB3ZWxsS25vd25TeW1ib2woJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGO1xudmFyIE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCA9ICdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnO1xuXG4vLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbi8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCA9IFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xuICByZXR1cm4gYXJyYXkuY29uY2F0KClbMF0gIT09IGFycmF5O1xufSk7XG5cbnZhciBTUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdjb25jYXQnKTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIVNQRUNJRVNfU1VQUE9SVDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBjb25jYXQ6IGZ1bmN0aW9uIGNvbmNhdChhcmcpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSB0b0xlbmd0aChFLmxlbmd0aCk7XG4gICAgICAgIGlmIChuICsgbGVuID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuID49IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShBLCBuKyssIEUpO1xuICAgICAgfVxuICAgIH1cbiAgICBBLmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==