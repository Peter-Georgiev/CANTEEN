(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pageStudent"],{

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

/***/ "./assets/js/custom-page/page-student.js":
/*!***********************************************!*\
  !*** ./assets/js/custom-page/page-student.js ***!
  \***********************************************/
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






var path = '/student';
$(document).ready(function () {
  _applyDataTable_js__WEBPACK_IMPORTED_MODULE_3__["table"].dataTable({
    //pagingType: 'full_numbers', // "simple" option for 'Previous' and 'Next' buttons only
    columnDefs: [{
      targets: -2,
      data: null,
      defaultContent: "<button id='editBtn' class='text-warning'>Редактиране!</button>"
    }, {
      targets: -1,
      data: null,
      defaultContent: "<button id='deleteBtn' class='text-danger'>Изтриване!</button>"
    }],
    order: [[0, 'asc'], [1, 'asc'], [2, 'des']],
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
      $('.dataTables_paginate a.paginate_button:not(.disabled)', this.api().table().container()).on('click', function () {// rowTextDangerOnOff();
      });
    },
    fnDrawCallback: function fnDrawCallback(oSettings) {
      $('#loadingBox').hide();
      $('.table-responsive').show();
      Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["rowTextDangerOnOff"])();
      $('#addOnBtn button').on('click', function () {
        Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["addOnButton"])("".concat(path, "/create"));
      });
    }
  });
  _applyDataTable_js__WEBPACK_IMPORTED_MODULE_3__["table"].on('click', 'button', function () {
    var rowTable = $(this).parent().parent(); //rowTable.addClass("text-danger");

    var rowText = rowTable.children().map(function () {
      return $.trim($(this).text());
    }).get();
    var id = rowTable.attr('id');

    if (this.id === 'deleteBtn') {
      var className = rowText[0];
      var studentFullName = rowText[1];
      var message = "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0443\u0447\u0435\u043D\u0438\u043A \"".concat(studentFullName, "\" \n\u043E\u0442 \u043A\u043B\u0430\u0441 \"").concat(className, "\"!!!");
      Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["deleteButton"])("".concat(path, "/delete/").concat(id), rowTable, message);
    } else if (this.id === 'editBtn') {
      Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["editButton"])("".concat(path, "/edit/").concat(id));
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

},[["./assets/js/custom-page/page-student.js","runtime","vendors~app~pageByMonthClass~pageClassTable~pageClosingMonth~pageEndedMonth~pagePaymentAjax~pagePaym~d355a1e8","vendors~pageByMonthClass~pageClassTable~pageClosingMonth~pageEndedMonth~pagePaymentAjax~pagePaymentC~b4a9e623","vendors~pageClassTable~pagePaymentAjax~pagePaymentCreateAjax~pagePaymentEditAjax~pagePricePerDayAjax~c15c64ac","vendors~pageClassTable~pagePaymentAjax~pagePaymentEditAjax~pagePricePerDayAjax~pageProductAjax~pageP~40fc3f6f","vendors~pageClassTable~pagePaymentAjax~pagePricePerDayAjax~pageProductAjax~pageStudent"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tLXBhZ2UvYXBwbHlEYXRhVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2J1dHRvbi1yb3ctdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2xhbmd1YWdlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20tcGFnZS9wYWdlLXN0dWRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qcyJdLCJuYW1lcyI6WyJ0YWJsZSIsIiQiLCJyb3dUZXh0RGFuZ2VyT25PZmYiLCJpc09uIiwidG9rZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidHJpbSIsInNwbGl0IiwiaWQiLCJOdW1iZXIiLCJsZW5ndGgiLCJ0clRva2VuIiwiZWFjaCIsImF0dHIiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZGVsZXRlQnV0dG9uIiwicm93VGFibGUiLCJtZXNzYWdlcyIsIm1zZyIsImNvbmZpcm1EaWFsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFkZCIsImVkaXQiLCJhZGRPbkJ0biIsImNzcyIsImhpZGUiLCJzaG93IiwiY29uZmlybWVkIiwiY29uZmlybSIsImhyZWYiLCJlc2NhcGUiLCJhbGVydCIsInRoZW4iLCJlcnIiLCJlZGl0QnV0dG9uIiwiYWRkT25CdXR0b24iLCJwYWlkT25CdXR0b24iLCJwcmludFBkZkJ1dHRvbiIsImJnIiwicGF0aCIsImRvY3VtZW50IiwicmVhZHkiLCJkYXRhVGFibGUiLCJjb2x1bW5EZWZzIiwidGFyZ2V0cyIsImRhdGEiLCJkZWZhdWx0Q29udGVudCIsIm9yZGVyIiwibGFuZ3VhZ2UiLCJkb20iLCJidXR0b25zIiwiZXh0ZW5kIiwib3JpZW50YXRpb24iLCJwYWdlU2l6ZSIsImRyYXdDYWxsYmFjayIsImFwaSIsImNvbnRhaW5lciIsIm9uIiwiZm5EcmF3Q2FsbGJhY2siLCJvU2V0dGluZ3MiLCJwYXJlbnQiLCJyb3dUZXh0IiwiY2hpbGRyZW4iLCJtYXAiLCJ0ZXh0IiwiZ2V0IiwiY2xhc3NOYW1lIiwic3R1ZGVudEZ1bGxOYW1lIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxJQUFJQSxLQUFLLEdBQUdDLENBQUMsQ0FBQyxZQUFELENBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxTQUFTQyxrQkFBVCxHQUF5QztBQUFBLE1BQWJDLElBQWEsdUVBQU4sSUFBTTtBQUNyQyxNQUFJQyxLQUFLLEdBQUlDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBakIsQ0FDUEMsSUFETyxHQUVQQyxLQUZPLENBRUQsR0FGQyxDQUFaO0FBSUEsTUFBSUMsRUFBRSxHQUFHQyxNQUFNLENBQUNQLEtBQUssQ0FBQ0EsS0FBSyxDQUFDUSxNQUFOLEdBQWUsQ0FBaEIsQ0FBTixDQUFmOztBQUNBLE1BQUlGLEVBQUUsSUFBSSxDQUFWLEVBQWE7QUFDVCxXQUFPLEtBQVA7QUFDSDs7QUFDRCxNQUFJRyxPQUFPLEdBQUdaLENBQUMsQ0FBQyxxQkFBRCxDQUFmO0FBRUFBLEdBQUMsQ0FBQ1ksT0FBRCxDQUFELENBQVdDLElBQVgsQ0FBZ0IsWUFBVTtBQUN0QixRQUFJSCxNQUFNLENBQUNWLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWMsSUFBUixDQUFhLElBQWIsQ0FBRCxDQUFOLEtBQStCTCxFQUFuQyxFQUF1QztBQUNuQyxVQUFJUCxJQUFKLEVBQVU7QUFDTkYsU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZSxRQUFSLENBQWlCLGFBQWpCO0FBQ0gsT0FGRCxNQUVPO0FBQ0hmLFNBQUMsQ0FBQyxJQUFELENBQUQs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QUcsK0NBQStDO0FBQ2xELGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxZQUFZO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJwYWdlU3R1ZGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCB0YWJsZSA9ICQoJyNkYXRhVGFibGUnKTtcclxuXHJcbmV4cG9ydCB7dGFibGV9OyIsImZ1bmN0aW9uIHJvd1RleHREYW5nZXJPbk9mZihpc09uID0gdHJ1ZSkge1xyXG4gICAgbGV0IHRva2VuID0gKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcclxuICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgLnNwbGl0KCcvJyk7XHJcblxyXG4gICAgbGV0IGlkID0gTnVtYmVyKHRva2VuW3Rva2VuLmxlbmd0aCAtIDFdKTtcclxuICAgIGlmIChpZCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IHRyVG9rZW4gPSAkKCcjZGF0YVRhYmxlIHRib2R5IHRyJyk7XHJcblxyXG4gICAgJCh0clRva2VuKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKE51bWJlcigkKHRoaXMpLmF0dHIoJ2lkJykpID09PSBpZCkge1xyXG4gICAgICAgICAgICBpZiAoaXNPbikge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygndGV4dC1kYW5nZXInKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3RleHQtZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBkZWxldGVCdXR0b24ocGF0aG5hbWUsIHJvd1RhYmxlLCBtZXNzYWdlcykge1xyXG4gICAgbGV0IG1zZyA9IGAhISEg0JLQndCY0JzQkNCd0JjQlSAhISFcXG5gICsgbWVzc2FnZXM7XHJcbiAgICBmdW5jdGlvbiBjb25maXJtRGlhbG9nKG1zZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGxldCBhZGQgPSAkKCdkaXYgI2FkZCcpO1xyXG4gICAgICAgICAgICBsZXQgZWRpdCA9ICQoJ2RpdiAjZWRpdCcpO1xyXG4gICAgICAgICAgICBsZXQgYWRkT25CdG4gPSAkKCcjYWRkT25CdG4nKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhZGQuY3NzKCdkaXNwbGF5JykgIT09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgYWRkLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGFkZE9uQnRuLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGVkaXQuY3NzKCdkaXNwbGF5JykgIT09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgZWRpdC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBhZGRPbkJ0bi5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBjb25maXJtZWQgPSB3aW5kb3cuY29uZmlybShtc2cpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpcm1lZCA/IHJlc29sdmUodHJ1ZSkgOiByZWplY3QoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhyZWYocGF0aG5hbWUpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVzY2FwZSgpIHtcclxuICAgICAgICBhbGVydCgn0J7Qv9C10YDQsNGG0LjRj9GC0LAg0L7RgtC60LDQt9Cw0L3QsCEnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maXJtRGlhbG9nKG1zZylcclxuICAgICAgICAudGhlbigoKSA9PiAgaHJlZihwYXRobmFtZSkgKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gZXNjYXBlKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0QnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG4gICAgLy9mZXRjaChgL3N0dWRlbnQvZWRpdC8ke2RhdGEuc3R1ZGVudElkfWAsIHtcclxuICAgIC8vICBtZXRob2Q6ICdQT1NUJ1xyXG4gICAgLy99KS50aGVuKHJlcyA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRPbkJ1dHRvbihwYXRobmFtZSkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRobmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFpZE9uQnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludFBkZkJ1dHRvbihwYXRobmFtZSkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRobmFtZTtcclxufVxyXG5cclxuZXhwb3J0IHtlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24sIGFkZE9uQnV0dG9uLCByb3dUZXh0RGFuZ2VyT25PZmYsIHBhaWRPbkJ1dHRvbiwgcHJpbnRQZGZCdXR0b259OyIsImxldCBiZyA9IHtcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwibGVuZ3RoTWVudVwiOiBcItCf0L7QutCw0LfQstCw0L3QtSDQvdCwIF9NRU5VXyDQt9Cw0L/QuNGB0Lgg0L3QsCDRgdGC0YDQsNC90LjRhtCwXCIsXHJcbiAgICAgICAgXCJ6ZXJvUmVjb3Jkc1wiOiBcItCd0LjRidC+INC90LUg0LUg0L3QsNC80LXRgNC10L3QviAtINGB0YrQttCw0LvRj9Cy0LDQvFwiLFxyXG4gICAgICAgIFwiaW5mb1wiOiBcItCf0L7QutCw0LfQstCw0L3QtSDQvdCwINGB0YLRgNCw0L3QuNGG0LAgX1BBR0VfINC+0YIgX1BBR0VTX1wiLFxyXG4gICAgICAgIFwiaW5mb0VtcHR5XCI6IFwi0J3Rj9C80LAg0L3QsNC70LjRh9C90Lgg0LfQsNC/0LjRgdC4XCIsXHJcbiAgICAgICAgXCJpbmZvRmlsdGVyZWRcIjogXCIo0YTQuNC70YLRgNC40YDQsNC90LAg0L7RgiBfTUFYXyDQvtCx0YnQviDQt9Cw0L/QuNGB0LgpXCIsXHJcbiAgICAgICAgXCJpbmZvUG9zdEZpeFwiOiBcIlwiLFxyXG4gICAgICAgIFwidGhvdXNhbmRzXCI6IFwiLFwiLFxyXG4gICAgICAgIFwibG9hZGluZ1JlY29yZHNcIjogXCLQl9Cw0YDQtdC20LTQsC4uLlwiLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiBcItCe0LHRgNCw0LHQvtGC0LrQsC4uLlwiLFxyXG4gICAgICAgIFwic2VhcmNoXCI6IFwi0KLRitGA0YHQtdC90LUg0LIg0YLQsNCx0LvQuNGG0LDRgtCwINC/0L4t0LTQvtC70YM6XCIsXHJcbiAgICAgICAgXCJwYWdpbmF0ZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZmlyc3RcIjogXCLQn9GK0YDQstCwXCIsXHJcbiAgICAgICAgICAgIFwibGFzdFwiOiBcItCf0L7RgdC70LXQtNC90LBcIixcclxuICAgICAgICAgICAgXCJuZXh0XCI6IFwi0KHQu9C10LTQstCw0YnQsFwiLFxyXG4gICAgICAgICAgICBcInByZXZpb3VzXCI6IFwi0J/RgNC10LTQuNGI0L3QsFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFyaWFcIjoge1xyXG4gICAgICAgICAgICBcInNvcnRBc2NlbmRpbmdcIjogXCI6INCh0L7RgNGC0LjRgNCw0L3QtSDQvdCwINC60L7Qu9C+0L3QsCDQstGK0LfRhdC+0LTRj9GJ0L5cIixcclxuICAgICAgICAgICAgXCJzb3J0RGVzY2VuZGluZ1wiOiBcIjog0KHQvtGA0YLQuNGA0LDQvdC1INC90LAg0LrQvtC70L7QvdCwINC90LjQt9GF0L7QtNGP0YnQvlwiXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIm51bGxcIjogXCLQvdGP0LzQsCDQtNCw0L3QvdC4XCIsXHJcbiAgICBcImNoZWNrQm94XCI6IFwi0J/RgNC4INC40LfQsdC+0YAg0L3QsCDQvtC/0YbQuNGP0YLQsDogXCIsXHJcbiAgICBcImVtcHR5TWVzc2FnZVwiOiBbXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCIxLiDQkiDQv9C+0LvQtSAn0KLRitGA0YHQtdC90LUnINC80L7QttC10Ygg0LTQsCDRgtGK0YDRgdC40Ygg0L/QvjogaWQsINC/0L7RgtGA0LXQsdC40YLQtdC7LCDQuNC80LUsINGE0LDQvNC40LvQuNGPLCDQuNC80LUg0Lgg0YTQsNC80LjQu9C40Y8sINC40LzQtdC50Lsg0LjQu9C4INC80L7QtNGD0LsuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiMi4g0J/RgNC4ICfQotGK0YDRgdC10L3QtScg0L/QviBpZCDRgtGA0Y/QsdCy0LAg0LTQsCDQstGK0LLQtdC00LXRgtC1IGlkOiDQuCDQvdC+0LzQtdGA0LAuINCd0LDQv9GA0LjQvNC10YAgaWQ6MTIzNC5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCIzLiDQn9GA0LggJ9Ci0YrRgNGB0LXQvdC1JyDQv9C+INC40LzQtSwg0YTQsNC80LjQu9C40Y8sINC40LzQtSDQuCDRhNCw0LzQuNC70LjRjyAtINC/0YDQtdC+0LHRgNCw0LfRg9Cy0LAg0LvQsNGC0LjQvdC40YbQsCDQsiDQutC40YDQuNC70LjRhtCwINC4INC+0LHRgNCw0YLQvdC+LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjQuINCf0YDQuCAn0KLRitGA0YHQtdC90LUnINC/0L4g0LzQvtC00YPQuyDRgtGA0Y/QsdCy0LAg0LTQsCDQstGK0LLQtdC00LXRgtC1INC40LzQtdGC0L4g0L3QsCDQvNC+0LTRg9C70LAuICjQndCw0L/RgNC40LzQtdGAOiBBMS4xKVwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjUuICfQmNC30LPQu9C10LTQsNC90Lgg0L/RgNC+0YbQtdC90YLQuCDQvtGCINC80L7QtNGD0LvQsCcg0YLQuCDQtNCw0LLQsNGCINGB0L/RgNCw0LLQutCwINC60LDQutCy0LAg0YfQsNGB0YIg0L7RgiDQstC40LTQtdCw0YLQsCDQutGD0YDRgdC40YHRgtGK0YIg0LUg0LjQt9Cz0LvQtdC00LDQuyDQvdCw0L/RitC70L3Qvi5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI2LiAn0KHQsNC80L4g0YDQtdCz0LjRgdGC0YDQuNGA0LDQvScgLSDRgtGD0Log0LjQt9C70LjQt9Cw0YIg0LLRgdC40YfQutC4INGA0LXQs9C40YHRgtGA0LjRgNCw0L3QuCDQv9C+0YLRgNC10LHQuNGC0LXQu9C4LCDQutC+0LjRgtC+INGB0LAg0LPQu9C10LTQsNC70Lgg0LHQtdC30L/Qu9Cw0YLQvdC4INCy0LjQtNC10LAuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiNy4gJ9ChINC00L7RgdGC0YrQvyDQtNC+INC80L7QtNGD0LsnIC0g0YLRg9C6INC40LfQu9C40LfQsNGCINGB0LDQvNC+INC60YPRgNGB0LjRgdGC0LjRgtC1LCDQutC+0LjRgtC+INC40LzQsNGCINC00LDQtNC10L0g0LTQvtGB0YLRitC/INC00L4g0L7Qv9GA0LXQtNC10LvQtdC9INC80L7QtNGD0LsuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IGA4LiAn0KLRitGA0YHQtdC90LUg0LIg0YLQsNCx0LvQuNGG0LDRgtCwINC/0L4t0LTQvtC70YM6JyAtINGC0YrRgNGB0Lgg0L/QviDQtNC+0L/RitC70L3QuNGC0LXQu9C10L0g0LrRgNC40YLQtdGA0LjQuSDQsiDQuNC30LPQvtGC0LLQtdC90LDRgtCwINCy0LXRh9C1INGB0L/RgNCw0LLQutCwLmB9XHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IHtiZ307IiwiaW1wb3J0IHt0YWJsZX0gZnJvbSAnLi9hcHBseURhdGFUYWJsZS5qcydcclxuaW1wb3J0IHtlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24sIGFkZE9uQnV0dG9uLCByb3dUZXh0RGFuZ2VyT25PZmZ9IGZyb20gJy4vYnV0dG9uLXJvdy10YWJsZS5qcyc7XHJcbmltcG9ydCB7Ymd9IGZyb20gJy4vbGFuZ3VhZ2VEYXRhVGFibGUuanMnO1xyXG5jb25zdCBwYXRoID0gJy9zdHVkZW50JztcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB0YWJsZS5kYXRhVGFibGUoe1xyXG4gICAgICAgIC8vcGFnaW5nVHlwZTogJ2Z1bGxfbnVtYmVycycsIC8vIFwic2ltcGxlXCIgb3B0aW9uIGZvciAnUHJldmlvdXMnIGFuZCAnTmV4dCcgYnV0dG9ucyBvbmx5XHJcbiAgICAgICAgY29sdW1uRGVmczogW3tcclxuICAgICAgICAgICAgdGFyZ2V0czogLTIsXHJcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBcIjxidXR0b24gaWQ9J2VkaXRCdG4nIGNsYXNzPSd0ZXh0LXdhcm5pbmcnPtCg0LXQtNCw0LrRgtC40YDQsNC90LUhPC9idXR0b24+XCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHRhcmdldHM6IC0xLFxyXG4gICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICBkZWZhdWx0Q29udGVudDogXCI8YnV0dG9uIGlkPSdkZWxldGVCdG4nIGNsYXNzPSd0ZXh0LWRhbmdlcic+0JjQt9GC0YDQuNCy0LDQvdC1ITwvYnV0dG9uPlwiXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgb3JkZXI6IFtcclxuICAgICAgICAgICAgWzAsICdhc2MnXSwgWzEsICdhc2MnXSwgWzIsICdkZXMnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGJnLmxhbmd1YWdlLFxyXG4gICAgICAgIGRvbTogJ2xmQlNydGlwJyxcclxuICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgIHtleHRlbmQ6ICdjb3B5J30sXHJcbiAgICAgICAgICAgIC8ve2V4dGVuZDogJ2Nzdid9LFxyXG4gICAgICAgICAgICB7ZXh0ZW5kOiAnZXhjZWwnfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9leHRlbmQ6ICdwZGZIdG1sNScsXHJcbiAgICAgICAgICAgICAgICBleHRlbmQ6ICdwZGYnLFxyXG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb246ICdsYW5kc2NhcGUnLFxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6ICdMRUdBTCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge2V4dGVuZDogJ3ByaW50J30sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoJy5kYXRhVGFibGVzX3BhZ2luYXRlIGEucGFnaW5hdGVfYnV0dG9uOm5vdCguZGlzYWJsZWQpJywgdGhpcy5hcGkoKS50YWJsZSgpLmNvbnRhaW5lcigpKVxyXG4gICAgICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAvLyByb3dUZXh0RGFuZ2VyT25PZmYoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm5EcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKCBvU2V0dGluZ3MgKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjbG9hZGluZ0JveCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnLnRhYmxlLXJlc3BvbnNpdmUnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIHJvd1RleHREYW5nZXJPbk9mZigpO1xyXG5cclxuICAgICAgICAgICAgJCgnI2FkZE9uQnRuIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFkZE9uQnV0dG9uKGAke3BhdGh9L2NyZWF0ZWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0YWJsZS5vbignY2xpY2snLCAnYnV0dG9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCByb3dUYWJsZSA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCk7XHJcbiAgICAgICAgLy9yb3dUYWJsZS5hZGRDbGFzcyhcInRleHQtZGFuZ2VyXCIpO1xyXG4gICAgICAgIGxldCByb3dUZXh0ID0gcm93VGFibGUuY2hpbGRyZW4oKS5tYXAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcmV0dXJuICQudHJpbSgkKHRoaXMpLnRleHQoKSk7XHJcbiAgICAgICAgfSkuZ2V0KCk7XHJcblxyXG4gICAgICAgIGxldCBpZCA9IHJvd1RhYmxlLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlkID09PSAnZGVsZXRlQnRuJykge1xyXG4gICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gcm93VGV4dFswXTtcclxuICAgICAgICAgICAgbGV0IHN0dWRlbnRGdWxsTmFtZSA9IHJvd1RleHRbMV07XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gYNCY0LfRgtGA0LjQstCw0L3QtSDQvdCwINGD0YfQtdC90LjQuiBcXFwiJHtzdHVkZW50RnVsbE5hbWV9XFxcIiBcXG7QvtGCINC60LvQsNGBIFxcXCIke2NsYXNzTmFtZX1cXFwiISEhYDtcclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbihgJHtwYXRofS9kZWxldGUvJHtpZH1gLCByb3dUYWJsZSwgbWVzc2FnZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlkID09PSAnZWRpdEJ0bicpIHtcclxuICAgICAgICAgICAgZWRpdEJ1dHRvbihgJHtwYXRofS9lZGl0LyR7aWR9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlLZXkgPSB0b1ByaW1pdGl2ZShrZXkpO1xuICBpZiAocHJvcGVydHlLZXkgaW4gb2JqZWN0KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwgcHJvcGVydHlLZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtwcm9wZXJ0eUtleV0gPSB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC12ZXJzaW9uJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7XG52YXIgTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEID0gJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCc7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIFNQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhU1BFQ0lFU19TVVBQT1JUO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IHRvTGVuZ3RoKEUubGVuZ3RoKTtcbiAgICAgICAgaWYgKG4gKyBsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG4gPj0gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9