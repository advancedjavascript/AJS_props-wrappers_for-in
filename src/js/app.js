export default function orderByProps(obj, props) {
    var result = [];

    for (const prop in obj) {
        if (obj.hasOwnProperty.call(obj, prop)) {
            result.push({
                key: prop,
                value: obj[prop],
            });
        }
    }
    const filterByProps = result.filter(arr => props.includes(arr.key));
    const filterOthers = result.filter(arr => !props.includes(arr.key));
    const sortByAbs = filterOthers.sort((a, b) => (a.key < b.key ? -1 : 1));

    return ([...filterByProps, ...sortByAbs]);
}