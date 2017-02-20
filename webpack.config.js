let webpack=require('webpack');
let path=require('path');

module.exports=
    {
        entry:'./src/components.js',
        output:
            {
                path:path.resolve(__dirname,'dev'),
                filename:'components.js'
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
                            test: /\.vue$/,
                            loader: 'vue-loader'
                        }
                    ]
            }
    };