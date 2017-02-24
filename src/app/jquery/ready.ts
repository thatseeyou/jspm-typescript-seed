import '../../css/jquery-ui.css!css';
import '../../css/jquery-ui.theme.css!css';

import * as $ from 'jquery';
import { datepicker } from './datepicker';

export function ready() {
    $(document).ready(() =>{
        $('<p>Hello World</p>').appendTo('body');

        datepicker();
    });
}