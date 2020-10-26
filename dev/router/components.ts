import * as entries from '@/entry';

export default Object.keys(entries)
    .filter((name) => name !== 'default')
    .map((name) => {
        const path = name
            .replace(/(?:^|\.?)([A-Z])/g, (_, y) => `-${y.toLowerCase()}`)
            .replace(/^-/, '')

        return {
            name,
            path: `/component/${path}`,
            component: () => import(`../pages/${name}.vue`)
        }
    });
