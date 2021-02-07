export class VM {
    execute(code: string, state: any) {
        // Very unsafe eval mock
        try { eval(code); } catch (e) { console.log('Exec error'); }
    }
}