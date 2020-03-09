import { InitialList } from './list.reducer';
import { getTask } from './list.selectors';

describe('listSelector', () => {

    function deepClone(arg:any){
        return JSON.parse(JSON.stringify(arg))
    }

    it('LIST SELECTOR: getTask - should return the task unchanged', () => {
        const state = deepClone(InitialList);
        expect(getTask({list:state},{id:InitialList[0].id})).toBe(state[0]);
    });

});