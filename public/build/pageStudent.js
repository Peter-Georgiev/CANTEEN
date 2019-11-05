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
    order: [[2, 'asc'], [0, 'asc'], [1, 'des']],
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
      $('.table-responsive').show();
      Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["rowTextDangerOnOff"])();
      _applyDataTable_js__WEBPACK_IMPORTED_MODULE_3__["table"].on('click', 'button', function () {
        var rowTable = $(this).parent().parent();
        rowTable.addClass("text-danger");
        var rowText = rowTable.children().map(function () {
          return $.trim($(this).text());
        }).get();
        var id = rowTable.attr('id');

        if (this.id === 'deleteBtn') {
          var studentFullName = rowText[0];
          var className = rowText[2];
          var message = "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0443\u0447\u0435\u043D\u0438\u043A \"".concat(studentFullName, "\" \n\u043E\u0442 \u043A\u043B\u0430\u0441 \"").concat(className, "\"!!!");
          Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["deleteButton"])("".concat(path, "/delete/").concat(id), rowTable, message);
        } else if (this.id === 'editBtn') {
          Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["editButton"])("".concat(path, "/edit/").concat(id));
        }
      });
      $('#addOnBtn button').on('click', function () {
        Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_4__["addOnButton"])("".concat(path, "/create"));
      });
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

},[["./assets/js/custom-page/page-student.js","runtime","vendors~app~pageClassTable~pagePaymentAjax~pagePricePerDayAjax~pageProductAjax~pageStudent~pageTeacher","vendors~pageClassTable~pagePaymentAjax~pagePricePerDayAjax~pageProductAjax~pageStudent~pageTeacher"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tLXBhZ2UvYXBwbHlEYXRhVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2J1dHRvbi1yb3ctdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2xhbmd1YWdlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20tcGFnZS9wYWdlLXN0dWRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qcyJdLCJuYW1lcyI6WyJ0YWJsZSIsIiQiLCJyb3dUZXh0RGFuZ2VyT25PZmYiLCJpc09uIiwidG9rZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidHJpbSIsInNwbGl0IiwiaWQiLCJOdW1iZXIiLCJsZW5ndGgiLCJ0clRva2VuIiwiZWFjaCIsImF0dHIiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZGVsZXRlQnV0dG9uIiwicm93VGFibGUiLCJtZXNzYWdlcyIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFkZCIsImVkaXQiLCJhZGRPbkJ0biIsImNzcyIsImhpZGUiLCJzaG93Iiwic2V0VGltZW91dCIsInRoZW4iLCJ2YWx1ZSIsImNvbmZpcm0iLCJocmVmIiwiZWRpdEJ1dHRvbiIsImFkZE9uQnV0dG9uIiwicGFpZE9uQnV0dG9uIiwiYmciLCJwYXRoIiwiZG9jdW1lbnQiLCJyZWFkeSIsImRhdGFUYWJsZSIsImNvbHVtbkRlZnMiLCJ0YXJnZXRzIiwiZGF0YSIsImRlZmF1bHRDb250ZW50Iiwib3JkZXIiLCJsYW5ndWFnZSIsImRvbSIsImJ1dHRvbnMiLCJleHRlbmQiLCJvcmllbnRhdGlvbiIsInBhZ2VTaXplIiwiZHJhd0NhbGxiYWNrIiwiYXBpIiwiY29udGFpbmVyIiwib24iLCJmbkRyYXdDYWxsYmFjayIsIm9TZXR0aW5ncyIsInBhcmVudCIsInJvd1RleHQiLCJjaGlsZHJlbiIsIm1hcCIsInRleHQiLCJnZXQiLCJzdHVkZW50RnVsbE5hbWUiLCJjbGFzc05hbWUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLElBQUlBLEtBQUssR0FBR0MsQ0FBQyxDQUFDLFlBQUQsQ0FBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsU0FBU0Msa0JBQVQsR0FBeUM7QUFBQSxNQUFiQyxJQUFhLHVFQUFOLElBQU07QUFDckMsTUFBSUMsS0FBSyxHQUFJQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWpCLENBQ1BDLElBRE8sR0FFUEMsS0FGTyxDQUVELEdBRkMsQ0FBWjtBQUlBLE1BQUlDLEVBQUUsR0FBR0MsTUFBTSxDQUFDUCxLQUFLLENBQUNBLEtBQUssQ0FBQ1EsTUFBTixHQUFlLENBQWhCLENBQU4sQ0FBZjs7QUFDQSxNQUFJRixFQUFFLElBQUksQ0FBVixFQUFhO0FBQ1QsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsTUFBSUcsT0FBTyxHQUFHWixDQUFDLENBQUMscUJBQUQsQ0FBZjtBQUVBQSxHQUFDLENBQUNZLE9BQUQsQ0FBRCxDQUFXQyxJQUFYLENBQWdCLFlBQVU7QUFDdEIsUUFBSUgsTUFBTSxDQUFDVixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFjLElBQVIsQ0FBYSxJQUFiLENBQUQsQ0FBTixLQUErQkwsRUFBbkMsRUFBdUM7QUFDbkMsVUFBSVAsSUFBSixFQUFVO0FBQ05GLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWUsUUFBUixDQUFpQixhQUFqQjtBQUNILE9BRkQsTUFFTztBQUNIZixTQUFDLENBQUMsSUFBRCxDQUFELENBQVFnQixXQUFSLENBQW9CLGFBQXBCO0FBQ0g7QUFDSjtBQUNKLEdB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YWJsZScpO1xyXG5cclxuZXhwb3J0IHt0YWJsZX07IiwiZnVuY3Rpb24gcm93VGV4dERhbmdlck9uT2ZmKGlzT24gPSB0cnVlKSB7XHJcbiAgICBsZXQgdG9rZW4gPSAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxyXG4gICAgICAgIC50cmltKClcclxuICAgICAgICAuc3BsaXQoJy8nKTtcclxuXHJcbiAgICBsZXQgaWQgPSBOdW1iZXIodG9rZW5bdG9rZW4ubGVuZ3RoIC0gMV0pO1xyXG4gICAgaWYgKGlkIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgdHJUb2tlbiA9ICQoJyNkYXRhVGFibGUgdGJvZHkgdHInKTtcclxuXHJcbiAgICAkKHRyVG9rZW4pLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoTnVtYmVyKCQodGhpcykuYXR0cignaWQnKSkgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChpc09uKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd0ZXh0LWRhbmdlcicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndGV4dC1kYW5nZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGRlbGV0ZUJ1dHRvbihwYXRobmFtZSwgcm93VGFibGUsIG1lc3NhZ2VzKSB7XHJcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHJvd1RleHREYW5nZXJPbk9mZihmYWxzZSk7XHJcblxyXG4gICAgICAgIGxldCBhZGQgPSAkKCdkaXYgI2FkZCcpO1xyXG4gICAgICAgIGxldCBlZGl0ID0gJCgnZGl2ICNlZGl0Jyk7XHJcbiAgICAgICAgbGV0IGFkZE9uQnRuID0gJCgnI2FkZE9uQnRuJyk7XHJcblxyXG4gICAgICAgIGlmIChhZGQuY3NzKCdkaXNwbGF5JykgIT09ICdub25lJykge1xyXG4gICAgICAgICAgICBhZGQuaGlkZSgpO1xyXG4gICAgICAgICAgICBhZGRPbkJ0bi5zaG93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWRpdC5jc3MoJ2Rpc3BsYXknKSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIGVkaXQuaGlkZSgpO1xyXG4gICAgICAgICAgICBhZGRPbkJ0bi5zaG93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyByZXNvbHZlKFtcclxuICAgICAgICAgICAgICAgIGAke2FkZC5jc3MoJ2Rpc3BsYXknKX1gLFxyXG4gICAgICAgICAgICAgICAgYCR7cm93VGFibGUucmVtb3ZlQ2xhc3MoXCJ0ZXh0LWRhbmdlclwiKX1gXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICBpZiAoY29uZmlybShgISEhINCS0J3QmNCc0JDQndCY0JUgISEhXFxuYCArIG1lc3NhZ2VzKSkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0QnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG4gICAgLy9mZXRjaChgL3N0dWRlbnQvZWRpdC8ke2RhdGEuc3R1ZGVudElkfWAsIHtcclxuICAgIC8vICBtZXRob2Q6ICdQT1NUJ1xyXG4gICAgLy99KS50aGVuKHJlcyA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRPbkJ1dHRvbihwYXRobmFtZSkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRobmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFpZE9uQnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG59XHJcblxyXG5leHBvcnQge2VkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbiwgYWRkT25CdXR0b24sIHJvd1RleHREYW5nZXJPbk9mZiwgcGFpZE9uQnV0dG9ufTsiLCJsZXQgYmcgPSB7XHJcbiAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICBcImxlbmd0aE1lbnVcIjogXCLQn9C+0LrQsNC30LLQsNC90LUg0L3QsCBfTUVOVV8g0LfQsNC/0LjRgdC4INC90LAg0YHRgtGA0LDQvdC40YbQsFwiLFxyXG4gICAgICAgIFwiemVyb1JlY29yZHNcIjogXCLQndC40YnQviDQvdC1INC1INC90LDQvNC10YDQtdC90L4gLSDRgdGK0LbQsNC70Y/QstCw0LxcIixcclxuICAgICAgICBcImluZm9cIjogXCLQn9C+0LrQsNC30LLQsNC90LUg0L3QsCDRgdGC0YDQsNC90LjRhtCwIF9QQUdFXyDQvtGCIF9QQUdFU19cIixcclxuICAgICAgICBcImluZm9FbXB0eVwiOiBcItCd0Y/QvNCwINC90LDQu9C40YfQvdC4INC30LDQv9C40YHQuFwiLFxyXG4gICAgICAgIFwiaW5mb0ZpbHRlcmVkXCI6IFwiKNGE0LjQu9GC0YDQuNGA0LDQvdCwINC+0YIgX01BWF8g0L7QsdGJ0L4g0LfQsNC/0LjRgdC4KVwiLFxyXG4gICAgICAgIFwiaW5mb1Bvc3RGaXhcIjogXCJcIixcclxuICAgICAgICBcInRob3VzYW5kc1wiOiBcIixcIixcclxuICAgICAgICBcImxvYWRpbmdSZWNvcmRzXCI6IFwi0JfQsNGA0LXQttC00LAuLi5cIixcclxuICAgICAgICBcInByb2Nlc3NpbmdcIjogXCLQntCx0YDQsNCx0L7RgtC60LAuLi5cIixcclxuICAgICAgICBcInNlYXJjaFwiOiBcItCi0YrRgNGB0LXQvdC1INCyINGC0LDQsdC70LjRhtCw0YLQsCDQv9C+LdC00L7Qu9GDOlwiLFxyXG4gICAgICAgIFwicGFnaW5hdGVcIjoge1xyXG4gICAgICAgICAgICBcImZpcnN0XCI6IFwi0J/RitGA0LLQsFwiLFxyXG4gICAgICAgICAgICBcImxhc3RcIjogXCLQn9C+0YHQu9C10LTQvdCwXCIsXHJcbiAgICAgICAgICAgIFwibmV4dFwiOiBcItCh0LvQtdC00LLQsNGJ0LBcIixcclxuICAgICAgICAgICAgXCJwcmV2aW91c1wiOiBcItCf0YDQtdC00LjRiNC90LBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJhcmlhXCI6IHtcclxuICAgICAgICAgICAgXCJzb3J0QXNjZW5kaW5nXCI6IFwiOiDQodC+0YDRgtC40YDQsNC90LUg0L3QsCDQutC+0LvQvtC90LAg0LLRitC30YXQvtC00Y/RidC+XCIsXHJcbiAgICAgICAgICAgIFwic29ydERlc2NlbmRpbmdcIjogXCI6INCh0L7RgNGC0LjRgNCw0L3QtSDQvdCwINC60L7Qu9C+0L3QsCDQvdC40LfRhdC+0LTRj9GJ0L5cIlxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCJudWxsXCI6IFwi0L3Rj9C80LAg0LTQsNC90L3QuFwiLFxyXG4gICAgXCJjaGVja0JveFwiOiBcItCf0YDQuCDQuNC30LHQvtGAINC90LAg0L7Qv9GG0LjRj9GC0LA6IFwiLFxyXG4gICAgXCJlbXB0eU1lc3NhZ2VcIjogW1xyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiMS4g0JIg0L/QvtC70LUgJ9Ci0YrRgNGB0LXQvdC1JyDQvNC+0LbQtdGIINC00LAg0YLRitGA0YHQuNGIINC/0L46IGlkLCDQv9C+0YLRgNC10LHQuNGC0LXQuywg0LjQvNC1LCDRhNCw0LzQuNC70LjRjywg0LjQvNC1INC4INGE0LDQvNC40LvQuNGPLCDQuNC80LXQudC7INC40LvQuCDQvNC+0LTRg9C7LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjIuINCf0YDQuCAn0KLRitGA0YHQtdC90LUnINC/0L4gaWQg0YLRgNGP0LHQstCwINC00LAg0LLRitCy0LXQtNC10YLQtSBpZDog0Lgg0L3QvtC80LXRgNCwLiDQndCw0L/RgNC40LzQtdGAIGlkOjEyMzQuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiMy4g0J/RgNC4ICfQotGK0YDRgdC10L3QtScg0L/QviDQuNC80LUsINGE0LDQvNC40LvQuNGPLCDQuNC80LUg0Lgg0YTQsNC80LjQu9C40Y8gLSDQv9GA0LXQvtCx0YDQsNC30YPQstCwINC70LDRgtC40L3QuNGG0LAg0LIg0LrQuNGA0LjQu9C40YbQsCDQuCDQvtCx0YDQsNGC0L3Qvi5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI0LiDQn9GA0LggJ9Ci0YrRgNGB0LXQvdC1JyDQv9C+INC80L7QtNGD0Lsg0YLRgNGP0LHQstCwINC00LAg0LLRitCy0LXQtNC10YLQtSDQuNC80LXRgtC+INC90LAg0LzQvtC00YPQu9CwLiAo0J3QsNC/0YDQuNC80LXRgDogQTEuMSlcIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI1LiAn0JjQt9Cz0LvQtdC00LDQvdC4INC/0YDQvtGG0LXQvdGC0Lgg0L7RgiDQvNC+0LTRg9C70LAnINGC0Lgg0LTQsNCy0LDRgiDRgdC/0YDQsNCy0LrQsCDQutCw0LrQstCwINGH0LDRgdGCINC+0YIg0LLQuNC00LXQsNGC0LAg0LrRg9GA0YHQuNGB0YLRitGCINC1INC40LfQs9C70LXQtNCw0Lsg0L3QsNC/0YrQu9C90L4uXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiNi4gJ9Ch0LDQvNC+INGA0LXQs9C40YHRgtGA0LjRgNCw0L0nIC0g0YLRg9C6INC40LfQu9C40LfQsNGCINCy0YHQuNGH0LrQuCDRgNC10LPQuNGB0YLRgNC40YDQsNC90Lgg0L/QvtGC0YDQtdCx0LjRgtC10LvQuCwg0LrQvtC40YLQviDRgdCwINCz0LvQtdC00LDQu9C4INCx0LXQt9C/0LvQsNGC0L3QuCDQstC40LTQtdCwLlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjcuICfQoSDQtNC+0YHRgtGK0L8g0LTQviDQvNC+0LTRg9C7JyAtINGC0YPQuiDQuNC30LvQuNC30LDRgiDRgdCw0LzQviDQutGD0YDRgdC40YHRgtC40YLQtSwg0LrQvtC40YLQviDQuNC80LDRgiDQtNCw0LTQtdC9INC00L7RgdGC0YrQvyDQtNC+INC+0L/RgNC10LTQtdC70LXQvSDQvNC+0LTRg9C7LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBgOC4gJ9Ci0YrRgNGB0LXQvdC1INCyINGC0LDQsdC70LjRhtCw0YLQsCDQv9C+LdC00L7Qu9GDOicgLSDRgtGK0YDRgdC4INC/0L4g0LTQvtC/0YrQu9C90LjRgtC10LvQtdC9INC60YDQuNGC0LXRgNC40Lkg0LIg0LjQt9Cz0L7RgtCy0LXQvdCw0YLQsCDQstC10YfQtSDRgdC/0YDQsNCy0LrQsC5gfVxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7Ymd9OyIsImltcG9ydCB7dGFibGV9IGZyb20gJy4vYXBwbHlEYXRhVGFibGUuanMnXHJcbmltcG9ydCB7ZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uLCBhZGRPbkJ1dHRvbiwgcm93VGV4dERhbmdlck9uT2ZmfSBmcm9tICcuL2J1dHRvbi1yb3ctdGFibGUuanMnO1xyXG5pbXBvcnQge2JnfSBmcm9tICcuL2xhbmd1YWdlRGF0YVRhYmxlLmpzJztcclxuY29uc3QgcGF0aCA9ICcvc3R1ZGVudCc7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICB0YWJsZS5kYXRhVGFibGUoe1xyXG4gICAgICAgIC8vcGFnaW5nVHlwZTogJ2Z1bGxfbnVtYmVycycsIC8vIFwic2ltcGxlXCIgb3B0aW9uIGZvciAnUHJldmlvdXMnIGFuZCAnTmV4dCcgYnV0dG9ucyBvbmx5XHJcbiAgICAgICAgY29sdW1uRGVmczogW3tcclxuICAgICAgICAgICAgdGFyZ2V0czogLTIsXHJcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBcIjxidXR0b24gaWQ9J2VkaXRCdG4nIGNsYXNzPSd0ZXh0LXdhcm5pbmcnPtCg0LXQtNCw0LrRgtC40YDQsNC90LUhPC9idXR0b24+XCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHRhcmdldHM6IC0xLFxyXG4gICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICBkZWZhdWx0Q29udGVudDogXCI8YnV0dG9uIGlkPSdkZWxldGVCdG4nIGNsYXNzPSd0ZXh0LWRhbmdlcic+0JjQt9GC0YDQuNCy0LDQvdC1ITwvYnV0dG9uPlwiXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgb3JkZXI6IFtcclxuICAgICAgICAgICAgWzIsICdhc2MnXSwgWzAsICdhc2MnXSwgWzEsICdkZXMnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGJnLmxhbmd1YWdlLFxyXG4gICAgICAgIGRvbTogJ2xmQlNydGlwJyxcclxuICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgIHtleHRlbmQ6ICdjb3B5J30sXHJcbiAgICAgICAgICAgIC8ve2V4dGVuZDogJ2Nzdid9LFxyXG4gICAgICAgICAgICB7ZXh0ZW5kOiAnZXhjZWwnfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9leHRlbmQ6ICdwZGZIdG1sNScsXHJcbiAgICAgICAgICAgICAgICBleHRlbmQ6ICdwZGYnLFxyXG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb246ICdsYW5kc2NhcGUnLFxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6ICdMRUdBTCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge2V4dGVuZDogJ3ByaW50J30sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoJy5kYXRhVGFibGVzX3BhZ2luYXRlIGEucGFnaW5hdGVfYnV0dG9uOm5vdCguZGlzYWJsZWQpJywgdGhpcy5hcGkoKS50YWJsZSgpLmNvbnRhaW5lcigpKVxyXG4gICAgICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93VGV4dERhbmdlck9uT2ZmKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZuRHJhd0NhbGxiYWNrOiBmdW5jdGlvbiggb1NldHRpbmdzICkge1xyXG4gICAgICAgICAgICAkKCcjbG9hZGluZ0JveCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnLnRhYmxlLXJlc3BvbnNpdmUnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIHJvd1RleHREYW5nZXJPbk9mZigpO1xyXG5cclxuICAgICAgICAgICAgdGFibGUub24oJ2NsaWNrJywgJ2J1dHRvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCByb3dUYWJsZSA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICByb3dUYWJsZS5hZGRDbGFzcyhcInRleHQtZGFuZ2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvd1RleHQgPSByb3dUYWJsZS5jaGlsZHJlbigpLm1hcChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkLnRyaW0oJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgfSkuZ2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gcm93VGFibGUuYXR0cignaWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pZCA9PT0gJ2RlbGV0ZUJ0bicpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3R1ZGVudEZ1bGxOYW1lID0gcm93VGV4dFswXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gcm93VGV4dFsyXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGDQmNC30YLRgNC40LLQsNC90LUg0L3QsCDRg9GH0LXQvdC40LogXFxcIiR7c3R1ZGVudEZ1bGxOYW1lfVxcXCIgXFxu0L7RgiDQutC70LDRgSBcXFwiJHtjbGFzc05hbWV9XFxcIiEhIWA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbihgJHtwYXRofS9kZWxldGUvJHtpZH1gLCByb3dUYWJsZSwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWQgPT09ICdlZGl0QnRuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRCdXR0b24oYCR7cGF0aH0vZWRpdC8ke2lkfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoJyNhZGRPbkJ0biBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRPbkJ1dHRvbihgJHtwYXRofS9jcmVhdGVgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlLZXkgPSB0b1ByaW1pdGl2ZShrZXkpO1xuICBpZiAocHJvcGVydHlLZXkgaW4gb2JqZWN0KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwgcHJvcGVydHlLZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtwcm9wZXJ0eUtleV0gPSB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC12ZXJzaW9uJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7XG52YXIgTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEID0gJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCc7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIFNQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhU1BFQ0lFU19TVVBQT1JUO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IHRvTGVuZ3RoKEUubGVuZ3RoKTtcbiAgICAgICAgaWYgKG4gKyBsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG4gPj0gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9