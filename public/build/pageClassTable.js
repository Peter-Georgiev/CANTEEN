(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pageClassTable"],{

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

/***/ "./assets/js/custom-page/page-class_table.js":
/*!***************************************************!*\
  !*** ./assets/js/custom-page/page-class_table.js ***!
  \***************************************************/
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





var path = '/class';
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
        var className = rowText[0];
        var studentCount = rowText[1];
        var message = "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u041A\u041B\u0410\u0421 \"".concat(className, "\", \u043E\u0431\u0432\u044A\u0440\u0437\u0430\u043D \u0441");

        if (studentCount > 1) {
          message += " ".concat(studentCount, " \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430!!!");
        } else {
          message += " ".concat(studentCount, " \u0441\u0442\u0443\u0434\u0435\u043D\u0442!!!");
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

},[["./assets/js/custom-page/page-class_table.js","runtime","vendors~app~pageClassTable~pagePaymentAjax~pageProductAjax~pageStudent~pageTeacher","vendors~pageClassTable~pagePaymentAjax~pageProductAjax~pageStudent~pageTeacher"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tLXBhZ2UvYXBwbHlEYXRhVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2J1dHRvbi1yb3ctdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS1wYWdlL2xhbmd1YWdlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20tcGFnZS9wYWdlLWNsYXNzX3RhYmxlLmpzIl0sIm5hbWVzIjpbInRhYmxlIiwiJCIsInJvd1RleHREYW5nZXJPbk9mZiIsImlzT24iLCJ0b2tlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ0cmltIiwic3BsaXQiLCJpZCIsIk51bWJlciIsImxlbmd0aCIsInRyVG9rZW4iLCJlYWNoIiwiYXR0ciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJkZWxldGVCdXR0b24iLCJyb3dUYWJsZSIsIm1lc3NhZ2VzIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYWRkIiwiZWRpdCIsImFkZE9uQnRuIiwiY3NzIiwiaGlkZSIsInNob3ciLCJzZXRUaW1lb3V0IiwidGhlbiIsInZhbHVlIiwiY29uZmlybSIsImhyZWYiLCJlZGl0QnV0dG9uIiwiYWRkT25CdXR0b24iLCJwYWlkT25CdXR0b24iLCJiZyIsInBhdGgiLCJkb2N1bWVudCIsInJlYWR5IiwiZGF0YVRhYmxlIiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJkYXRhIiwiZGVmYXVsdENvbnRlbnQiLCJvcmRlciIsImxhbmd1YWdlIiwiZG9tIiwiYnV0dG9ucyIsImV4dGVuZCIsIm9yaWVudGF0aW9uIiwicGFnZVNpemUiLCJkcmF3Q2FsbGJhY2siLCJhcGkiLCJjb250YWluZXIiLCJvbiIsImZuRHJhd0NhbGxiYWNrIiwib1NldHRpbmdzIiwicGFyZW50Iiwicm93VGV4dCIsImNoaWxkcmVuIiwibWFwIiwidGV4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c1RhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHRhYmxlID0gJCgnI2RhdGFUYWJsZScpO1xyXG5leHBvcnQge3RhYmxlfTsiLCJmdW5jdGlvbiByb3dUZXh0RGFuZ2VyT25PZmYoaXNPbiA9IHRydWUpIHtcclxuICAgIGxldCB0b2tlbiA9ICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXHJcbiAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgIC5zcGxpdCgnLycpO1xyXG5cclxuICAgIGxldCBpZCA9IE51bWJlcih0b2tlblt0b2tlbi5sZW5ndGggLSAxXSk7XHJcbiAgICBpZiAoaWQgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCB0clRva2VuID0gJCgnI2RhdGFUYWJsZSB0Ym9keSB0cicpO1xyXG5cclxuICAgICQodHJUb2tlbikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChOdW1iZXIoJCh0aGlzKS5hdHRyKCdpZCcpKSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgaWYgKGlzT24pIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3RleHQtZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd0ZXh0LWRhbmdlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlQnV0dG9uKHBhdGhuYW1lLCByb3dUYWJsZSwgbWVzc2FnZXMpIHtcclxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgcm93VGV4dERhbmdlck9uT2ZmKGZhbHNlKTtcclxuXHJcbiAgICAgICAgbGV0IGFkZCA9ICQoJ2RpdiAjYWRkJyk7XHJcbiAgICAgICAgbGV0IGVkaXQgPSAkKCdkaXYgI2VkaXQnKTtcclxuICAgICAgICBsZXQgYWRkT25CdG4gPSAkKCcjYWRkT25CdG4nKTtcclxuXHJcbiAgICAgICAgaWYgKGFkZC5jc3MoJ2Rpc3BsYXknKSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIGFkZC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGFkZE9uQnRuLnNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlZGl0LmNzcygnZGlzcGxheScpICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgZWRpdC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGFkZE9uQnRuLnNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHJlc29sdmUoW1xyXG4gICAgICAgICAgICAgICAgYCR7YWRkLmNzcygnZGlzcGxheScpfWAsXHJcbiAgICAgICAgICAgICAgICBgJHtyb3dUYWJsZS5yZW1vdmVDbGFzcyhcInRleHQtZGFuZ2VyXCIpfWBcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIGlmIChjb25maXJtKGAhISEg0JLQndCY0JzQkNCd0JjQlSAhISFcXG5gICsgbWVzc2FnZXMpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRCdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbiAgICAvL2ZldGNoKGAvc3R1ZGVudC9lZGl0LyR7ZGF0YS5zdHVkZW50SWR9YCwge1xyXG4gICAgLy8gIG1ldGhvZDogJ1BPU1QnXHJcbiAgICAvL30pLnRoZW4ocmVzID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE9uQnV0dG9uKHBhdGhuYW1lKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhuYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYWlkT25CdXR0b24ocGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aG5hbWU7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uLCBhZGRPbkJ1dHRvbiwgcm93VGV4dERhbmdlck9uT2ZmLCBwYWlkT25CdXR0b259OyIsImxldCBiZyA9IHtcclxuICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgIFwibGVuZ3RoTWVudVwiOiBcItCf0L7QutCw0LfQstCw0L3QtSDQvdCwIF9NRU5VXyDQt9Cw0L/QuNGB0Lgg0L3QsCDRgdGC0YDQsNC90LjRhtCwXCIsXHJcbiAgICAgICAgXCJ6ZXJvUmVjb3Jkc1wiOiBcItCd0LjRidC+INC90LUg0LUg0L3QsNC80LXRgNC10L3QviAtINGB0YrQttCw0LvRj9Cy0LDQvFwiLFxyXG4gICAgICAgIFwiaW5mb1wiOiBcItCf0L7QutCw0LfQstCw0L3QtSDQvdCwINGB0YLRgNCw0L3QuNGG0LAgX1BBR0VfINC+0YIgX1BBR0VTX1wiLFxyXG4gICAgICAgIFwiaW5mb0VtcHR5XCI6IFwi0J3Rj9C80LAg0L3QsNC70LjRh9C90Lgg0LfQsNC/0LjRgdC4XCIsXHJcbiAgICAgICAgXCJpbmZvRmlsdGVyZWRcIjogXCIo0YTQuNC70YLRgNC40YDQsNC90LAg0L7RgiBfTUFYXyDQvtCx0YnQviDQt9Cw0L/QuNGB0LgpXCIsXHJcbiAgICAgICAgXCJpbmZvUG9zdEZpeFwiOiBcIlwiLFxyXG4gICAgICAgIFwidGhvdXNhbmRzXCI6IFwiLFwiLFxyXG4gICAgICAgIFwibG9hZGluZ1JlY29yZHNcIjogXCLQl9Cw0YDQtdC20LTQsC4uLlwiLFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ1wiOiBcItCe0LHRgNCw0LHQvtGC0LrQsC4uLlwiLFxyXG4gICAgICAgIFwic2VhcmNoXCI6IFwi0KLRitGA0YHQtdC90LUg0LIg0YLQsNCx0LvQuNGG0LDRgtCwINC/0L4t0LTQvtC70YM6XCIsXHJcbiAgICAgICAgXCJwYWdpbmF0ZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZmlyc3RcIjogXCLQn9GK0YDQstCwXCIsXHJcbiAgICAgICAgICAgIFwibGFzdFwiOiBcItCf0L7RgdC70LXQtNC90LBcIixcclxuICAgICAgICAgICAgXCJuZXh0XCI6IFwi0KHQu9C10LTQstCw0YnQsFwiLFxyXG4gICAgICAgICAgICBcInByZXZpb3VzXCI6IFwi0J/RgNC10LTQuNGI0L3QsFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFyaWFcIjoge1xyXG4gICAgICAgICAgICBcInNvcnRBc2NlbmRpbmdcIjogXCI6INCh0L7RgNGC0LjRgNCw0L3QtSDQvdCwINC60L7Qu9C+0L3QsCDQstGK0LfRhdC+0LTRj9GJ0L5cIixcclxuICAgICAgICAgICAgXCJzb3J0RGVzY2VuZGluZ1wiOiBcIjog0KHQvtGA0YLQuNGA0LDQvdC1INC90LAg0LrQvtC70L7QvdCwINC90LjQt9GF0L7QtNGP0YnQvlwiXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIm51bGxcIjogXCLQvdGP0LzQsCDQtNCw0L3QvdC4XCIsXHJcbiAgICBcImNoZWNrQm94XCI6IFwi0J/RgNC4INC40LfQsdC+0YAg0L3QsCDQvtC/0YbQuNGP0YLQsDogXCIsXHJcbiAgICBcImVtcHR5TWVzc2FnZVwiOiBbXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCIxLiDQkiDQv9C+0LvQtSAn0KLRitGA0YHQtdC90LUnINC80L7QttC10Ygg0LTQsCDRgtGK0YDRgdC40Ygg0L/QvjogaWQsINC/0L7RgtGA0LXQsdC40YLQtdC7LCDQuNC80LUsINGE0LDQvNC40LvQuNGPLCDQuNC80LUg0Lgg0YTQsNC80LjQu9C40Y8sINC40LzQtdC50Lsg0LjQu9C4INC80L7QtNGD0LsuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiMi4g0J/RgNC4ICfQotGK0YDRgdC10L3QtScg0L/QviBpZCDRgtGA0Y/QsdCy0LAg0LTQsCDQstGK0LLQtdC00LXRgtC1IGlkOiDQuCDQvdC+0LzQtdGA0LAuINCd0LDQv9GA0LjQvNC10YAgaWQ6MTIzNC5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCIzLiDQn9GA0LggJ9Ci0YrRgNGB0LXQvdC1JyDQv9C+INC40LzQtSwg0YTQsNC80LjQu9C40Y8sINC40LzQtSDQuCDRhNCw0LzQuNC70LjRjyAtINC/0YDQtdC+0LHRgNCw0LfRg9Cy0LAg0LvQsNGC0LjQvdC40YbQsCDQsiDQutC40YDQuNC70LjRhtCwINC4INC+0LHRgNCw0YLQvdC+LlwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjQuINCf0YDQuCAn0KLRitGA0YHQtdC90LUnINC/0L4g0LzQvtC00YPQuyDRgtGA0Y/QsdCy0LAg0LTQsCDQstGK0LLQtdC00LXRgtC1INC40LzQtdGC0L4g0L3QsCDQvNC+0LTRg9C70LAuICjQndCw0L/RgNC40LzQtdGAOiBBMS4xKVwifSxcclxuICAgICAgICB7J21lc3NhZ2UnOiBcIjUuICfQmNC30LPQu9C10LTQsNC90Lgg0L/RgNC+0YbQtdC90YLQuCDQvtGCINC80L7QtNGD0LvQsCcg0YLQuCDQtNCw0LLQsNGCINGB0L/RgNCw0LLQutCwINC60LDQutCy0LAg0YfQsNGB0YIg0L7RgiDQstC40LTQtdCw0YLQsCDQutGD0YDRgdC40YHRgtGK0YIg0LUg0LjQt9Cz0LvQtdC00LDQuyDQvdCw0L/RitC70L3Qvi5cIn0sXHJcbiAgICAgICAgeydtZXNzYWdlJzogXCI2LiAn0KHQsNC80L4g0YDQtdCz0LjRgdGC0YDQuNGA0LDQvScgLSDRgtGD0Log0LjQt9C70LjQt9Cw0YIg0LLRgdC40YfQutC4INGA0LXQs9C40YHRgtGA0LjRgNCw0L3QuCDQv9C+0YLRgNC10LHQuNGC0LXQu9C4LCDQutC+0LjRgtC+INGB0LAg0LPQu9C10LTQsNC70Lgg0LHQtdC30L/Qu9Cw0YLQvdC4INCy0LjQtNC10LAuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IFwiNy4gJ9ChINC00L7RgdGC0YrQvyDQtNC+INC80L7QtNGD0LsnIC0g0YLRg9C6INC40LfQu9C40LfQsNGCINGB0LDQvNC+INC60YPRgNGB0LjRgdGC0LjRgtC1LCDQutC+0LjRgtC+INC40LzQsNGCINC00LDQtNC10L0g0LTQvtGB0YLRitC/INC00L4g0L7Qv9GA0LXQtNC10LvQtdC9INC80L7QtNGD0LsuXCJ9LFxyXG4gICAgICAgIHsnbWVzc2FnZSc6IGA4LiAn0KLRitGA0YHQtdC90LUg0LIg0YLQsNCx0LvQuNGG0LDRgtCwINC/0L4t0LTQvtC70YM6JyAtINGC0YrRgNGB0Lgg0L/QviDQtNC+0L/RitC70L3QuNGC0LXQu9C10L0g0LrRgNC40YLQtdGA0LjQuSDQsiDQuNC30LPQvtGC0LLQtdC90LDRgtCwINCy0LXRh9C1INGB0L/RgNCw0LLQutCwLmB9XHJcbiAgICBdLFxyXG59O1xyXG5leHBvcnQge2JnfTsiLCJpbXBvcnQge3RhYmxlfSBmcm9tICcuL2FwcGx5RGF0YVRhYmxlLmpzJ1xyXG5pbXBvcnQge2VkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbiwgYWRkT25CdXR0b24sIHJvd1RleHREYW5nZXJPbk9mZn0gZnJvbSAnLi9idXR0b24tcm93LXRhYmxlLmpzJztcclxuaW1wb3J0IHtiZ30gZnJvbSAnLi9sYW5ndWFnZURhdGFUYWJsZS5qcyc7XHJcbmNvbnN0IHBhdGggPSAnL2NsYXNzJztcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIHRhYmxlLmRhdGFUYWJsZSh7XHJcbiAgICAgICAgLy9wYWdpbmdUeXBlOiAnZnVsbF9udW1iZXJzJywgLy8gXCJzaW1wbGVcIiBvcHRpb24gZm9yICdQcmV2aW91cycgYW5kICdOZXh0JyBidXR0b25zIG9ubHlcclxuICAgICAgICBjb2x1bW5EZWZzOiBbe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiAtMixcclxuICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgZGVmYXVsdENvbnRlbnQ6IFwiPGJ1dHRvbiBpZD0nZWRpdEJ0bicgY2xhc3M9J3RleHQtd2FybmluZyc+0KDQtdC00LDQutGC0LjRgNCw0L3QtSE8L2J1dHRvbj5cIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdGFyZ2V0czogLTEsXHJcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgIGRlZmF1bHRDb250ZW50OiBcIjxidXR0b24gaWQ9J2RlbGV0ZUJ0bicgY2xhc3M9J3RleHQtZGFuZ2VyJz7QmNC30YLRgNC40LLQsNC90LUhPC9idXR0b24+XCJcclxuICAgICAgICB9XSxcclxuICAgICAgICBvcmRlcjogW1xyXG4gICAgICAgICAgICBbMCwgJ2FzYyddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsYW5ndWFnZTogYmcubGFuZ3VhZ2UsXHJcbiAgICAgICAgZG9tOiAnbGZCU3J0aXAnLFxyXG4gICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAge2V4dGVuZDogJ2NvcHknfSxcclxuICAgICAgICAgICAgLy97ZXh0ZW5kOiAnY3N2J30sXHJcbiAgICAgICAgICAgIHtleHRlbmQ6ICdleGNlbCd9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL2V4dGVuZDogJ3BkZkh0bWw1JyxcclxuICAgICAgICAgICAgICAgIGV4dGVuZDogJ3BkZicsXHJcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogJ2xhbmRzY2FwZScsXHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogJ0xFR0FMJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7ZXh0ZW5kOiAncHJpbnQnfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJCgnLmRhdGFUYWJsZXNfcGFnaW5hdGUgYS5wYWdpbmF0ZV9idXR0b246bm90KC5kaXNhYmxlZCknLCB0aGlzLmFwaSgpLnRhYmxlKCkuY29udGFpbmVyKCkpXHJcbiAgICAgICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICByb3dUZXh0RGFuZ2VyT25PZmYoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm5EcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKCBvU2V0dGluZ3MgKSB7XHJcbiAgICAgICAgICAgICQoJyNsb2FkaW5nQm94JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiLnRhYmxlLXJlc3BvbnNpdmVcIikuc2hvdygpO1xyXG4gICAgICAgICAgICByb3dUZXh0RGFuZ2VyT25PZmYoKTtcclxuXHJcbiAgICAgICAgICAgIHRhYmxlLm9uKCdjbGljaycsICdidXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93VGFibGUgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgcm93VGFibGUuYWRkQ2xhc3MoXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgICAgICAgICAgICAgIGxldCByb3dUZXh0ID0gcm93VGFibGUuY2hpbGRyZW4oKS5tYXAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC50cmltKCQodGhpcykudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgIH0pLmdldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpZCA9IHJvd1RhYmxlLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gcm93VGV4dFswXTtcclxuICAgICAgICAgICAgICAgIGxldCBzdHVkZW50Q291bnQgPSByb3dUZXh0WzFdO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gYNCY0LfRgtGA0LjQstCw0L3QtSDQvdCwINCa0JvQkNChIFxcXCIke2NsYXNzTmFtZX1cXFwiLCDQvtCx0LLRitGA0LfQsNC9INGBYDtcclxuICAgICAgICAgICAgICAgIGlmIChzdHVkZW50Q291bnQgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSArPSBgICR7c3R1ZGVudENvdW50fSDRgdGC0YPQtNC10L3RgtCwISEhYDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSArPSBgICR7c3R1ZGVudENvdW50fSDRgdGC0YPQtNC10L3RgiEhIWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaWQgPT09ICdkZWxldGVCdG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uKGAke3BhdGh9L2RlbGV0ZS8ke2lkfWAsIHJvd1RhYmxlLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZCA9PT0gJ2VkaXRCdG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEJ1dHRvbihgJHtwYXRofS9lZGl0LyR7aWR9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCgnI2FkZE9uQnRuIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFkZE9uQnV0dG9uKGAke3BhdGh9L2NyZWF0ZWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=