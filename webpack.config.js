var Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    .autoProvidejQuery()

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './assets/js/app.js')
    //.addEntry('page1', './assets/js/page1.js')
    //.addEntry('page2', './assets/js/page2.js')
    .addEntry('pageClassTable', './assets/js/custom-page/page-classTable.js')
    .addEntry('pageStudent', './assets/js/custom-page/page-student.js')
    .addEntry('pageProductAjax', './assets/js/custom-page/page-productAjax.js')
    .addEntry('pagePricePerDayAjax', './assets/js/custom-page/page-pricePerDayAjax.js')
    .addEntry('pageProductCreateAjax', './assets/js/custom-page/page-productCreateAjax.js')
    .addEntry('pageProductEditAjax', './assets/js/custom-page/page-productEditAjax.js')
    .addEntry('pagePaymentAjax', './assets/js/custom-page/page-paymentAjax.js')
    .addEntry('pagePaymentCreateAjax', './assets/js/custom-page/page-paymentCreateAjax.js')
    .addEntry('pagePaymentEditAjax', './assets/js/custom-page/page-paymentEditAjax.js')
    .addEntry('pageByMonthClass', './assets/js/custom-page/page-byMonthClass.js')
    .addEntry('pageEndedMonth', './assets/js/custom-page/page-endedMonth.js')
    .addEntry('pageUserEdit', './assets/js/custom-page/page-userEdit.js')
    .addEntry('pageClosingMonth', './assets/js/custom-page/page-closingMonth.js')

    //.addEntry('applyDataTable', './assets/js/custom-page/applyDataTable.js')
    //.addEntry('buttonRowTable', './assets/js/custom-page/button-row-table.js')
    //.addEntry('languageDataTable', './assets/js/custom-page/languageDataTable.js')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables @babel/preset-env polyfills
    .configureBabel(() => {}, {
        useBuiltIns: 'usage',
        corejs: 3
    })

    // enables Sass/SCSS support
    //.enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()

    // uncomment if you use API Platform Admin (composer req api-admin)
    //.enableReactPreset()
    //.addEntry('admin', './assets/js/admin.js')
;

module.exports = Encore.getWebpackConfig();
