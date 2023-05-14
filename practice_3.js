/* practice 3 */

/* 1 task */

function printObject (obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
        console.log(prop, obj[prop]);
        }
    }
}

/* 2 task */

function checkPropInObj (str, obj) {
    return (str in obj);
}

/* 3 task */

function createObjWithoutProto() {
    return Object.create(null);
}