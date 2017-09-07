Package.on_use(function(api){
    api.use("jquery", "client");
    api.add_files("TimelineMax.min.js", "client");
    api.add_files("TweenMax.min.js", "client");
    //api.add_files("./plugins/MorphSVGPlugin.min.js", "client");
    // api.add_files("./utils/SplitText.min.js", "client");
    api.add_files("./plugins/CSSRulePlugin.min.js", "client");
    // api.add_files("./plugins/ScrollToPlugin.min.js", "client");
});