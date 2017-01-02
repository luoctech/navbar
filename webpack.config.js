let webpack=require('webpack');
let path=require('path');

module.exports=
    {
        entry:'./assets/src/js/entry.js',
        output:
            {
                path:path.resolve(__dirname,'dist'),
                filename:'bundle.js'
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
                            loader:'file!url'
                        }
                    ]
            }
    };