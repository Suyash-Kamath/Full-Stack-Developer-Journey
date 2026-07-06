const {getURLsFromHTML,normalizeURL} = require('./crawl.js');
const {test,expect} = require('@jest/globals');

test('normalizeURL strip protocol',()=>{
    const input = 'https://dummyjson.com';
    const actual = normalizeURL(input);
    const expected = 'dummyjson.com';
    expect(actual).toBe(expected);
});

test('normalizeURL strip trailing slash',()=>{
    const input = 'https://dummyjson.com/';
    const actual = normalizeURL(input);
    const expected = 'dummyjson.com';
    expect(actual).toBe(expected);
});


test('normalizeURL strip HTTP',()=>{
    const input = 'https://dummyjson.com';
    const output = normalizeURL(input);
    const expected = 'dummyjson.com'
    expect(output).toBe(expected);
});

test('getURLsFromHTML  absolute URL',()=>{
    const htmlBody =`
    <html>
        <body>
            <html>
       <body>
           <a href ="https://dummyjson.com/products">Product's List</a>
       </body>
   </html>

    
    `;

    const inputBaseURL = 'https://dummyjson.com/products';
    const output = getURLsFromHTML(htmlBody,inputBaseURL);
    const expected = ['https://dummyjson.com/products'];
    expect(output).toEqual(expected);

});




test('getURLsFromHTML relative URL',()=>{
    const htmlBody = ` <html>
       <body>
           <a href="/products">Boot.dev Blog</a>
       </body>
   </html>`;

   const inputBaseURL = 'https://dummyjson.com';
   const output = getURLsFromHTML(htmlBody,inputBaseURL);
   const expectted = ['https://dummyjson.com/products'];
   expect(output).toEqual(expectted);

});


test('getURLSfromHTML both relative URL',()=>{
    

    const htmlBody = `
    
     <html>
       <body>
           <a href="https://dummyjson.com/products">Boot.dev Blog Path One</a>
           <a href="/users/">Boot.dev Blog Path Two</a>


       </body>
   </html>

    
    ` ;

    const inputBaseURL = 'https://dummyjson.com';

    const output = getURLsFromHTML(htmlBody,inputBaseURL) ;

    const expected = [

        'https://dummyjson.com/products',
        'https://dummyjson.com/users/'        
    ];


    expect(output).toEqual(expected);
})



test('invalid URL',()=>{
     const inputHTMLBody = `
   <html>
   <body>
   <a href = "invalid">Invalid URL</a>
   </body>
   </html>
  
   `;


   const inputBaseURL = 'https://dummyjson.com';
   const output = getURLsFromHTML(inputHTMLBody,inputBaseURL);
   const expected = [];

   expect(output).toEqual(expected);

})