import * as $ from 'jquery';
import 'jqueryui';

export function datepicker() {
    $('<input>')
        .appendTo('body')
        .datepicker();
}