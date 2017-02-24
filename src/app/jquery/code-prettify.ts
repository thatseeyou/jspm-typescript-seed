import '../../css/prettify.css!css';

import * as $ from 'jquery';
import 'code-prettify';

const code = `#include <stdio.h>
int main(int argc, char *argv[], char *envp[])
{
   printf("Hello, World!");
   return 0;
}`;

export function prettify() {
    $(`<pre class="prettyprint"><pre>`)
        .appendTo('body')
        .text(code);

    PR.prettyPrint();
}