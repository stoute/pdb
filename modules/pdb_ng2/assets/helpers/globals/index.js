"use strict";
function merge(baseGlobals, extraGlobals) {
    'use strict';
    var imports = baseGlobals.imports;
    var providers = baseGlobals.providers;
    if (extraGlobals.imports) {
        imports = imports.concat(extraGlobals.imports);
    }
    if (extraGlobals.providers) {
        providers = providers.concat(extraGlobals.providers);
    }
    return { imports: imports, providers: providers };
}
;
function mergeGlobals(baseGlobals, extraGlobals) {
    'use strict';
    if (extraGlobals === void 0) { extraGlobals = []; }
    var globals = { imports: [], providers: [] };
    extraGlobals.forEach(function (global) {
        globals = merge(globals, global);
    });
    globals = merge(globals, baseGlobals);
    return globals;
}
exports.mergeGlobals = mergeGlobals;
;
//# sourceMappingURL=index.js.map