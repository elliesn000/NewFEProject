//class to get data from json -> import local storage
//and get from local storage -> obj
//(save to local storage will be solve in each component)

import initJson from './initArticles.json';
import { articleInitObj } from './constants';


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
        if (confirm === "yes") {
            // try-catch defense 
            try {
                localStorage.clear();
                const initData: Array<articleInitObj> = initJson.articles;
                for (let i: number = 0; i < initData.length; i++) {
                    let arTemp: articleInitObj = initData[i];
                    localStorage.setItem('$[i+1]', JSON.stringify(arTemp));
                }
            } catch (e) {
                console.error('Error renew', e);
                return null;
            }
            window.alert('renew finished');
        }
    }

}