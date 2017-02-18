let webpack=require('webpack');
let path=require('path');

module.exports=
    {
        entry:'./src/entry.js',
        output:
            {
                path:path.resolve(__dirname,'dev'),
                filename:'index.js'
            },
        module:
            {
                loaders:
                    [
                        {
                            test:/\.css$/,
                            loader:'style!css',
                        },
                        {
                            test:/\.(html|htm)$/,
                            loader:'dom!html'
                        },
                        {
                            test:/\.(png|jpg|gif)$/,
                            loader:'file!url?limit=100000'
                        }
                    ]
            }
    };