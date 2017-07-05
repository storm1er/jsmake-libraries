import { assign } from 'ponyfills/lib/assign';

export function takeFromObject(instance: any, n: number): any {
    let index = 0;

    return Object.keys(instance).reduce(
        (obj, itemKey) => {
            if (index < n) {
                index += 1;

                return assign({}, obj, { [itemKey]: instance[itemKey] });
            }

            return obj;
        },
        {}
    );
};

export default takeFromObject;