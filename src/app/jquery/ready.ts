import * as $ from 'jquery';

export function ready() {
    console.log('call ready');
    $(document).ready(() =>{
        console.log('callback ready');
        $('<p>Hello World</p>').appendTo('body');
    });
}