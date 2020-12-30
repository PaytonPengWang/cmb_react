import _, { MapCache } from 'lodash';
import LRUCache from 'lru-cache';

class LRCMapCache implements MapCache {
    cache: any;

    constructor(){
        this.cache = new LRUCache({
            max: 2000,
            maxAge: 1000 * 60 * 5
        });
    }

    delete(key: any): boolean {
        this.cache.del(key);
        return true;
    }
    get(key: any) {
        return this.cache.get(key);
    }
    has(key: any): boolean {
        return this.cache.has(key);
    }
    set(key: any, value: any): this {
        this.cache.set(key, value);
        return this;
    }
    clear() {
        this.cache.reset();
    };

}

_.memoize.Cache = LRCMapCache;

export const memoize = _.memoize;

export const cache = new LRCMapCache();
