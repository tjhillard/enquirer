'use strict';

const { array, boolean, number, string } = require('prompt-base/lib/types');

/**
 * Base prompt
 */

define(exports, 'prompt', () => require('prompt-base'));

/**
 * Low-level types
 */

define(exports, 'array', () => array);
define(exports, 'boolean', () => boolean);
define(exports, 'number', () => number);
define(exports, 'string', () => string);

/**
 * User prompts
 */

define(exports, 'autocomplete', () => require('./autocomplete'));
define(exports, 'confirm', () => require('./confirm'));
define(exports, 'invisible', () => require('./invisible'));
define(exports, 'list', () => require('./list'));
define(exports, 'multiselect', () => require('./multiselect'));
define(exports, 'password', () => require('./password'));
define(exports, 'select', () => require('./select'));
define(exports, 'text', () => require('./text'));
define(exports, 'toggle', () => require('./text'));

function define(obj, key, get) {
  Reflect.defineProperty(obj, key, { get });
}