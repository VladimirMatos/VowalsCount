const {VowelsCount} = require ('../Main')

test('Argument Null Exception test', ()=>{
    expect(VowelsCount(null)).toBe('ArgumentNullException');
})

test('Empty text test', ()=>{
    expect(VowelsCount(" ")).toBe({});
})

test('number text test', ()=>{
    expect(VowelsCount("024821858")).toBe({});
})

test('Count vowal in a mail test', ()=>{
    expect(VowelsCount("hola@mundo.com")).toBe(5);
})

test('Count vowal Case Insensitive test', ()=>{
    expect(VowelsCount("INS-368")).toBe(1);
})

test('Count vowal long text with spaces test', ()=>{
    expect(VowelsCount("Murcielago x MURCIELAGO = mUrciElagO cuadrado")).toBe(19);
})