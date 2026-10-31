import { Service } from '@angular/core';
import initJson from './initArticles.json';
import { Article } from './constants';

const key = 'arLocal';

@Service()
export class serviceLocalStorage {

    getAll(): Article[] {
        try {
            const arData = localStorage.getItem(key);
            if (arData === null) {                
                const arTemp: Article[] = initJson.articles;
                this.saveAll(arTemp);
                return arTemp;
            }


        } catch (e) {
            console.error('Error getting', e);
            return [];
        }
    }

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

    getItem(): Array<articleObj> {
        //try-catch defense not have data / JSON wrong can't define with Obj
        try {
            let arTemp = localStorage.getItem('arLocal');
            return arTemp != null ? JSON.parse(arTemp) : [];
        }
        catch (e) {
            console.error('Error getting', e);
            return [];
        }
    }

    //function remove all added articles by user and get all from initial Json
    renewItem(confirm: string): any {
        // try-catch defense file init JSON
        try {
            if (confirm === "yes") {
                localStorage.clear();
                const initData: any = initJson.articles;
                console.log(initData.length);
                localStorage.setItem(`arLocal`, JSON.stringify(initData));
                window.alert('renew finished');
            }
        } catch (e) {
            console.error('Error renew', e);
            return null;
        }
    }
}