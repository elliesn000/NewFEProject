//class to get data from json -> import local storage
//and get from local storage -> obj
//(save to local storage will be solve in each component)

import { Service } from '@angular/core';
import initJson from './initArticles.json';
import { articleObj } from './constants';

@Service()
export class serviceLocalStorage {

    //function set item with key and value --- check try catch
    setItem(key: string, value: any): void {
        //try-catch defense over memory >5GB
        try {
            localStorage.setItem(key, JSON.stringify(value))
        }
        catch (e) {
            console.error('Error saving', e);
        }
    }

    //function get item with key ---- key === id while setItem
    getItem(key: string): any {
        //try-catch defense not have data / JSON wrong can't define with Obj
        try {
            let arTemp = localStorage.getItem(key);
            return arTemp != null ? JSON.parse(arTemp) : null;
        }
        catch (e) {
            console.error('Error getting', e);
            return null;
        }
    }

    //function remove all added articles by user and get all from initial Json
    renewItem(confirm: string): any {
        // try-catch defense file init JSON
        try {
            if (confirm === "yes") {
                localStorage.clear();
                const initData: Array<articleObj> = initJson.articles;
                console.log(initData.length);
                localStorage.setItem(`initAr`, JSON.stringify(initData));
                window.alert('renew finished');
            }
        } catch (e) {
            console.error('Error renew', e);
            return null;
        }
    }
}