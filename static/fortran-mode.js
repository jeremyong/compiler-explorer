//    Copyright (c) 2017, Matt Godbolt
//    Copyright (c) 2018, Forschungzentrum Juelich GmbH
//                        Juelich Supercomputing Centre
//    All rights reserved.
//
//    Redistribution and use in source and binary forms, with or without
//    modification, are permitted provided that the following conditions are met:
//
//        * Redistributions of source code must retain the above copyright notice,
//          this list of conditions and the following disclaimer.
//        * Redistributions in binary form must reproduce the above copyright
//          notice, this list of conditions and the following disclaimer in the
//          documentation and/or other materials provided with the distribution.
//
//    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
//    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
//    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
//    ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
//    LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
//    CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
//    SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
//    INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
//    CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
//    ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
//    POSSIBILITY OF SUCH DAMAGE.
//
// The lists of keywords, operator, functions, and subroutines have been adopted from
//    vs.language.fortran by Thomas E. Dunn
"use strict";

function definition() {
    return {
        // Fortran is case insensitive, so ignore case...
        ignoreCase: true,

        defaultToken: 'invalid',

        keywords: [
            'abstract',
            'all',
            'allocatable',
            'allocate',
            'assign',
            'assignment',
            'asynchronous',
            'backspace',
            'bind',
            'block',
            'blockdata',
            'character',
            'close',
            'common',
            'complex',
            'concurrent',
            'contiguous',
            'call',
            'case',
            'class',
            'codimension',
            'contains',
            'continue',
            'cycle',
            'data',
            'deallocate',
            'deferred',
            'dimension',
            'do',
            'double',
            'doubleprecision',
            'elemental',
            'else',
            'elsewhere',
            'end',
            'endblock',
            'endblockdata',
            'enddo',
            'endenum',
            'endfile',
            'endforall',
            'endfunction',
            'endif',
            'endinterface',
            'endmodule',
            'endprogram',
            'endselect',
            'endsubmodule',
            'endsubroutine',
            'endtype',
            'endwhere',
            'endwhile',
            'entry',
            'enum',
            'enumerator',
            'equivalence',
            'error',
            'exit',
            'external',
            'final',
            'flush',
            'forall',
            'format',
            'function',
            'generic',
            'go',
            'goto',
            'if',
            'implicit',
            'import',
            'in',
            'include',
            'inout',
            'inquire',
            'intent',
            'interface',
            'intrinsic',
            'is',
            'logical',
            'module',
            'non_overridable',
            'none',
            'nopass',
            'nullify',
            'only',
            'open',
            'operator',
            'optional',
            'out',
            'parameter',
            'pass',
            'pause',
            'pointer',
            'precision',
            'print',
            'private',
            'procedure',
            'program',
            'protected',
            'public',
            'pure',
            'read',
            'real',
            'recursive',
            'result',
            'return',
            'rewind',
            'save',
            'select',
            'sequence',
            'stop',
            'submodule',
            'subroutine',
            'target',
            'then',
            'to',
            'type',
            'use',
            'value',
            'volatile',
            'wait',
            'where',
            'while',
            'write'
        ],

        typeKeywords: [
            'logical',
            'character',
            'real',
            'integer',
            'complex',
            'type'
        ],

        operators: [
            '=',
            '==',
            '/=',
            '>',
            '>=',
            '<',
            '<=',
            '=>',
            '+',
            '-',
            '*',
            '/',
            '**',
            '//',
            '.and.',
            '.eq.',
            '.eqv.',
            '.le.',
            '.lt.',
            '.ge.',
            '.gt.',
            '.ne.',
            '.neqv.',
            '.not.',
            '.or.'
        ],

        functions: [
            'abs',
            'achar',
            'acos',
            'acosh',
            'adjustl',
            'adjustr',
            'aimag',
            'aint',
            'all',
            'allocated',
            'anint',
            'any',
            'asin',
            'asinh',
            'associated',
            'atan',
            'atan2',
            'atanh',
            'bessel_j0',
            'bessel_j1',
            'bessel_jn',
            'bessel_y0',
            'bessel_y1',
            'bessel_yn',
            'bge',
            'bgt',
            'bit_size',
            'ble',
            'blt',
            'btest',
            'c_associated',
            'c_funloc',
            'c_loc',
            'c_sizeof',
            'ceiling',
            'char',
            'cmplx',
            'command_argument_count',
            'compiler_options',
            'compiler_version',
            'conjg',
            'cos',
            'cosh',
            'count',
            'cshift',
            'dble',
            'digits',
            'dim',
            'dot_product',
            'dprod',
            'dshiftl',
            'dshiftr',
            'eoshift',
            'epsilon',
            'erf',
            'erfc',
            'erfc_scaled',
            'exp',
            'exponent',
            'extends_type_of',
            'findloc',
            'floor',
            'fraction',
            'gamma',
            'huge',
            'hypot',
            'iachar',
            'iall',
            'iand',
            'iany',
            'ibclr',
            'ibits',
            'ibset',
            'ichar',
            'ieee_class',
            'ieee_copy_sign',
            'ieee_is_finite',
            'ieee_is_nan',
            'ieee_is_normal',
            'ieee_logb',
            'ieee_next_after',
            'ieee_rem',
            'ieee_rint',
            'ieee_scalb',
            'ieee_selected_real_kind',
            'ieee_support_datatype',
            'ieee_support_denormal',
            'ieee_support_divide',
            'ieee_support_flag',
            'ieee_support_halting',
            'ieee_support_inf',
            'ieee_support_io',
            'ieee_support_nan',
            'ieee_support_rounding',
            'ieee_support_sqrt',
            'ieee_support_standard',
            'ieee_support_underflow_control',
            'ieee_unordered',
            'ieee_value',
            'ieor',
            'image_index',
            'index',
            'int',
            'ior',
            'iparity',
            'ishft',
            'ishftc',
            'is_contiguous',
            'is_iostat_end',
            'is_iostat_eor',
            'kind',
            'lbound',
            'lcobound',
            'leadz',
            'len',
            'len_trim',
            'lge',
            'lgt',
            'lle',
            'llt',
            'log',
            'log_gamma',
            'log10',
            'logical',
            'maskl',
            'maskr',
            'matmul',
            'max',
            'maxexponent',
            'maxloc',
            'maxval',
            'merge',
            'merge_bits',
            'min',
            'minexponent',
            'minloc',
            'minval',
            'mod',
            'modulo',
            'nearest',
            'new_line',
            'nint',
            'norm2',
            'not',
            'null',
            'num_images',
            'pack',
            'parity',
            'popcnt',
            'poppar',
            'precision',
            'present',
            'product',
            'radix',
            'range',
            'real',
            'repeat',
            'reshape',
            'rrspacing',
            'same_type_as',
            'scale',
            'scan',
            'selected_char_kind',
            'selected_int_kind',
            'selected_real_kind',
            'set_exponent',
            'shape',
            'shifta',
            'shiftl',
            'shiftr',
            'sign',
            'sin',
            'sinh',
            'size',
            'spacing',
            'spread',
            'sqrt',
            'storage_size',
            'sum',
            'tan',
            'tanh',
            'this_image',
            'tiny',
            'trailz',
            'transfer',
            'transpose',
            'trim',
            'ubound',
            'ucobound',
            'unpack',
            'verify'
        ],

        subroutines: [
            'c_f_pointer',
            'c_f_procpointer',
            'cpu_time',
            'date_and_time',
            'execute_command_line',
            'get_command',
            'get_command_argument',
            'get_environment_variable',
            'ieee_get_flag',
            'ieee_get_halting_mode',
            'ieee_get_rounding_mode',
            'ieee_get_status',
            'ieee_get_underflow_mode',
            'ieee_set_flag',
            'ieee_set_halting_mode',
            'ieee_set_rounding_mode',
            'ieee_set_status',
            'ieee_set_underflow_mode',
            'move_alloc',
            'mvbits',
            'random_number',
            'random_seed',
            'system_clock'
        ],

        // we include these common regular expressions
        symbols: /[=><!~?:&|+\-*/^%]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

        // The main tokenizer for our languages
        tokenizer: {
            root: [
                // type names
                [/[a-zA-Z][\w$]*(?=.*::)/, {
                    cases: {
                        '@typeKeywords': 'type.identifier',
                        '@keywords': 'keyword',
                        '@default': 'identifier'
                    }
                }],
                // identifiers and keywords
                [/[a-zA-Z][\w$]*/, {
                    cases: {
                        '@keywords': 'keyword',
                        '@functions': 'keyword',
                        '@subroutines': 'keyword',
                        '@default': 'identifier'
                    }
                }],

                // comments
                [/!.*$/, 'comment'],

                // whitespace
                {include: '@whitespace'},

                // delimiters and operators
                [/[{}()[\]]/, '@brackets'],
                [/[<>](?!@symbols)/, '@brackets'],
                [/@symbols/, {
                    cases: {
                        '@operators': 'operator',
                        '@default': ''
                    }
                }],

                // numbers
                [/\d*\.\d+([eE][-+]?\d+)?[fFdD]?/, 'number.float'],
                [/0[xX][0-9a-fA-F_]*[0-9a-fA-F][Ll]?/, 'number.hex'],
                [/0[0-7_]*[0-7][Ll]?/, 'number.octal'],
                [/0[bB][0-1_]*[0-1][Ll]?/, 'number.binary'],
                [/\d+[lL]?/, 'number'],

                // delimiter: after number because of .\d floats
                [/[;,.]/, 'delimiter'],

                // strings
                [/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
                [/"/, 'string', '@string'],

                // characters
                [/'[^\\']'/, 'string'],
                [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                [/'/, 'string.invalid']
            ],

            whitespace: [
                [/[ \t\r\n]+/, 'white']
            ],

            comment: [
                [/!/, 'comment']
            ],

            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"/, 'string', '@pop']
            ],
        }
    };
}

function configuration() {
    return {
        comments: {
            lineComment: '!',
        },

        brackets: [
            ['(/', '/)'],
            ['[', ']'],
            ['(', ')']
        ],

        autoClosingPairs: [
            {open: '[', close: ']'},
            {open: '(', close: ')'},
            {open: '`', close: '`', notIn: ['string','comment']},
            {open: "'", close: "'", notIn: ['string','comment']},
            {open: '"', close: '"', notIn: ['string']}
        ],

        surroundingPairs: [
            {open: '[', close: ']'},
            {open: '(', close: ')'},
            {open: '`', close: '`'},
            {open: "'", close: "'"},
            {open: '"', close: '"'}
        ],

        indentationRules: {
            decreaseIndentPattern: /end\s*(do|if|function|subroutine|program|block|associate|forall)/,
            increaseIndentPattern: /^((?!end).)*(do\s|if(\s|\()|function\s|subroutine\s|program\s|block\s*|associate(\s|\()|forall)/,
            unIndentedLinePattern: null
        }
    };
}

var def = definition();

monaco.languages.register({id: 'fortran'});
monaco.languages.setMonarchTokensProvider('fortran', def);
monaco.languages.setLanguageConfiguration('fortran', configuration());

module.exports = def;
