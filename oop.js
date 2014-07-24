function oop(base, derived) {
    "use strict";
    var method, item;

    // super is COPY of base
    derived.base = {};
    for (method in base) {
        derived.base[method] = base[method];
    }

    // handle overrides
    // require virtual? 
    for (method in derived) {
        item = derived[method];
        if (typeof item === 'function') {
            if (item.override) {
                derived.base[method] = derived[method];
            }
        }
    }

    // make base methods available on derived
    for (method in derived.base) {
        item = derived.base[method];
        if (typeof item === 'function') {
            if (!derived[method]) {
                derived[method] = derived.base[method];
            }
        }
    }

    return derived;
}

/*
 * Check "duck" typing
 */
function duck(clazz, instance) {
    "use strict";
    var method;
    for (method in clazz) {
        if (!instance[method]) {
            return false;
        }
    }
    return true;
}

