import * as $ from 'jquery';
import { datepicker } from './datepicker';

export function ready() {
    $(document).ready(() =>{
        $('<p>Hello World</p>').appendTo('body');

        datepicker();
    });
}