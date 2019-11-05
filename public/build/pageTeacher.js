(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pageTeacher"],{

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

/***/ "./assets/js/custom-page/page-teacher.js":
/*!***********************************************!*\
  !*** ./assets/js/custom-page/page-teacher.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _applyDataTable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applyDataTable.js */ "./assets/js/custom-page/applyDataTable.js");
/* harmony import */ var _button_row_table_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-row-table.js */ "./assets/js/custom-page/button-row-table.js");
/* harmony import */ var _languageDataTable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./languageDataTable.js */ "./assets/js/custom-page/languageDataTable.js");





var path = '/teacher';
$(document).ready(function () {
  _applyDataTable_js__WEBPACK_IMPORTED_MODULE_2__["table"].dataTable({
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
    order: [[0, 'asc']],
    language: _languageDataTable_js__WEBPACK_IMPORTED_MODULE_4__["bg"].language,
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
        Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_3__["rowTextDangerOnOff"])();
      });
    },
    fnDrawCallback: function fnDrawCallback(oSettings) {
      $('#loadingBox').hide();
      $(".table-responsive").show();
      Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_3__["rowTextDangerOnOff"])();
      _applyDataTable_js__WEBPACK_IMPORTED_MODULE_2__["table"].on('click', 'button', function () {
        var rowTable = $(this).parent().parent();
        rowTable.addClass("text-danger");
        var rowText = rowTable.children().map(function () {
          return $.trim($(this).text());
        }).get();
        var id = rowTable.attr('id');
        var teacherFullName = rowText[0];
        var teacherCount = rowText[1];
        var message = "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u043A\u0430\u043B\u0441\u0435\u043D \u0440\u044A\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B \"".concat(teacherFullName, "\", \u043E\u0431\u0432\u044A\u0440\u0437\u0430\u043D \u0441 ");

        if (teacherCount > 1) {
          message += "".concat(teacherCount, " \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430!!!");
        } else {
          message += "".concat(teacherCount, " \u0441\u0442\u0443\u0434\u0435\u043D\u0442!!!");
        }

        if (this.id === 'deleteBtn') {
          Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_3__["deleteButton"])("".concat(path, "/delete/").concat(id), rowTable, message);
        } else if (this.id === 'editBtn') {
          Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_3__["editButton"])("".concat(path, "/edit/").concat(id));
        }
      });
      $('#addOnBtn button').on('click', function () {
        Object(_button_row_table_js__WEBPACK_IMPORTED_MODULE_3__["addOnButton"])("".concat(path, "/create"));
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/custom-page/page-teacher.js","runtime","vendors~app~pageClassTable~pagePaymentAjax~pagePricePerDayAjax~pageProductAjax~pageStudent~pageTeacher","vendors~pageClassTable~pagePaymentAjax~pagePricePerDayAjax~pageProductAjax~pageStudent~pageTeacher"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tLXBhZ2UvYXBwbHlEYXRhVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2J1dHRvbi1yb3ctdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2xhbmd1YWdlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20tcGFnZS9wYWdlLXRlYWNoZXIuanMiXSwibmFtZXMiOlsidGFibGUiLCIkIiwicm93VGV4dERhbmdlck9uT2ZmIiwiaXNPbiIsInRva2VuIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInRyaW0iLCJzcGxpdCIsImlkIiwiTnVtYmVyIiwibGVuZ3RoIiwidHJUb2tlbiIsImVhY2giLCJhdHRyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImRlbGV0ZUJ1dHRvbiIsInJvd1RhYmxlIiwibWVzc2FnZXMiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhZGQiLCJlZGl0IiwiYWRkT25CdG4iLCJjc3MiLCJoaWRlIiwic2hvdyIsInNldFRpbWVvdXQiLCJ0aGVuIiwidmFsdWUiLCJjb25maXJtIiwiaHJlZiIsImVkaXRCdXR0b24iLCJhZGRPbkJ1dHRvbiIsInBhaWRPbkJ1dHRvbiIsImJnIiwicGF0aCIsImRvY3VtZW50IiwicmVhZHkiLCJkYXRhVGFibGUiLCJjb2x1bW5EZWZzIiwidGFyZ2V0cyIsImRhdGEiLCJkZWZhdWx0Q29udGVudCIsIm9yZGVyIiwibGFuZ3VhZ2UiLCJkb20iLCJidXR0b25zIiwiZXh0ZW5kIiwib3JpZW50YXRpb24iLCJwYWdlU2l6ZSIsImRyYXdDYWxsYmFjayIsImFwaSIsImNvbnRhaW5lciIsIm9uIiwiZm5EcmF3Q2FsbGJhY2siLCJvU2V0dGluZ3MiLCJwYXJlbnQiLCJyb3dUZXh0IiwiY2hpbGRyZW4iLCJtYXAiLCJ0ZXh0IiwiZ2V0IiwidGVhY2hlckZ1bGxOYW1lIiwidGVhY2hlckNvdW50IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxJQUFJQSxLQUFLLEdBQUdDLENBQUMsQ0FBQyxZQUFELENBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLFNBQVNDLGtCQUFULEdBQXlDO0FBQUEsTUFBYkMsSUFBYSx1RUFBTixJQUFNO0FBQ3JDLE1BQUlDLEtBQUssR0FBSUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFqQixDQUNQQyxJQURPLEdBRVBDLEtBRk8sQ0FFRCxHQUZDLENBQVo7QUFJQSxNQUFJQyxFQUFFLEdBQUdDLE1BQU0sQ0FBQ1AsS0FBSyxDQUFDQSxLQUFLLENBQUNRLE1BQU4sR0FBZSxDQUFoQixDQUFOLENBQWY7O0FBQ0EsTUFBSUYsRUFBRSxJQUFJLENBQVYsRUFBYTtBQUNULFdBQU8sS0FBUDtBQUNIOztBQUNELE1BQUlHLE9BQU8sR0FBR1osQ0FBQyxDQUFDLHFCQUFELENBQWY7QUFFQUEsR0FBQyxDQUFDWSxPQUFELENBQUQsQ0FBV0MsSUFBWCxDQUFnQixZQUFVO0FBQ3RCLFFBQUlILE1BQU0sQ0FBQ1YsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYyxJQUFSLENBQWEsSUFBYixDQUFELENBQU4sS0FBK0JMLEVBQW5DLEVBQXVDO0FBQ25DLFVBQUlQLElBQUosRUFBVTtBQUNORixTQUFDLENBQUMsSUFBRCxDQUFELENBQVFlLFFBQVIsQ0FBaUIsYUFBakI7QUFDSCxPQUZELE1BRU87QUFDSGYsU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0IsV0FBUixDQUFvQixhQUFwQjtBQUNIO0FBQ0o7QUFDSixHQVJEO0FBU0g7O0FBQ0QsU0FBU0MsWUFBVCxDQUFzQlgsUUFBdEIsRUFBZ0NZLFFBQWhDLEVBQTBDQyxRQUExQyxFQUFvRDtBQUNoRCxNQUFJQyxPQUFPLEdBQUcsSUFBSUMsT0FBSixDQUFZLFVBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCO0FBQ2hEdEIsc0JBQWtCLENBQUMsS0FBRCxDQUFsQjtBQUVBLFFBQUl1QixHQUFHLEdBQUd4QixDQUFDLENBQUMsVUFBRCxDQUFYO0FBQ0EsUUFBSXlCLElBQUksR0FBR3pCLENBQUMsQ0FBQyxXQUFELENBQVo7QUFDQSxRQUFJMEIsUUFBUSxHQUFHMUIsQ0FBQyxDQUFDLFdBQUQsQ0FBaEI7O0FBRUEsUUFBSXdCLEdBQUcsQ0FBQ0csR0FBSixDQUFRLFNBQVIsTUFBdUIsTUFBM0IsRUFBbUM7QUFDL0JILFNBQUcsQ0FBQ0ksSUFBSjtBQUNBRixjQUFRLENBQUNHLElBQVQ7QUFDSDs7QUFFRCxRQUFJSixJQUFJLENBQUNFLEdBQUwsQ0FBUyxTQUFULE1BQXdCLE1BQTVCLEVBQW9DO0FBQ2hDRixVQUFJLENBQUNHLElBQUw7QUFDQUYsY0FBUSxDQUFDRyxJQUFUO0FBQ0g7O0FBRURDLGNBQVUsQ0FBQyxZQUFXO0FBQUVSLGFBQU8sQ0FBQyxXQUNyQkUsR0FBRyxDQUFDRyxHQUFKLENBQVEsU0FBUixDQURxQixhQUVyQlQsUUFBUSxDQUFDRixXQUFULENBQXFCLGFBQXJCLENBRnFCLEVBQUQsQ0FBUDtBQUl2QixLQUpTLEVBSVAsR0FKTyxDQUFWO0FBS0gsR0F0QmEsQ0FBZDtBQXdCQUksU0FBTyxDQUFDVyxJQUFSLENBQWEsVUFBU0MsS0FBVCxFQUFnQjtBQUN6QixRQUFJQyxPQUFPLENBQUMsK0RBQXVCZCxRQUF4QixDQUFYLEVBQThDO0FBQzFDZixZQUFNLENBQUNDLFFBQVAsQ0FBZ0I2QixJQUFoQixHQUF1QjVCLFFBQXZCO0FBQ0g7O0FBQ0QsV0FBTyxLQUFQO0FBQ0gsR0FMRDtBQU1IOztBQUVELFNBQVM2QixVQUFULENBQW9CN0IsUUFBcEIsRUFBOEI7QUFDMUJGLFFBQU0sQ0FBQ0MsUUFBUCxDQUFnQjZCLElBQWhCLEdBQXVCNUIsUUFBdkIsQ0FEMEIsQ0FFMUI7QUFDQTtBQUNBO0FBQ0g7O0FBRUQsU0FBUzhCLFdBQVQsQ0FBcUI5QixRQUFyQixFQUErQjtBQUMzQkYsUUFBTSxDQUFDQyxRQUFQLENBQWdCNkIsSUFBaEIsR0FBdUI1QixRQUF2QjtBQUNIOztBQUVELFNBQVMrQixZQUFULENBQXNCL0IsUUFBdEIsRUFBZ0M7QUFDNUJGLFFBQU0sQ0FBQ0MsUUFBUCxDQUFnQjZCLElBQWhCLEdBQXVCNUIsUUFBdkI7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDbkVEO0FBQUE7QUFBQSxJQUFJZ0MsRUFBRSxHQUFHO0FBQ0wsY0FBWTtBQUNSLGtCQUFjLHdDQUROO0FBRVIsbUJBQWUsZ0NBRlA7QUFHUixZQUFRLHlDQUhBO0FBSVIsaUJBQWEscUJBSkw7QUFLUixvQkFBZ0IsbUNBTFI7QUFNUixtQkFBZSxFQU5QO0FBT1IsaUJBQWEsR0FQTDtBQVFSLHNCQUFrQixZQVJWO0FBU1Isa0JBQWMsY0FUTjtBQVVSLGNBQVUsOEJBVkY7QUFXUixnQkFBWTtBQUNSLGVBQVMsT0FERDtBQUVSLGNBQVEsVUFGQTtBQUdSLGNBQVEsVUFIQTtBQUlSLGtCQUFZO0FBSkosS0FYSjtBQWlCUixZQUFRO0FBQ0osdUJBQWlCLGlDQURiO0FBRUosd0JBQWtCO0FBRmQ7QUFqQkEsR0FEUDtBQXVCTCxVQUFRLFlBdkJIO0FBd0JMLGNBQVksd0JBeEJQO0FBeUJMLGtCQUFnQixDQUNaO0FBQUMsZUFBVztBQUFaLEdBRFksRUFFWjtBQUFDLGVBQVc7QUFBWixHQUZZLEVBR1o7QUFBQyxlQUFXO0FBQVosR0FIWSxFQUlaO0FBQUMsZUFBVztBQUFaLEdBSlksRUFLWjtBQUFDLGVBQVc7QUFBWixHQUxZLEVBTVo7QUFBQyxlQUFXO0FBQVosR0FOWSxFQU9aO0FBQUMsZUFBVztBQUFaLEdBUFksRUFRWjtBQUFDO0FBQUQsR0FSWTtBQXpCWCxDQUFUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLElBQU1DLElBQUksR0FBRyxVQUFiO0FBRUF2QyxDQUFDLENBQUN3QyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzNCMUMsMERBQUssQ0FBQzJDLFNBQU4sQ0FBZ0I7QUFDWjtBQUNDQyxjQUFVLEVBQUUsQ0FBQztBQUNUQyxhQUFPLEVBQUUsQ0FBQyxDQUREO0FBRVRDLFVBQUksRUFBRSxJQUZHO0FBR1RDLG9CQUFjLEVBQUU7QUFIUCxLQUFELEVBSVQ7QUFDQ0YsYUFBTyxFQUFFLENBQUMsQ0FEWDtBQUVDQyxVQUFJLEVBQUUsSUFGUDtBQUdDQyxvQkFBYyxFQUFFO0FBSGpCLEtBSlMsQ0FGRDtBQVdYQyxTQUFLLEVBQUUsQ0FDSCxDQUFDLENBQUQsRUFBSSxLQUFKLENBREcsQ0FYSTtBQWNaQyxZQUFRLEVBQUVWLHdEQUFFLENBQUNVLFFBZEQ7QUFlWEMsT0FBRyxFQUFFLFVBZk07QUFnQlhDLFdBQU8sRUFBRSxDQUNMO0FBQUNDLFlBQU0sRUFBRTtBQUFULEtBREssRUFFTDtBQUNBO0FBQUNBLFlBQU0sRUFBRTtBQUFULEtBSEssRUFJTDtBQUNJO0FBQ0FBLFlBQU0sRUFBRSxLQUZaO0FBR0lDLGlCQUFXLEVBQUUsV0FIakI7QUFJSUMsY0FBUSxFQUFFO0FBSmQsS0FKSyxFQVVMO0FBQUNGLFlBQU0sRUFBRTtBQUFULEtBVkssQ0FoQkU7QUE0QlhHLGdCQUFZLEVBQUUsd0JBQVU7QUFDcEJ0RCxPQUFDLENBQUMsdURBQUQsRUFBMEQsS0FBS3VELEdBQUwsR0FBV3hELEtBQVgsR0FBbUJ5RCxTQUFuQixFQUExRCxDQUFELENBQ0tDLEVBREwsQ0FDUSxPQURSLEVBQ2lCLFlBQVU7QUFDbkJ4RCx1RkFBa0I7QUFDckIsT0FITDtBQUlILEtBakNVO0FBa0NaeUQsa0JBQWMsRUFBRSx3QkFBVUMsU0FBVixFQUFzQjtBQUNsQzNELE9BQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUI0QixJQUFqQjtBQUNBNUIsT0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUI2QixJQUF2QjtBQUNBNUIscUZBQWtCO0FBRWxCRiw4REFBSyxDQUFDMEQsRUFBTixDQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEIsWUFBWTtBQUNwQyxZQUFJdkMsUUFBUSxHQUFHbEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEQsTUFBUixHQUFpQkEsTUFBakIsRUFBZjtBQUNBMUMsZ0JBQVEsQ0FBQ0gsUUFBVCxDQUFrQixhQUFsQjtBQUNBLFlBQUk4QyxPQUFPLEdBQUczQyxRQUFRLENBQUM0QyxRQUFULEdBQW9CQyxHQUFwQixDQUF3QixZQUFVO0FBQzVDLGlCQUFPL0QsQ0FBQyxDQUFDTyxJQUFGLENBQU9QLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdFLElBQVIsRUFBUCxDQUFQO0FBQ0gsU0FGYSxFQUVYQyxHQUZXLEVBQWQ7QUFJQSxZQUFJeEQsRUFBRSxHQUFHUyxRQUFRLENBQUNKLElBQVQsQ0FBYyxJQUFkLENBQVQ7QUFDQSxZQUFJb0QsZUFBZSxHQUFHTCxPQUFPLENBQUMsQ0FBRCxDQUE3QjtBQUNBLFlBQUlNLFlBQVksR0FBR04sT0FBTyxDQUFDLENBQUQsQ0FBMUI7QUFFQSxZQUFJTyxPQUFPLDJMQUF3Q0YsZUFBeEMsaUVBQVg7O0FBQ0EsWUFBSUMsWUFBWSxHQUFHLENBQW5CLEVBQXNCO0FBQ2xCQyxpQkFBTyxjQUFPRCxZQUFQLHlEQUFQO0FBQ0gsU0FGRCxNQUVPO0FBQ0hDLGlCQUFPLGNBQU9ELFlBQVAsbURBQVA7QUFDSDs7QUFFRCxZQUFJLEtBQUsxRCxFQUFMLEtBQVksV0FBaEIsRUFBNkI7QUFDekJRLG1GQUFZLFdBQUlzQixJQUFKLHFCQUFtQjlCLEVBQW5CLEdBQXlCUyxRQUF6QixFQUFtQ2tELE9BQW5DLENBQVo7QUFDSCxTQUZELE1BRU8sSUFBSSxLQUFLM0QsRUFBTCxLQUFZLFNBQWhCLEVBQTJCO0FBQzlCMEIsaUZBQVUsV0FBSUksSUFBSixtQkFBaUI5QixFQUFqQixFQUFWO0FBQ0g7QUFDSixPQXZCRDtBQXlCQVQsT0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0J5RCxFQUF0QixDQUF5QixPQUF6QixFQUFrQyxZQUFZO0FBQzFDckIsZ0ZBQVcsV0FBSUcsSUFBSixhQUFYO0FBQ0gsT0FGRDtBQUdIO0FBbkVXLEdBQWhCO0FBcUVGLENBdEVELEUiLCJmaWxlIjoicGFnZVRlYWNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdGFibGUgPSAkKCcjZGF0YVRhYmxlJyk7XHJcblxyXG5leHBvcnQge3RhYmxlfTsiLCJmdW5jdGlvbiByb3dUZXh0RGFuZ2VyT25PZmYoaXNPbiA9IHRydWUpIHtcclxuICAgIGxldCB0b2tlbiA9ICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXHJcbiAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgIC5zcGxpdCgnLycpO1xyXG5cclxuICAgIGxldCBpZCA9IE51bWJlcih0b2tlblt0b2tlbi5sZW5ndGggLSAxXSk7XHJcbiAgICBpZiAoaWQgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCB0clRva2VuID0gJCgnI2RhdGFUYWJsZSB0Ym9keSB0cicpO1xyXG5cclxuICAgICQodHJUb2tlbikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChOdW1iZXIoJCh0aGlzKS5hdHRyKCdpZCcpKSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgaWYgKGlzT24pIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3RleHQtZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd0ZXh0LWRhbmdlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlQnV0dG9uKHBhdGhuYW1lLCByb3dUYWJsZSwgbWVzc2FnZXMpIHtcclxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgcm93VGV4dERhbmdlck9uT2ZmKGZhbHNlKTtcclxuXHJcbiAgICAgICAgbGV0IGFkZCA9ICQoJ2RpdiAjYWRkJyk7XHJcbiAgICAgICAgbGV0IGVkaXQgPSAkKCdkaXYgI2VkaXQnKTtcclxuICAgICAgICBsZXQgYWRkT25CdG4gPSAkKCcjYWRkT25CdG4nKTtcclxuXHJcbiAgICAgICAgaWYgKGFkZC5jc3MoJ2Rpc3BsYXknKSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIGFkZC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGFkZE9uQnRuLnNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlZGl0LmNzcygnZGlzcGxheScpICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgZWRpdC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGFkZE9uQnRuLnNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHJlc29sdmUoW1xyXG4gICAgICAgICAgICAgICAgYCR7YWRkLmNzcygnZGlzcGxheScpfWAsXHJcbiAgICAgICAgICAgICAgICBgJHtyb3dUYWJsZS5yZW1vdmVDbGFzcyhcInRleHQtZGFuZ2VyXCIpfWBcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIGlmIChjb25maXJtKGAhISEg0JLQndCY0JzQkNCd0JjQlSAhISFcXG5gICsgbWVzc2FnZXMpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRCdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbiAgICAvL2ZldGNoKGAvc3R1ZGVudC9lZGl0LyR7ZGF0YS5zdHVkZW50SWR9YCwge1xyXG4gICAgLy8gIG1ldGhvZDogJ1BPU1QnXHJcbiAgICAvL30pLnRoZW4ocmVzID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE9uQnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYWlkT25CdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uLCBhZGRPbkJ1dHRvbiwgcm93VGV4dERhbmdlck9uT2ZmLCBwYWlkT25CdXR0b259OyIsImxldCBiZyA9IHtcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwibGVuZ3RoTWVudVwiOiBcItCf0L7QutCw0LfQstCw0L3QtSDQvdCwIF9NRU5VXyDQt9Cw0L/QuNGB0Lgg0L3QsCDRgdGC0YDQsNC90LjRhtCwXCIsXHJcbiAgICAgICAgXCJ6ZXJvUmVjb3Jkc1wiOiBcItCd0LjRidC+INC90LUg0LUg0L3QsNC80LXRgNC10L3QviAtINGB0YrQttCw0LvRj9Cy0LDQvFwiLFxyXG4gICAgICAgIFwiaW5mb1wiOiBcItCf0L7QutCw0LfQstCw0L3QtSDQvdCwINGB0YLRgNCw0L3QuNGG0LAgX1BBR0VfINC+0YIgX1BBR0VTX1wiLFxyXG4gICAgICAgIFwiaW5mb0VtcHR5XCI6IFwi0J3Rj9C80LAg0L3QsNC70LjRh9C90Lgg0LfQsNC/0LjRgdC4XCIsXHJcbiAgICAgICAgXCJpbmZvRmlsdGVyZWRcIjogXCIo0YTQuNC70YLRgNC40YDQsNC90LAg0L7RgiBfTUFYXyDQvtCx0YnQviDQt9Cw0L/QuNGB0LgpXCIsXHJcbiAgICAgICAgXCJpbmZvUG9zdEZpeFwiOiBcIlwiLFxyXG4gICAgICAgIFwidGhvdXNhbmRzXCI6IFwiLFwiLFxyXG4gICAgICAgIFwibG9hZGluZ1JlY29yZHNcIjogXCLQl9Cw0YDQtdC20LTQsC4uLlwiLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiBcItCe0LHRgNCw0LHQvtGC0LrQsC4uLlwiLFxyXG4gICAgICAgIFwic2VhcmNoXCI6IFwi0KLRitGA0YHQtdC90LUg0LIg0YLQsNCx0LvQuNGG0LDRgtCwINC/0L4t0LTQvtC70YM6XCIsXHJcbiAgICAgICAgXCJwYWdpbmF0ZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZmlyc3RcIjogXCLQn9GK0YDQstCwXCIsXHJcbiAgICAgICAgICAgIFwibGFzdFwiOiBcItCf0L7RgdC70LXQtNC90LBcIixcclxuICAgICAgICAgICAgXCJuZXh0XCI6IFwi0KHQu9C10LTQstCw0YnQsFwiLFxyXG4gICAgICAgICAgICBcInByZXZpb3VzXCI6IFwi0J/RgNC10LTQuNGI0L3QsFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFyaWFcIjoge1xyXG4gICAgICAgICAgICBcInNvcnRBc2NlbmRpbmdcIjogXCI6INCh0L7RgNGC0LjRgNCw0L3QtSDQvdCwINC60L7Qu9C+0L3QsCDQstGK0LfRhdC+0LTRj9GJ0L5cIixcclxuICAgICAgICAgICAgXCJzb3J0RGVzY2VuZGluZ1wiOiBcIjog0KHQvtGA0YLQuNGA0LDQvdC1INC90LAg0LrQvtC70L7QvdCwINC90LjQt9GF0L7QtNGP0YnQvlwiXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIm51bGxcIjogXCLQvdGP0LzQsCDQtNCw0L3QvdC4XCIsXHJcbiAgICBcImNoZWNrQm94XCI6IFwi0J/RgNC4INC40LfQsdC+0YAg0L3QsCDQvtC/0YbQuNGP0YLQsDogXCIsXHJcbiAgICBcImVtcHR5TWVzc2FnZVwiOiBbXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCIxLiDQkiDQv9C+0LvQtSAn0KLRitGA0YHQtdC90LUnINC80L7QttC10Ygg0LTQsCDRgtGK0YDRgdC40Ygg0L/QvjogaWQsINC/0L7RgtGA0LXQsdC40YLQtdC7LCDQuNC80LUsINGE0LDQvNC40LvQuNGPLCDQuNC80LUg0Lgg0YTQsNC80LjQu9C40Y8sINC40LzQtdC50Lsg0LjQu9C4INC80L7QtNGD0LsuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiMi4g0J/RgNC4ICfQotGK0YDRgdC10L3QtScg0L/QviBpZCDRgtGA0Y/QsdCy0LAg0LTQsCDQstGK0LLQtdC00LXRgtC1IGlkOiDQuCDQvdC+0LzQtdGA0LAuINCd0LDQv9GA0LjQvNC10YAgaWQ6MTIzNC5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCIzLiDQn9GA0LggJ9Ci0YrRgNGB0LXQvdC1JyDQv9C+INC40LzQtSwg0YTQsNC80LjQu9C40Y8sINC40LzQtSDQuCDRhNCw0LzQuNC70LjRjyAtINC/0YDQtdC+0LHRgNCw0LfRg9Cy0LAg0LvQsNGC0LjQvdC40YbQsCDQsiDQutC40YDQuNC70LjRhtCwINC4INC+0LHRgNCw0YLQvdC+LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjQuINCf0YDQuCAn0KLRitGA0YHQtdC90LUnINC/0L4g0LzQvtC00YPQuyDRgtGA0Y/QsdCy0LAg0LTQsCDQstGK0LLQtdC00LXRgtC1INC40LzQtdGC0L4g0L3QsCDQvNC+0LTRg9C70LAuICjQndCw0L/RgNC40LzQtdGAOiBBMS4xKVwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjUuICfQmNC30LPQu9C10LTQsNC90Lgg0L/RgNC+0YbQtdC90YLQuCDQvtGCINC80L7QtNGD0LvQsCcg0YLQuCDQtNCw0LLQsNGCINGB0L/RgNCw0LLQutCwINC60LDQutCy0LAg0YfQsNGB0YIg0L7RgiDQstC40LTQtdCw0YLQsCDQutGD0YDRgdC40YHRgtGK0YIg0LUg0LjQt9Cz0LvQtdC00LDQuyDQvdCw0L/RitC70L3Qvi5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI2LiAn0KHQsNC80L4g0YDQtdCz0LjRgdGC0YDQuNGA0LDQvScgLSDRgtGD0Log0LjQt9C70LjQt9Cw0YIg0LLRgdC40YfQutC4INGA0LXQs9C40YHRgtGA0LjRgNCw0L3QuCDQv9C+0YLRgNC10LHQuNGC0LXQu9C4LCDQutC+0LjRgtC+INGB0LAg0LPQu9C10LTQsNC70Lgg0LHQtdC30L/Qu9Cw0YLQvdC4INCy0LjQtNC10LAuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiNy4gJ9ChINC00L7RgdGC0YrQvyDQtNC+INC80L7QtNGD0LsnIC0g0YLRg9C6INC40LfQu9C40LfQsNGCINGB0LDQvNC+INC60YPRgNGB0LjRgdGC0LjRgtC1LCDQutC+0LjRgtC+INC40LzQsNGCINC00LDQtNC10L0g0LTQvtGB0YLRitC/INC00L4g0L7Qv9GA0LXQtNC10LvQtdC9INC80L7QtNGD0LsuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IGA4LiAn0KLRitGA0YHQtdC90LUg0LIg0YLQsNCx0LvQuNGG0LDRgtCwINC/0L4t0LTQvtC70YM6JyAtINGC0YrRgNGB0Lgg0L/QviDQtNC+0L/RitC70L3QuNGC0LXQu9C10L0g0LrRgNC40YLQtdGA0LjQuSDQsiDQuNC30LPQvtGC0LLQtdC90LDRgtCwINCy0LXRh9C1INGB0L/RgNCw0LLQutCwLmB9XHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IHtiZ307IiwiaW1wb3J0IHt0YWJsZX0gZnJvbSAnLi9hcHBseURhdGFUYWJsZS5qcydcclxuaW1wb3J0IHtlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24sIGFkZE9uQnV0dG9uLCByb3dUZXh0RGFuZ2VyT25PZmZ9IGZyb20gJy4vYnV0dG9uLXJvdy10YWJsZS5qcyc7XHJcbmltcG9ydCB7Ymd9IGZyb20gXCIuL2xhbmd1YWdlRGF0YVRhYmxlLmpzXCI7XHJcbmNvbnN0IHBhdGggPSAnL3RlYWNoZXInO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICB0YWJsZS5kYXRhVGFibGUoe1xyXG4gICAgICAgLy9wYWdpbmdUeXBlOiAnZnVsbF9udW1iZXJzJywgLy8gXCJzaW1wbGVcIiBvcHRpb24gZm9yICdQcmV2aW91cycgYW5kICdOZXh0JyBidXR0b25zIG9ubHlcclxuICAgICAgICBjb2x1bW5EZWZzOiBbe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiAtMixcclxuICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IFwiPGJ1dHRvbiBpZD0nZWRpdEJ0bicgY2xhc3M9J3RleHQtd2FybmluZyc+0KDQtdC00LDQutGC0LjRgNCw0L3QtSE8L2J1dHRvbj5cIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdGFyZ2V0czogLTEsXHJcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBcIjxidXR0b24gaWQ9J2RlbGV0ZUJ0bicgY2xhc3M9J3RleHQtZGFuZ2VyJz7QmNC30YLRgNC40LLQsNC90LUhPC9idXR0b24+XCJcclxuICAgICAgICB9XSxcclxuICAgICAgICBvcmRlcjogW1xyXG4gICAgICAgICAgICBbMCwgJ2FzYyddXHJcbiAgICAgICAgXSxcclxuICAgICAgIGxhbmd1YWdlOiBiZy5sYW5ndWFnZSxcclxuICAgICAgICBkb206ICdsZkJTcnRpcCcsXHJcbiAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICB7ZXh0ZW5kOiAnY29weSd9LFxyXG4gICAgICAgICAgICAvL3tleHRlbmQ6ICdjc3YnfSxcclxuICAgICAgICAgICAge2V4dGVuZDogJ2V4Y2VsJ30sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vZXh0ZW5kOiAncGRmSHRtbDUnLFxyXG4gICAgICAgICAgICAgICAgZXh0ZW5kOiAncGRmJyxcclxuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiAnbGFuZHNjYXBlJyxcclxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAnTEVHQUwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtleHRlbmQ6ICdwcmludCd9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKCcuZGF0YVRhYmxlc19wYWdpbmF0ZSBhLnBhZ2luYXRlX2J1dHRvbjpub3QoLmRpc2FibGVkKScsIHRoaXMuYXBpKCkudGFibGUoKS5jb250YWluZXIoKSlcclxuICAgICAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd1RleHREYW5nZXJPbk9mZigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgIGZuRHJhd0NhbGxiYWNrOiBmdW5jdGlvbiggb1NldHRpbmdzICkge1xyXG4gICAgICAgICAgICQoJyNsb2FkaW5nQm94JykuaGlkZSgpO1xyXG4gICAgICAgICAgICQoXCIudGFibGUtcmVzcG9uc2l2ZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgcm93VGV4dERhbmdlck9uT2ZmKCk7XHJcblxyXG4gICAgICAgICAgIHRhYmxlLm9uKCdjbGljaycsICdidXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgIGxldCByb3dUYWJsZSA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgIHJvd1RhYmxlLmFkZENsYXNzKFwidGV4dC1kYW5nZXJcIik7XHJcbiAgICAgICAgICAgICAgIGxldCByb3dUZXh0ID0gcm93VGFibGUuY2hpbGRyZW4oKS5tYXAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgIHJldHVybiAkLnRyaW0oJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICB9KS5nZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgIGxldCBpZCA9IHJvd1RhYmxlLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgICAgIGxldCB0ZWFjaGVyRnVsbE5hbWUgPSByb3dUZXh0WzBdO1xyXG4gICAgICAgICAgICAgICBsZXQgdGVhY2hlckNvdW50ID0gcm93VGV4dFsxXTtcclxuXHJcbiAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gYNCY0LfRgtGA0LjQstCw0L3QtSDQvdCwINC60LDQu9GB0LXQvSDRgNGK0LrQvtCy0L7QtNC40YLQtdC7IFxcXCIke3RlYWNoZXJGdWxsTmFtZX1cXFwiLCDQvtCx0LLRitGA0LfQsNC9INGBIGA7XHJcbiAgICAgICAgICAgICAgIGlmICh0ZWFjaGVyQ291bnQgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICBtZXNzYWdlICs9IGAke3RlYWNoZXJDb3VudH0g0YHRgtGD0LTQtdC90YLQsCEhIWA7XHJcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICBtZXNzYWdlICs9IGAke3RlYWNoZXJDb3VudH0g0YHRgtGD0LTQtdC90YIhISFgO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICBpZiAodGhpcy5pZCA9PT0gJ2RlbGV0ZUJ0bicpIHtcclxuICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbihgJHtwYXRofS9kZWxldGUvJHtpZH1gLCByb3dUYWJsZSwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZCA9PT0gJ2VkaXRCdG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICBlZGl0QnV0dG9uKGAke3BhdGh9L2VkaXQvJHtpZH1gKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAkKCcjYWRkT25CdG4gYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICBhZGRPbkJ1dHRvbihgJHtwYXRofS9jcmVhdGVgKTtcclxuICAgICAgICAgICB9KTtcclxuICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9